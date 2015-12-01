/** Angular CloudTest app controller */
var server_url = "http://10.2.11.233:5000";

angular.module('CloudTestApp', [])
    .controller('CloudTestAppController', ['$scope', '$http', function ($scope, $http) {

    var myDate=new Date();
    $scope.formSigninData = {};
    $scope.formSignupData = {
        "money": 0,
        "credit":0
    };
    $scope.formCreateProjectData = {
        "userId" : "1",
        "appDownloadAdd" : "",
        "docDownloadAdd" : ""
    };
    $scope.formCreateProjectData.startTime = new Date();
    $scope.formCreateBugData = {
        "projectId":"1",
	    "userId":"1",
	    "bugLevel" : ""
    };

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
            window.location = 'main_user_template.html'; //redirect to dashboard
        }, function(err) {
            alert('Fail to login. Please try again');
        });
    };

    /** Handle sign up**/
    $scope.processSignup = function(){
        console.log(JSON.stringify($scope.formSignupData));
        $http({
            method  : 'POST',
            url     : server_url+'/createuser',
            data    : $scope.formSignupData,  // pass in data as strings
            headers : getHeaders()
        }).then(function(data) {
            console.log(data);
            window.location ='main_user_template.html'; //redirect to dashboard
        }, function(err) {
            alert('Fail to sign up. Please try again');
        });
    };

    /*Handle create a new project*/
    $scope.processCreatProject=function(){
        console.log(JSON.stringify($scope.formCreateProjectData));
        $http({
            method  : 'POST',
            url     : server_url+'/createproject',
            data    : $scope.formCreateProjectData,  // pass in data as strings
            headers : getHeaders()
        }).then(function(data) {
            console.log(data);
            window.location = 'main_user_template.html'; //redirect to dashboard
        }, function(err) {
            alert('Fail to create project. Please try again');
        });
    };

    /*Handle create a new bug*/
    $scope.processCreateBug=function(){
        console.log(JSON.stringify($scope.formCreateBugData));
        $http({
            method  : 'POST',
            url     : server_url+'/createbug',
            data    : $scope.formCreateBugData,  // pass in data as strings
            headers : getHeaders()
        }).then(function(data) {
            console.log(data);
            window.location = 'main_user_template.html'; //redirect to dashboard
        }, function(err) {
            alert('Fail to create project. Please try again');
        });
    };
}]);
