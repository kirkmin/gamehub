# == Schema Information
#
# Table name: subscriptions
#
#  id         :integer          not null, primary key
#  blog_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subscription < ActiveRecord::Base
  belongs_to :user
  belongs_to :blog
end
