//// [tests/cases/compiler/errorSupression1.ts] ////

//// [errorSupression1.ts]
class Foo { static bar() { return "x"; } }

var baz = Foo.b;
  // Foo.b won't bind. 
baz.concat("y");

  // So we don't want an error on 'concat'.

//// [errorSupression1.js]
class Foo {
    static bar() { return "x"; }
}
var baz = Foo.b;
// Foo.b won't bind. 
baz.concat("y");
// So we don't want an error on 'concat'.
