class Person {
    name;
    age;
    occupation;
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    getAge() {
        return this.age
    }
    setAge(age) {
        this.age = age;
    }
    getName() {
        return this.name;;
    }
    setName(name) {
        this.name = name;
    }
    getOccupation() {
        return this.occupation;
    }
    setOccupation(occupation) {
        this.occupation = occupation;
    }
}

const person = [
    new Person("Alice", 30, "Police"),
    new Person("Bob", 25, "Law"),
    new Person("Charlie", 20, "Superman")
];


function tablePerson () {
    return(
        <table border={"1"}>
            <tr>
                <th>Stt</th>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
            </tr>
            {person.map((person, i) => (
                <tr>
                    <td>{i + 1}</td>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.occupation}</td>
                </tr>
             )
        )}
        </table>
    );
}

export default tablePerson;
