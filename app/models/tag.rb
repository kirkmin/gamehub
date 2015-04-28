# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  label      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ActiveRecord::Base
  validates :label, presence: true

  has_many :taggings
  has_many :posts, through: :taggings, source: :post, inverse_of: :tags
end
