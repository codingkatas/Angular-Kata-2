/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : false
 */
/*global module, inject, describe, it, oef, expect, log */

describe('HomeController tests', function () {

    beforeEach(function () {
        module('Kata');
    });

    describe('Test that HomeController provides a Service with a ToDo list', function () {

        var scope;

        beforeEach(inject(function ($controller, $rootScope, TodoService) {
            scope = $rootScope.$new();
            var todoService = TodoService;
            $controller('kata.home.HomeController', {
                $scope: scope,
                TodoService: todoService
            });
        }));

        it('should get a list of ToDos from the service', function () {

            var todos = scope.todoService.todoList;

            expect(todos.length).toBe(3);
        });
    });


});