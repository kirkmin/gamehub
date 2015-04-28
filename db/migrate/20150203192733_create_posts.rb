class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.integer :blog_id, null: false
      t.string :title, null: false
      t.string :body, null: false
      t.string :file_url

      t.timestamps null: false
    end

    add_index :posts, :blog_id
  end
end
