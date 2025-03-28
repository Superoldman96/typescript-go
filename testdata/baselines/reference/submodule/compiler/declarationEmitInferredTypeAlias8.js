//// [tests/cases/compiler/declarationEmitInferredTypeAlias8.ts] ////

//// [declarationEmitInferredTypeAlias8.ts]
type Foo<T> = T | { x: Foo<T> };
var x: Foo<number[]>;

function returnSomeGlobalValue() {
    return x;
}

//// [declarationEmitInferredTypeAlias8.js]
var x;
function returnSomeGlobalValue() {
    return x;
}
