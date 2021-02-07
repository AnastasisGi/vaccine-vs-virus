require 'sinatra/base'

class VaccineVsVirus < Sinatra::Base
  get '/' do
    # send_file File.join(settings.public_folder, 'otherindex.html')
    send_file 'app/views/index.html'
  end
end
