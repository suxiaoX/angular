
var myLink = angular.module("myLink",[]);

myLink.directive("myCtrl",function(){
	return {
		restrict: "AE",
		link: function(scope,element,attrs){
			console.log(element);
			element.bind("mouseenter",function(){
				console.log("鼠标进来了...");
			});
			element.bind("mouseout",function(){
				console.log("鼠标出去了...");
			});
			
//			element.$apply("mouseenter",function(){
//				console.log("鼠标又进来了...")
//			})
		}
	}
})

