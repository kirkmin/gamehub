class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.integer :user_id, null: false
      t.string :session_token, null: false

      t.timestamps null: false
    end

    add_index :sessions, [:user_id, :session_token], unique: true
  end
end
