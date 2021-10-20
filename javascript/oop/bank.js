class Blank{
    createAccount(p_name,acno,ac_type,min_bal){  // local variables
        //initialising instant variables
        this.p_name=p_name;
        this.acno=acno;
        this.ac_type=ac_type;
        this.balance=min_bal;
    }
    deposit(amount){
        this.balance+=amount
        console.log(`your acnt no ${this.acno} has been credied with amnt ${amount} aval balnce ${this.balance}`);
    
    }
    withdrawal(amount){
        if(this.balance>amount){
            this.balance-=amount       
             console.log(`your acnt no ${this.acno} has been debited with amnt ${amount} aval balnce ${this.balance}`);


        }
        else{
            console.log("transaction failed insufficient balance");
        }

    }
}

var obj1=new Blank();
obj1.createAccount("ram",1000,"savings",3000)
obj1.withdrawal(10000)
obj1.deposit(3000)