//// [tests/cases/compiler/declarationEmitAliasInlineing.ts] ////

//// [a.ts]
type O = {
    prop: string
    prop2: string
}

type I = {
    prop: string
}

export const fn = (v: O['prop'], p: Omit<O, 'prop'>, key: keyof O, p2: Omit<O, keyof I>) => {};

//// [aExp.ts]
export type O = {
    prop: string
    prop2: string
}

export type I = {
    prop: string
}

export const fnExp = (v: O['prop'], p: Omit<O, 'prop'>, key: keyof O, p2: Omit<O, keyof I>) => {};

//// [b.ts]
import {fn} from './a'
import {fnExp} from './aExp'
export const f = fn;
export const fExp = fnExp;

//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fn = void 0;
const fn = (v, p, key, p2) => { };
exports.fn = fn;
//// [aExp.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fnExp = void 0;
const fnExp = (v, p, key, p2) => { };
exports.fnExp = fnExp;
//// [b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fExp = exports.f = void 0;
const a_1 = require("./a");
const aExp_1 = require("./aExp");
exports.f = a_1.fn;
exports.fExp = aExp_1.fnExp;


//// [a.d.ts]
type O = {
    prop: string;
    prop2: string;
};
export declare const fn: (v: string, p: Omit<O, "prop">, key: keyof O, p2: Omit<O, "prop">) => void;
export {};
//// [aExp.d.ts]
export type O = {
    prop: string;
    prop2: string;
};
export type I = {
    prop: string;
};
export declare const fnExp: (v: string, p: Omit<O, "prop">, key: keyof O, p2: Omit<O, "prop">) => void;
//// [b.d.ts]
export declare const f: (v: string, p: Omit<{
    prop: string;
    prop2: string;
}, "prop">, key: keyof {
    prop: string;
    prop2: string;
}, p2: Omit<{
    prop: string;
    prop2: string;
}, "prop">) => void;
export declare const fExp: (v: string, p: Omit<import("./aExp").O, "prop">, key: keyof import("./aExp").O, p2: Omit<import("./aExp").O, "prop">) => void;
