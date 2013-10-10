# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
ProcessSystem::Application.initialize!

ActionMailer::Base.smtp_settings = {  
  :address              => "smtp.gmail.com",  
  :port                 => 587,  
  :domain               => "gmail.com",  
  :user_name            => "swedishclubwa@gmail.com",  
  :password             => "cits3200",  
  :authentication       => "plain",
  :enable_starttls_auto => true
}
