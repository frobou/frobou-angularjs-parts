(function () {
    'use strict';
    angular.module('frobou.parts', []);
})();
(function () {
    'use strict';
    angular.module('frobou.parts')
        .service('FrobouCookieService',
            ['$cookies',
                function ($cookies) {
                    var cookieName = 'radius';
                    this.getCookieAsObject = function () {
                        return $cookies.getObject(cookieName);
                    };
                    this.setCookieAsObject = function (data) {
                        $cookies.putObject(cookieName, data);
                    };
                    this.remove = function () {
                        $cookies.remove(cookieName);
                    };
                }
            ]);
})();