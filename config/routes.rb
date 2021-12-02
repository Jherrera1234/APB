Rails.application.routes.draw do
  resources :users, only: :create
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :cars 
  resources :categories 
  resources :parts
 
  get '/cars/:car_id/categories/:category_id', to: 'parts#car_categories'
  post '/parts/cars/:car_id/categories/:id', to: 'parts#add_part_car_categories'
  get '/users/:user_id/cars', to: 'cars#show_user_cars'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
