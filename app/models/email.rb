class Email < ActiveRecord::Base
    attr_accessible :email
    
    has_many :trigger_emails, :dependent => :destroy
    has_many :triggers, :through => :trigger_emails
    validates :email, presence: true
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
end
