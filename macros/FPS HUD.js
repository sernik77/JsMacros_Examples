Hud.clearDraw2Ds();

const overlay = Hud.createDraw2D();
let text = null;

// set the "on init" function, when the window is resized (and when the overlay is registered) the elements are cleared and this method is called.
// this allows for dynamically scaled elements without having to destroy and recreate overlays on window resize
overlay.setOnInit(JavaWrapper.methodToJava((ovly) => {
    // add a "text" element and store it to a variable
    text = ovly.addText(`FPS: ${Client.getFPS().split('fps')[0]}`,  0, ovly.getHeight()/2, 0xFFFFFF, true);
}));

// update the text every tick
JsMacros.on("Tick", JavaWrapper.methodToJava(() => {
    if (text) text.setText(`FPS: ${Client.getFPS().split('fps')[0]}`);
}));

// registers the overlay, this calls onInit
Hud.registerDraw2D(overlay);