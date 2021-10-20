//....      Bank

//....PROBLEMS TO SLOVE

//  1.authenticate
//  2.fundtranfer()
//  3.balanceEnquiry()



class Bank {
    session = {}
    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 5000,
            transactions:
                [
                    { to: 1002, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1001, password: "userone", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },

    }



    getAccountDetails() {     //   creating mthd to get account details
        return this.accounts    //when this mthd is called full acount details are get
    }
    authenticate(accno, password) {

        //validate acc no
        if (accno in this.accounts) {

            //valid password
            let pwd = this.accounts[accno].password  //get account password

            if (pwd == password) {
                //console.log("login success");
                this.session["user"] = accno// session object created with 'user'as key. which consist of accno of loged in user 
                return 1;  // 1 for login success
            }
            else {
                //console.log("invalid password");
                return 0  // 0 for invalid password
            }
            //return pwd==password?1:0  


        }
        else {
            //console.log("invalid account number");
            return -1;  // -1 for invalid account number
        }
    }


//or another mthd for authentication

    //check accno. exist or not
    // validateAccountNumber(accno){
    //     if(accno in this.accounts){
    //         return true
    //     }
    //     else{
    //         return false
    //     }
    // }
    //or
    // validateAccountNumber(accno){
    //     return accno in this.accounts?true:false
    // }
    //or
    validateAccountNumber=(accno)=>accno in this.accounts?true:false



    //mthd for finding balance
    // balanceEnquiry(accno){
    //     return this.accounts[accno].balance
    // }
    balanceEnquiry() {
        //session{"user":1001}
        let balance = this.accounts[this.session["user"]].balance
        console.log(balance);
    }

    //fund transfer
    fundTransfer(to_accno,amount){
        let user=this.accounts[this.session["user"]]
        if(amount<user.balance){
            if(to_accno in this.accounts){
                user.balance-=amount
                this.accounts[to_accno].balance+=amount  
               this.accounts [user].push({to:to_accno,amount:amount}) //this all should be pushed in to user
            }
            else{
                console.log("invalid account number");
            }
        

        }
        else{
            console.log("failed insufficient balance");
        }
    }
}


var obj = new Bank()   // calling the mthd 
//console.log(obj.getAccountDetails());

var user = obj.authenticate(1001, "userone")      //     for authentication
console.log(user == 1 ? "login success" : user == -1 ? "invalid acc no" : "invalid password");

obj.balanceEnquiry()  //      getting balance

// balance should be shown to the loggined user.  (before balance is known authentication should be done with that acco no)
//if logg in is success copy the details of user to the object called 'session'

obj.fundTransfer(1002,1000)
