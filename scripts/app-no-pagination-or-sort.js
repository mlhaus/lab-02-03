'use strict';

$(function() {
  $('#photo-gallery').hide();
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };

  $.ajax('./data/page-1.json', ajaxSettings)
    .then((data) => {
      data.forEach(creatureObj => {
        const creature = new Creature(creatureObj);
        Creature.prototype.allCreatures.push(creature);
        Creature.prototype.addToFilter(creature);
        $('#photo-gallery').append(creature.toHtml());
      });
    })
    .then(() => {
      Creature.prototype.renderFilter();
      handleTypeFilter();
      handleSearch();
      $('.spinner').fadeOut(500);
      $('#photo-gallery').fadeIn(500);
    });

});

function handleSearch() {
  $('#search').on('input', function() {
    $('.creature').hide();
    let lookup = $('#search').val().toLowerCase();
    Creature.prototype.allCreatures.forEach(function(creature) {
      if(creature.title.toLowerCase().indexOf(lookup) >= 0 || creature.keyword.toLowerCase().indexOf(lookup) >= 0) {
        $(`.creature[data-id="${creature.id}"]`).fadeIn();
      }
    });
  });
}

function handleTypeFilter() {
  $('#keyword-filter').on('change', function() {
    if($(this).val() !== 'default') {
      $('.creature').hide();
      $(`.creature[data-keyword*="${$(this).val()}"]`).fadeIn();
    } else {
      $('.creature').fadeIn();
    }
  });
}

function Creature(obj) {
  for(let key in obj) {
    this[key] = obj[key];
  }
  this.keyword = obj.keyword.charAt(0).toUpperCase() + obj.keyword.slice(1);
  this.id = ++Creature.creatureCount;
}

Creature.creatureCount = 0;
Creature.prototype.allCreatures = [];
Creature.prototype.allKeywords = [];

Creature.prototype.toHtml = function() {
  const templateHTML = $('#creature-template').html();
  const renderedHTML = Mustache.render(templateHTML, this);
  return renderedHTML;
};

Creature.prototype.addToFilter = function(creature) {
  if(this.allKeywords.indexOf(creature.keyword) < 0) {
    this.allKeywords.push(creature.keyword);
  }
};

Creature.prototype.renderFilter = function() {
  this.allKeywords.sort();
  this.allKeywords.forEach(keyword => {
    $('#keyword-filter').append($('<option>').attr('value', keyword).text(keyword));
  });
};
