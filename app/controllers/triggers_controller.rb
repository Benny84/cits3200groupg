class TriggersController < ApplicationController
    def new
    end
    def create
        new_trigger = Trigger.new do |t|
            t.item_id = params[:parent_id]
            t.date_trigger = DateTime.strptime(params[:datepicker] + " 00:00:00", "%d/%m/%Y %H:%M:%S")
            t.subchildren = params[:emailchildren].nil? ? false : true
            t.save!
        end
        #attach email to trigger
        new_trigger_email = TriggerEmail.new do |t|
            t.email_id = params[:trigger_email][:email_id]
            t.trigger_id = new_trigger.id
            t.save!
        end
        redirect_to controller: "items", action: "show", id: params[:parent_id]
    end
end
