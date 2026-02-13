import "./pages.css";
class Person {
  constructor(name) {
    this.name = name;
  }

  getRole() {
    return "Person";
  }
}

class Student extends Person {
  getRole() {
    return "Student";
  }
  getDescription(){
    return "Hello! My name is "+this.name;
  }
}

class Teacher extends Person {
  getRole() {
    return "Teacher";
  }
  getDescription(){
    return "Hello! My name is "+this.name;
  }
}

function PersonHierarchy() {
  const people = [
    new Student("Alice"),
    new Teacher("Dr. Smith"),
  ];

  return (
    <div className="page">
      <h1>Person Class Hierarchy</h1>

      {people.map((p, index) => (
        <div key={index} className="card">
          <h3>{p.name}</h3>
          <p>Role: {p.getRole()}</p>
          <p> Description: {p.getDescription()}</p>
        </div>
      ))}
    </div>
  );
}

export default PersonHierarchy;
