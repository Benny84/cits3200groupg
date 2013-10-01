class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
        t.integer :pid
        t.string :title
        t.text :body
        t.boolean :task
        t.boolean :complete
        t.timestamps
    end
  end
end
