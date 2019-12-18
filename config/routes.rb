Rails.application.routes.draw do
  resources :users
  root 'users#index'
  resources :record_databases
  resources :exercise_records
  resources :food_records

  get '/search_food' => 'record_databases#search_food', :as => 'search_food_record_database'
  get '/search_sport' => 'record_databases#search_sport', :as => 'search_sport_record_database'
end
