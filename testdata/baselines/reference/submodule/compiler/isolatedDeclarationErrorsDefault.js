//// [tests/cases/compiler/isolatedDeclarationErrorsDefault.ts] ////

//// [a.ts]
export default 1 + 1;


//// [b.ts]
export default { foo: 1 + 1 };

//// [c.ts]
export default [{ foo: 1 + 1 }];

//// [d.ts]
export default [{ foo: 1 + 1 }] as const;

//// [e.ts]
export default [{ foo: 1 + 1 }] as const;

//// [f.ts]
const a = { foo: 1 };
export default a;

//// [a.js]
export default 1 + 1;
//// [b.js]
export default { foo: 1 + 1 };
//// [c.js]
export default [{ foo: 1 + 1 }];
//// [d.js]
export default [{ foo: 1 + 1 }];
//// [e.js]
export default [{ foo: 1 + 1 }];
//// [f.js]
const a = { foo: 1 };
export default a;


//// [a.d.ts]
declare const _default: number;
export default _default;
//// [b.d.ts]
declare const _default: {
    foo: number;
};
export default _default;
//// [c.d.ts]
declare const _default: {
    foo: number;
}[];
export default _default;
//// [d.d.ts]
declare const _default: readonly [{
    readonly foo: number;
}];
export default _default;
//// [e.d.ts]
declare const _default: readonly [{
    readonly foo: number;
}];
export default _default;
//// [f.d.ts]
declare const a: {
    foo: number;
};
export default a;
