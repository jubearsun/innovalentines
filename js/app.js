var app = angular.module('valentines', [])
    .controller('MainCtrl', ['$scope', function ($scope) {

        $scope.cards = [
            './img/cards/art.png',
            './img/cards/apeeling.png',
            './img/cards/avocuddle.jpg',
            './img/cards/oliveyou.jpg',
            './img/cards/backpack.png',
            './img/cards/berry.png',
            './img/cards/color.png',
            './img/cards/egg.png',
            './img/cards/filters.png',
            './img/cards/hand.png',
            './img/cards/pear.jpg',
            './img/cards/pixel.png',
            './img/cards/spark.png',
            './img/cards/thang.png'
        ];

    }]);
