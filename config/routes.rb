Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'pages/contents'
  get 'pages/cv'
  get 'pages/contact'

  resources :contacts, only: [:new, :create]
end
