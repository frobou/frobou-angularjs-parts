(function () {
    'use strict';
    angular.module('frobou.parts')
        .service('FrobouBasicAuthService', ['$http', 'md5', '$base64',
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
                        headers[key] = value;
                    });
                    return headers;
                };

                var headerMount = function (config) {
                    /* valida se o objeto de configuracao esta correto */
                    if (!verifyConfig(config)) {
                        return false;
                    }
                    if (config.hash === true) {
                        config.password = md5.createHash(config.password);
                    }
                    return {
                        method: config.method.toUpperCase(),
                        url: config.url,
                        headers: createHeaders(config)
                    };
                };

                this.mountHeader = headerMount;

                this.login = function (config) {
                    var headers = headerMount(config);
                    return $http(headers)
                        .then(function (response) {
                            console.log(response);
                            return angular.fromJson(response.data);
                        }, function (response) {
                            console.log(response);
                            return angular.fromJson(response.data);
                        });
                };
            }
        ]);
})();