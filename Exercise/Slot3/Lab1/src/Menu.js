const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
];

function Menu () {
    return(
        <div className="menu">
            <select>
                {employees.map((employee) => 
                <option>{employee.name}</option>
                )}
            </select>
        </div>
    );
}

export default Menu;