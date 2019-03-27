var GoogleMapsIosUtils = require("nativescript-google-maps-ios-utils").GoogleMapsIosUtils;
var googleMapsIosUtils = new GoogleMapsIosUtils();

describe("greet function", function() {
    it("exists", function() {
        expect(googleMapsIosUtils.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(googleMapsIosUtils.greet()).toEqual("Hello, NS");
    });
});