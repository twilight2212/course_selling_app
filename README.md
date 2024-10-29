Database structure
![alt text](image.png)

### Key Takeaways from This Project

When starting to design a big application, start by building the complex part i.e. backend in this case then design the frontend

1. **Initializing a Project**:  
   Begin by creating a `package.json` file, which stores project dependencies and scripts. You can quickly generate it using the command:  
   `npm init -y`

2. **Installing Dependencies**:  
   Install essential libraries like Express, JSON Web Token (JWT), and Mongoose with the command:  
   `npm install express jsonwebtoken mongoose`

3. **Installing Nodemon for Development**:  
   Nodemon automatically restarts the server when changes are made, so you don't need to restart it manually. Install it using:  
   `npm install nodemon`

4. **Using Scripts in `package.json`**:  
   In the `scripts` section of `package.json`, you can define custom commands to run easily using `npm run`. For example, to start the project, set up a "start" script:  
   ```json
   "scripts": {
      "start": "node index.js"
   }
   ```  
   Then, run it using:  
   `npm run start`

5. **Ignoring `node_modules` in Git**:  
   It's not good practice to commit the `node_modules` folder to GitHub. Create a `.gitignore` file and add `node_modules` to it to avoid committing unnecessary files.

6. **Storing Secret Keys Securely (Option 1)**:  
   Use a separate configuration file, like `config.js`, to store sensitive information such as passwords or keys (e.g., JWT secrets). You can export and import these variables as needed.

7. **Best Practice for Sensitive Credentials (Option 2)**:  
   Never commit sensitive information like passwords to GitHub. Use a `.env` file to store credentials, such as your MongoDB URL and JWT passwords. Install the `dotenv` module to load environment variables from `.env` into `process.env` by configuring it like this:  
   ```javascript
   require('dotenv').config();
   ```  
   Access environment variables in your project using `process.env` (e.g., `process.env.MONGO_URL`). Remember to add the `.env` file to `.gitignore` to avoid accidentally committing it.

8. **Creating an `.env.example` File**:  
   Since the `.env` file shouldn't be committed, it's helpful to provide an `.env.example` file that lists the required environment variables without sensitive information. This allows others to know what credentials are needed to run the project.