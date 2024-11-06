function BankAccount(accountNumber,initBalance){
    let _balance = initBalance //private
    let _isAmountValid = function(amount){
        return typeof amount === 'number' && amount>0
    }
    this.deposit = function(amount){
        if (_isAmountValid(amount)){
            _balance =amount
            console.log("Deposit success, new balance is " + _balance);

        }else{
            console.log('Invalid amout');
        }
    }
    this.getBalance = function(){
        return _balance
    }
}