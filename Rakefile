Dir["#{File.dirname(__FILE__)}/lib/**"].each do |dir|
  $LOAD_PATH.unshift(File.directory?(lib = "#{dir}/lib") ? lib : dir)
end
require 'jekyll'

puts $LOAD_PATH

namespace :site do
  task :generate_once do
    options = { :auto => false }
    options['destination'] = ENV['JEKYLL_DEST'] if ENV['JEKYLL_DEST']

    options = Jekyll.configuration(options)
    site = Jekyll::Site.new(options)
    puts "generating site once"
    site.process
    puts "done"
  end
  
  task :observe do

    options = Jekyll.configuration({:auto => false})
    site = Jekyll::Site.new(options)
    
    source      = options['source']
    destination = options['destination']
    
    
    def globs(source)
      Dir.chdir(source) do
        dirs = Dir['*'].select { |x| File.directory?(x) }
        dirs -= ['_site']
        dirs = dirs.map { |x| "#{x}/**/*" }
        dirs += ['*']
      end
    end
    
    require 'directory_watcher'

    puts "Auto-regenerating enabled: #{source} -> #{destination}"

    dw = DirectoryWatcher.new(source)
    dw.interval = 1
    dw.glob = globs(source)

    dw.add_observer do |*args|
      t = Time.now.strftime("%Y-%m-%d %H:%M:%S")
      puts "[#{t}] regeneration: #{args.size} files changed"
      site.process
    end

    dw.start
    
  end
  
  task :server => :observe do

    options = Jekyll.configuration({:auto => false})
    site = Jekyll::Site.new(options)
    
    
    source      = options['source']
    destination = options['destination']
    
    
    require 'webrick'
    include WEBrick

    FileUtils.mkdir_p(destination)

    s = HTTPServer.new(
      :Port            => options['server_port'],
      :DocumentRoot    => destination
    )
    t = Thread.new {
      s.start
    }

    trap("INT") { s.shutdown }
    t.join()
    
  end
  
end