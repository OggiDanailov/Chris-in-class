Deploying a Rails App to Heroku

In your Gemfile: 
	Uncomment the rack-cors gem.
	Move gem 'sqlite3' to within the group :development, :test block
	Paste this at the bottom of the file: 
	
group :production do
  gem 'pg'
end
	
Run bundle install --without production
Open config/initializers/cors.rb
Uncomment the file from the line that begins with Rails.application.config…
Within the ‘allow do’ block, change origins to '*'
Add and commit your changes. 

Go to your Heroku dashboard and create a new app. 
Follow the instructions for "Deploy using Heroku Git." Since you already have a repository, you will just need to run: 
 
heroku git:remote -a <YOUR_APP_NAME>
git push heroku master

Once you have successfully pushed, run these commands: 

heroku pg:reset
	then follow the instructions - type the name of your app and press enter.
heroku run rails db:migrate

Open rails console using heroku run rails c
Try to create some records.

Navigate to a page that returns json and see if it works!