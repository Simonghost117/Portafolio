

// components/Hero.jsx
import React from "react";

function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-hero-pattern bg-cover bg-center">
        <img
            src="src\images\image.png" // Ruta del logo con fondo transparente
            alt="Logo"
            className="h-200 w-120 object-contain" // Ajusta el tamaño del logo si es necesario
          />
      <h1 className="text-6xl font-extrabold text-teal-400 drop-shadow-lg">Hola, soy Sebastian</h1>
      <p className="text-2xl mt-4 text-gray-300">Desarrollador Backend | Entusiasta de la Ciberseguridad</p>
      <div className="space-x-5">
      <a href="#projects" className="mt-8 inline-block px-8 py-4 bg-teal-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-teal-300 shadow-lg">
        Ver Cv
      </a>
      <a href="#projects" className="mt-8 inline-block px-8 py-4 bg-teal-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-teal-300 shadow-lg">
        Ver Proyectos
      </a>
      </div>
    </section>
  );
}

export default Hero;
