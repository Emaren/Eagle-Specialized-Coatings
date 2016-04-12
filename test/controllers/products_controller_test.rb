require 'test_helper'

class ProductsControllerTest < ActionController::TestCase
  test "should get supertherm" do
    get :supertherm
    assert_response :success
  end

  test "should get rustgrip" do
    get :rustgrip
    assert_response :success
  end

  test "should get hotpipe" do
    get :hotpipe
    assert_response :success
  end

end
