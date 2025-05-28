const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
];

function ListEmployee() {
    return(
        <div className="listEmployee">
            <ul>
                {employees.map((employee,i) => 
                <li key={i}>
                        ID: {employee.id} - Name: {employee.name} - Department: {employee.department} - Age: {employee.age}
                        {/* <p key={i}>ID: {employee.id}</p>
                        <p key={i}>Name: {employee.name}</p>
                        <p key={i}>Department: {employee.department}</p>
                        <p key={i}>Age: {employee.age}</p> */}
                </li>
                )}
            </ul>
        </div>
    );
}

export default ListEmployee;