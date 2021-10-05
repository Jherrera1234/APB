class ChangeColumnToCars < ActiveRecord::Migration[6.1]
  def change
    rename_column :cars, :users_id, :user_id
  end
end
