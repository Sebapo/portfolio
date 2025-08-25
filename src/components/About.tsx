import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000&auto=format&fit=crop"
              alt="Coding Environment"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              As a Full Stack Developer and Ethical Hacker, I bring a unique perspective to web development that combines 
              creative problem-solving with security-first thinking. With extensive experience in both front-end and 
              back-end technologies, I specialize in building robust, secure applications that meet modern web standards.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My expertise in ethical hacking allows me to approach development with a comprehensive understanding of 
              potential vulnerabilities, ensuring that security is built into every layer of the applications I create.
            </p>
            <p className="text-lg text-gray-700">
              I'm passionate about staying current with the latest technologies and security practices, constantly 
              expanding my skillset to deliver cutting-edge solutions that are both functional and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;