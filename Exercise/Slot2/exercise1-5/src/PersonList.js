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

function PersonList () {
    return(
        <ol>
            {
                person.map((person, k) => (
                    <ul key={k}>
                        <li>{person.name}</li>
                        <li>{person.age}</li>
                        <li>{person.occupation}</li>
                    </ul>
                )
            )
            }
        </ol>
    );
}

export default PersonList;