import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-center">
      <p className="text-gray-500">© 2024 Sebastian. Todos los derechos reservados.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/sebastian-rengifo-117dev?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUITlwwL1TFOyjm%2BmMneehQ%3D%3D" target="blanck" className="text-teal-400 hover:text-teal-300">LinkedIn</a>
        <a href="https://github.com/Simonghost117" target="blanck" className="text-teal-400 hover:text-teal-300">GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;
