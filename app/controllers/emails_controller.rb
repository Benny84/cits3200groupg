class EmailsController < ApplicationController
  def create
    @email = Email.new(params[:email])

    if @email.save
      redirect_to new_email_path
    else
      render new_email_path
    end
  end
  
  def new
    @items = Item.order_by('title, created_at').top_level
  end
  
  def destroy
	@email = Email.find(params[:id])
	@email.destroy
	
	redirect_to new_email_path
  end
end
