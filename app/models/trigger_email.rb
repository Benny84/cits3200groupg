class TriggerEmail < ActiveRecord::Base
    belongs_to :trigger
    belongs_to :email
    attr_accessible :trigger_id, :email_id
end
