

function Okinawa(canvasId, gameClassName) 
{
  // Global variable
  engine = new Engine();

  // Game initialization
  addEvent('load', window, function() {
    // parameters: 
    //   1) canvas DOM element id
    //   2) game class name to be instatiated
    engine.initialize(canvasId, gameClassName);
  });  
}