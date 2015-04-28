class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.integer :user_id, null: false
      t.string :title, null: false

      t.timestamps null: false
    end

    add_index :blogs, :user_id
  end
end
