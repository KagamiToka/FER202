const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
];

function SortEmployee () {
    employees.sort((a,b) => {
        if(a.department < b.department) return -1;
        if(a.department > b.department) return 1;
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    }
    );
    return(
        <ul>
            {employees.map((emp, i) => 
            <li key={i}>{emp.name} - {emp.department} - {emp.age}</li>
            )}
        </ul>
    );
}

export default SortEmployee;