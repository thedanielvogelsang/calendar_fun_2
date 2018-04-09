class ChangeDayDateToInteger < ActiveRecord::Migration[5.1]
  def change
    change_column :days, :date, :integer
  end
end
