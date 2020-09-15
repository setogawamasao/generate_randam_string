"use strict";
exports.__esModule = true;
var crypto = require("crypto");
var generate = function () {
    var S = "abcdefghijklmnopqrstuvwxyz0123456789";
    var characterNumber = 44;
    // 生成する暗号文字数文のArrayBufferを作成
    var uint8array = new Uint8Array(characterNumber);
    console.log("uint8array", uint8array);
    // 乱数を生成し、ArrayBufferに格納
    var randamUint8array = crypto.randomFillSync(uint8array);
    console.log("randamUint8array", randamUint8array);
    // 配列に変換
    var randamArray = Array.from(randamUint8array);
    console.log("randamArray", randamArray);
    // 各数値を文字列に変換
    var randomStringArray = randamArray.map(function (n) { return S[n % S.length]; });
    console.log("randomStringArray", randomStringArray);
    // 文字列を結合
    var randomString = randomStringArray.join("");
    console.log("randomString", randomString);
    return randomString;
};
console.log("final result : ", generate());
