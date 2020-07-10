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
        $('#photo-gallery').append(creature.toHtml());
      });
    })
    .then(() => {
      $('.spinner').fadeOut(500);
      $('#photo-gallery').fadeIn(500);
    });

});

function Creature(obj) {
  for(let key in obj) {
    this[key] = obj[key];
  }
}

Creature.prototype.toHtml = function() {
  const templateHTML = $('#creature-template').html();
  const renderedHTML = Mustache.render(templateHTML, this);
  return renderedHTML;
};
