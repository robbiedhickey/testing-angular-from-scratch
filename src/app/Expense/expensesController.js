(function() {
    'use strict';

    angular.module('app')
        .controller('expensesController', ['expensesDataService', function(expensesDataService) {
            var vm = this;

            vm.activate = activate;
            vm.expenseItems = [];

            activate();

            function activate() {
                vm.expenseItems = expensesDataService.getExpenses();
            }
    }]);
}());