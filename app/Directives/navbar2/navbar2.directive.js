'use strict';

/* Create module for navbar directive */
angular.module('directives.navbar2', [])
    .directive('navbar2', ['$http',
                           '$location',
        function($http, $location) {
            function preFn(scope, element, attr) {
                /* TODO: Do something here before post function */
            }
            /* Do the directive's logic here */
            function postFn(scope, element, attr) {

                function Click(item){
                }
            }
            return {
                restrict: 'E',
                replace: true,
                //change path if will be used on other projects
                templateUrl: 'app/Directives/navbar2/navbar2.html',
                compile: function(scope, element, attr) {
                    return {
                        pre: preFn,
                        post: postFn
                    }
                }
            };
        }
    ]);