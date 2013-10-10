require 'action_view'
class UserMailer < ActionMailer::Base
include ActionView::Helpers::SanitizeHelper
  default from: "from@example.com"

  def send_email()
    time = Time.new
    puts "Emails to send:"
    dueEmailReminder = Trigger.where('date_trigger <= ?', time.strftime("%Y-%m-%d 00:00:00")).find_each do |trigger| #Get date_trigger that equal to today date
        puts "#{trigger.id} #{trigger.date_trigger}"
        puts trigger.item.title
        #get message and subject
        @subject = trigger.item.title
        @message = trigger.item.body
        @stripped_message = strip_tags(trigger.item.body)
        puts trigger.emails.pluck(:email) 
        mail(to: trigger.emails.pluck(:email),
             subject: "Reminder: #{trigger.item.title}")
        puts "Reminder(s) sent!"
    end
  end
end
