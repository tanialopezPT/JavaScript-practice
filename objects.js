let database = [{
username: 'tania',
password: '123',
}];

let newsfeed = [

{
username: 'tlo',
timeline: 'im here learning'
},

{
username: 'bob',
timeline: 'im learning javascript'
},

{
username: 'joe',
timeline: 'im tired of learning'
}
];

let userNamePrompt= prompt('whats your username?');
let passwordPrompt= prompt('whats your password?');



function signIn(username, password){

if (username === database[0].username && password === database[1].password){
console.log(newsFeed);
} else {
alert("sorry wrong password and username")

}

signIN(userNamePrompt, passwordPrompt);
