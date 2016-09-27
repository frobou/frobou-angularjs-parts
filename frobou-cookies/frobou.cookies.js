(function () {
    'use strict';
    angular.module('frobou.parts')
        .service('FrobouCookieService',
            ['$cookies',
                function ($cookies) {
                    var _cookieName;
                    this.setCookieName = function (name) {
                        _cookieName = name;
                    };
                    this.getCookieAsObject = function () {
                        return $cookies.getObject(_cookieName);
                    };
                    this.setCookieAsObject = function (data) {
                        $cookies.putObject(_cookieName, data);
                    };
                    this.remove = function () {
                        $cookies.remove(_cookieName);
                    };
                }
            ]);
})();