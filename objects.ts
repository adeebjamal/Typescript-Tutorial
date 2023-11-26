const login = (loggedInUser: {name: string, email: string, isActive: boolean}) : void => {
    console.log(loggedInUser.name);
    console.log(loggedInUser.email);
    console.log(loggedInUser.isActive);
};

const user : {name: string, email: string, isActive: boolean} = {
    name : "John Doe",
    email : "johndoe@hotmail.com",
    isActive : true
};

login(user);

// TYPE ALIASING
type User = {
    email: string,
    password: string,
    dob: Date
};

const signup = (newUser: User) : User => {
    console.log("Signup successful.");
    console.log(newUser.email, newUser.password, newUser.dob);
    return newUser;
}

const newUser: User = signup({email: "johndoe@hotmail.com", password: "strong password", dob: new Date(1234567890 * 1000)});
console.log(newUser);

export {};