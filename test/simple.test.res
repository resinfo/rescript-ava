Ava.test("should run a test", t => {
  let answer = 3.14
  t->Ava.is(answer, 3.14, ~message="Should be a tasty dessert", ())
})
