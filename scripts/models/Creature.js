'use strict';

function Creature(obj) {
  for(let key in obj) {
    this[key] = obj[key];
  }
  this.keyword = obj.keyword.charAt(0).toUpperCase() + obj.keyword.slice(1);
  if(Creature.allKeywords.indexOf(this.keyword) < 0) {
    Creature.allKeywords.push(this.keyword);
  }
  this.id = Creature.creatureCount++;
  Creature.allCreatures.push(this);
  Creature.toDisplay.push(this);
}

Creature.allKeywords = [];
Creature.creatureCount = 0;
Creature.allCreatures = [];
Creature.toDisplay = [];
Creature.currentPage = 1;
Creature.itemsPerPage = 3;

Creature.prototype.render = function() {
  const templateHTML = $('#creature-template').html();
  const renderedHTML = Mustache.render(templateHTML, this);
  return renderedHTML;
};

Creature.prototype.toHtml = function(arrayOfCreatures) {
  $('#photo-gallery').empty();
  arrayOfCreatures.forEach(function(creature) {
    $('#photo-gallery').append(creature.render());
  });
};

function displayCreatures() {
  $('.spinner').show();
  if(Creature.toDisplay.length > 0) {
    let startAt = (Creature.currentPage - 1) * Creature.itemsPerPage;
    let stopAt = startAt + Creature.itemsPerPage > Creature.toDisplay.length ? Creature.toDisplay.length : startAt + Creature.itemsPerPage;
    const slicedArray = Creature.toDisplay.slice(startAt, stopAt);
    Creature.prototype.toHtml(slicedArray);
    renderPagination(startAt + 1, stopAt, Creature.toDisplay.length);
  } else {
    Creature.currentPage = 0;
    renderPagination(0, 0, 0);
  }
  $('.spinner').fadeOut();
}