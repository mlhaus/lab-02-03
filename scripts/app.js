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
        Creature.allCreatures.push(creature);
      });
    })
    .then(() => {
      handleKeywordFilter();
      handleSort();
      handleSearch();
      renderFilter();
      renderCreatures();
    });

});

function handleKeywordFilter() {
  $('#keyword-filter').on('change', function() {
    if($(this).val() !== 'default') {
      $('.creature').hide();
      $(`.creature[data-keyword*="${$(this).val()}"]`).fadeIn();
    } else {
      $('.creature').fadeIn();
    }
  });
}

function handleSort() {
  $('#sort-by').on('change', function() {
    $('.spinner').show();
    $('#photo-gallery').hide();
    $('#photo-gallery').empty();
    let sortBy = $(this).val();
    if(sortBy === 'alpha') {
      Creature.allCreatures.sort((a, b) => {
        let textA = a.title.toLowerCase();
        let textB = b.title.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    } else if(sortBy === 'alpha-rev') {
      Creature.allCreatures.sort((a, b) => {
        let textA = a.title.toLowerCase();
        let textB = b.title.toLowerCase();
        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
      });
    } else if(sortBy === 'horns') {
      Creature.allCreatures.sort((a, b) => a.horns - b.horns);
    } else if(sortBy === 'horns-rev') {
      Creature.allCreatures.sort((a, b) => b.horns - a.horns);
    }
    renderCreatures();
  });
}

function handleSearch() {
  $('#search').on('input', function() {
    $('.creature').hide();
    let lookup = $('#search').val().toLowerCase();
    Creature.allCreatures.forEach(function(creature) {
      if(creature.title.toLowerCase().indexOf(lookup) >= 0 || creature.keyword.toLowerCase().indexOf(lookup) >= 0) {
        $(`.creature[data-id="${creature.id}"]`).fadeIn();
      }
    });
  });
}

function renderFilter() {
  Creature.allKeywords.sort();
  Creature.allKeywords.forEach(keyword => {
    $('#keyword-filter').append($('<option>').attr('value', keyword).text(keyword));
  });
};

function renderCreatures() {
  Creature.allCreatures.forEach(function(creature) {
    $('#photo-gallery').append(creature.toHtml());
  });
  $('.spinner').fadeOut();
  $('#photo-gallery').fadeIn();
}

function Creature(obj) {
  for(let key in obj) {
    this[key] = obj[key];
  }
  this.keyword = obj.keyword.charAt(0).toUpperCase() + obj.keyword.slice(1);
  if(Creature.allKeywords.indexOf(this.keyword) < 0) {
    Creature.allKeywords.push(this.keyword);
  }
  this.id = ++Creature.creatureCount;
}

Creature.creatureCount = 0;
Creature.allCreatures = [];
Creature.allKeywords = [];

Creature.prototype.toHtml = function() {
  const templateHTML = $('#creature-template').html();
  const renderedHTML = Mustache.render(templateHTML, this);
  return renderedHTML;
};