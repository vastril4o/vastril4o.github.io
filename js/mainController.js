angular.module('mainApp', [])
  .controller('mainController', function () {

    var data = this;
    data.theme_dark = false;

    // init
    this.$onInit = function () {
      data.theme_dark = afterNight();


    };

    // function
    function afterNight() {
      var d = new Date();
      if (d.getHours() > 20 && d.getHours() < 8) {
        return true;
      }
    };

    $http({
      method: 'GET',
      url: 'api/url-api'
    }).then(function (response) {

    }, function (error) {

    });

  });