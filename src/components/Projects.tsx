import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PC Remote over WiFi",
      description: "A secure remote control application that allows users to control their PC through a web interface using WiFi, featuring screen sharing and remote command execution.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "WebSocket", "Node.js", "Express", "Socket.io"],
      github: "https://github.com/fsebapo/pc-remote",
      live: "https://pc-remote-demo.com"
    },
    {
      title: "SecureBank Web Platform",
      description: "A secure banking platform with advanced authentication and real-time fraud detection.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "JWT", "Docker"],
      github: "https://github.com/fsebapo/securebank",
      live: "https://securebank-demo.com"
    },
    {
      title: "Vulnerability Scanner",
      description: "An automated security scanning tool for web applications with detailed reporting.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
      tags: ["Python", "Vue.js", "MongoDB", "REST API"],
      github: "https://github.com/fsebapo/vulnscan",
      live: "https://vulnscan-demo.com"
    },
    {
      title: "E-Commerce Security Suite",
      description: "A comprehensive security solution for e-commerce platforms with real-time threat detection.",
      image: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?q=80&w=1000&auto=format&fit=crop",
      tags: ["Laravel", "React", "MySQL", "Redis", "AWS"],
      github: "https://github.com/fsebapo/ecom-security",
      live: "https://ecomsec-demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-700 hover:text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;