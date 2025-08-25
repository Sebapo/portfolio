import React from 'react';
import { Code, Database, Shield, Server, Lock } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8 text-blue-500" />,
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-green-500" />,
      skills: ["Node.js", "Python", "PHP", "Express", "Laravel"]
    },
    {
      title: "Database Management",
      icon: <Database className="w-8 h-8 text-purple-500" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      title: "Security & Penetration Testing",
      icon: <Shield className="w-8 h-8 text-red-500" />,
      skills: ["Burp Suite", "Metasploit", "Wireshark", "Nmap", "OWASP Tools"]
    },
    {
      title: "Security Practices",
      icon: <Lock className="w-8 h-8 text-yellow-500" />,
      skills: ["OAuth 2.0", "JWT", "SSL/TLS", "WAF Configuration", "Security Auditing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;