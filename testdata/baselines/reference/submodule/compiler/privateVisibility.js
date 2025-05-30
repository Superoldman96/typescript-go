//// [tests/cases/compiler/privateVisibility.ts] ////

//// [privateVisibility.ts]
class Foo {
	public pubMeth() {this.privMeth();}
	private privMeth() {}
	public pubProp = 0;
	private privProp = 0;
}

var f = new Foo();
f.privMeth(); // should not work
f.privProp; // should not work

f.pubMeth(); // should work
f.pubProp; // should work

module M {
    export class C { public pub = 0; private priv = 1; }
    export var V = 0;
}


var c = new M.C();

c.pub; // should work
c.priv; // should not work



//// [privateVisibility.js]
class Foo {
    pubMeth() { this.privMeth(); }
    privMeth() { }
    pubProp = 0;
    privProp = 0;
}
var f = new Foo();
f.privMeth(); // should not work
f.privProp; // should not work
f.pubMeth(); // should work
f.pubProp; // should work
var M;
(function (M) {
    class C {
        pub = 0;
        priv = 1;
    }
    M.C = C;
    M.V = 0;
})(M || (M = {}));
var c = new M.C();
c.pub; // should work
c.priv; // should not work
