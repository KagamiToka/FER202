const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
];

function FilterEmployee() {
    const filterEmployee = employees.filter(employee => employee.department === "IT");
    return(
         <ul>
            Danh sách Employee "IT"
            {filterEmployee.map((emp) =>
                <li>Name: {emp.name} - Tuổi: {emp.age}</li>
            )}
        </ul>
        
    );
}

export default FilterEmployee