// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Ava from "../src/ava.mjs";

var state = {
  contents: 0
};

Ava.before(function (param) {
      state.contents = 1;
      
    });

Ava.test("Should be 1", (function (t) {
        return Ava.is(t, state.contents, 1, "'state.contents' should be 1", undefined);
      }));

Ava.test("Should still be 1", (function (t) {
        return Ava.is(t, state.contents, 1, "'state.contents' should still be 1", undefined);
      }));

export {
  state ,
  
}
/*  Not a pure module */
