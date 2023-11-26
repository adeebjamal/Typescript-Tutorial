const signup = (email: string, password: string, isPaid: boolean = false) : void => {
    console.log("Signup successful. ");
    console.log(email.toLowerCase(), password, `Premium user: ${isPaid}`);
}

const add2 = (num: number) : string => {
    return (num + 2).toString();
}

const sum: string = add2(3);
console.log(sum);

signup("johndoe@hotmail.com", "password");

const heros: Array<string> = ["Thor", "Iron Man", "Captain America"];