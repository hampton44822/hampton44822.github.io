$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(20, 700, 100, 20, "blue");
    createPlatform(300, 630, 100, 20, "blue");
    createPlatform(600, 600, 100, 20, "blue");
    createPlatform(800, 600, 400, 20, "blue");
    createPlatform(1200, 450, 20, 215, "blue");
     createBadPlatform(0,735, 1400, 10, "red");
     createPlatform(800, 400, 100, 20, "blue");
     createPlatform(1000, 500, 100, 20, "blue");
     
     createPlatform(100, 400, 600, 20, "blue");
     createPlatform(100, 0, 10, 400, "blue");


    // TODO 3 - Create Collectables

createCollectable("database", 1025, 460);
createCollectable("database", 540, 360);
createCollectable("database", 120, 360);
    
    // TODO 4 - Create Cannons
    createCannon("top", 250, 1100);
    createCannon("top", 550, 1100);
    createCannon("bottom", 1000, 1100);
    createCannon("right", 400, 1200);
    createCannon("top", 800, 1100);
    


    //spawn point 
    

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
