'use client';

// components/WelcomeScreen.tsx
import { useEffect, useState } from 'react';

const WelcomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // 2秒後にオープニング画面を非表示に
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div className="welcome-screen">
        <div className="welcome-message">
          <h1>This is sample</h1>
        </div>
      </div>
    )
  );
};

export default WelcomeScreen;
