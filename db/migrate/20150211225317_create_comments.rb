class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :parent_id, null: false
      t.string :parent_type, null: false
      t.string :body, null: false

      t.timestamps null: false
    end

    add_index :comments, :parent_id
  end
end
