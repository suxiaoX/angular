var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
    'bookStoreServices', 'bookStoreDirectives'
]);

bookStoreApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'views/hello.html',
        controller: 'HelloCtrl'
    }).when('/list',{
    	templateUrl:'views/list.html',
    	controller:'BookListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});
