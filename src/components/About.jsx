import React from "react";

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-6">Sobre mí</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
        Soy un desarrollador backend apasionado por crear soluciones eficientes, escalables y seguras. Con experiencia en Node.js, Express, MongoDB, y bases de datos SQL/NoSQL, diseño sistemas robustos que optimizan el flujo de datos y garantizan la calidad.

Me destaco por mis habilidades en resolución de problemas, trabajo en equipo, y comunicación efectiva, lo que me permite colaborar en equipos multidisciplinarios y cumplir objetivos de manera organizada. Además, tengo conocimientos en ciberseguridad y prácticas de hacking ético, enfocándome en proteger aplicaciones contra vulnerabilidades como las del OWASP Top Ten.

Comprometido con el aprendizaje continuo, exploro nuevas tecnologías como Tailwind CSS y herramientas de automatización para mejorar mis habilidades. Mi objetivo es construir sistemas innovadores y contribuir al éxito de cada proyecto.   </p>
      </div>
    </section>
  );
}

export default About;