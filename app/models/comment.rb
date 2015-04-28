class Comment < ActiveRecord::Base
  validates :user, :parent, presence: true

  belongs_to :user
  belongs_to :parent, polymorphic: true
  has_many :comments, as: :parent
end
