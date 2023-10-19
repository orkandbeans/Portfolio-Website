import React from 'react';

export default function Home() {
  return (
    <div>
      <header className="bg-blue-500 p-4">
        <nav className="container mx-auto">
          <ul className="flex justify-end space-x-4">
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="about" className="py-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p>This is the about section of your portfolio.</p>
        </div>
      </section>
      <section id="portfolio" className="py-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded shadow-md p-4">
              <img src="/minecraft_dirt.png" alt="dirt PNG" className="w-full h-auto" />
              <h2 className="text-xl font-semibold">Project 1</h2>
              <p>Description of project 1.</p>
            </div>
            <div className="bg-white rounded shadow-md p-4">
              <img src="project2.jpg" alt="Project 2" className="w-full h-auto" />
              <h2 className="text-xl font-semibold">Project 2</h2>
              <p>Description of project 2.</p>
            </div>
            {/* Add more portfolio items as needed */}
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 bg-gray-200">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Contact Me</h1>
          <p>You can reach me at example@email.com</p>
        </div>
      </section>
      <footer className="py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Your Name</p>
        </div>
      </footer>
    </div>
  );
}
