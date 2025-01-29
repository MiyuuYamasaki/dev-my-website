'use client';

import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    // カスタムカーソル用の丸を作成
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // マウスの位置を追従させる
    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    // クリーンアップ
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null; // カーソル自体は HTML に追加されるので、何も表示しない
};

export default CustomCursor;
