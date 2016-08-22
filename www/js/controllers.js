angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    var data = {
      email: "cat@cat.com",
      password: "purr"
    }

    $http({
      method: 'POST',
      url: 'http://localhost:4200/login',
      data: data
    })
    .success( function (response) {
      console.log(response)
    })

    $timeout(function() {
      $scope.loginData();
    }, 1000);
  };
})

.controller('GoalsCtrl', function($scope, Goal) {
  $scope.goals = Goal.query()
})

.controller('GoalCtrl', function($scope, $stateParams, Goal) {
  $scope.goal = Goal.get({goalId: $stateParams.goalId})
})
