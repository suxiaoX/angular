var myScope = angular.module("myScope",[]);

myScope.controller("myCtrl",["$scope",function($scope){
	$scope.name = "angular"

}]);

myScope.directive("hello",function(){
	return {
		restrict: "AE",
		scope:{
			favlor:'='
		},
		template:"<input type = 'text' ng-model = 'favlor' />"
	}
})