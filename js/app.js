var app = angular.module('valentines', [])
    .controller('MainCtrl', ['$scope', function ($scope) {

        $scope.cards = [
            './img/cards/avocuddle.jpg',
            './img/cards/oliveyou.jpg',
            './img/cards/pear.jpg'
        ];

    }]);
