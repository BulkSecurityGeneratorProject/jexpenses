'use strict';

angular.module('jexpensesApp')
    .factory('Prefix', function ($resource, DateUtils) {
        return $resource('api/prefixs/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
