'use strict';

function handleSearch() {
  $('#search').on('submit', function(event) {
    Creature.currentPage = 1;
    event.preventDefault();
    $('.creature').hide();

    var currentKeyword = $('#keyword-filter').val();
    Creature.toDisplay = Creature.allCreatures.filter(creature => creature.keyword.includes(currentKeyword));

    let lookup = $('#search > input').val().toLowerCase();
    Creature.toDisplay = Creature.toDisplay.filter(creature => creature.title.toLowerCase().includes(lookup));

    displayCreatures();
  });
}
