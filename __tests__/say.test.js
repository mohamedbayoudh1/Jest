const say = require("../say");

test("Say Jest Message", () => {
  expect(say()).toBe("hello jest");
});
