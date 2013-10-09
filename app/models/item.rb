class Item < ActiveRecord::Base
  include ActsAsTree
  extend ActsAsTree::Presentation

  acts_as_tree order: "title"

  attr_accessible :parent_id, :title, :body, :task, :complete

  has_many :triggers
  validates :title, :body, presence: true

  scope :top_level, where(:parent_id => nil)
  
  after_initialize :init #set defaults
  def init
    self.task = false if self.task.nil?
    self.complete = false if self.complete.nil?
  end    
end
