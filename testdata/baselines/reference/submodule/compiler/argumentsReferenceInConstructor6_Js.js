//// [tests/cases/compiler/argumentsReferenceInConstructor6_Js.ts] ////

//// [a.js]
class A {
	constructor() {
		/**
		 * @type object
		 */
		this.foo = arguments;
	}
}




//// [a.d.ts]
declare class A {
    constructor();
}
