// CODE here for your Lambda Classes
class Person {
    constructor(props) {
      this.name = props.name;
      this.age = props.age;
      this.location = props.location;
    }

    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location} `);
    }
  }

  class Instructor extends Person {
    constructor(attrs) {
      super(attrs);
      this.specialty = attrs.specialty;
      this.favLanguage = attrs.favLanguage;
      this.catchPhrase = attrs.catchPhrase;
    }

    demo(subject) {
      console.log(`Today we're learning about ${subject}.`);
    }

    grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}!`);
    }
  }

  class Student extends Person {
    constructor(unqAttrs) {
      super(unqAttrs);
      this.previousBackground = unqAttrs.previousBackground;
      this.className = unqAttrs.className;
      this.favSubjects = unqAttrs.favSubjects;
    }

    listsSubjects() {
         this.favSubjects.map(student  => {
            console.log(`${this.favSubjects}`);
         })
    }

    PRAssignment(subject) {
      console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
      console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
  }

  class ProjectManagers extends Instructor {
    constructor(pmProps) {
      super(pmProps);
      this.gradClassName = pmProps.gradClassName;
      this.favInstructor = pmProps.favInstructor;
    }
    
    standUp(channel) {
      console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(name, student, subject) {
      console.log(`${name} debugs ${student}'s code on ${subject}'`);
    }
  }

// *** PERSON OBJECTS ***

const Daniel = new Person({
  name: 'Daniel',
  age: 30,
  location: 'Ogden, Utah'
})

// console.log(Daniel);
// Daniel.speak();

const Jerry = new Person({
  name: 'Jerry',
  age: 35,
  location: 'Milwaukee, Wisconsin'
})

// console.log(Jerry);
// Jerry.speak();

// *** INSTRUCTOR OBJECTS ***

const Melissa = new Instructor({
  name: 'Melissa',
  age: 28,
  location: 'Rochester, New York',
  specialty: 'Front End',
  favLanguage: 'CSS with LESS',
  catchPhrase: "I'm not anti-social; I'm just not user friendly."
})

// console.log(Melissa);
// Melissa.speak();
// Melissa.demo(`nested styles`);
// Melissa.grade(Daniel, `nested styles`);

const Daenerys = new Instructor ({
    name: 'Daenerys',
    age: 32,
    location: 'Somewhere far across the Narrow Sea',
    specialty: 'Back End/DB Admin',
    favLanguage: 'HTML' ,
})

// console.log(Daenerys);
// Daenerys.speak();
// Daenerys.demo('Hypertext markup language');
// Daenerys.grade(Jerry, 'linking URL\'s to NAV elements');

// *** STUDENT OBJECTS ***

const Manny = new Student({
name: 'Manny',
age: 21,
location: 'Miami, Florida',
previousBackground: "Automotive Technician",
className: 'WEBPT8',
favSubjects: ['User Interface', ' LESS ', ' Javascript']
})

// console.log(Manny);
// Manny.speak();
// Manny.listsSubjects();
// Manny.PRAssignment('Javascript');
// Manny.sprintChallenge('Javascipt fundamentals IV');


const Cheryl = new Student({
    name: 'Cheryl',
    age: 40,
    location: 'Houtson, Texas',
    previousBackground: 'Hospitality Management',
    className: 'WEBPT8',
    favSubjects: ['Flexbox  CSS Styling ',' Javascript functions']
    })

// console.log(Cheryl);
// Cheryl.speak();
// Cheryl.listsSubjects();
// Cheryl.PRAssignment('User Interface III');
// Cheryl.sprintChallenge('User Inteface III');


// *** PM OBJECTS ***

const Derrick = new ProjectManagers({
    name: 'Derrick',
    age: 25,
    location: 'Chicago, Illinois',
    specialty: 'Javascript Class Constructors',
    favLanguage: 'React.js' ,
    gradClassName: 'WEBPT8',
    favInstructor: 'Melissa'
})

// console.log(Derrick);
// Derrick.speak();
// Derrick.standUp('WEBPT8_Derrick');
// Derrick.debugsCode('Derrick',' Manny', 'Javascript fundamentals IV');

const Danielle = new ProjectManagers({
    name: 'Danielle',
    age: 35,
    location: 'Tempe, Arizona',
    specialty: 'Gitflow',
    favLanguage: 'CSS' ,
    gradClassName: 'WEB 21',
    favInstructor: 'Daenerys'
})

console.log(Danielle);
Danielle.speak();
Danielle.standUp('WEB21_Danielle');
Derrick.debugsCode('Danielle',' Cheryl', 'User Interface III');
