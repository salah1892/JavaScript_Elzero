/*
  Destructuring
  - Destructuring Object
*/

const user = {
    theName: "Salah",
    theAge: 29,
    theTitle: "Java Senior Developer",
    theCountry: "Tunisie",
  };
  
  // console.log(user.theName);
  // console.log(user.theAge);
  // console.log(user.theTitle);
  // console.log(user.theCountry);
  
  // let theName = user.theName;
  // let theAge = user.theAge;
  // let theTitle = user.theTitle;
  // let theCountry = user.theCountry;
  
  // console.log(theName);
  // console.log(theAge);
  // console.log(theTitle);
  // console.log(theCountry);
  
  // ({ theName, theAge, theTitle, theCountry } = user);
  const { theName, theAge, theTitle,theCountry } = user;
  
  console.log(theName);
  console.log(theAge);
  console.log(theTitle);
  console.log(theCountry);