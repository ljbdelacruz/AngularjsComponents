'use strict';

/* Create module for navbar directive */
angular.module('directives.dropDown', [])
    .directive('dropDown', ['$http',
        '$location',
        function($http, $location) {
            function preFn(scope, element, attr) {
                /* TODO: Do something here before post function */
            }
            /* Do the directive's logic here */
            function postFn(scope, element, attr) {
                /*json pattern
                  {  label:'options'}
                */
                scope.itemsList=scope.items;
                scope.showNode=false;
                scope.display=scope.ntitle;
                scope.ToggleNode=function(){
                    scope.showNode=!scope.showNode;
                }
            }
            return {
                restrict: 'E',
                transclude:true,
                scope:{
                    ntitle:"=",
                    items:"="
                },
                replace: true,
                //change path if will be used on other projects
                templateUrl: 'app/Directives/DropDown/dropDown.html',
                compile: function(scope, element, attr) {
                    return {
                        pre: preFn,
                        post: postFn
                    }
                }
            };
        }
    ]);