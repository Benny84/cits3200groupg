class Trigger < ActiveRecord::Base
    attr_accessible :item_id, :date_trigger, :subchildren
    belongs_to :item
    has_many :trigger_emails
    has_many :emails, :through => :trigger_emails
    validates :item_id, :date_trigger, presence: true
    after_initialize :init #set defaults
    def init
        self.subchildren = false if self.subchildren.nil?
    end    

end
