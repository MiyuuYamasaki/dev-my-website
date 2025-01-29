'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 動的なルーティング用に name を key とする
  const menus = [
    { name: 'Admin', route: 'admin' },
    { name: 'About', route: 'about' },
    { name: 'Contact', route: 'contact' },
    { name: 'Home', route: 'home' },
    { name: 'Close', route: 'close' },
  ];

  const handleClick = (route: string) => {
    if (route === 'close') {
      setIsOpen(!isOpen);
    } else if (route === 'home') {
      router.push('/blog?showWelcome=false');
    } else {
      router.push(`/blog/menu/${route}`);
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-700 bg-opacity-95 z-40 pointer-events-none"
          onClick={toggleMenu}
        ></div>
      )}
      <button
        className="p-1 z-20 relative"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="space-y-2">
          <div
            className={`w-6 h-0.5 bg-primary-dark transition-all duration-300 ${
              isOpen
                ? 'rotate-45 translate-y-2.5 bg-primary-dark'
                : 'text-blue-100'
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-primary-dark transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-primary-dark transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          ></div>
        </div>
      </button>

      {/* メニューコンテンツ */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* フェイク×ボタン作成 */}
        <button
          className={`absolute text-3xl top-0 right-0 px-11 py-11 text-slate-700 text-opacity-0`}
          onClick={toggleMenu}
        >
          ✕✕✕
        </button>

        <div className="p-8 space-y-6 flex flex-col items-center">
          {menus.map((menu, index) => {
            if (menu.route === 'home') {
              // "Back"の場合、パスに「admin」が含まれている場合のみ表示
              if (!pathname.endsWith('/blog')) {
                return (
                  <button
                    key={index}
                    onClick={() => handleClick(menu.route)}
                    className="animoBorderLeftRight text-blue-100 px-4 py-1 text-2xl hover:text-blue-200 font-bold"
                  >
                    {menu.name}
                  </button>
                );
              }
              // "Back"でない場合は表示しない
              return null;
            }

            // "Back"以外の場合はパスに関係なくメニューを表示
            if (!pathname.endsWith(menu.route)) {
              return (
                <button
                  key={index}
                  onClick={() => handleClick(menu.route)}
                  className="animoBorderLeftRight text-blue-100 px-4 py-1 text-2xl hover:text-blue-200 font-bold"
                >
                  {menu.name}
                </button>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
