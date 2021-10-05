class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.string :img_url
      t.string :year
      t.references :users, null: false, foreign_key: true

      t.timestamps
    end
  end
end
