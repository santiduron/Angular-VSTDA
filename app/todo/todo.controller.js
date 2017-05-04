(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['todoFactory'];
    /* @ngInject */
    function TodoController(todoFactory) {
        var vm = this;
        vm.todos = [];

        vm.addTodo = function() {
            todoFactory
                .create({
                    "text": vm.text,
                    "priority": vm.priority
                })
                .then(function(data) {
                    vm.todos.push(data);
                });
        }

        // activate();
        //
        // function activate() {
        //     todoFactory
        //         .getAll()
        //         .then(function(data) {
        //             vm.todos = data;
        //         });
        // 
        // }
    }
})();
