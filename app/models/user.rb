class User < ApplicationRecord
	validates :name, :email, :address, :contact, presence: true
	validates :email, :contact, uniqueness: true
end
