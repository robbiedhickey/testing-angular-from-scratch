(function() {
    'use strict';

    // Create the module and define its dependencies
    angular.module("app", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: 'app/Expense/expense.html' })
            .when('/admin', { templateUrl: 'app/Admin/admin.html' })
            .otherwise({ redirectTo: "/" });
    }]);
}());