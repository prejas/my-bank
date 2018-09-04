angular.module('app')
  .controller("SignUpController", ['$scope','$window', '$http', 'uploadService', function($scope,$window, $http, uploadService) {

    $scope.redirect = function(url, refresh) {
        if(refresh || $scope.$$phase) {
            $window.location.href = url;
        } else {
            $location.path(url);
            $scope.$apply();
        }
    }
    $scope.register = {};
            $scope.register.qualification = "0";

            $scope.register.qualifications = [{
              id: "0",
              name: "Select Qualification"
            },{
              id: "1",
              name: "Graduate"
            }, {
              id: "2",
              name: "Under Graduate"
            }, {
              id: "3",
              name: "HSC"
            }, {
              id: "4",
              name: "SSC"
            }];

            $scope.register.occupation = "0";
            $scope.register.occupations = [{
              id: "0",
              name: "Select Occupation"
            },{
              id: "1",
              name: "Service"
            }, {
              id: "2",
              name: "Businessman"
            }, {
              id: "3",
              name: "Student"
            }];

            $scope.register.salrange = "0";
            $scope.register.salranges = [{
              id: "0",
              name: "Select Salary Range"
            },{
              id: "1",
              name: "0-10000"
            }, {
              id: "2",
              name: "10000-50000"
            }, {
              id: "3",
              name: "50000-100000"
            }, {
              id: "4",
              name: "100000 and above"
            }];


    $scope.$watch('file', function(newfile, oldfile) {
      if(angular.equals(newfile, oldfile) ){
        return;
      }
      uploadService.upload(newfile).then(function(res){
        // DO SOMETHING WITH THE RESULT!
        console.log("result", res);
      })
    });

  }])
  .service("uploadService", function($http, $q) {

    return ({
      upload: upload
    });

    function upload(file) {
      var upl = $http({
        method: 'POST',
        url: 'http://jsonplaceholder.typicode.com/posts', // /api/upload
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: {
          upload: file
        },
        transformRequest: function(data, headersGetter) {
          var formData = new FormData();
          angular.forEach(data, function(value, key) {
            formData.append(key, value);
          });

          var headers = headersGetter();
          delete headers['Content-Type'];

          return formData;
        }
      });
      return upl.then(handleSuccess, handleError);

    } // End upload function

    // ---
    // PRIVATE METHODS.
    // ---
  
    function handleError(response, data) {
      if (!angular.isObject(response.data) ||!response.data.message) {
        return ($q.reject("An unknown error occurred."));
      }

      return ($q.reject(response.data.message));
    }

    function handleSuccess(response) {
      return (response);
    }

  })
  .directive("aadhar", [function() {
    return {
      scope: {
        aadhar: "=",
        filepreview1: "="
      },
      link: function(scope, element, attributes) {
        element.bind("change", function(changeEvent) {
          scope.aadhar = changeEvent.target.files[0];
          var reader = new FileReader();
          reader.onload = function(loadEvent) {
            scope.$apply(function() {
              scope.filepreview1 = loadEvent.target.result;
            });
          }
          reader.readAsDataURL(scope.aadhar);
        });
      }
    }
  }
])

.directive("pancard", [function() {
      return {
        scope: {
          pancard: "=",
          filepreview2: "="
        },
        link: function(scope, element, attributes) {
          element.bind("change", function(changeEvent) {
            scope.pancard = changeEvent.target.files[0];
            var reader = new FileReader();
            reader.onload = function(loadEvent) {
              scope.$apply(function() {
                scope.filepreview2 = loadEvent.target.result;
              });
            }
            reader.readAsDataURL(scope.pancard);
          });
        }
      }
    }
]);