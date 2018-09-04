var app = angular.module("hackathonApp", ['rzModule']); 

app.controller("myCtrl", function($scope,$http) {
	   var vm = this;
	   $scope.info={};

	    vm.priceSlider = {
	        minValue: 100,
	        maxValue: 150,
	        options: {
	            floor: 0,
	            ceil: 200,
	        }
	    }
	    
	    vm.interestSlider = {
		        minValue: 1,
		        maxValue: 5,
		        options: {
		            floor: .5,
		            ceil: 20,
		        }
		    }
	    
	    $scope.submitRequest=function(){
	    	
	    	
	    	
	    	$scope.Obj = {
	    			howLong: $scope.info.howLong,
	    			whenYouNeed: $scope.info.whenYouNeed,
	    			amountMinValue:vm.priceSlider.minValue,
	    			amountMaxValue:vm.priceSlider.maxValue,
	    			interestMin:vm.interestSlider.minValue,
	    			interestMax:vm.interestSlider.maxValue	   				
	    			
	    	};
	    	
	    	console.log($scope.Obj);
	    	$http({ method: 'POST', url:'http://test.com', data: $scope.Obj, headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
	    	.success(function (data, status, headers, config) { // handle success things 
	    		console.log("success")
	    		}).error(function (data, status, headers, config) { // handle error things
	    			console.log("error")
	    			
	    		});
	    	}

	    

});


app.controller("lenderCtrl", function($scope,$http) {
	   var vmLender = this;
	   $scope.lenderInfo={};
	   vmLender.interestSlider = {
		        minValue: 1,
		        maxValue: 5,
		        options: {
		            floor: .5,
		            ceil: 20,
		        }
		    }
	    
	    $scope.submitLenderRequest=function(){ 	
	    	$scope.Obj = {
	    			capacity:$scope.lenderInfo.capacity,
	    			howLong: $scope.lenderInfo.howLong,
	    			interestMin:vm.interestSlider.minValue,
	    			interestMax:vm.interestSlider.maxValue	   				
	    			
	    	};
	    	
	    	console.log($scope.Obj);
	    	$http({ method: 'POST', url:'http://test.com', data: $scope.Obj, headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
	    	.success(function (data, status, headers, config) { // handle success things 
	    		console.log("success")
	    		}).error(function (data, status, headers, config) { // handle error things
	    			console.log("error")
	    			
	    		});
	    	}

	    

});

