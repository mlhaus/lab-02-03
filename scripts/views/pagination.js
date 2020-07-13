function renderPagination(first, last, total) {
  $('#pagination').hide();
  $('#firstVisible').text(first);
  $('#lastVisible').text(last);
  $('#outOf').text(total);

  if(Creature.currentPage <= 1) {
    $('#pageSelector i:first-child').css('visibility', 'hidden');
  } else {
    $('#pageSelector i:first-child').css('visibility', 'visible');
  }

  let numOfPages = Math.ceil(Creature.toDisplay.length / Creature.itemsPerPage);
  if(Creature.currentPage === numOfPages) {
    $('#pageSelector i:last-child').css('visibility', 'hidden');
  } else {
    $('#pageSelector i:last-child').css('visibility', 'visible');
  }

  $('#pagination').show();
}

function handlePaginationArrows() {
  $('#pageSelector i').click(function() {
    let className = $(this).attr('class');
    if(className === 'fa fa-arrow-right') {
      Creature.currentPage++;
    } else if(className === 'fa fa-arrow-left') {
      Creature.currentPage--;
    }
    displayCreatures();
  });
}