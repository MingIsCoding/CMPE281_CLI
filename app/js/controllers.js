/** Angular CloudTest app controller */
var server_url = "http://127.0.0.1:5000";

angular.module('CloudTestApp', [])
    .controller('CloudTestAppController', ['$scope', '$http', function ($scope, $http) {

    $scope.formSigninData = {};
    $scope.formSignupData = {};

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

    /** Handle sign up**/
    $scope.processSignup = function(){
        if(!$scope.formSignupData.username){
            $('.signup.userNameRow.err').removeClass('hidden');
            return false;
        }
        if(!$scope.formSignupData.firstname){
            $('.signup.firstnameNameRow.err').removeClass('hidden');
            return false;
        }
        if(!$scope.formSignupData.lastname){
            $('.signup.lastnameNameRow.err').removeClass('hidden');
            return false;
        }
        if(!$scope.formSignupData.password){
            $('.signup.passwordNameRow.err').removeClass('hidden');
            return false;
        }
        if(!$scope.formSignupData.email){
            $('.signup.emailNameRow.err').removeClass('hidden');
            return false;
        }
        if(!scope.formSignupData.cardtype){
            $('.signup.cardtypeNameRow.err').removeClass('hidden');
            return false;
        }
        if(!scope.formSignupData.holdername){
            $('signup.holdernameNameRow.err').removeClass('hidden');
            return false;
        }
        if(!scope.formSignupData.validmonth){
            $('signup.validmonthNameRow.err').removeClass('hidden');
            return false;
        }
        if(!scope.formSignupData.validyear){
            $('signup.validyearNameRow.err').removeClass('hidden');
            return false;
        }
        if(!scope.formSignupData.csc){
            $('signup.cscNameRow.err').removeClass('hidden');
            return false;
        }
        if(!scope.formSignupData.billaddress){
            $('signup.billaddressNameRow.err').removeClass('hidden');
            return false;
        }
        if(!scope.formSignupData.city){
            $('signup.cityNameRow.err').removeClass('hidden');
            return false;
        }
        if(!scope.formSignupData.state){
            $('signup.stateNameRow.err').removeClass('hidden');
            return false;
        }
        console.log(JSON.stringify($scope.formSignupData));
        $http({
            method  : 'POST',
            url     : server_url+'/createuser',
            data    : $scope.formSignupData,  // pass in data as strings
            headers : getHeaders()
        }).then(function(data) {
            console.log(data);
            window.location = server_url+'/main_user_template.html'; //redirect to dashboard
        }, function(err) {
            alert('Fail to sign up. Please try again');
        });
    };
}]);
