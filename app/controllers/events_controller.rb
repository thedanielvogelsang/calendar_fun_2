class EventsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    d = params[:day]
    day = Day.find_by(month: d[0..2], date: d.scan(/\d/).join(''))
    event = Event.new(safe_params)
    event.day_id = day.id
    if event.save
      render json: {event: event, status: 204}
    else
      render json: {status: 404}
    end
  end

  private
    def safe_params
      params.require(:event_details).permit(:title, :location, :start_time, :end_time, :color)
    end
end
