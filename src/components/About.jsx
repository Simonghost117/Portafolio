import React from "react";

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-6">Sobre mí</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Soy un desarrollador backend apasionado por crear soluciones eficientes y seguras.
          Con experiencia en Node.js, Express, y bases de datos SQL/NoSQL, siempre estoy aprendiendo y explorando nuevas tecnologías.
        </p>
      </div>
    </section>
  );
}

export default About;