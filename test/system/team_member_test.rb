
require 'application_system_test_case'

class TeamMemberTest < ApplicationSystemTestCase
  test "should show a list of team members" do
    visit root_url
    assert_content(page, "Tom")
  end
end
