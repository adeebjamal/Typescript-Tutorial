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

export {};