namespace :db do
  
  desc "Add swedishclubwa user to database"
  task :populate => :environment do
    puts "Creating swedishclubwa user..."
    User.create!(:email => "swedishclubwa@gmail.com", :password => "cits3200", :password_confirmation => "cits3200")
  end
end
