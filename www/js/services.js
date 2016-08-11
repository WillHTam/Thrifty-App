angular.module('starter.services', ['ngResource'])
    .factory('Goal', function ($resource) {
      return $resource('https://phoneserverr.herokuapp.com/goals/:goalId')
    })
