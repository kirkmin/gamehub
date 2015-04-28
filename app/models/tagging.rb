# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  post_id    :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ActiveRecord::Base
  validates :post, :tag_id, presence: true
  belongs_to :post, inverse_of: :taggings
  belongs_to :tag
end
