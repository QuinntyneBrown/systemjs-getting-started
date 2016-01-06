require('../lib/angular');
require('../lib/ngX');
require('./app.module');
require('./components/app');
require('./components/about');

angular.element(document).ready(function () {
    angular.bootstrap(document.documentElement, ['app']);
});

