class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :location
      t.string :color
      t.string :start_time
      t.string :end_time
      t.references :day, foreign_key: true

      t.timestamps
    end
  end
end
