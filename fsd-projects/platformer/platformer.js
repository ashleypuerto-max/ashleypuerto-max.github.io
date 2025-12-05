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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200,700,200,20,"red")
createPlatform(500,600,200,20,"lime")
createPlatform(800,500,200,20,"orange")
createPlatform(1100,400,200,20,"hotpink")
createPlatform(800,300,200,20,"purple")

    // TODO 3 - Create Collectables
createCollectable("diamond", 300, 170, 0.3, 0);
createCollectable("kennedi", 900, 250, 0.3, 0);
createCollectable("grace", 900, 450, 0.3, 0);

    
    // TODO 4 - Create Cannons
createCannon("right", 300, 900);
createCannon("top", 800, 900);
createCannon("bottom", 1000, 900);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
