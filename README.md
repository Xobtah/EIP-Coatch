# EIP-Coatch
SportsFun EIP's coatch application

## How to use
First, you must install the latest NodeJS version (we're using ES6).
For instance, with a Linux OS using apt-get :
```markdown
sudo apt-get install nodejs
```
This command will also install the npm program, necessary to install the app's dependencies.

Once it's done, clone the repo and go into the folder :
```markdown
git clone https://github.com/Xobtah/EIP-Coatch.git
cd EIP-Coatch/
```
Then install the app's dependencies :
```markdown
npm install
```
Or, to the extent that we are overskilled developers :
```markdown
npm i
```
In order to use the automatic and nearly magic npm command that starts the server and updates it when a file changes, you must install the nodemon tool :
```markdown
sudo npm i -g nodemon
```
You're now ready to launch the app :
```markdown
npm start
```
You can now go to your favourite memory killer browser and do to the address "localhost:8080".
In order to contribute to the project, you'll have to write all your code into the client/ folder.