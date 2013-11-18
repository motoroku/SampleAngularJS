describe("sample", function() {
    var a
    beforeEach(function() {
        a = 1;
    });

    it("green", function() {
        //demonstrates use of custom matcher
        expect(a).toBe(1);
    });

    it("red", function() {
        //demonstrates use of custom matcher
        expect(a).toBe(2);
    });
});