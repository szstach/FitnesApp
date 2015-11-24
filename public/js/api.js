
	 var app = angular.module('app', []);


   



    app.controller('FormController', function($scope) {

  function homecntrl($scope) {
            $scope.kalkulator = false;
            $scope.state2 = true;
            $scope.menu = function () {
                $scope.kalkulator = true;
                $scope.state2 = false;
            };
            $scope.sec2_show = function () {
                $scope.state2 = true;
                $scope.state1 = false
            };
        };

    	//BMI
    

	    	$scope.bbm = function () {
				   var bm = ($scope.waga) / (($scope.wzrost/100)*($scope.wzrost/100));
				   return bm; 
		}




    	//kalorie 
       $scope.kalorie = function() {
            if ($scope.plec == 'mezczyzna') {

            	// var bmi = ($scope.waga) / (($scope.wzrost/100)*($scope.wzrost/100));

            	var zapotrzebowanie = (66.5 + (13.75*($scope.waga)) + (5.033*($scope.wzrost)) - (6.755*($scope.wiek)))*($scope.aktywnosc)*($scope.aktywnosc);

                return zapotrzebowanie;
            }
            else  {

            	var zapotrzebowanie = (655.1 + (9.563*($scope.waga)) + (1.850*($scope.wzrost)) - (4.676*($scope.wiek)))*($scope.aktywnosc);

                return zapotrzebowanie;
            }
          
        };


});


app.controller('Baza',['$scope','$http','$log', function($scope, $http, $log) {

    	$scope.carbo =[];

    	$http.get('file/weglowodany.json')
    		.success(function(data, status, headers, config){

    			$scope.carbo = data;
    			$log.error('Baza zostala zaimportowana');
    		})

    		.error(function(data, status, headers, config){

    			$log.error('Wystapil blad '+status+' podczas ladowania weglowodanow');
    		});
}]);

app.controller('BazaBialek',['$scope','$http','$log', function($scope, $http, $log) {
                $scope.bialka =[];

        $http.get('file/bialka.json')
            .success(function(data, status, headers, config){

                $scope.bialka = data;
                $log.error('Baza zostala zaimportowana');
            })

            .error(function(data, status, headers, config){

                $log.error('Wystapil blad '+status+' podczas ladowania bialek');
            });


}]);

app.controller('BazaTluszczy',['$scope','$http','$log', function($scope, $http, $log) {
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