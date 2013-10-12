class EmailsController < ApplicationController
  def create
    @email = Email.new(params[:email])

    if @email.save
      redirect_to new_email_path
    else
      render new_email_path
    end
  end
  
  def destroy
	@email = Email.find(params[:id])
	@email.destroy
	
	redirect_to items_path
  end
end
