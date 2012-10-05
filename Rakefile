$LOAD_PATH.unshift(File.join(File.dirname(__FILE__), 'lib'))
require 'bundler/setup'
require 'jekyll'
require 'jekyll_ext'

ssh_user      = "web@vetinari.krutisch.de"   # for rsync deployment
document_root = "/srv/web/jan.krutisch.de/"    # for rsync deployment



namespace :deploy do
  desc "deploy to site"
  task :rsync => 'site:generate_once' do
    sh("rsync -avz --delete _site/ #{ssh_user}:#{document_root}")
  end
end

namespace :site do
  desc "generate site once"
  task :generate_once do
    options = { :auto => false }
    options['destination'] = ENV['JEKYLL_DEST'] if ENV['JEKYLL_DEST']

    options = Jekyll.configuration(options)
    site = Jekyll::Site.new(options)
    puts "generating site once"
    site.process
    puts "done"
  end
  desc "automatically observe files and regenerate if needed"
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
  desc "start server and observe"
  task :server => :observe do

    options = Jekyll.configuration({:auto => false})
    site = Jekyll::Site.new(options)


    source      = options['source']
    destination = options['destination']


    require 'webrick'
    include WEBrick

    FileUtils.mkdir_p(destination)

    mime_types = WEBrick::HTTPUtils::DefaultMimeTypes
    mime_types.store 'js', 'application/javascript'

    s = HTTPServer.new(
      :Port            => options['server_port'],
      :MimeTypes       => mime_types
    )
    s.mount(options['baseurl'], HTTPServlet::FileHandler, destination)
    t = Thread.new {
      s.start
    }
    
    trap("INT") { s.shutdown }
    t.join()

  end

end