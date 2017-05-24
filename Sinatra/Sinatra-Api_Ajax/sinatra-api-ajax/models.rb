class User < ActiveRecord::Base

	has_many :books
	
	# validates_presence_of :password, :username
	validates :username, uniqueness: true, presence: true
	validates :password, presence: true

end

class Book < ActiveRecord::Base
	belongs_to :user
end
