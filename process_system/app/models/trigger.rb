class Trigger < ActiveRecord::Base
    belongs_to :item
    has_many :emails through :trigger_email
    validates :date, presence: true
end
