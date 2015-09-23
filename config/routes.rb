Rails.application.routes.draw do
  
  get 'searches/new'

  get 'searches/result'


  resources :reservations
  resources :flights
  resources :airplanes
  root :to => 'session#new'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
  
  get '/users/edit' => 'users#edit', :as => :edit_user
  resources :users, :except => [:edit]

end
