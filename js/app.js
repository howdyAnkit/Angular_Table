var app = angular.module('OutboxApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/outbox', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/register', {
            controller: 'EmailController',
            templateUrl: 'views/email.html'
        })
        .otherwise({
            redirectTo: '/outbox'
        }); 
});

app.filter('capitalize', function () {
    return function (token) {
        return token.charAt(0).toUpperCase() + token.slice(1);
    }
});

app.filter('sumColumn', function () {
    return function (dataSet, columnToSum) {
        let sum = 0;

        for (let i = 0; i < dataSet.length; i++) {
            sum += parseFloat(dataSet[i][columnToSum]) || 0;
        }

        return sum;
    };
})