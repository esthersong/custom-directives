// This directive will bring the window back to the top of the page if the user clicks on an element with the class "scrollTop"
app.directive('scrollTop', function(){
	return{
		restrict: 'C',
		link: function($scope, element){
			element.on('click', function(){
				$('body,html').scrollTop(0);
			});
		}
	};
});

// This directive will make the window gradually scroll to the top of the page by clicking on an element with the tag "animateScrollTop"
app.directive('animateScrollTop', function(){
	return{
		link: function($scope, element){
			element.on('click', function(){
				$('body,html').animate({scrollTop: 0});
			});
		}
	};
});