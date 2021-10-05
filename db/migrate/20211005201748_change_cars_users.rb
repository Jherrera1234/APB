class ChangeCarsUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :cars, :users_id
  end
end
