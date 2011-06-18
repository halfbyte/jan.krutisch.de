module Jekyll
    
  module Convertible
  end
  
  class Post
    def transform
      self.content.gsub!(/<!-- *more *-->/, "<!--more--><span id='more'>&nbsp;</span>")
      self.content = converter.convert(self.content)
    end

    def short_content
      pos = self.content.index(/<!-- *more *-->/)
      return self.content if pos.nil?
      self.content[0,pos]
    end
    
    def has_more?
      !!self.content.match(/<!-- *more *-->/)
    end
    
    def to_liquid
      self.data.deep_merge({
        "title"      => self.data["title"] || self.slug.split('-').select {|w| w.capitalize! || w }.join(' '),
        "url"        => self.url,
        "date"       => self.date,
        "id"         => self.id,
        "categories" => self.categories,
        "next"       => self.next,
        "previous"   => self.previous,
        "tags"       => self.tags,
        "content"    => self.content,
        "short_content" => self.short_content,
        "has_more?"  => self.has_more? }.deep_merge(self.data))
    end
    
  end
end