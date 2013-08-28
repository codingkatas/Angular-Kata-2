Kata 2
======

In this kata, you must improve the todoList from Kata 1.

In AngularJS you can use services to encapsulate specific functionality, like provding data for example.
Services acts as singletons in AngularJS, which means that you also use them to share data.

These services can be injected into the controller and can then be assigned directly to the $scope.
This makes the service available directly in the template (HTML page), without further wrapping in the controller.

Now, you must implement the TodoService in the file

src/main/webapp/app/kata/TodoService.js

In this file, you will find some further instructions.
You must also make sure that the TodoService is injected into the controller.
In the file

src/main/webapp/app/kata/HomeController.js

there are some further instructions.
You will need to update the ng-repeat directive on the <tr ...> tag in the index.html page.

This kata will need to be tested in to ways.

1.  Using the jasmine test framework. From a commandline in the root of this project, enter "mvn jasmine:test"
    When it says "Build success", the controller and service part works.
2.  You must also verify that the table in index.html, is behaving well. Click on the link at the bottom of the page.

If both these test suites are successful, then you have reached the next level in AngularJS :-)