'use strict';

function handleSort() {
  Creature.currentPage = 1;
  $('#sort-by').on('change', function() {
    let sortBy = $(this).val();
    if(sortBy === 'alpha') {
      sortAlphabetical(Creature.toDisplay);
      sortAlphabetical(Creature.allCreatures);
    } else if(sortBy === 'alpha-rev') {
      sortReverseAlphabetical(Creature.toDisplay);
      sortReverseAlphabetical(Creature.allCreatures);
    } else if(sortBy === 'horns') {
      sortNumerical(Creature.toDisplay);
      sortReverseAlphabetical(Creature.allCreatures);
    } else if(sortBy === 'horns-rev') {
      sortReverseNumerical(Creature.toDisplay);
      sortReverseAlphabetical(Creature.allCreatures);
    }
    displayCreatures();
  });
}

function sortAlphabetical(arr) {
  arr.sort((a, b) => {
    let textA = a.title.toLowerCase();
    let textB = b.title.toLowerCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
}

function sortReverseAlphabetical(arr) {
  arr.sort((a, b) => {
    let textA = a.title.toLowerCase();
    let textB = b.title.toLowerCase();
    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
  });
}

function sortNumerical(arr) {
  arr.sort((a, b) => a.horns - b.horns);
}

function sortReverseNumerical(arr) {
  arr.sort((a, b) => b.horns - a.horns);
}
