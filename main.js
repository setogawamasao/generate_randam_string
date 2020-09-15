"use strict";
exports.__esModule = true;
var crypto = require("crypto");
var generate = function () {
    // 生成する乱数の文字数
    var characterNumber = 5;
    // ランダムな文字列に使用する文字列のリスト
    var stringList = "abcdefghijklmnopqrstuvwxyz0123456789";
    // 生成する暗号文字数文のuint8arrayを作成
    var uint8array = new Uint8Array(characterNumber);
    console.log("uint8array", uint8array);
    // 乱数を生成し、uint8arrayに格納
    var randamUint8array = crypto.randomFillSync(uint8array);
    console.log("randamUint8array", randamUint8array);
    // 配列に変換
    var randamNumberArray = Array.from(randamUint8array);
    console.log("randamNumberArray", randamNumberArray);
    // 各数値を文字列のリストを使用して変換
    var randomStringArray = randamNumberArray.map(function (randamNumber) { return stringList[randamNumber % stringList.length]; });
    console.log("randomStringArray", randomStringArray);
    // 文字列を結合
    var randomString = randomStringArray.join("");
    return randomString;
};
console.log("final result : ", generate());
