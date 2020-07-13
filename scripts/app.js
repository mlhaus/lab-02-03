'use strict';
$('#modal').hide();
$('#pagination').hide();
$(function() {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };
  $.ajax('./data/page-1.json', ajaxSettings)
    .then((data) => {
      data.forEach(creatureObj => {
        new Creature(creatureObj);
      });
      sortAlphabetical(Creature.toDisplay);
      sortAlphabetical(Creature.allCreatures);
    })
    .then(() => {
      renderFilter();
      handleFilter();
      handlePaginationArrows();
      handleSort();
      handleSearch();
      handlePhotoClick();
      handleModalClick();
    })
    .then(() => {
      displayCreatures();
    });
});
