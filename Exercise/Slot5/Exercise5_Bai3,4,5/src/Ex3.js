import React from "react";

const Ex3 = () => {
  return (
    <>
      <div className="container my-4 mx-4">

        {/* Header block */}
        <div className="p-3 mb-3" style={{backgroundColor: "#D3D3D3"}}>
          <h4 className="fw-bold mb-0">Let's test the grid!</h4>
        </div>

        {/* Nav links */}
        <nav className="mb-3 text-center">
          <a href="#" className="link-primary me-3 text-decoration-none">Active</a>
          <a href="#" className="link-primary me-3 text-decoration-none">Link</a>
          <a href="#" className="link-primary me-3 text-decoration-none">Link</a>
          <span className="text-muted">Disabled</span>
        </nav>

        {/* Grid rows */}
        <div className="border mx-auto" style={{ border: '1px solid', maxWidth: '600px' }}>
            <div className="row g-1 text-none">
                <div className="col-4 border border-dark" style={{ backgroundColor: "#bcbcbc", padding: "8px" }}>First col</div>
                <div className="col-8 border border-dark" style={{ backgroundColor: "#bcbcbc", padding: "8px" }}>Second col</div>
            </div>

            <div className="row g-1 text-none">
                <div className="col-4 border border-dark" style={{ backgroundColor: "#bcbcbc", padding: "8px" }}>col</div>
                <div className="col-4 border border-dark" style={{ backgroundColor: "#bcbcbc", padding: "8px" }}>col</div>
                <div className="col-4 border border-dark" style={{ backgroundColor: "#bcbcbc", padding: "8px" }}>col</div>
            </div>

            <div className="row g-1 text-none">
                <div className="col-3 border border-dark" style={{ backgroundColor: "#bcbcbc", padding: "8px" }}>col</div>
                <div className="col-3 border border-dark" style={{ backgroundColor: "#bcbcbc", padding: "8px" }}>col</div>
                <div className="col-3 border border-dark" style={{ backgroundColor: "#bcbcbc", padding: "8px" }}>col</div>
                <div className="col-3 border border-dark" style={{ backgroundColor: "#bcbcbc", padding: "8px" }}>col</div>
            </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary bg-opacity-25 text-center py-3 mt-4">
        <h5 className="fw-bold mb-0">Created by ABC!</h5>
      </footer>
    </>
  );
};

export default Ex3;
