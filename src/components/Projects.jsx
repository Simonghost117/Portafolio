import React from "react";

function Projects() {
  const projects = [
    {
      title: "Gestor de Notas",
      description: "Aplicación para gestionar notas con autenticación y CRUD completo.",
      linkRepo: "https://github.com/tuusuario/gestor-de-notas", // Reemplaza con tu enlace
      linkDemo: "https://tu-pagina-web.com", // Reemplaza con tu enlace
      image: "https://via.placeholder.com/300x200.png?text=Gestor+de+Notas", // Reemplaza con la imagen
    },
    {
      title: "Proyecto 2",
      description: "Descripción breve del Proyecto 2. Implementa características XYZ.",
      linkRepo: "https://github.com/tuusuario/proyecto-2", // Reemplaza con tu enlace
      linkDemo: "https://proyecto-2-demo.com", // Reemplaza con tu enlace
      image: "https://via.placeholder.com/300x200.png?text=Proyecto+2", // Reemplaza con la imagen
    },
    {
      title: "Proyecto 3",
      description: "Descripción breve del Proyecto 3. Se enfoca en funcionalidades ABC.",
      linkRepo: "https://github.com/tuusuario/proyecto-3", // Reemplaza con tu enlace
      linkDemo: "https://proyecto-3-demo.com", // Reemplaza con tu enlace
      image: "https://via.placeholder.com/300x200.png?text=Proyecto+3", // Reemplaza con la imagen
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-6">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-teal-400">{project.title}</h3>
              <p className="text-gray-300 mt-4">{project.description}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={project.linkRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Ver Repositorio
                </a>
                <a
                  href={project.linkDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Ver Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
