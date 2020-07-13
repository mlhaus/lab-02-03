'use strict';

function handlePhotoClick() {
  $('#photo-gallery').on('click', function(event) {
    let thisNode;
    if(event.target.nodeName === 'ARTICLE') {
      thisNode = event.target;
    } else if (event.target.nodeName === 'H2' || event.target.nodeName === 'IMG' || event.target.nodeName === 'P' ) {
      thisNode = event.target.parentNode;
    } else if (event.target.nodeName === 'SPAN') {
      thisNode = event.target.parentNode.parentNode;
    }
    if(thisNode) {
      $('#modal').fadeIn();
      let creatureId = parseInt($(thisNode).attr('data-id'));
      let creature = linearSearch(Creature.toDisplay, creatureId);
      const templateHTML = $('#modal-template').html();
      const renderedHTML = Mustache.render(templateHTML, creature);
      $('#modal').html(renderedHTML);
    }
  });
}

function handleModalClick() {
  $('#modal').on('click', function(event) {
    if(event.target.nodeName === 'DIV' || event.target.nodeName === 'I') {
      $('#modal').hide();
    } 
  });
}

function linearSearch(array, toFind){
  for(let i = 0; i < array.length; i++){
    if(array[i].id === toFind) {
      return array[i];
    }
  }
  return -1;
}
