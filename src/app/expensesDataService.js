(function() {
    'use strict';

    angular.module('app')
        .factory('expensesDataService', ['$http', expensesDataService]);

    function expensesDataService($http) {
        return {
            getExpenses: function() {
                return [
                    new ExpenseItem("Taxi", "To Airport", 89.95),
                    new ExpenseItem("Lunch", "At Airport", 15.40),
                    new ExpenseItem("Coffee", "Starbucks", 4.93)
                ];
            },
            reportExpenses: function() {
              // some work  
            },
            persistExpenses: function(reportExpenses) {
                // do some work
                var success = true;

                if (success) {
                    reportExpenses();
                }
            }
        };
    }
}());