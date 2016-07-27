var myScope = angular.module("myScope",[]);

myScope.controller("myCtrl",["$scope",function($scope){
	$scope.name = "百威";
}]);

myScope.directive("hello",function(){
	return {
		restrict: "AE",
		scope:{
			favlor:'@'
		},
		template:"<div>{{favlor}}</div>"
	}
})