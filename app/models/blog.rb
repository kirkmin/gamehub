# == Schema Information
#
# Table name: blogs
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Blog < ActiveRecord::Base
  validates :title, :user, presence: true

  belongs_to :user
  has_many :posts, dependent: :destroy
  has_many :subscriptions, dependent: :destroy
  has_many :members, through: :subscriptions, source: :user
end
