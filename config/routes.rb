Rails.application.routes.draw do

  root to: "static_page#root"

  resources :users
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :blogs do
      resources :posts, only: [:index]
    end
    resources :posts, except: [:index, :edit, :new]
    resources :tags, except: [:edit, :new]
  end
end
