Rails.application.routes.draw do
  resources :users, only: :create
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :cars 
  resources :categories 
  resources :parts
  get '/cars/:id/categories', to: 'cars#show_car_categories'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
