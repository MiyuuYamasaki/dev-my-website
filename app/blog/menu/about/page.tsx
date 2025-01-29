import Image from 'next/image';
import Header from '@/components/blog/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-secondary-light">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-primary-dark">
            About Me
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image
              src="/icon.png?height=300&width=300"
              alt="Profile Picture"
              width={300}
              height={300}
              className="rounded-full w-64 h-64 object-cover"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 text-primary-dark">
                John Doe
              </h2>
              <p className="text-primary mb-4">
                Hello! I'm John, a passionate web developer and tech enthusiast.
                I created this blog to share my journey in the world of
                technology, focusing on web development, software engineering,
                and the latest tech trends.
              </p>
              <p className="text-primary mb-4">
                With over 5 years of experience in the field, I've worked on
                various projects ranging from small business websites to
                large-scale enterprise applications. My expertise includes
                React, Next.js, Node.js, and cloud technologies.
              </p>
              <p className="text-primary">
                When I'm not coding, you can find me hiking in the mountains,
                reading sci-fi novels, or experimenting with new recipes in the
                kitchen. Feel free to reach out if you want to collaborate or
                just chat about tech!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
