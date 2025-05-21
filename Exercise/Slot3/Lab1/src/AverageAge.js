const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
];

function averrageAge() {
    let a =0;
    let b =0;
    employees.forEach(employee => {
        if(employee.age !== undefined){
            a += employee.age;
            b++;
        }
    })

    if(b === 0) return 0;
    if(b !== 0) return a/b;
}

function DisplayAvg () {
    const results = averrageAge();
    return(
        <div className="avg">
            <p>Tuổi trung bình là {results}</p>
        </div>
    );
}

export default DisplayAvg;