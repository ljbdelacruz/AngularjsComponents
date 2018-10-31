'use strict';

/* Wait for all resources to be downloaded */
angular
    .element(document)
    .ready(function() {
        /**
         * ngStarterKit Module
         *
         * Description:
         *   A simple boilerplate for angularjs developers
         */
        angular.module('ngStarterKit', [
                'ngRoute',
                /* Directives */
                /*navbars/sidebars*/
                'directives.sidebar1',
                'directives.navbar',
                'directives.navbar2',
                'directives.treeNode',
                'directives.dropDown',
                /*sign ins*/
                'directives.userLogin',
                /*Modules*/
                'modules.login',
            ])
            .config(['$routeProvider',
                function($routeProvider) {
                    $routeProvider.otherwise({ redirectTo: '/Login' });
                }
            ]);
        /* Start the angular app */
        angular.bootstrap(document, ['ngStarterKit']);
    });