class Item < ActiveRecord::Base
    attr_accessible :title, :body, :task, :complete
    has_many :children, class_name: "Item", foreign_key: "pid"
    belongs_to :parent, class_name: "Item"
    has_many :triggers
    validates :title, :body, :task, presence: true
end
