class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :post_id, null: false
      t.integer :tag_id, null: false

      t.timestamps null: false
    end

    add_index :taggings, [:post_id, :tag_id], unique: true
  end
end
