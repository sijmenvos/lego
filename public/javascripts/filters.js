angular.module('lego')
	.filter('count', function() {
      return function(data, key) {
          if (typeof(data) === 'undefined' || typeof(key) === 'undefined') {
              return 0;
          }

          var count = 0;
          for (var i = 0; i < data.length; i++) {
              if(data[i][key])
                count+=data[i][key].length;
          }

          return count;
      };
  })
  .filter('capitalizeFirst', function() {
    return function(txt) {
      return txt ? txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase() : '';
    }
  })