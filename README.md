So exciting, bwf is getting a website! Here are some notes for the project. I will be updating the docs as I go for my own reference. Next week if there is time I will polish them for public use. 


### User Management 

How to create a new admin user: 

```curl -X POST http://localhost:3001/auth/sign-up \
-H "Content-Type: application/json" \
-d '{"email": "Admin@awesomeadmin.com","username": "AdminYou", "password": "rickybobby", "isAdmin": true}'```

Because there are only two admins and they are both tech savy, we will be managing the creation of Admin accounts using Curl commands. 

Todo: Next iteration of this feature will be to create a json file that contains all admin users. That file will be ignored by git. The json file will be read by a script that creates all admin users using the auth/sign-up endpoint. I need to look into how we can manage secrets like the list of admin users and other data. 

