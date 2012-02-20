(function() {
  // requestanimationframe polyfill
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = 
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };

  CanvasTurmites = (function() {

    var getCanvas = function() {
      var canvasNode = document.createElement('canvas');
      canvasNode.style.position = 'fixed';
      canvasNode.style.width = '100%';
      canvasNode.style.height = '100%';
      canvasNode.style.zIndex = "-1"
      canvasNode.style.top = "0";
      canvasNode.style.left = "0";
      canvasNode.style.background = "transparent";
      document.getElementsByTagName('body')[0].appendChild(canvasNode);
      var width = canvasNode.offsetWidth;
      var height = canvasNode.offsetHeight;
      canvasNode.width = 320;
      canvasNode.height = 200;
      var c = canvasNode.getContext('2d');
      c.fillStyle = "rgba(150,150,150,0.2)";
      return c;
    }

    function CanvasTurmites() {
      this.canvas = getCanvas();
      this.dir = 0;
      this.x = 160;
      this.y = 100;
      this.pixelArray = new Uint8Array(320/8 * 200);
    };
    
    CanvasTurmites.prototype.pixelIsSet = function(x,y) {
      return !!(this.pixelArray[(40 * y) + Math.floor(x / 8)] & (1 << (x % 8)));
    };

    CanvasTurmites.prototype.setPixel = function(x,y) {
      this.pixelArray[(40 * y) + Math.floor(x / 8)] |= (1 << (x % 8));
      this.canvas.fillRect(x,y,1,1);
    }
    CanvasTurmites.prototype.clearPixel = function(x,y) {
      this.pixelArray[(40 * y) + Math.floor(x / 8)] &= (~(1 << (x % 8)));
      this.canvas.clearRect(x,y,1,1);
    }

    CanvasTurmites.prototype.advance = function() {
      switch(this.dir) {
        case 0: this.y--; break;
        case 1: this.x++; break;
        case 2: this.y++; break;
        case 3: this.x--; break;
      }
      this.wrap();
    };

    CanvasTurmites.prototype.wrap = function() {
      if (this.x < 0) x=319
      this.x = this.x % 320
      if (this.y < 0) this.y=199
      this.y = this.y % 200
    };
    CanvasTurmites.prototype.setDir = function(d) {
      this.dir += d
      if (this.dir < 0) this.dir = 3;
      this.dir = this.dir % 4;
    };

    CanvasTurmites.prototype.turmiteStep = function() {
      if (this.pixelIsSet(this.x, this.y)) {
        this.clearPixel(this.x, this.y);
        this.setDir(1);
      } else {
        this.setPixel(this.x, this.y);
        this.setDir(-1);
      }
      this.advance();    
    };

    return CanvasTurmites;


  })();

  function isCanvasSupported(){
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  }

  function areTypedArraysSupported() {
    return !!window.Uint8Array
  }

  window.onload = function() {
    if (!isCanvasSupported() || !areTypedArraysSupported()) return;
    var turmites = new CanvasTurmites();
    console.log(turmites);
    var step = function() {
      turmites.turmiteStep();
      requestAnimationFrame(step);
    };
    step();
  };


})();