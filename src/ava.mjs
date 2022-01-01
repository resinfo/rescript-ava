// Generated by ReScript, PLEASE EDIT WITH CARE

import Ava from "ava";
import * as Ava$1 from "ava";
import * as Caml_option from "../node_modules/rescript/lib/es6/caml_option.js";
import * as Caml_splice_call from "../node_modules/rescript/lib/es6/caml_splice_call.js";

function assert_(prim0, prim1, prim2, prim3) {
  prim0.assert(prim1, prim2 !== undefined ? Caml_option.valFromOption(prim2) : undefined);
  
}

var partial_arg = Ava;

function after(param, param$1) {
  partial_arg.after(param);
  
}

var partial_arg$1 = Ava;

function afterWithTitle(param, param$1) {
  partial_arg$1.after(param, param$1);
  
}

var partial_arg$2 = Ava;

function afterEach(param) {
  partial_arg$2.afterEach(param);
  
}

var partial_arg$3 = Ava;

function afterEachWithTitle(param, param$1) {
  partial_arg$3.afterEach(param, param$1);
  
}

var partial_arg$4 = Ava;

function before(param) {
  partial_arg$4.before(param);
  
}

var partial_arg$5 = Ava;

function beforeWithTitle(param, param$1) {
  partial_arg$5.before(param, param$1);
  
}

var partial_arg$6 = Ava;

function beforeEach(param) {
  partial_arg$6.beforeEach(param);
  
}

var partial_arg$7 = Ava;

function beforeEachWithTitle(param, param$1) {
  partial_arg$7.beforeEach(param, param$1);
  
}

var partial_arg$8 = Ava;

function failing(param, param$1) {
  partial_arg$8.failing(param, param$1);
  
}

var partial_arg$9 = Ava;

function only(param, param$1) {
  partial_arg$9.only(param, param$1);
  
}

var partial_arg$10 = Ava;

function serial(param, param$1) {
  partial_arg$10.serial(param, param$1);
  
}

var partial_arg$11 = Ava;

function skip(param, param$1) {
  partial_arg$11.skip(param, param$1);
  
}

var partial_arg$12 = Ava;

function todo(param) {
  partial_arg$12.todo(param);
  
}

function test(prim0, prim1) {
  Ava(prim0, prim1);
  
}

function testAsync(prim0, prim1) {
  Ava(prim0, prim1);
  
}

var meta = Ava$1.meta;

function log(prim0, prim1) {
  Caml_splice_call.spliceObjApply(prim0, "log", [prim1]);
  
}

function plan(prim0, prim1) {
  prim0.plan(prim1);
  
}

function teardown(prim0, prim1) {
  prim0.teardown(prim1);
  
}

function timeout(prim0, prim1, prim2, prim3) {
  prim0.timeout(prim1, prim2 !== undefined ? Caml_option.valFromOption(prim2) : undefined);
  
}

function deepEqual(prim0, prim1, prim2, prim3, prim4) {
  prim0.deepEqual(prim1, prim2, prim3 !== undefined ? Caml_option.valFromOption(prim3) : undefined);
  
}

function fail(prim0, prim1, prim2) {
  prim0.fail(prim1 !== undefined ? Caml_option.valFromOption(prim1) : undefined);
  
}

function false_(prim0, prim1, prim2, prim3) {
  prim0.false(prim1, prim2 !== undefined ? Caml_option.valFromOption(prim2) : undefined);
  
}

function falsy(prim0, prim1, prim2, prim3) {
  prim0.falsy(prim1, prim2 !== undefined ? Caml_option.valFromOption(prim2) : undefined);
  
}

function is(prim0, prim1, prim2, prim3, prim4) {
  prim0.is(prim1, prim2, prim3 !== undefined ? Caml_option.valFromOption(prim3) : undefined);
  
}

function not(prim0, prim1, prim2, prim3, prim4) {
  prim0.not(prim1, prim2, prim3 !== undefined ? Caml_option.valFromOption(prim3) : undefined);
  
}

function notDeepEqual(prim0, prim1, prim2, prim3, prim4) {
  prim0.notDeepEqual(prim1, prim2, prim3 !== undefined ? Caml_option.valFromOption(prim3) : undefined);
  
}

function regex(prim0, prim1, prim2, prim3, prim4) {
  prim0.regex(prim1, prim2, prim3 !== undefined ? Caml_option.valFromOption(prim3) : undefined);
  
}

function notRegex(prim0, prim1, prim2, prim3, prim4) {
  prim0.notRegex(prim1, prim2, prim3 !== undefined ? Caml_option.valFromOption(prim3) : undefined);
  
}

function notThrows(prim0, prim1, prim2, prim3) {
  prim0.notThrows(prim1, prim2 !== undefined ? Caml_option.valFromOption(prim2) : undefined);
  
}

function notThrowsAsync(prim0, prim1, prim2, prim3) {
  return prim0.notThrowsAsync(prim1, prim2 !== undefined ? Caml_option.valFromOption(prim2) : undefined);
}

function pass(prim0, prim1, prim2) {
  prim0.pass(prim1 !== undefined ? Caml_option.valFromOption(prim1) : undefined);
  
}

function snapshot(prim0, prim1, prim2, prim3) {
  prim0.snapshot(prim1, prim2 !== undefined ? Caml_option.valFromOption(prim2) : undefined);
  
}

function throws(prim0, prim1, prim2, prim3, prim4) {
  return prim0.throws(prim1, prim2 !== undefined ? Caml_option.valFromOption(prim2) : undefined, prim3 !== undefined ? Caml_option.valFromOption(prim3) : undefined);
}

function throwsAsync(prim0, prim1, prim2, prim3, prim4) {
  return prim0.throwsAsync(prim1, prim2 !== undefined ? Caml_option.valFromOption(prim2) : undefined, prim3 !== undefined ? Caml_option.valFromOption(prim3) : undefined);
}

function true_(prim0, prim1, prim2, prim3) {
  prim0.true(prim1, prim2 !== undefined ? Caml_option.valFromOption(prim2) : undefined);
  
}

function truthy(prim0, prim1, prim2, prim3) {
  prim0.truthy(prim1, prim2 !== undefined ? Caml_option.valFromOption(prim2) : undefined);
  
}

export {
  test ,
  testAsync ,
  meta ,
  log ,
  plan ,
  teardown ,
  timeout ,
  assert_ ,
  deepEqual ,
  fail ,
  false_ ,
  falsy ,
  is ,
  not ,
  notDeepEqual ,
  regex ,
  notRegex ,
  notThrows ,
  notThrowsAsync ,
  pass ,
  snapshot ,
  throws ,
  throwsAsync ,
  true_ ,
  truthy ,
  after ,
  afterWithTitle ,
  afterEach ,
  afterEachWithTitle ,
  before ,
  beforeWithTitle ,
  beforeEach ,
  beforeEachWithTitle ,
  failing ,
  only ,
  serial ,
  skip ,
  todo ,
  
}
/* partial_arg Not a pure module */
