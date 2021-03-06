app.controller('HomeController', ['$scope', 'emails', function ($scope, emails) {
    emails.success(function (data) {
        $scope.programs  = [{
                "name": "rajiv",
                "marks": {
                    "Maths": 18,
                    "English": 21,
                    "Science": 45

                },
                "rollNumber": "KV2017-5A2"
            },
            {
                "name": "abhishek",
                "marks": {
                    "Maths": 43,
                    "English":30,
                    "Science": 37

                },
                "rollNumber": "KV2017-5A1"
            },
            {
                "name": "zoya",
                "marks": {
                    "Maths": 42,
                    "English": 31,
                    "Science": 50

                },
                "rollNumber": "KV2017-5A3"
            }
        ];

        $scope.Status = [
            {
                'Status': "Pass"
            },
            {
                "Status": "Fail"
            },
            {
                "Status": "Topper"
            }
        ]
    });
}]);