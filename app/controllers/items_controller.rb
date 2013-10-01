class ItemsController < ApplicationController
  before_filter :signed_in_user

  def index
    @items = Item.all
  end
end
