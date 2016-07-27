var myScope = angular.module("myScope",[]);

myScope.controller("myCtrl",["$scope",function($scope){
	$scope.sayHello = function(name){
		alert("Hello " + name)
	}

}]);

myScope.directive("hello",function(){
	return {
		restrict: "AE",
		scope:{
			favlor:'&'
		},
		template:"<input type = 'text' ng-model = 'userName' /><br/>"+
		"<input type = 'button' ng-click = 'favlor({name:userName})' value = '问好' /><br/>"
	}
})