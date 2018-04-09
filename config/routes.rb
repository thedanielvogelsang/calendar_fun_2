Rails.application.routes.draw do
  get 'calendars/show'

  root 'calendars#show'
  get 'calendar/:id', to: "calendars#show"
end
