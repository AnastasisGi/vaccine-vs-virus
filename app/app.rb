require 'sinatra/base'

class VaccineVsVirus < Sinatra::Base
  get '/' do
    send_file 'app/views/index.html'
  end

  # This route exists to test successful deployment to Heroku via Github Actions
  get '/health' do
    "ok"
  end
end
