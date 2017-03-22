/**
 * Created by xobtah on 21/03/17.
 */

eipCoatch.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: 'mainPage'
        })
        .when('/app', {
            templateUrl: 'appPage'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
}]);