  angular.module('myReverseModule', [])
    .filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
    };
    })
    .controller('Controller', ['$scope', function($scope) {
      $scope.greeting = 'hello';
    }]);