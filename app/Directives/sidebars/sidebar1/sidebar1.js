angular.module('directives.sidebar1', [])
    .directive('sidebar1', ['$http',
        '$location',
        function($http, $location) {
            function preFn(scope, element, attr) {
                /* TODO: Do something here before post function */
            }
            /* Do the directive's logic here */
            function postFn(scope, element, attr) {
                scope.sideDropDown1=false;
                
                scope.ToggleSideDropDown=function(){
                    scope.sideDropDown1=!scope.sideDropDown1;
                    alert(scope.sideDropDown1);
                } 
                
            }
            return {
                restrict: 'E',
                replace: true,
                //change path if will be used on other projects
                templateUrl: 'app/Directives/sidebars/sidebar1/sidebar1.html',
                compile: function(scope, element, attr) {
                    return {
                        pre: preFn,
                        post: postFn
                    }
                }
            };
        }
    ]);