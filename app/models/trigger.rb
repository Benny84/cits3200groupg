class Trigger < ActiveRecord::Base
    attr_accessible :item_id, :date_trigger
    belongs_to :item
    has_many :trigger_emails
    has_many :emails, :through => :trigger_emails
    validates :date_trigger, presence: true
end
