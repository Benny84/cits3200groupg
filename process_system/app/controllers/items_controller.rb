class ItemsController < ApplicationController
  before_filter :signed_in_user
end