import React from "react";

const students = [
  {
    id: "DE180527",
    name: "Nguyễn Văn Nam",
    city: "QuangNam",
    image: "image/Nam.png",
  },
  {
    id: "DE180549",
    name: "Nguyễn Song Gia Huy",
    city: "QuangNam",
    image: "image/Screenshot 2025-05-28 164523.png",
  },
  {
    id: "DE180591",
    name: "Lê Phước Phú Lân",
    city: "Hue",
    image: "image/Screenshot 2025-05-28 164549.png",
  },
  {
    id: "DE180597",
    name: "Nguyễn Văn Hoàng Long",
    city: "DaNang",
    image: "image/Screenshot 2025-05-28 164556.png",
  },
];

const StudentCard = ({ student }) => {
  const [attendance, setAttendance] = React.useState("Present");

  return (
    <div className="card mb-4" style={{ width: "18rem" }}>
      <img
        src={student.image}
        className="card-img-top"
        alt={student.name}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h6 className="card-title">{student.name}</h6>
        <p className="card-text">{student.id}</p>

        <div className="mb-2">
          <label className="me-3">
            <input
              type="radio"
              name={`attendance-${student.id}`}
              value="Absent"
              checked={attendance === "Absent"}
              onChange={() => setAttendance("Absent")}
            />{" "}
            Absent
          </label>

          <label>
            <input
              type="radio"
              name={`attendance-${student.id}`}
              value="Present"
              checked={attendance === "Present"}
              onChange={() => setAttendance("Present")}
            />{" "}
            Present
          </label>
        </div>

        <p>{student.city}</p>

        <button className="btn btn-warning btn-sm">Submit</button>
      </div>
    </div>
  );
};

const Ex5 = () => {
  return (
    <div>
      {/* Header image and nav can be separate components */}
      <div className="bg-warning p-3 text-center">
        <h3>Students Detail</h3>
      </div>

      <div className="container my-4">
        <div className="row justify-content-center">
          {students.map((student) => (
            <div key={student.id} className="col-md-3">
              <StudentCard student={student} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-warning text-center py-3">
        <p className="mb-0">&copy; Copyright 2023</p>
      </footer>
    </div>
  );
};

export default Ex5;
