class AddFoodType < ActiveRecord::Migration[6.0]
  def change
    add_column :food_databases , :food_type , :string
  end
end
