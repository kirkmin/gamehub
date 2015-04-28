# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  blog_id    :integer          not null
#  title      :string           not null
#  body       :string           not null
#  file_url   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ActiveRecord::Base

  validates :title, :body, :user_id, :blog_id, presence: true

  belongs_to :user
  belongs_to :blog
  has_many :taggings, dependent: :destroy, inverse_of: :post
  has_many :tags, through: :taggings, source: :tag, inverse_of: :posts
  has_many :comments, as: :parent

  def tag_string= str
    tags_to_add = str.split(', ')
    tags = []
    tags_to_add.each do |tag_label|
      existing_tag = Tag.find_by_label(tag_label)
      tags << (existing_tag ? existing_tag : Tag.create({label: tag_label}))
    end
    self.tags = tags
  end
end
