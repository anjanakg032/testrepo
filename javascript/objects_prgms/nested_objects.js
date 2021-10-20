var accounts={
    1001:{acno:1001,password:"userone",balance:5000},
    1002:{acno:1002,password:"usertwo",balance:7000},
    1003:{acno:1003,password:"userthree",balance:8000},
    1004:{acno:1001,password:"userone",balance:9000},
    
}

//.... balance of 1001
console.log(accounts[1001].balance);
//or
console.log(accounts[1001]["balance"]);


//.....authentication using accno and password  (check pass or fail)

function login(acno,password){
    if(acno in accounts){
        let pwd=accounts[acno].password
        if(pwd==password){
            return "login success"
        }
        else{
            return "invalid password"
        }

    }
    else{
        console.log("invalid account number");
    }
}
console.log(login(1002,"usertwo"));
