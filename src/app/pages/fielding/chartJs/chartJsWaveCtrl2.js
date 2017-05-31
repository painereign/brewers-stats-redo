/**
 * @author a.demeshko
 * created on 12/16/15
 */


(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fielding.chartJs')
    .controller('chartJsWaveCtrl', chartJsWaveCtrl);

  /** @ngInject */
  function chartJsWaveCtrl($scope, $interval, stopableInterval) {
    $scope.labels2 =[ "Arcia", "Bandy", "Braun", "Broxton", "Perez", "Pina", "Santana", "Shaw", "Thames", "Villar"];
    $scope.labels1 =[ "Arcia", "Bandy", "Braun", "Broxton", "Perez", "Pina", "Santana", "Shaw", "Thames", "Villar"];
    $scope.labels3 =[ "Anderson", "Barnes", "Davies", "Garza", "Nelson", "Peralta", "Torres"];
    $scope.Inn = ["", ""];
    $scope.chance = ["", ""];
    $scope.RFNine = ["", ""];
    $scope.RFG = ["", ""];

  var ref4 = firebase.database().ref("Batting");
  ref4.once("value")
    .then(function(snapshot){
    var key = snapshot.key; 


    $scope.Inn = [
        snapshot.child("arcia/Innings").val(),
        snapshot.child("bandy/Innings").val(),
        snapshot.child("braun/Innings").val(),
        snapshot.child("broxton/Innings").val(),
        snapshot.child("perez/Innings").val(),
        snapshot.child("pina/Innings").val(),
        snapshot.child("santana/Innings").val(),
        snapshot.child("shaw/Innings").val(),
        snapshot.child("thames/Innings").val(),
        snapshot.child("villar/Innings").val()

    ];
    $scope.chance = [
        snapshot.child("arcia/Chances").val(),
        snapshot.child("bandy/Chances").val(),
        snapshot.child("braun/Chances").val(),
        snapshot.child("broxton/Chances").val(),
        snapshot.child("perez/Chances").val(),
        snapshot.child("pina/Chances").val(),
        snapshot.child("santana/Chances").val(),
        snapshot.child("shaw/Chances").val(),
        snapshot.child("thames/Chances").val(),
        snapshot.child("villar/Chances").val()
    ];
    $scope.RFNine = [
        snapshot.child("arcia/RF9").val(),
        snapshot.child("bandy/RF9").val(),
        snapshot.child("braun/RF9").val(),
        snapshot.child("broxton/RF9").val(),
        snapshot.child("perez/RF9").val(),
        snapshot.child("pina/RF9").val(),
        snapshot.child("santana/RF9").val(),
        snapshot.child("shaw/RF9").val(),
        snapshot.child("thames/RF9").val(),
        snapshot.child("villar/RF9").val()
    ];
    $scope.RFG = [
        snapshot.child("arcia/RFG").val(),
        snapshot.child("bandy/RFG").val(),
        snapshot.child("braun/RFG").val(),
        snapshot.child("broxton/RFG").val(),
        snapshot.child("perez/RFG").val(),
        snapshot.child("pina/RFG").val(),
        snapshot.child("santana/RFG").val(),
        snapshot.child("shaw/RFG").val(),
        snapshot.child("thames/RFG").val(),
        snapshot.child("villar/RFG").val()
    ];
  });
  
  var ref3 = firebase.database().ref("Batting");
  ref3.once("value")
    .then(function(snapshot){
    var key = snapshot.key; 
    $scope.BA = [
        snapshot.child("arcia/BA").val(),
        snapshot.child("bandy/BA").val(),
        snapshot.child("braun/BA").val(),
        snapshot.child("broxton/BA").val(),
        snapshot.child("perez/BA").val(),
        snapshot.child("pina/BA").val(),
        snapshot.child("santana/BA").val(),
        snapshot.child("shaw/BA").val(),
        snapshot.child("thames/BA").val(),
        snapshot.child("villar/BA").val()

    ];
    $scope.OBP = [
        snapshot.child("arcia/OBP").val(),
        snapshot.child("bandy/OBP").val(),
        snapshot.child("braun/OBP").val(),
        snapshot.child("broxton/OBP").val(),
        snapshot.child("perez/OBP").val(),
        snapshot.child("pina/OBP").val(),
        snapshot.child("santana/OBP").val(),
        snapshot.child("shaw/OBP").val(),
        snapshot.child("thames/OBP").val(),
        snapshot.child("villar/OBP").val()
    ];
    $scope.SLG = [
        snapshot.child("arcia/SLG").val(),
        snapshot.child("bandy/SLG").val(),
        snapshot.child("braun/SLG").val(),
        snapshot.child("broxton/SLG").val(),
        snapshot.child("perez/SLG").val(),
        snapshot.child("pina/SLG").val(),
        snapshot.child("santana/SLG").val(),
        snapshot.child("shaw/SLG").val(),
        snapshot.child("thames/SLG").val(),
        snapshot.child("villar/SLG").val()
    ];
    $scope.OPS = [
        snapshot.child("arcia/OPS").val(),
        snapshot.child("bandy/OPS").val(),
        snapshot.child("braun/OPS").val(),
        snapshot.child("broxton/OPS").val(),
        snapshot.child("perez/OPS").val(),
        snapshot.child("pina/OPS").val(),
        snapshot.child("santana/OPS").val(),
        snapshot.child("shaw/OPS").val(),
        snapshot.child("thames/OPS").val(),
        snapshot.child("villar/OPS").val()
    ];
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