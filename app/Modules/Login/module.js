'use strict';

angular.module('modules.login', [])

.config(['$routeProvider',
    function($routeProvider) {
        /* Handle route on location path is '/' */
        $routeProvider.when('/Login', {
            templateUrl: 'app/Modules/Login/Login.html',
            controller: 'LoginCtrl'
        });
    }
]);