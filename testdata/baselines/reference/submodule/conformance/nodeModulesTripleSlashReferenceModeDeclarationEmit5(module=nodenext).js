//// [tests/cases/conformance/node/nodeModulesTripleSlashReferenceModeDeclarationEmit5.ts] ////

//// [package.json]
{
    "name": "pkg",
    "version": "0.0.1",
    "exports": {
        "import": "./import.js",
        "require": "./require.js"
    }
}
//// [import.d.ts]
export {};
declare global {
    interface ImportInterface {}
}
//// [require.d.ts]
export {};
declare global {
    interface RequireInterface {}
}
//// [index.ts]
/// <reference types="pkg" resolution-mode="import" preserve="true" />
/// <reference types="pkg" resolution-mode="require" preserve="true" />
export interface LocalInterface extends ImportInterface, RequireInterface {}

//// [index.js]
/// <reference types="pkg" resolution-mode="import" preserve="true" />
/// <reference types="pkg" resolution-mode="require" preserve="true" />
export {};


//// [index.d.ts]
export interface LocalInterface extends ImportInterface, RequireInterface {
}
