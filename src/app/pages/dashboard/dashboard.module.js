/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard', [])
      .config(routeConfig)
      .controller('TablesPageCtrl', TablesPageCtrl);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
  console.log("tablepagectrl");
    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          title: 'Dashboard',
          controller: 'TablesPageCtrl',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        }).state('dashboard.basic', {
          url: '/basic',
          templateUrl: 'app/pages/dashboard/basic/tables.html',
          title: 'Basic Tables',
          sidebarMeta: {
            order: 0,
          },
        });
    $urlRouterProvider.when('/tables','/tables/basic');
  }
  
  function TablesPageCtrl($scope, $filter, editableOptions, editableThemes) {

  }


})();
