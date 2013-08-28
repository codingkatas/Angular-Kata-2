'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Kata 2', function () {

    beforeEach(function () {
        browser().navigateTo('../index.html');
    });

    it('should show a list of three todos from the TodoService in a html table', function () {

        expect(repeater('.table tbody tr').count()).toBe(3);

    });

});
