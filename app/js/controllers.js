/** Angular CloudTest app controller */
var server_url = "http://127.0.0.1:5000";

angular.module('CloudTestApp', [])
    .controller('CloudTestAppController', ['$scope', '$http', function ($scope, $http) {

    $scope.formSigninData = {};

    function getHeaders() {
        return {
            'Content-Type': 'application/json'//'application/x-www-form-urlencoded',
        };
    }
    /** Handle signin */
    $scope.processSignin = function() {
        if (!$scope.formSigninData.username) {
            $('.signin .userNameRow .err').removeClass('hidden');
            return false;
        }
        if (!$scope.formSigninData.password) {
            $('.signin .passwordNameRow .err').removeClass('hidden');
            return false;
        }
        console.log(JSON.stringify($scope.formSigninData));
        $http({
            method  : 'POST',
            url     : server_url+'/ajax/login',
            data    : $scope.formSigninData,  // pass in data as strings
            headers : getHeaders()
        }).then(function(data) {
            console.log(data);
            window.location = server_url+'/main_user_template.html'; //redirect to dashboard
        }, function(err) {
            alert('Fail to login. Please try again');
        });
    };

}]);
