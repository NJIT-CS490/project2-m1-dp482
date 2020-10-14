1) cd ~/environment && git clone https://github.com/Sresht/lect11-starter/ && cd lect11-starter

2) Install the following 
- npm install
- sudo pip install flask-socketio
- sudo pip install eventlet
- npm install -g webpack
- npm install --save-dev webpack
- npm install socket.io-client --save

3) Set up PSQL
Make a sql.env file in your directory with (SQL_USER, SQL_PASSWORD). Don't forget to add sql.env file to .gitignore

4) Write a Code that keeps track of Users (Connect/Disconnect)
5) Write a Code for Chatbot
6) Write a Code for message/username input and button
7) Add CSS file to Design you work
8) Link the CSS file into the HTML file
9) Add the following files to .gitignore
- node_modules/
- package-lock.json
- sql.env
- __pycache__

10) To RUN 
- In your terminal
- sudo service postgresql start
- npm run watch
- In new terminal, python app.py
- Preview Running Application

11) Upload the files to github Repo
- Git init
- Git status
- Git pull
- Git push

12) Link to Heroku
- create Heroku
- git push Heroku main


Technical issues
1.	The first issue that I faced was user counts. In beginning, the app was adding users even If I was refreshing the same page and the second issue was the number of users was not decreasing after disconnecting the app. I was able to solve this issue by using online sources. 
2.	The second issue that I faced was the Npm run watch. Every time I tried running the npm run watch I ended up getting an error because I didn’t have the node_modules file. I was able to solve this issue by installing Npm stuff using lect11-starter. 
3.	The last and crucial issue that I had was pushing the application to Heroku. The files were successfully uploaded to Heroku, but it always threw two errors between the process. I was able to solve this issue by following the lect11 YouTube video for more than five times. Second, I had to create three different GitHub repo because I didn’t want to mess up the main repo.



The issue that still exists:
1.	I am still having an issue with the Chatbot. For to use the Chatbot you would have to use the fixed username which was hardcoded in the python file. The best way to get the solution is to contact the following: group members/TA/Professor. 
 
