





###Sharing Code: 

As the project progresses, you may want to share your contributions and learnings. Here are some tools that you can use.  

Sharing Code Snippets: 

https://carbon.now.sh


Sharing Experiments and Soliciting feedback: 

https://glitch.com/


### Database Management 

If models change or if you need to remove users quickly, a lot can be done from the terminal using Mongo Shell. 

Install mongosh: ``` homebrew mongosh ```
Connect to the database: ```mongosh mongodb+srv://<username>:<password>@cluster0.2knf4.mongodb.net/bigwinfitness  ```

Actions to take in mongosh: 

Drop unused fields: if you push any models to mongsb with misnamed fields you may get errors. So you will need to run...

```db.users.getIndexes()```

then ...

```db.users.dropIndex("userName_1")```

As an example. I was having issues 

