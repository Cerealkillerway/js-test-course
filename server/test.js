const a = "a";
const b = "b";

b = 10;

const result = a + b; // 'ab'

const array = [1, 2, 3];

const doubleElement = (element) => {
  return element * 2;
};
const tripleElement = (element) => {
  return element * 3;
};

const doubleArrayImperative = (array) => {
  for (const element of array) {
    //......
    return element * 2;
  }
};

const doubleArrayDeclarative = (array) => {
  return array.map(doubleElement);
};

doubleArrayImperative(array);
const doubledArray = doubleArrayDeclarative(array);

// Object Oriented (JAVA, MICROSOFT .NET)
class person {
  firstName = "";
  lastName = "";

  constructor(firstName, lastName) {
    ((this.firstName = firstName), (this.lastName = lastName));
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class friend extends person {
  friendshipLevel = 0;
}

//const Romualdo = new friend('Romualdo', 'Tafano')
/*
{
  friendshipLevel,
  prototype: {
    firstName,
    lastName
  }
}
  */

// Funcional
const createPerson = (firstName, lastName, a) => {
  return {
    firstName,
    lastName,
    a,
  };
};

const person1 = createPerson("Mario", "Bros"); // {firstName: 'Mario', lastName: 'Bros'}

const createFriend = (firstName, lastName, friendshipLevel) => {
  const person = createPerson(firstName, lastName);

  return { ...person, friendshipLevel };
};

//const Romualdo = createFriend("Romualdo", "Tafano", 0);
const Romualdo = {
  firstName: "Romualdo",
  lastName: "Tafano",
  friendshipLevel: 0,
};

const getFriendFullName = (friend) => {
  return `${friend.firstName} ${friend.lastName}`;
};

getFriendFullName(Romualdo);
