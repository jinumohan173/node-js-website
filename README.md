Creating a simple website with Node.js, Express and EJS view engine

for installing node js 

# Adding the NodeSource APT repository for Debian-based distributions repository AND the PGP key for verifying packages
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

# Install Node.js from the Debian-based distributions repository
$ sudo apt-get install -y nodejs

to install npm (node processs manager)

$ sudo npm install npm --global


to bulid the application you need a tool called Express to install this
sudo npm install express-generator -g  
giving sudo is a bettter option to avoid permission issues



To run our node server we will install the nodemon package globally

npm install nodemon -g

nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node, to use nodemon replace the word node on the command line when executing your script.


Open a terminal and move to your directory where you want your code to reside and type

sudo express --view=ejs website

Next step is to install all dependencies listed in mywebsite/package.json file. Move to your myapp directory and type

sudo npm install


to run our node server, type command

nodemon start

Now open your browser and tune to the following URL

http://localhost:3000

if you face a issue when running local host in port 3000, eg:-port already in use . 
you can change the prot number to another one by editing www file in bin 
to change the port listening issue in express nodemon u can
 easily change the port number in www file in bin for that 
goto ur bin directory change the permission of www file ,
 
open www file in editor change the port number in line 15 
restart the local host with new port number

Creating a simple website with Node.js, Express and EJS view engine


