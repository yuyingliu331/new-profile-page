describe("Looping to find Object properties", function() {

  it("should print out the object's only key", function() {

    var shape1 = {color: 'green'};

    expect(findObjProperties(shape1)).toEqual("color");

  });

  it("should print out the object's keys, comma delimited", function() {

    var shape2 = {color: 'yellow', height: 8, width: 5};

    expect(findObjProperties(shape2)).toEqual("color, height, width");

  });

  it("should print keys belonging to the object instance, not on the prototype", function() {
    /*
    What is Rectangle? Rectangle is the Constructor Function created in 00_rectangle.
    You DON'T need to copy and past the Rectangle function into the solutions_findObjProperties.js file.
    All of your solution files will be run before your tests will evaluate, so Rectangle will already be defined here.
    */

    var shape3 = new Rectangle("blue", 5, 3);

    expect(findObjProperties(shape3)).toEqual("color, height, width");

  });

});
