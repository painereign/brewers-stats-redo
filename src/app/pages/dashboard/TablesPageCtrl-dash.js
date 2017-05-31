/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables')
      .controller('TablesPageCtrl-dash', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $filter, editableOptions, editableThemes) {
  

  var config = {
    apiKey: "AIzaSyBcQ9HIE-b2Wf2matGSzFmPgXa-JpiSjhA",
    authDomain: "https://brewers-stats.firebaseapp.com/",
    databaseURL: "https://brewers-stats.firebaseio.com",
    storageBucket: "brewers-stats.appspot.com"//gs://brewers-stats.appspot.com
  };
  firebase.initializeApp(config);

  var ref = firebase.database().ref("mlbstandings");
  ref.once("value")
    .then(function(snapshot){
    var key = snapshot.key; 

    console.log(snapshot.child("AL East/Baltimore Orioles").val());

    $scope.ALETable = [
      {
        team: snapshot.child("AL East/Baltimore Orioles").key,
        record: snapshot.child("AL East/Baltimore Orioles").val()
      },
      {
        team: snapshot.child("AL East/Boston Red Sox").key,
        record: snapshot.child("AL East/Boston Red Sox").val()
      },
      {
        team: snapshot.child("AL East/New York Yankees").key,
        record: snapshot.child("AL East/New York Yankees").val()
      },
      {
        team: snapshot.child("AL East/New York Yankees").key,
        record: snapshot.child("AL East/New York Yankees").val()
      },
      {
        team: snapshot.child("AL East/Toronto Blue Jays").key,
        record: snapshot.child("AL East/Toronto Blue Jays").val()
      }
    ];

    $scope.ALCTable = [
      {
        team: snapshot.child("AL Central/Chicago White Sox").key,
        record: snapshot.child("AL Central/Chicago White Sox").val()
      },
      {
        team: snapshot.child("AL Central/Cleveland Indians").key,
        record: snapshot.child("AL Central/Cleveland Indians").val()
      },
      {
        team: snapshot.child("AL Central/Detroit Tigers").key,
        record: snapshot.child("AL Central/Detroit Tigers").val()
      },
      {
        team: snapshot.child("AL Central/Kansas City Royals").key,
        record: snapshot.child("AL Central/Kansas City Royals").val()
      },
      {
        team: snapshot.child("AL Central/Minnesota Twins").key,
        record: snapshot.child("AL Central/Minnesota Twins").val()
      }
    ];

    $scope.ALWTable = [
      {
        team: snapshot.child("AL West/Houston Astros").key,
        record: snapshot.child("AL West/Houston Astros").val()
      },
      {
        team: snapshot.child("AL West/Los Angeles Angels").key,
        record: snapshot.child("AL West/Los Angeles Angels").val()
      },
      {
        team: snapshot.child("AL West/Oakland Athletics").key,
        record: snapshot.child("AL West/Oakland Athletics").val()
      },
      {
        team: snapshot.child("AL West/Seattle Mariners").key,
        record: snapshot.child("AL West/Seattle Mariners").val()
      },
      {
        team: snapshot.child("AL West/Texas Rangers").key,
        record: snapshot.child("AL West/Texas Rangers").val()
      }
    ];

    $scope.NLETable = [
      {
        team: snapshot.child("NL East/Washington Nationals").key,
        record: snapshot.child("NL East/Washington Nationals").val()
      },
      {
        team: snapshot.child("NL East/Atlanta Braves").key,
        record: snapshot.child("NL East/Atlanta Braves").val()
      },
      {
        team: snapshot.child("NL East/New York Mets").key,
        record: snapshot.child("NL East/New York Mets").val()
      },
      {
        team: snapshot.child("NL East/Miami Marlins").key,
        record: snapshot.child("NL East/Miami Marlins").val()
      },
      {
        team: snapshot.child("NL East/Philadelphia Phillies").key,
        record: snapshot.child("NL East/Philadelphia Phillies").val()
      }
    ];

    $scope.NLCTable = [
      {
        team: snapshot.child("NL Central/Chicago Cubs").key,
        record: snapshot.child("NL Central/Chicago Cubs").val()
      },
      {
        team: snapshot.child("NL Central/Cincinnati Reds").key,
        record: snapshot.child("NL Central/Cincinnati Reds").val()
      },
      {
        team: snapshot.child("NL Central/Milwaukee Brewers").key,
        record: snapshot.child("NL Central/Milwaukee Brewers").val()
      },
      {
        team: snapshot.child("NL Central/Pittsburgh Pirates").key,
        record: snapshot.child("NL Central/Pittsburgh Pirates").val()
      },
      {
        team: snapshot.child("NL Central/St Louis Cardinals").key,
        record: snapshot.child("NL Central/St Louis Cardinals").val()
      }
    ];

    $scope.NLWTable = [
      {
        team: snapshot.child("NL West/Arizona Diamondbacks").key,
        record: snapshot.child("NL West/Arizona Diamondbacks").val()
      },
      {
        team: snapshot.child("NL West/Colorado Rockies").key,
        record: snapshot.child("NL West/Colorado Rockies").val()
      },
      {
        team: snapshot.child("NL West/Los Angeles Dodgers").key,
        record: snapshot.child("NL West/Los Angeles Dodgers").val()
      },
      {
        team: snapshot.child("NL West/San Diego Padres").key,
        record: snapshot.child("NL West/San Diego Padres").val()
      },
      {
        team: snapshot.child("NL West/San Francisco Giants").key,
        record: snapshot.child("NL West/San Francisco Giants").val()
      }
    ];
  });

  var ref2 = firebase.database().ref("Next 5");
  ref2.once("value")
    .then(function(snapshot){
    var key = snapshot.key;
    $scope.NextFive = [
      {
        at: snapshot.child("game1/at").val(),
        date: snapshot.child("game1/date").val(),
        team: snapshot.child("game1/team").val(),
      },
      {
        at: snapshot.child("game2/at").val(),
        date: snapshot.child("game2/date").val(),
        team: snapshot.child("game2/team").val(),
      },
      {
        at: snapshot.child("game3/at").val(),
        date: snapshot.child("game3/date").val(),
        team: snapshot.child("game3/team").val(),
      },
      {
        at: snapshot.child("game4/at").val(),
        date: snapshot.child("game4/date").val(),
        team: snapshot.child("game4/team").val(),
      },
      {
        at: snapshot.child("game5/at").val(),
        date: snapshot.child("game5/date").val(),
        team: snapshot.child("game5/team").val(),
      }
    ];
    });
 

  }

})();
