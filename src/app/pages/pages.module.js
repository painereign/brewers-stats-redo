/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.pitching',
    'BlurAdmin.pages.batting',
    'BlurAdmin.pages.fielding'
//    'BlurAdmin.pages.team'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');
    
    var config = {
      apiKey: "AIzaSyBcQ9HIE-b2Wf2matGSzFmPgXa-JpiSjhA",
      authDomain: "https://brewers-stats.firebaseapp.com/",
      databaseURL: "https://brewers-stats.firebaseio.com",
      storageBucket: "brewers-stats.appspot.com"//gs://brewers-stats.appspot.com
    };
    firebase.initializeApp(config);
  }
})();
