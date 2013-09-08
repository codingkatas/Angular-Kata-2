/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : false
 */
/*global namespace, log, window, angular, kata, kataModule */

namespace('kata.service');

/*

 This is the list that should be available from the service
 Copy the definition into the service, once you have it.

 var todoList = [
     {
         subject:'Take the dishes',
         done:false
     },
     {
         subject:'Do my homework',
         done:false
     },
     {
         subject:'Cook dinner',
         done:false
     }
 ];

 */

//Create a service encapsulation, using this construct
kata.service.TodoService = function () {

    /*
        In here you must put the declaration of the todoList.
        This function must return an object, containing the todoList.
        You can create new objects in Javascript like this:

        var obj = {
            [propertyName] : [value]
        };

        return obj;

     */

    return {};
};

/*
 Then return it using a the factory in AngularJS.
 The form goes like this:

 [MODULE].factory('NameOfTheService', function () {
     var thService = TheFunctionThatDefinesTheService();
     return theService;
 });

 BE AWARE: You must remember the parenthesis at the end. This will construct the service instance.
 Otherwise it will just be a function, waiting to be called.

 TIP: you will find the modulename in the app.js file.

 */


