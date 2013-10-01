namespace :db do
  
  desc "Add items and triggers to database"
  task :adddata => :environment do
    puts "Creating item..."
    Item.create!(:title => "Ikea Food Tasting", :body => "Off to IKEA to taste delicious Swedish foods!")
    puts "Creating email swedishclubwa@gmail.com..."
    Email.create!(:email => "swedishclubwa@gmail.com")
    puts "Creating task..."
    Item.create!(:pid => 1, :title => "Transport", :body => "A bus needs to be hired from Hireabus.com", :task => true)
    puts "Attaching trigger..."
    Trigger.create!(:item_id => 2, :date_trigger => '2013-12-12 [18:00:00]')
    Trigger_Email.create!(:trigger_id => 1, :email_id => 1)
  end
end