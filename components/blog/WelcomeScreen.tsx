import React from 'react';
import '@/styles/vlog-hero.scss';

const WelcomeScreen = ({ onGetStarted }: { onGetStarted: () => void }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleGetStarted = () => {
    setIsVisible(false);
    setTimeout(onGetStarted, 500); // アニメーション後にonGetStartedを実行
  };

  return (
    <section className={`welcome-screen ${isVisible ? '' : 'disappear'}`}>
      <div className="page">
        <div className="content-container">
          <p>As much as you like of what you like.</p>
          <h2>My BLOG</h2>
          <a
            href="#_"
            onClick={handleGetStarted}
            className="mt-14 relative inline-flex items-center px-8 py-4 sm:px-12 sm:py-6 overflow-hidden text-lg font-medium text-[#7ceaa4] border-2 border-[#7ceaa4] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-[#7ceaa4] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Get started</span>
          </a>
        </div>
      </div>

      <div className="bubleDiv">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
    </section>
  );
};

export default WelcomeScreen;
