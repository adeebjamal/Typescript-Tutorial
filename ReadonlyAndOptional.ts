type USER = {
    readonly _id : string,
    name : string,
    creditCard? : string
};

let newuser: USER = {
    _id : "12345",
    name : "John Doe"
};

// newuser._id = "567890";          ---> ERROR
newuser.creditCard = "6677 8899 1122 3355";