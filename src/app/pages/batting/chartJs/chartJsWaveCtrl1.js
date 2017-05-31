/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.batting.chartJs')
    .controller('chartJsWaveCtrl2', chartJsWaveCtrl2);

  /** @ngInject */
  function chartJsWaveCtrl2($scope, $interval, stopableInterval) {
    $scope.labels1 =[ "Arcia", "Bandy", "Braun", "Broxton", "Perez", "Pina", "Santana", "Shaw", "Thames", "Villar"];
    console.log("batting lables");

  var ref3 = firebase.database().ref("Batting");
  ref3.once("value")
    .then(function(snapshot){
    var key = snapshot.key; 
    console.log("batting loop");
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
  
  }
})();