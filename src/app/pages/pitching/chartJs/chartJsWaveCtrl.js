/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.pitching.chartJs')
    .controller('chartJsWaveCtrl', chartJsWaveCtrl);

  /** @ngInject */
  function chartJsWaveCtrl($scope, $interval, stopableInterval) {
    $scope.labels =[ "Anderson", "Barnes", "Davies", "Garza", "Nelson", "Peralta", "Torres"];
    $scope.IP = [55.2, 24.1, 52.1, 40.2, 56.1, 45.0, 27.0];
    $scope.K =[52, 25, 39, 31, 54, 38, 20];
    $scope.WHIP =[1.347, 1.151, 1.643, 1.205, 1.347, 1.511, 1.407];
    $scope.ERA =[118, 149, 82, 110, 114, 76, 166];
    
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