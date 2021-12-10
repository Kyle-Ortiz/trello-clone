Rails.application.routes.draw do
  resources :projects
  resources :cards
  resources :users
  resources :sessions, only: [:index,:create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: "sessions#create"
  get "/me", to: "sessions#index"
  delete "/logout", to: "sessions#destroy"
  create "/signup" to: "users#create"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
