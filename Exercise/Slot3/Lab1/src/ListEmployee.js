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
                {employees.map((employee) => 
                <li>
                        <p key={employee.id}>ID: {employee.id}</p>
                        <p key={employee.id}>Name: {employee.name}</p>
                        <p key={employee.id}>Department: {employee.department}</p>
                        <p key={employee.id}>Age: {employee.age}</p>
                </li>
                )}
            </ul>
        </div>
    );
}

export default ListEmployee;