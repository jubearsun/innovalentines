var app = angular.module('valentines', [])
	.controller('MainCtrl', ['$scope', function ($scope) {

		$scope.cards = [
			'./img/cards/badandboujee.png',
      './img/cards/bb.png',
      './img/cards/count.png',
      './img/cards/cow.png',
      './img/cards/map.png',
      './img/cards/uter-us.png',
      './img/cards/takeout.png',
      './img/cards/circuits.png',
      './img/cards/pizza.png',
      './img/cards/catch.png',
      './img/cards/yoda.png'
		];

	}]);
