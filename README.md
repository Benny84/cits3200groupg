#CITS3200 Group G Professional Computing Project  

##Deploying the application locally (without email functionality):    

1. Clone the git repository.  
`git clone https://github.com/Benny84/cits3200groupg.git`

2. Install Ruby on Rails

3. Run bundler to install gems.  
`bundle install`

4. Edit `lib/tasks/sample_data.rake` in your local repository to change the default password.

5. Set up the database migrations.  
`rake db:migrate`

6. Populate the database with the user data.  
`rake db:addata`

7. Run the Ruby on Rails server.  
`rails s`

##Deploying the application on heroku:  
  
1. Clone the git repository.  
`git clone https://github.com/Benny84/cits3200groupg.git`

2. Sign up for an account on [heroku.](http://www.heroku.com)

3. Download the [heroku toolbelt](https://toolbelt.heroku.com/) for your system and follow the instructions.

4. Edit `lib/tasks/sample_data.rake` in your local repository to change the default password.

5. Push the local repository onto the heroku remote.  
`git push heroku master`

6. Set up the database migrations.  
`heroku run rake db:migrate`

7. Populate the database with the user data.  
`heroku run rake db:adddata`