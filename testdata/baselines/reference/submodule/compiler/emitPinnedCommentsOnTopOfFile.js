//// [tests/cases/compiler/emitPinnedCommentsOnTopOfFile.ts] ////

//// [emitPinnedCommentsOnTopOfFile.ts]
/*!

    multi line
    comment
*/

var x = 10;

//// [emitPinnedCommentsOnTopOfFile.js]
var x = 10;
