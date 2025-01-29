const accountId = 1234
let accountEmail = "jatin@google.com"
var accountPassword = "1234"
accountCity = "jaipur"
let accountState

console.log(accountId)


//accountId = 5678 cannot be possible because const cannot be changed once declared//

accountEmail = "jatin12@google.com"
accountPassword = "5678"
accountCity = "kangra"

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])