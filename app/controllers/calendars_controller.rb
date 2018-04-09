class CalendarsController < ApplicationController
  def show
    if params[:id]
      @calendar = Calendar.find(params[:id])
    else
      @calendar = Calendar.find_by(month: 'October')
    end
  end
end
