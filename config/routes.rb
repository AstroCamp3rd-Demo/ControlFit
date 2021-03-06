Rails.application.routes.draw do
  devise_for :members, controllers: {registrations: 'members/registrations' ,omniauth_callbacks: 'members/omniauth_callbacks' }
  resource :member, only: :show do
    member do
      get :following, :followers
      get :foodday,:foodmonth,:foodweek  # food record by day/week/month
      get :sportday,:sportmonth,:sportweek  # sport record by day/week/month
    end
  end

  resources :relationships, only:[:create, :destroy]

  resources :blogs  do 
    member do 
       patch :tdee   #/blog/:id/tdee
       get   :secret #/blog/:id/secret
    end
  end
  

  resources :records
  root 'records#index'
  resources :users
  resources :record_databases
  resources :exercise_records
  resources :food_records
  resources :demands


  post '/search_sport/favorite' => 'exercise_records#favorite', :as => 'favorite_exercise_record' 
  post '/search_food/favorite' => 'food_records#favorite', :as => 'favorite_food_record' 
  get '/search_sport/statistics' => 'exercise_records#statistics', :as => 'statistics_exercise_record'
  get '/search_food/statistics' => 'food_records#statistics', :as => 'statistics_food_record'
  get '/search_food' => 'record_databases#search_food', :as => 'search_food_record_database'
  get '/search_sport' => 'record_databases#search_sport', :as => 'search_sport_record_database'
  get '/search_food/random' => 'food_records#random', :as => 'random_food_record'
  get '/search_food/list' => 'food_records#list', :as => 'list_food_record'
end

