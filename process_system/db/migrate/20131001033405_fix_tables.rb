class FixTables < ActiveRecord::Migration
  def change
    remove_column :triggers, :email_id
    create_table :trigger_email do |t|
        t.integer :trigger_id
        t.integer :email_id
    end
  end
end
