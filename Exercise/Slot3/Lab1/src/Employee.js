const employee = { name: "John Doe", age: 30, department: "IT"};

function Employee() {
    return(
        <div className="employee">
            <h1>Full name: {employee.name}</h1>
            <p>Age : {employee.age}
            -  Department : {employee.department}
            </p>
        </div>
    );
}

export default Employee