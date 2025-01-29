export default function AboutMe() {
  const skills = [
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Tailwind CSS',
  ];

  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 mb-6">
            I&apos;m a newbie programmer who&apos;s been in the IT industry for
            about a year. I love feeling my own growth, so I study every day.
            I&apos;m friendly, so feel free to talk to me.
          </p>
          <h3 className="text-xl font-semibold mb-4">My Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
