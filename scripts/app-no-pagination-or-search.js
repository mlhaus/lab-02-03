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
        Creature.prototype.addToFilter(creature);
        $('#photo-gallery').append(creature.toHtml());
      });
    })
    .then(() => {
      Creature.prototype.renderFilter();
      handleTypeFilter();
      $('.spinner').fadeOut(500);
      $('#photo-gallery').fadeIn(500);
    });

});

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
}

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
