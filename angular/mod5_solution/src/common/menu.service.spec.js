describe('MenuService', function() {
    var MenuService, $httpBackend, ApiPath;

    beforeEach(angular.mock.module('common'));

    beforeEach(angular.mock.inject(function(_$httpBackend_, _MenuService_, _ApiPath_) {
        $httpBackend = _$httpBackend_;
        MenuService = _MenuService_;
        ApiPath = _ApiPath_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch menu items for a given category', function() {
        var category = 'A';
        var mockResponse = {
            "A": {
                "category": {
                    "id": 82,
                    "name": "Soup",
                    "short_name": "A",
                    "special_instructions": ""
                },
                "menu_items": [
                    {"description": "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions", "large_portion_name": "quart", "name": "Won Ton Soup with Chicken", "price_large": 5, "price_small": 2.55, "short_name": "A1", "small_portion_name": "pint"}
                ]
            }
        };

        $httpBackend.expectGET(ApiPath + '/menu_items/' + category + '.json').respond(mockResponse);
        MenuService.getMenuItems(category).then(function(response) {
            expect(response).toEqual(mockResponse);
        });
        $httpBackend.flush();
    });

    it('should check if a menu item exists', function() {
        var shortName = 'A1';
        var expectedUrl = ApiPath + '/menu_items/' + shortName[0] + '/menu_items/' + (parseInt(shortName.substring(1)) - 1) + '.json';
        var mockItem = {
            "description": "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
            "large_portion_name": "quart",
            "name": "Won Ton Soup with Chicken",
            "price_large": 5,
            "price_small": 2.55,
            "short_name": "A1",
            "small_portion_name": "pint"
        };

        $httpBackend.expectGET(expectedUrl).respond(mockItem);
        MenuService.checkMenuItem(shortName).then(function(response) {
            expect(response).toEqual(mockItem);
        });
        $httpBackend.flush();
    });

});
