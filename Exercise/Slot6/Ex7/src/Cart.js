import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardColumns = () => {
  return (
    <div className="container my-4">
      <h4 className="fw-bold mb-3">Cards Columns</h4>
      <div className="row g-3">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card border-primary text-center border-5 bg-primary">
            <div className="mx-4 mt-4">
                <img src="image/class-b-3-15249780289671961623101.webp" className="card-img-top" alt="Car" />
            </div>
            <div className="card-body bg-primary">
              <p className="card-text text-dark">Some text inside the first card</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card border-warning text-center border-5">
            <img src="image/images.jpg" className="card-img-top" alt="Car" />
            <div className="card-body bg-warning">
              <p className="card-text text-dark">Some text inside the first card</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card border-danger text-center border-5">
            <img src="image/lineage-oregon.jpeg" className="card-img-top" alt="Car" />
            <div className="card-body bg-danger">
              <p className="card-text text-dark">Some text inside the first card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardColumns;
