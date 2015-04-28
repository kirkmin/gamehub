require 'test_helper'

class StaticPageControllerTest < ActionController::TestCase
  test "should get root" do
    get :root
    assert_response :success
  end

end
