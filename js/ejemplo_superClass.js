/*
Build a Library
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. 
They’re still using index cards to organize their content! Yikes.
But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. 
In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. 
These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating() */

// class Media{
//     constructor(title){
//         this._title=title
//         this._isCheckedOut=false
//         this._ratings=[]
//     }
//     get title(){
//         return this._title
//     }
//     get isCheckedOut(){
//         return this._isCheckedOut
//     }
//     get ratings(){
//         return this._ratings
//     }
//     set isCheckedOut(cierto){
//         this._isCheckedOut=cierto
//     }
//     getAverageRating(){
//         let suma=this._ratings.reduce((a,b)=>{return a+b})
//         let total=this._ratings.length
//         return (suma/total)
//     }
//     toggleCheckOutStatus(){
//         this._isCheckedOut=!this._isCheckedOut
//     }
//     addRating(mas){
//         this._ratings.push(mas)
//     }
// }


// class Book extends Media{
//     constructor(author,title,pages){
//         super(title)
//         this._author=author
//         this._pages=pages
//     }
//     get title(){
//         return this._title
//     }
//     get pages(){
//         return this._pages
//     }
// }

// class Movie extends Media{
//     constructor(director,title,runtime,){
//         super(title)
//         this._director=director
//         this._runtime=runtime
//     }
//     get director(){
//         return this._director
//     }
//     get runtime(){
//         return this._runtime
//     }
// }

// class CD extends Media{
//     constructor(artist, title,songs){
//         super(title)
//         this._artist=artist
//         this._songs=songs
//     }
//     get artist(){
//         return this._artist
//     }
//     get songs(){
//         return this._songs
//     }
// }

// const historyOfEverything=new Book('Bill Bryson','A Short History of Nearly Everything',544)
// historyOfEverything.toggleCheckOutStatus()
// historyOfEverything.addRating(4)
// historyOfEverything.addRating(5)
// historyOfEverything.addRating(5)
// console.log(historyOfEverything.getAverageRating())

// const speed=new Movie('Jan de Bont','speed',116)
// speed.toggleCheckOutStatus()
// speed.addRating(1)
// speed.addRating(1)
// speed.addRating(5)
// console.log(speed.getAverageRating())

//---------------------------------------------------------------------------------------------------------------------------------
/*School Catalogue
Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education.
The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary and high schools. Because these classes share properties and methods, 
each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, 
and methods:

School
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)
Middle
Does not include any additional properties or methods
High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)
If you’re looking for a challenge, create the constructor() and getters for the four classes above.*/
 class School{
    constructor(name,level,numberOfStudents){
        this._name=name
        this._level=level
        this._numberOfStudents=numberOfStudents
    }
    get name(){
        return this._name
    }
    get level(){
        return this._level
    }
    get numberOfStudents(){
        return this._numberOfStudents
    }
    //Create a setter for numberOfStudents. The method should first check if the input (newNumberOfStudents) is a number.
    //If it is a number, then set the numberOfStudents property. If not, log, 'Invalid input: numberOfStudents must be set to a Number.'
    set numberOfStudents(num){
        if(typeof(num)==='number'){
            this._numberOfStudents=num
        }else{
            console.log('Invalid input: numberOfStudents must be set to a Number')
        }
    } 
    /*create a method named quickFacts that logs the following string to the console:
    SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.*/
    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`)
    }
    /* Under .quickFacts(), create a static method named pickSubstituteTeacher. 
    This method will receive one parameter, named substituteTeachers. The substituteTeachers parameter will take an array of strings.
    Inside the method, randomly generate a whole number between 0 and one less than the length of the substituteTeachers array. 
    Use this number to access and return the substitute teacher at that randomly generated index.*/
    static pickSubstituteTeacher(substituteTeachers){
        const ram=Math.floor(Math.random()*(substituteTeachers.length))
        return substituteTeachers[ram]
    }
}
/* 
Next, we’ll build a PrimarySchool class that extends School. If you feel comfortable building the PrimarySchool class on your own, 
give it a shot. If not, use the steps below to help you along the way.
Whether you want to follow the steps or not, it’s important to note, 
the PrimarySchool class only has one additional property, pickupPolicy.

Create an empty PrimarySchool class that extends School.*/
class PrimarySchool extends School{
    constructor(name,level,numberOfStudents,pickupPolicy){
        super(name,level,numberOfStudents)
        this._pickupPolicy=pickupPolicy
    }
}

class MiddleSchool extends School{
    constructor(name,level,numberOfStudents){
        super(name,level,numberOfStudents)
    }
}

class HighSchool extends School{
    constructor(name,level,numberOfStudents,sportsTeams){
        super(name,level,numberOfStudents)
        this._sportsTeams=sportsTeams
    }
    get sportsTeams(){
        return this._sportsTeams
    }
}

/* Create a PrimarySchool instance with the following properties:
Name: 'Lorraine Hansbury'
Number of Students: 514
Pickup Policy: 'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
Save the instance to a constant variable named lorraineHansbury.
 */

const lorraineHansbury=new PrimarySchool('Lorraine Hansbury','primary',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

console.log(lorraineHansbury.quickFacts())

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

const alSmith=new HighSchool('Al E. Smith','HighSchool',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

console.log(alSmith.sportsTeams)