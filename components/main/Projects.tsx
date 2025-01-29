import ProjectCard from './ProjectCard';

const projects = [
  {
    id: '1',
    title: 'E-commerce Site',
    description:
      'A full-stack e-commerce application built with Next.js and Stripe.',
  },
  {
    id: '2',
    title: 'Task Manager',
    description:
      'A React-based task management app with drag-and-drop functionality.',
  },
  {
    id: '3',
    title: 'Weather App',
    description: 'A weather forecast application using OpenWeatherMap API.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
