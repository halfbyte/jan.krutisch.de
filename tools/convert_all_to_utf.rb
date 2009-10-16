Dir["*.markdown"].each do |f|
  base = File.basename(f, ".markdown")
  `iconv -f latin1 -t UTF-8 #{f} >#{base}.textile`
  `mv #{f} ../_old_posts/`
end