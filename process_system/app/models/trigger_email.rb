class TriggerEmail < ActiveRecord::Base
    belongs_to :trigger
    belongs_to :email
end
