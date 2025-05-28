import React from "react";

const Ex4 = () => {
  return (
    <>
      {/* Header with logo and navbar */}
      <header className="bg-warning p-3 text-center">
        <img
          src="https://ibrand.vn/wp-content/uploads/2024/07/logo-fpt.jpg"
          alt="FPT University Logo"
          style={{ maxWidth: "300px", height: "auto" }}
          className="mb-2"
        />
        <h2 className="text-white">FPT UNIVERSITY</h2>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="container my-5 text-center">
        <section id="about" className="mb-5">
          <h3>About</h3>
          <p>This is the about section of the website.</p>
        </section>

        <section id="contact">
          <h3>Contact</h3>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-warning bg-opacity-75 text-center py-3 mt-5">
        <small className="text-white">© 2023 Website. All rights reserved.</small>
      </footer>
    </>
  );
};

export default Ex4;
