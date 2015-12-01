/** Angular CloudTest app controller */
var server_url = "http://127.0.0.1:5000";

angular.module('CloudTestApp', ['ngStorage'])
    .controller('CloudTestAppController', ['$scope', '$http','$localStorage','$sessionStorage', function ($scope, $http,$localStorage,$sessionStorage) {

    $scope.formSigninData = {};
    $scope.formSignupData = {};
        $localStorage.hello = 'world';
    //$sessionStorage.loggedin_user = {};
    //$scope.loggedin_user = {};
    //$scope.$storage = $sessionStorage;//.$default({});
        $scope.$storage = {};
    //$scope.$storage.loggedin_user = {};
        function getHeaders() {
        return {
            'Content-Type': 'application/json'//'application/x-www-form-urlencoded',
        };
    }
    /** Handle signin */
    $scope.processSignin = function() {

        //alert($sessionStorage.hello);
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
            $localStorage.loggedin_user = data.data.results[0];
            $localStorage.username = data.data.results[0].username;
            $localStorage.hello = "hello";
            //$scope.$storage.loggedin_user = data.data.results[0];
            console.log("storing $sessionStorage :"+JSON.stringify($localStorage.loggedin_user));
            console.log("storing $storage :"+JSON.stringify($scope.$storage.loggedin_user));
            window.location = 'main_template.html'; //redirect to dashboard
        }, function(err) {
            alert('Fail to login. Please try again');
        });
    };

    $scope.dashboard_load = function(){
        console.log("hello:"+$localStorage.hello);
        console.log("read from local storage"+JSON.stringify($scope.$storage.loggedin_user));
        console.log("read from $sessionStorage in:"+JSON.stringify($localStorage.loggedin_user));
        console.log("username:"+$localStorage.username)
        }
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
/*

function loadRightContent (module_name){
    $("#right_content").load(module_name);
}
*/
