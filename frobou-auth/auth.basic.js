(function () {
    'use strict';
    angular.module('frobou.auth', []);
})();
(function() {
    'use strict';
    angular.module('frobou.auth')
        .service('AuthBasicService', ['$http', 'md5', '$base64',
            function ($http, md5, $base64) {

                var verifyConfig = function (config) {
                    if (config.username === undefined || config.password === undefined || config.url === undefined) {
                        return false;
                    }
                    if (config.username === '' || config.password === '' || config.url === '') {
                        return false;
                    }
                    if (config.hash === undefined) {
                        config.hash = false;
                    }
                    if (config.method === undefined) {
                        config.method = 'GET';
                    }
                    if (config.headers === undefined) {
                        config.headers = {};
                    }
                    return true;
                };

                var createHeaders = function (config) {
                    var headers = {Authorization: 'Basic ' + $base64.encode(config.username + ':' + config.password)};
                    angular.forEach(config.headers, function (value, key) {
                        headers[key] = value ;
                    });
                    return headers;
                };

                this.login = function (config) {
                    /* valida se o objeto de configuracao esta correto */
                    if (!verifyConfig(config)) {
                        return false;
                    }
                    if (config.hash === true) {
                        config.password = md5.createHash(config.password);
                    }
                    return $http({
                        method: config.method.toUpperCase(),
                        url: config.url,
                        headers: createHeaders(config)
                    }).then(function (response) {
                        return angular.fromJson(response.data);
                    }, function (response) {
                        return angular.fromJson(response.data);
                    });
                };
            }
        ]);
})();