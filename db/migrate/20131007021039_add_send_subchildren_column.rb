class AddSendSubchildrenColumn < ActiveRecord::Migration
  def change
    add_column :triggers, :subchildren, :boolean, default: false
  end
end
