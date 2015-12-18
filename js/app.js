var app = angular.module('myApp');

app.controller('taskController', function($scope, $rootScope) {

  $scope.tasks = tasks;

  $scope.editTask = function (task) {
    console.log(task);
  };

  $scope.remove = function($index) {
    console.log("REMOVED");
    $scope.tasks.splice($index, 1);
  };

  $scope.addTask = function(task) {
    console.log("WORKING ON TASK");
    console.log(task);
    tasks.push(task);
    $scope.task = null
  };

  $scope.saveTask = function(){
  };

  $scope.cancel = function(){
    $scope.task = null;
  }

  $scope.date = new Date();
  $scope.date.setDate($scope.date.getDate() + 1);
})
