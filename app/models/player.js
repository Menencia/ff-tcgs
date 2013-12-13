// Generated by CoffeeScript 1.6.3
var Player;

Player = (function() {
  function Player(name, play) {
    this.name = name;
    this.play = play;
    this.crystals = {
      fire: 0,
      aqua: 0,
      wind: 0
    };
    this.hand = [];
    this.backups = [];
    this.forwards = [];
  }

  Player.prototype.undullCards = function() {
    var card, _i, _j, _len, _len1, _ref, _ref1, _results;
    _ref = this.forwards;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      card = _ref[_i];
      card.undull();
    }
    _ref1 = this.backups;
    _results = [];
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      card = _ref1[_j];
      _results.push(card.undull());
    }
    return _results;
  };

  Player.prototype.draw = function() {
    return this.hand.push(this.deck.cards.shift());
  };

  return Player;

})();
