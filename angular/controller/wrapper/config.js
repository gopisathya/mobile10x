
app.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');




	$stateProvider
	// loginstart
	.state('login',{
		url:'/',
		views: {
			'template': {
				templateUrl:'angular/view/test/test.html',
				controller: 'mainCtrl as ctrl',
			}

		}
	})

	





});

