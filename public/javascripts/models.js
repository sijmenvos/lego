
var model = {

  getCars: ['$http', '$q', function($http, $q) {
    var defer = $q.defer();
  
    $http
      .get('/api/cars', {cache: true})
      .success(function(data) {
        defer.resolve(data);
      });
  
    return defer.promise;
  }],
}