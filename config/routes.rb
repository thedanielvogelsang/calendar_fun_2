Rails.application.routes.draw do
  root 'calendars#show'
  get 'calendar/:id', to: "calendars#show"
  post 'events', to: 'events#create'
end
