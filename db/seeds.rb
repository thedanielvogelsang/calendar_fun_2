oct = Calendar.create(month: "October", year: 2017)
nov = Calendar.create(month: "November", year: 2017)

Day.create(month: "October", day: 'Sun', date: 1)
Day.create(month: "October", day: 'Mon', date: 2)
Day.create(month: "October", day: 'Tue', date: 3)
Day.create(month: "October", day: 'Wed', date: 4)
Day.create(month: "October", day: 'Thu', date: 5)
Day.create(month: "October", day: 'Fri', date: 6)
Day.create(month: "October", day: 'Sat', date: 7)

Day.create(month: "November", day: 'Mon')
Day.all.map do |day|
  if day.month == "October"
    oct.days << day
  elsif day.month == "November"
    nov.days << day
  end
end
