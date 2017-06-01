import "mocha";
import "should";

import { HelloWorld } from "../src/HelloWorld";

describe("HelloWorld", () => {

  let tested: HelloWorld;

  beforeEach(() => tested = new HelloWorld());

  describe("Greeting", () => {

    it("should greet given name", () => {
      const result = tested.sayIt("my commander");
      const expected = "Well, hello there my commander!";
      result.should.be.equal(expected);
    });

  });

});
