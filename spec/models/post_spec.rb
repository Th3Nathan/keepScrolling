# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  title              :string
#  content            :string
#  body               :text
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  summary            :text
#  source             :text
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'rails_helper'

RSpec.describe Post, type: :model do
  subject(:post) { FactoryGirl.build(:post)}

  describe 'validations' do
    it { should validate_presence_of :author_id}
    it { should belong_to :author}
  end
end
