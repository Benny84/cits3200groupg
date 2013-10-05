class ChangePidToParentId < ActiveRecord::Migration
  def change
    rename_column :items, :pid, :parent_id
  end
end
