app.factory('emails', ['$http', function ($http) {
    return $http.get('https://jsonplaceholder.typicode.com/todos/1')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);