import React from 'react';

function GreetingMessage() {
  const isLoggedIn = true; // ログイン状態を示す変数

  return (
    <> {/* フラグメントを使って複数の要素をグループ化 */}
      {isLoggedIn ? (
        <h2>ログイン中</h2>
      ) : (
        <h2>ログインが必要です</h2>
      )}
    </>
  );
}

export default GreetingMessage;
