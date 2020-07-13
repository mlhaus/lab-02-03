'use strict';

function renderFilter() {
  Creature.allKeywords.sort();
  Creature.allKeywords.forEach(keyword => {
    $('#keyword-filter').append($('<option>').attr('value', keyword).text(keyword));
  });
}

function handleFilter() {
  $('#keyword-filter').on('change', function() {
    Creature.currentPage = 1;
    Creature.toDisplay = Creature.allCreatures.filter(creature => creature.keyword.includes($(this).val()));
    displayCreatures();
  });
}