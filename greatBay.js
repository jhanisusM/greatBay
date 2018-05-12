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
        connection.end();
    });
});

