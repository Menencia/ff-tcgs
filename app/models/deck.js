// Generated by CoffeeScript 1.6.3
var Deck;

Deck = (function() {
  function Deck() {
    this.name = 'Default';
    this.cards = [];
  }

  Deck.prototype.add = function(card) {
    return this.cards.push(card);
  };

  return Deck;

})();
