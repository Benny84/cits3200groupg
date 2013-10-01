class Trigger < ActiveRecord::Base
    attr_accessible :item_id, :date_trigger
    belongs_to :item
    has_many :emails, through: :trigger_email
    validates :date_trigger, presence: true
end