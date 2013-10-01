class Item < ActiveRecord::Base
    attr_accessible :pid, :title, :body, :task, :complete
    has_many :children, class_name: "Item", foreign_key: "pid"
    belongs_to :parent, class_name: "Item"
    has_many :triggers
    validates :title, :body, presence: true
    
    after_initialize :init #set defaults
    def init
        self.task = false if self.task.nil?
        self.complete = false if self.task
    end    
end
