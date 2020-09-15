import * as crypto from "crypto";

const generate = (): string => {
  // 生成する乱数の文字数
  const characterNumber = 5;
  // ランダムな文字列に使用する文字リスト
  const stringList = "abcdefghijklmnopqrstuvwxyz0123456789";

  // 生成する暗号文字数文のuint8arrayを作成
  const uint8array = new Uint8Array(characterNumber);
  console.log("uint8array", uint8array);

  // 乱数を生成し、uint8arrayに格納
  const randamUint8array = crypto.randomFillSync(uint8array);
  console.log("randamUint8array", randamUint8array);

  // 配列に変換
  const randamNumberArray = Array.from(randamUint8array);
  console.log("randamNumberArray", randamNumberArray);

  // 各数値を文字リストを使用して,文字に変換
  const randomStringArray = randamNumberArray.map(
    (randamNumber) => stringList[randamNumber % stringList.length]
  );
  console.log("randomStringArray", randomStringArray);

  // 文字列を結合
  const randomString = randomStringArray.join("");

  return randomString;
};

console.log("final result : ", generate());
