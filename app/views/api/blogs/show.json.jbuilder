json.extract! @blog, :id, :title, :created_at, :updated_at

json.members @blog.members do |member|
json.id member.id
json.email member.email
end

json.posts @blog.posts do |post|
json.extract! post, :id, :title, :body, :user_id, :blog_id, :file_url, :created_at, :updated_at
end
