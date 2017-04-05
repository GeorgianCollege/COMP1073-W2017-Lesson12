// IIFE - Immediately Invoked Function Expression
(function () {
    // Function Level Variables
    var canvas;
    var stage;
    var helloLabel;
    var goodByeLabel;
    var clickMeButton;
    /**
     * This method initializes the createjs Stage object and
     * starts the Game Loop
     *
     * @method Start
     * @returns void
     */
    function Start() {
        // gets a reference ("hook") into the canvas element
        canvas = document.getElementById("canvas");
        // creates a new stage container - parent container for our app
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // set framerate to 60 FPS
        createjs.Ticker.on("tick", Update); // call the Update method every frame
        Main(); // call the main function
    }
    /**
     * the main app ("Game") loop - gets called every frame (approx every 16 ms)
     *
     * @method Update
     * @returns void
     */
    function Update(event) {
        helloLabel.rotation -= 5; // rotate counter clockwise every frame
        goodByeLabel.rotation += 5;
        stage.update(); // redraw the stage
    }
    /**
     * This method is where all the fun happens - we add child objects to the stage here
     *
     * @method Main
     * @returns void
     */
    function Main() {
        console.log("App Started!!");
        // all objects added to the stage appear in "layer order"
        // add a helloLabel to the stage
        helloLabel = new objects.Label("Hello, World", "20px", "Consolas", "#000000", 125, 125, true);
        stage.addChild(helloLabel);
        // add a goodbyeLabel to the stage
        goodByeLabel = new objects.Label("Good Bye!", "24px", "Arial", "#FF0000", 125, 125, true);
        stage.addChild(goodByeLabel);
        // add a clickMeButton to the stage
        clickMeButton = new createjs.Bitmap("../../Assets/images/clickMeButton.png");
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        clickMeButton.x = 125;
        clickMeButton.y = 200;
        stage.addChild(clickMeButton);
        clickMeButton.on("click", function () {
            helloLabel.text = "Hi Ya!";
            goodByeLabel.text = "See Ya!";
        });
    }
    window.onload = Start;
})();
//# sourceMappingURL=app.js.map