var mysql = require("mysql");
var inquirer = require('inquirer');
var password;

inquirer.prompt([
    {
        type: "password",
        message: "Please enter your root password",
        name: "password"
    }
]).then(function (answers) {
    password = answers.password;
    console.log(typeof password);
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        // Your username
        user: "root",
        // Your password
        password: password,
        database: "greatBay"
    });
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        postOrBidSelector();
        connection.end();
    });
});

function postOrBidSelector() {
    inquirer.prompt([
        {
            type: "list",
            name: "userOption",
            message: "Please select from the follwoing:",
            choices: ["Post Item", "Place Bid"]
        }
    ]).then(function (answers) {
        let userOption = answers.userOption;
        if (userOption == "Post Item") {
            console.log("Post item f(x)")
        }
        console.log("Place Bid f(x)");

    });
};


function bid (){
    console.log("this is f(x) bid");

};

function post () {
    console.log("this is f(x) post item")
    
};

