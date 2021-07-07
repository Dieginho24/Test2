const Test = artifacts.require('./Test.sol');
let instance, instance2;
let accounts;

contract('Test', async (accs)  => {
    accounts = accs;
    instance = await Test.deployed();    
});

it( 'Test Buy', async() => {
    let instance = await Test.deployed();

    user1 = accounts[0];
    user2 = accounts[1];

    console.log("TEST STARTED");

    balance = await web3.eth.getBalance(instance.address);
    balance_user1 = await web3.eth.getBalance(user1);
    balance_user2 = await web3.eth.getBalance(user2);
    
    await instance.fundContract({from: user2, value:50});
    await instance.withdraw({from: user1});

    new_balance = await web3.eth.getBalance(instance.address);
    new_balance_user1 = await web3.eth.getBalance(user1);
    new_balance_user2 = await web3.eth.getBalance(user2);

    console.log("balance = ", balance,", new balance = ", new_balance);
    console.log("balance user 1 = ", balance_user1,", new balance user 1 = ", new_balance_user1);
    console.log("balance user 2 = ", balance_user2,", new balance user 2 = ", new_balance_user2);

}).timeout(10000);