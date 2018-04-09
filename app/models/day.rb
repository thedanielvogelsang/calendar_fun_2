class Day < ApplicationRecord
  belongs_to :calendar
  has_many :events
end
