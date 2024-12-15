import React from "react";

function Contact() {
  // Función para copiar el correo al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText("sebastianrme87@gmail.com");
    alert("¡Correo copiado al portapapeles!");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-t from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-6">Contacto</h2>

        {/* Formulario */}
        <form
          action={`mailto:sebastianrme87@gmail.com`}
          method="POST"
          encType="text/plain"
          className="max-w-lg mx-auto space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="w-full p-4 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full p-4 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            className="w-full p-4 rounded-lg bg-gray-700 text-gray-300 focus:ring-2 focus:ring-teal-400"
          ></textarea>

          {/* Botones juntos */}
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="p-4 bg-teal-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-teal-300 shadow-lg"
            >
             Enviar 
            </button>
            <button
              type="button"
              onClick={copyToClipboard}
              className="p-4 bg-gray-700 text-teal-400 rounded-lg font-bold text-lg hover:bg-gray-600 shadow-lg"
            >
              Copiar 
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
