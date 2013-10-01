class RenameTriggerEmailTable < ActiveRecord::Migration
  def change
    rename_table :trigger_email, :trigger_emails
  end
end
