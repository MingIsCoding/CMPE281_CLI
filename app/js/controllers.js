/** Angular CloudTest app controller */
var server_url = "http://10.15.167.208:5000";

angular.module('CloudTestApp', ['ngStorage'])
    .controller('CloudTestAppController', ['$scope', '$http','$localStorage','$sessionStorage', function ($scope, $http,$localStorage,$sessionStorage) {

	var myDate=new Date();
    if(sessionStorage.getItem('loggedin_user') != null)
        $scope.loggedin_user = JSON.parse(sessionStorage.getItem('loggedin_user'));
    else
        $scope.loggedin_user = {
            "username":"Provdier 1",
            "roleName":"1"
        };
    function getHeaders() {
        return {
            'Content-Type': 'application/json'//'application/x-www-form-urlencoded',
        };
    }
    //initiating local storage
    $scope.$storage = $localStorage;
    /** Handle signin */
    $scope.formSigninData = {};
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
            sessionStorage.setItem('loggedin_user', JSON.stringify(data.data.results[0]));
            //console.log("storing $storage :"+JSON.stringify($scope.$storage.loggedin_user));
            window.location = 'main_template.html'; //redirect to dashboard
        }, function(err) {
            alert('Fail to login. Please try again');
        });
    };

    $scope.dashboard_load = function(){


        }
    /** Handle sign up**/
    $scope.formSignupData = {
        "money": 0,
        "credit":0
    };
    $scope.processSignup = function(){
/*        if(!$scope.formSignupData.username){
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
        }*/
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
    /*Handle create a new project*/
    $scope.formCreateProjectData = {
            "userId" : "1",
            "appDownloadAdd" : "",
            "docDownloadAdd" : ""
    };
    $scope.formCreateProjectData.startTime = new Date();
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

    $scope.formCreateBugData = {
        "projectId":"1",
        "userId":"1",
        "bugLevel" : ""
    };

    //Get projects
    $scope.processGetProject=function(){
        //console.log(JSON.stringify($scope.formCreateBugData));
        alert('Fail to create project. Please try again');
        $http.get("http://10.15.167.208:5000/projects").success(function(response) {$scope.projects = response.records;})
    };
}]);


function loadRightContent (module_name){
    //$("#right_content").load(module_name);
    //document.frames['rightContentFrame'].location = module_name;
    document.getElementById("rightContentFrame").src = module_name;
}

