import React from 'react';
import { useAuth } from '../context/AuthContext';

const Portfolio = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800">My Portfolio</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={logout}
                className="ml-4 px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Your Portfolio</h2>
            
            {/* Profile Section */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium text-gray-700">Personal Information</h4>
                  <p className="text-gray-600">Name: John Doe</p>
                  <p className="text-gray-600">Email: john@example.com</p>
                  <p className="text-gray-600">Location: New York, USA</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium text-gray-700">Professional Summary</h4>
                  <p className="text-gray-600">
                    Experienced web developer with a passion for creating responsive and user-friendly applications.
                  </p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['React', 'JavaScript', 'HTML/CSS', 'Python', 'Django', 'Node.js', 'Git', 'SQL'].map((skill) => (
                  <div key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-700">Project 1</h4>
                  <p className="text-gray-600">A brief description of project 1 and its key features.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-700">Project 2</h4>
                  <p className="text-gray-600">A brief description of project 2 and its key features.</p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-600">Feel free to reach out for collaborations or opportunities!</p>
                <div className="mt-2">
                  <a href="#" className="text-blue-600 hover:text-blue-800 mr-4">LinkedIn</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 mr-4">GitHub</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">Email</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio; 