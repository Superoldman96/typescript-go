//// [tests/cases/conformance/jsdoc/declarations/jsDeclarationsClassLikeHeuristic.ts] ////

//// [index.js]
// https://github.com/microsoft/TypeScript/issues/35801
let A;
A = {};
A.prototype.b = {};

//// [index.js]
// https://github.com/microsoft/TypeScript/issues/35801
let A;
A = {};
A.prototype.b = {};


//// [index.d.ts]
// https://github.com/microsoft/TypeScript/issues/35801
declare let A: any;
