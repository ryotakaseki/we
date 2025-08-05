import React from 'react';

function FruitList() {
  const fruits = [
    { id: 1, name: 'りんご' },
    { id: 2, name: 'ばなな' },
    { id: 3, name: 'みかん' },
    { id: 4, name: 'ぶどう' },
    { id: 5, name: 'もも' }
  ]
  return (
    <> {/* フラグメントを使って複数の要素をグループ化 */}
      <h3>好きなフルーツ</h3>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </>
  );
}

export default FruitList;
