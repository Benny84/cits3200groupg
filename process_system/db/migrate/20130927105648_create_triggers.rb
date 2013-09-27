class CreateTriggers < ActiveRecord::Migration
  def change
    create_table :triggers do |t|
        t.integer :item_id
        t.integer :email_id
        t.datetime :date_trigger
    end
  end
end
