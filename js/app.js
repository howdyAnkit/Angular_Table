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
        })
});

myapp.controller('samplecontoller', function ($scope) {
	$scope.model = {
  	name:'',
    lname:''
  }
  $scope.submitForm = function()
	{
  	alert('Success fully updated : ' + $scope.model.name +' '+$scope.model.lname);
  }
});
angular.module('sampleapp').directive('disableBtn',
	function() {
		return {
			restrict : 'A',
			link : function(scope, element, attrs) {
				var $el = $(element);
				var submitBtn = $el.find('button[type="submit"]');
				var fName = attrs.name;
				
				scope.$watch(fName + '.$valid', function(val) {
					if (val) {
						submitBtn.removeAttr('disabled');
					} else {
						submitBtn.attr('disabled', 'disabled');
					}
				});
			}
		};
	}
);
