


var appFit = angular.module('appFit', ['ngRoute']);


//Router menu


   appFit.config(function($routeProvider) {
		$routeProvider

			
			.when('/', {
				templateUrl : 'views/home.html',
               
				
			})

			
            .when('/home', {
                templateUrl : 'views/home.html',
                
                  
            })
        
			.when('/kalkulator', {
				templateUrl : 'views/kalkulator.html',
				
			})

			
			.when('/wyniki', {
				templateUrl : 'views/wyniki.html',
				
			})
        
            .when('/generator', {
				templateUrl : 'views/generator.html',
				
			})
			.when('/kontakt', {
				templateUrl : 'views/kontakt.html',
				
			});
	});


//kontroler formularza
appFit.controller('Glowny', function($scope){
        $scope.opcjeWyboru = '-- wybierz produkt --' ;
    
});

appFit.controller('FormController', function($scope) {
    

    
    
    	//BMI
    

	    	$scope.bbi = function (waga, wzrost) {
				   var bm = waga / ((wzrost/100)*                                               (wzrost/100));
               
				   return bm; 

            };
            


    	//kalorie 
    

    
       $scope.kalorie = function(plec, cel, waga, wzrost, wiek, aktywnosc) {
            if (plec == 'mezczyzna') {



            	var zapotrzebowanie =  ((66.5 + (13.75*waga) + (5.033*wzrost) - (6.755*wiek))*aktywnosc*(aktywnosc)) - cel ;

                return zapotrzebowanie ;
            }
            else  {

            	var zapotrzebowanie = (655.1 + (9.563*(waga)) + (1.850*                                           (wzrost)) - (4.676*(wiek)))*                                         (aktywnosc);

                return zapotrzebowanie;
            }
          
        };
    


    

});

//wczytywanie posilkow 

appFit.controller('Baza',['$scope','$http','$log', function($scope, $http, $log) {

    	$scope.carbo =[];

    	$http.get('file/weglowodany.json')
    		.success(function(data, status, headers, config){

    			$scope.carbo = data;
    			$log.error('Baza zostala zaimportowana');
    		})

    		.error(function(data, status, headers, config){

    			$log.error('Wystapil blad '+status+' podczas ladowania                                           weglowodanow');
    		});
}]);

appFit.controller('BazaBialek',['$scope','$http','$log', function($scope, $http, $log) {
                $scope.bialka =[];

                $http.get('file/bialka.json')
                    .success(function(data, status, headers, config){

                        $scope.bialka = data;
                        $log.error('Baza zostala zaimportowana');
                    })

                    .error(function(data, status, headers, config){

                        $log.error('Wystapil blad '+status+' podczas ladowania                                          bialek');
                    });


}]);

appFit.controller('BazaTluszczy',['$scope','$http','$log', function($scope, $http, $log) {
                $scope.tluszcze =[];

            $http.get('file/tluszcze.json')
            .success(function(data, status, headers, config){

                $scope.tluszcze = data;
                $log.error('Baza zostala zaimportowana');
            })

            .error(function(data, status, headers, config){

                $log.error('Wystapil blad '+status+' podczas ladowania bialek');
            });


}]);

//koniec wczytywania posilkow

appFit.controller('mainController',['$scope', '$http', function($scope, $http) {
	$scope.formData = {};
     
	// when landing on the page, get all todos and show them
	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a todo after checking it
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
    
   


}]);



appFit.controller('mainControllerf',['$scope', '$http', function($scope, $http) {
	$scope.formA = {};

	// when landing on the page, get all todos and show them
	$http.get('/api/forms')
		.success(function(data) {
			$scope.forms = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createForm = function() {
		$http.post('/api/forms', $scope.formA)
			.success(function(data) {
				$scope.formA = {}; // clear the form so our user is ready to enter another
				$scope.forms = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a todo after checking it
	$scope.deleteForm = function(id) {
		$http.delete('/api/forms/' + id)
			.success(function(data) {
				$scope.forms = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};


}]);



















