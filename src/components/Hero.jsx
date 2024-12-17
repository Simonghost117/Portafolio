// components/Hero.jsx
import React from "react";

function Hero() {
  return (
    <section id="hero" className="h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-gray-800 text-gray-300 rounded-lg shadow-xl p-8 max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            src="src/images/image.png" // Ruta de la imagen
            alt="Avatar"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>

        {/* Columna Derecha: Texto, Tecnologías y Botones */}
        <div className="md:w-2/3 md:pl-8">
          {/* Texto principal */}
          <h1 className="text-3xl font-bold text-teal-400 mb-2">Hola, soy Sebastian</h1>
          <p className="text-lg mb-6">
            Desarrollador Backend | Entusiasta de la Ciberseguridad
          </p>

          {/* Lista de Tecnologías */}
          <h2 className="text-lg font-semibold text-teal-400 mb-4">Tecnologías y Habilidades:</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            <li className="flex items-center">
              <span className="text-teal-400 mr-2">🔹</span> JavaScript
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-2">🔹</span> Node.js
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-2">🔹</span> MongoDB
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-2">🔹</span> SQL
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-2">🔹</span> Express.js
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-2">🔹</span> React.js
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-2">🔹</span> Tailwind CSS
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-2">🔹</span> Git
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-2">🔹</span> Ethical Hacking Basics
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-2">🔹</span> Ciberseguridad: OWASP
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-2">🔹</span> Análisis de Vulnerabilidades
            </li>
            <li className="flex items-center">
              <span className="text-teal-400 mr-2">🔹</span> Pentesting Básico
            </li>
          </ul>

          {/* Botones */}
          <div className="flex gap-4 mt-6">
            <a
              href="public\docs\Sebastian Rengifo Medina.pdf" // Ruta al archivo PDF del CV
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-teal-400 text-gray-900 rounded-lg font-bold hover:bg-teal-300 shadow-lg transition-transform transform hover:scale-105"
            >
              Ver CV
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-teal-400 text-gray-900 rounded-lg font-bold hover:bg-teal-300 shadow-lg transition-transform transform hover:scale-105"
            >
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
