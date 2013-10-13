class Trigger < ActiveRecord::Base
    attr_accessible :item_id, :date_trigger, :subchildren
    belongs_to :item
    has_many :trigger_emails, :dependent => :destroy
    has_many :emails, :through => :trigger_emails
    validates :item_id, :date_trigger, presence: true
    after_initialize :init #set defaults

    def init
        self.subchildren = false if self.subchildren.nil?
    end

    def self.send_reminders
        # Clean up old triggers
        time = Time.new
        Trigger.where('date_trigger < ?', time.strftime("%Y-%m-%d 00:00:00")).destroy_all
        puts "Sending emails..."
        dueEmailReminder = Trigger.where('date_trigger = ?', time.strftime("%Y-%m-%d 00:00:00")).find_each do |trigger| #Get date_trigger that equal to today date
          UserMailer.send_email(trigger.id).deliver
        end
    end

end
