This is a base nodejs project template, which anyone can use it as it has been prepared keeping some of the important code principles and project management recommendations. Feel free to change anything.

`src` -> Inside the src folder all actual source code regarding the project will reside, this will not include any kind of tests. (You might create separete test folder)

Lets take a look inside `src` folder

- `config` -> In this folder anything and everything regarding any configuration or setup of a library or module will be done. For example setting up `dotenv` so that we can use the enviornment variable anywhere in the cleaner fashion, this is done in the `server-config.js` file.One more example is setting up logging library that can help u prepare meaningful logs, so configuration for this libray should also be done here.

- `routes` -> In the route folder, we register a route and the corrosponding middlewares and controllers to it.

- `middlewares` -> They are just going to intercept the incoming requests where we can write our validators, authintecators etc.

- `controllers` -> They are kind of last middlewares as post them you call your business layerto execute the business logic. In controller we just receive the incoming requests and data and then pass it to the business layer, once business layer returns an output, we structure the API response in contrllers and send the output.

- `repositories` -> This folder contains all the logic using which we interact the DB by writing queries, all the reaw querries or ORM queries go here.

- `Services` -> Contains the business logic and interacts with the repositories for data from the data base.

- `Utils` -> Contains helper methods, error classes etc.


### Setup the project
- Download this template from github and open it in your favourite text editor.
- Go inside the folder and execute the following command :
```
npm install
```

- In the root directory crete a `.env` file and add the following variables.
    ```
        PORT = <port number of your choice>

    ```
     ex :

    ```
        PORT = 4000

    ```
- inside the `src/config` folder create a file named as `config.json` and write the following code in it :
 ```
 {
  "development": {
    "username": "root",
    "password": "mypassword",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
 ``` 
 OR
- You can go inside `src` folder and execute followingcommand :
```npx sequelize init```
That will create migrations and seeders folder along with confif.js inside congif file in`src`.


- If u are setting up your development enviornment, then write your username and password of your DB and in dialect mension whatever DB u r using EG. mysql, mariadb etc.

- If you are setting up test or production enviornment, make sure you also replace the host with the hoasted db url.

- To run the server execute :
    ```
    npm run dev
    ```
