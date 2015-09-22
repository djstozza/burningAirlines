class SearchesController < ApplicationController
  def new
  end

  def result
    @flights = Flight.where("origin ILIKE ? AND destination ILIKE ?", "%#{ params[:origin] }%", "%#{ params[:destination] }%")
  end 


end
