angular.module('myApp').controller('TodoController', TodoController);

TodoController.$inject = [];

/* @ngInject */
function TodoController() {

    var vm = this;
    vm.todos = [];

    vm.addTodo = function() {

        vm.todos.push({
            "item": vm.item,
            "priority": vm.priority
        });
        vm.item = '';
    }
}
