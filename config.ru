require 'middleman-core/load_paths'
::Middleman.setup_load_paths

require 'middleman-core'
require 'middleman-core/rack'

require 'fileutils'

use Rack::Cors do
  allow do
    origins 'http://ec2-52-37-36-88.us-west-2.compute.amazonaws.com:4568'
    resource '*', :headers => :any, :methods => :get
  end
end

FileUtils.mkdir('log') unless File.exist?('log')
::Middleman::Logger.singleton("log/#{ENV['RACK_ENV']}.log")

app = ::Middleman::Application.new

run ::Middleman::Rack.new(app).to_app
