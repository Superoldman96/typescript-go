//// [tests/cases/conformance/statements/returnStatements/returnStatements.ts] ////

//// [returnStatements.ts]
// all the following should be valid
function fn1(): number { return 1; }
function fn2(): string { return ''; }
function fn3(): void { return undefined; }
function fn4(): void { return; }
function fn5(): boolean { return true; }
function fn6(): Date { return new Date(12); }
function fn7(): any { return null; }
function fn8(): any { return; } // OK, eq. to 'return undefined'

interface I { id: number }
class C implements I {
    id: number;
    dispose() {}
}
class D extends C {
    name: string;
}
function fn10(): I { return { id: 12 }; } 

function fn11(): I { return new C(); }
function fn12(): C { return new D(); }
function fn13(): C { return null; }


//// [returnStatements.js]
// all the following should be valid
function fn1() { return 1; }
function fn2() { return ''; }
function fn3() { return undefined; }
function fn4() { return; }
function fn5() { return true; }
function fn6() { return new Date(12); }
function fn7() { return null; }
function fn8() { return; } // OK, eq. to 'return undefined'
class C {
    id;
    dispose() { }
}
class D extends C {
    name;
}
function fn10() { return { id: 12 }; }
function fn11() { return new C(); }
function fn12() { return new D(); }
function fn13() { return null; }
