Rails.application.routes.draw do
  root 'calendars#show'
  get 'calendar/:id', to: "calendars#show", as: 'calendar'
  post 'events', to: 'events#create'
end
