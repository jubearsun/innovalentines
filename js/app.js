var app = angular.module('valentines', [])
    .controller('MainCtrl', ['$scope', function ($scope) {

        $scope.cards = [
            './img/cards/apeeling.png',
            './img/cards/art.png',
            './img/cards/avocuddle.jpg',
            './img/cards/backpack.png',
            './img/cards/berry.png',
            './img/cards/butter.png',
            './img/cards/color.png',
            './img/cards/donut.jpg',
            './img/cards/egg.png',
            './img/cards/filters.png',
            './img/cards/hand.png',
            './img/cards/latte.png',
            './img/cards/oliveyou.jpg',
            './img/cards/pear.jpg',
            './img/cards/pixel.png',
            './img/cards/spark.png',
            './img/cards/thang.png'
        ];

    }]);
