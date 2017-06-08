class CreateDestinations < ActiveRecord::Migration[5.1]
  def change
    create_table :destinations do |t|
      t.string :name
      t.string :description
      t.string :img_url

      t.timestamps
    end
  end
end
