class Blog < ActiveRecord::Base
	belongs_to :user
	has_many :comments, dependent: :destroy
end

class User < ActiveRecord::Base
	has_many :blogs, dependent: :destroy
	has_many :comments

	validates :username, presence: true, uniqueness: true
	validates :password, presence: true
end

class Comment < ActiveRecord::Base
	belongs_to :user
	belongs_to :blog
end
