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
    $scope.labels3 =[ "Anderson", "Barnes", "Davies", "Garza", "Nelson", "Peralta", "Torres"];
    $scope.IP = [55.2, 24.1, 52.1, 40.2, 56.1, 45.0, 27.0];
    $scope.HNine =[52, 25, 39, 31, 54, 38, 20];
    $scope.WHIP =[1.347, 1.151, 1.643, 1.205, 1.347, 1.511, 1.407];

  $scope.$on('fbinfo', function(event)
  {
    console.log("Called!");
  });

  var ref3 = firebase.database().ref("Pitching");
  ref3.once("value")
    .then(function(snapshot){
    var key = snapshot.key; 
    $scope.IP = [
        snapshot.child("Anderson/IP").val(),
        snapshot.child("Barnes/IP").val(),
        snapshot.child("Davies/IP").val(),
        snapshot.child("Garza/IP").val(),
        snapshot.child("Nelson/IP").val(),
        snapshot.child("Peralta/IP").val(),
        snapshot.child("Torres/IP").val()

    ];
    $scope.WHIP = [
        snapshot.child("Anderson/WHIP").val(),
        snapshot.child("Barnes/WHIP").val(),
        snapshot.child("Davies/WHIP").val(),
        snapshot.child("Garza/WHIP").val(),
        snapshot.child("Nelson/WHIP").val(),
        snapshot.child("Peralta/WHIP").val(),
        snapshot.child("Torres/WHIP").val()
    ];
    $scope.ERA = [
        snapshot.child("Anderson/ERA").val(),
        snapshot.child("Barnes/ERA").val(),
        snapshot.child("Davies/ERA").val(),
        snapshot.child("Garza/ERA").val(),
        snapshot.child("Nelson/ERA").val(),
        snapshot.child("Peralta/ERA").val(),
        snapshot.child("Torres/ERA").val()
    ];
    $scope.HNine = [
        snapshot.child("Anderson/H9").val(),
        snapshot.child("Barnes/H9").val(),
        snapshot.child("Davies/H9").val(),
        snapshot.child("Garza/H9").val(),
        snapshot.child("Nelson/H9").val(),
        snapshot.child("Peralta/H9").val(),
        snapshot.child("Torres/H9").val()
    ];
  });

  



  }
})();