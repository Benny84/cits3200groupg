class EmailsController < ApplicationController
  def create
    @email = Email.new(params[:email])

    if @email.save
      redirect_to items_path
    else
      render new_email_path
    end
  end
end
