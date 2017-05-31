/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.batting.chartJs')
    .controller('chartJsWaveCtrl1', chartJsWaveCtrl);

  /** @ngInject */
  function chartJsWaveCtrl($scope, $interval, stopableInterval) {
    $scope.labels =["Peralta", "Davies", "Anderson", "Nelson", "Garza", "Guerra", "Espino"];
    $scope.IP = [1, 9, 3, 4, 5, 6, 1];
    $scope.K =[1, 1, 3, 4, 5, 6, 1];
    $scope.WHIP =[1, 1, 3, 4, 5, 6, 1];
    $scope.ERA =[1, 1, 3, 4, 5, 6, 1];
    
/*
  var config = {
    apiKey: "AIzaSyBcQ9HIE-b2Wf2matGSzFmPgXa-JpiSjhA",
    authDomain: "https://brewers-stats.firebaseapp.com/",
    databaseURL: "https://brewers-stats.firebaseio.com",
    storageBucket: "brewers-stats.appspot.com"//gs://brewers-stats.appspot.com
  };

//this uncommented - config is not defined
  firebase.initializeApp(config);

  var ref3 = firebase.database().ref("Pitching");
  ref3.once("value")
    .then(function(snapshot){
    var key = snapshot.key; 
    console.log(snapshot.child("Anderson/IP").val());
    $scope.IP = [
        snapshot.child("Anderson/IP").val(),
        snapshot.child("Davies/IP").val(),
        snapshot.child("Espino/IP").val(),
        snapshot.child("Garza/IP").val(),
        snapshot.child("Guerra/IP").val(),
        snapshot.child("Nelson/IP").val(),
        snapshot.child("Peralta/IP").val()
    ];
  });
*/
  
  }
})();