Rails.application.routes.draw do
  resources :users
   post 'perform_simple_job', to: 'users#perform_simple_job', as: :simple_job

  root 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
