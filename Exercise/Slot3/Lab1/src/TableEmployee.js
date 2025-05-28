const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
];

function TableEmployee() {
    return(
        <table border={"1"}>
            <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Age</th>
            </tr>
            {employees.map((employees,i) => 
            <tr>
                
                <td>{i + 1}</td>
                <td>{employees.id != null ? employees.id : "null"}</td>
                <td>{employees.name}</td>
                <td>{employees.department}</td>
                <td>{employees.age}</td>  
            </tr>
            )}
        </table>
    );
}

export default TableEmployee;