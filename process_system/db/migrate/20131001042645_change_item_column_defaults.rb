class ChangeItemColumnDefaults < ActiveRecord::Migration
  def change
    change_column_default(:items, :task, false)
    change_column_default(:items, :complete, nil)
  end
end
