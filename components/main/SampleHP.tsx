'use client';

import { useRouter } from 'next/navigation';

export default function SampleWebsites() {
  const router = useRouter();

  // 動的なルーティング用に name を key とする
  const websites = [
    { name: 'Hotle', route: 'hotel' },
    { name: 'Blog', route: 'blog' },
    { name: 'E-commerce', route: 'ecommerce' },
    // { name: 'Blog', route: 'blog' },
  ];

  // ボタンクリックでページ遷移
  const handleEditClick = (route: string) => {
    router.push(`/${route}`);
  };

  const navigateToBlog = () => {
    router.push('/blog?showWelcome=true');
  };

  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/sample-image.jpg')" }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* コンテンツ */}
      <div className="relative container mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Sample Websites</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-200 mb-6">
            Below are links to example website pages within this project. Feel
            free to explore and review their content!
          </p>
          <h3 className="text-xl font-semibold mb-4">Examples:</h3>
          <div className="flex flex-wrap gap-2">
            {websites.map((website, index) => (
              <button
                key={index}
                onClick={() =>
                  website.name === 'Blog'
                    ? navigateToBlog()
                    : handleEditClick(website.route)
                }
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm shadow hover:bg-blue-200 cursor-pointer transition"
              >
                {website.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
