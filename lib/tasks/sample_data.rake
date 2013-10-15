namespace :db do
  
  desc "Add user and welcome message item to database..."
  task :adddata => :environment do
    puts "Creating swedishclubwa user..."
	# Here is where you will set your password:                        V                                       V
    User.create!(:email => "swedishclubwa@gmail.com", :password => "cits3200", :password_confirmation => "cits3200") 
    
    puts "Creating welcome item..."
    Item.create!(:title => "Welcome to the Club Process System", :body => "The Swedish Club of Western Australia would like to have a system that enables committee members to enter tasks and information about how to plan events, together with dates when those tasks should be e-mailed out automatically by the system. Ideally, members should be able to check off tasks as they're done to enable the team to keep track of what still needs to be done.</p><h4>Client</h4><p>Peter Thönell<br/>Telephone: 0405 658 750<br/>Email: thonellp@iinet.net.au<br/>Location: Leederville (Usually meet at UWA)")
  end
end
