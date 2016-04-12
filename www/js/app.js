// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
  .state('app.main', {
      url: '/main',
      views: {
        'menuContent': {
          templateUrl: 'templates/main.html'
        }
      }
    })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'

        }
      }
    })
    .state('app.members', {
      url: '/members',
      views: {
        'menuContent': {
          templateUrl: 'templates/members.html',
          controller: 'MembersCtrl'
        }
      }
    })

    .state('app.spacetrips', {
      url: '/members/space.trips',
      views: {
        'menuContent': {
          templateUrl: 'templates/spacetrips.html',
          controller: 'MembersCtrl'
        }
      }
    })
    .state('app.andrewxalvarado', {
      url: '/members/andrewxalvarado',
      views: {
        'menuContent': {
          templateUrl: 'templates/andrewxalvarado.html',
          controller: 'MembersCtrl'
        }
      }
    })
    .state('app.6ahbriel', {
      url: '/members/6ahbriel',
      views: {
        'menuContent': {
          templateUrl: 'templates/gabriel.html',
          controller: 'MembersCtrl'
        }
      }
    })
    .state('app.kraizeewillis', {
      url: '/members/kraizee_willis',
      views: {
        'menuContent': {
          templateUrl: 'templates/kraizee.html',
          controller: 'MembersCtrl'
        }
      }
    })
    .state('app.vawol', {
      url: '/members/_vawol_',
      views: {
        'menuContent': {
          templateUrl: 'templates/vawol.html',
          controller: 'MembersCtrl'
        }
      }
    })
    .state('app.radiantlenz', {
      url: '/members/radiant.lenz',
      views: {
        'menuContent': {
          templateUrl: 'templates/radiant.html',
          controller: 'MembersCtrl'
        }
      }
    })
    .state('app.cptolf', {
      url: '/members/cpt_olf',
      views: {
        'menuContent': {
          templateUrl: 'templates/olf.html',
          controller: 'MembersCtrl'
        }
      }
    })
    .state('app.beyersss', {
      url: '/members/beyersss',
      views: {
        'menuContent': {
          templateUrl: 'templates/beyersss.html',
          controller: 'MembersCtrl'
        }
      }
    })

  .state('app.member', {
    url: '/members/:memberId',
    views: {
      'menuContent': {
        templateUrl: 'templates/member.html',
        controller: 'MembersCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
