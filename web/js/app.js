'use strict' 
var droneshopApp = angular.module('droneshopApp', [
        'ngRoute',
        'droneshopControllers',
        'droneshopServices'
    ]);

droneshopApp.config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/catalog.html'
            }).
            when('/login', {
                templateUrl: 'partials/login.html'
            }).
            otherwise('/');
    }]);

droneshopApp.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
});

droneshopApp.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest'
});
