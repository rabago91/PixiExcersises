window.onload = function() {
    let app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
    document.body.appendChild(app.view);

    app.renderer.backgroundColor = 0x061639
    app.renderer.autoResize = true

    var newStyle = document.createElement("style");
    var style = "* {padding: 0; margin: 0}";
    newStyle.appendChild(document.createTextNode(style));
    document.head.appendChild(newStyle);

    window.addEventListener("resize", function(event){ 
        app.renderer.resize(window.innerWidth, window.innerHeight);
    });
}