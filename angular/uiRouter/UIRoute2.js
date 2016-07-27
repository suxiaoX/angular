/*
var routerApp = angular.module("routerApp", ["ui.router"]);

//var routerApp = angular.module('routerApp', ['ui.router']);

//routerApp.config(function($stateProvider, $urlRouterProvider) {
routerApp.config(function($stateProvider, $urlRouterProvider){
	
	
	$urlRouterProvider.otherwise("/home");
//	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
	.state('home', {
        url: '/home',
        tempalteUrl:'../views/state2/home.html'	
    })
//	.state('home',{
//		url:'/home',
//		templateUrl:'../views/state2/home.html'		
//	})
	.state('home.list', {
        url: '/list',
        templateUrl: '../views/state2/home-list.html',
        controller: function($scope) {
            $scope.topics = ['Butterscotch', 'Black Current', 'Mango'];
        }
    })
//	.state('home.list',{
//		url:'/home.list',
//		templateUrl:'../views/state2/home-list.html',
//		controller:function($scope){
//			$scope.topics = ['苏萧', 'Leo', 'Ctrystle'];
//		}
//	})
	.state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a scoop of ice-cream. '
    })
//	.state('home.paragraph',{
//		url:'/home.paragraph',
//		template: 'Leo love Ctrystle. '
//	})
	.state('about',{
		url:'/about',
		views:{
			'':{
				templateUrl:'../views/state2/about.html'
			},
			'columnOne@about': {
                template: '这里是第一列的内容'
            },
            'columnTwo@about': {
                templateUrl: '../views/state2/table-data.html',
                controller: 'Controller'
            }
		}		
	})
})


routerApp.controller("Controller",["$scope",function($scope){
	$scope.message = "text";
	$scope.topics = [
		{
	        name: 'Butterscotch',
	        price: 50
    	}, 
	    {
	        name: 'Black Current',
	        price: 100
	    },
	    {
	        name: 'Mango',
	        price: 20
	    }
	];
}])

*/
var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '../views/state2/home.html'
    })
    // nested list with custom controller
    .state('home.list', {
        url: '/list',
        templateUrl: '../views/state2/home-list.html',
        controller: function($scope) {
            $scope.topics = ['Butterscotch', 'Black Current', 'Mango'];
        }
    })
    // nested list with just some random string data
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a scoop of ice-cream. '
    })
    .state('about', {
        url: '/about',
        views: {
            '': {
                templateUrl: '../views/state2/about.html'
            },
            'columnOne@about': {
                template: '这里是第一列的内容'
            },
            'columnTwo@about': {
                templateUrl: '../views/state2/table-data.html',
                controller: 'Controller'
            }
        }
    });
});
routerApp.controller('Controller', function($scope) {
    $scope.message = 'test';
    $scope.topics = [{
        name: 'Butterscotch',
        price: 50
    }, {
        name: 'Black Current',
        price: 100
    }, {
        name: 'Mango',
        price: 20
    }];
});
