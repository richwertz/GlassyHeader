var app = new PIXI.Application(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);
app.stage.interactive = true;
var posX, bounds, displacementSprite, mountains, trees, cloud1, cloud2, blur1, blur2, logo, count;
var container = new PIXI.Container();
app.stage.addChild(container);
PIXI.loader.add("./img/wertzIT_logo3_NRM.png").add("./img/wertzIT_logo3.png").add("./img/bg.jpg").add("./img/mountains.png").add("./img/trees.png").add("./img/cloud1.png").add("./img/cloud2.png").add("./img/blur1.png").add("./img/blur2.png").load(setup);

function setup() {
    posX = 0;
    count = 0;
    displacementSprite = new PIXI.Sprite(PIXI.loader.resources["./img/wertzIT_logo3_NRM.png"].texture);
    var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementSprite.anchor.set(0.5);
    displacementSprite.x = app.renderer.width / 2;
    displacementSprite.y = app.renderer.height / 2;
    app.stage.addChild(displacementSprite);
    logo = new PIXI.Sprite(PIXI.loader.resources["./img/wertzIT_logo3.png"].texture);
    logo.anchor.set(0.5);
    logo.x = app.renderer.width / 2;
    logo.y = app.renderer.height / 2;
    logo.alpha = 0.5;
    app.stage.addChild(logo);
    container.filters = [displacementFilter];
    displacementFilter.scale.x = 120;
    displacementFilter.scale.y = 120;
    bg = new PIXI.Sprite(PIXI.loader.resources["./img/bg.jpg"].texture);
    bg.width = app.renderer.width;
    bg.height = app.renderer.height;
    container.addChild(bg);
    blur1 = new PIXI.Sprite(PIXI.loader.resources["./img/blur1.png"].texture);
    blur1.anchor.set(0.5);
    blur1.scaleX = 3;
    blur1.x = app.renderer.width / 4;
    blur1.y = app.renderer.height / 2;
    container.addChild(blur1);
    blur2 = new PIXI.Sprite(PIXI.loader.resources["./img/blur2.png"].texture);
    blur2.anchor.set(0.5);
    blur2.scaleX = 3;
    blur2.x = app.renderer.width / 2 + app.renderer.width / 4;
    blur2.y = app.renderer.height / 2;
    container.addChild(blur2);
    mountains = new PIXI.Sprite(PIXI.loader.resources["./img/mountains.png"].texture);
    mountains.anchor.set(0.5);
    mountains.x = app.renderer.width / 2;
    mountains.y = app.renderer.height - (mountains.height / 2);
    container.addChild(mountains);
    cloud1 = new PIXI.Sprite(PIXI.loader.resources["./img/cloud1.png"].texture);
    cloud1.anchor.set(0.5);
    cloud1.x = app.renderer.width / 2;
    cloud1.y = cloud1.height / 2;
    cloud1.blendMode = PIXI.BLEND_MODES.OVERLAY;
    container.addChild(cloud1);
    trees = new PIXI.Sprite(PIXI.loader.resources["./img/trees.png"].texture);
    trees.anchor.set(0.5);
    trees.x = app.renderer.width / 2;
    trees.y = app.renderer.height - (trees.height / 2);
    container.addChild(trees);
    cloud2 = new PIXI.Sprite(PIXI.loader.resources["./img/cloud2.png"].texture);
    cloud2.anchor.set(0.5);
    cloud2.x = app.renderer.width / 2;
    cloud2.y = app.renderer.height - (cloud2.height / 2);
    cloud2.blendMode = PIXI.BLEND_MODES.OVERLAY;
    container.addChild(cloud2);
    app.stage.on('mousemove', onPointerMove).on('touchmove', onPointerMove);
    loop();
}

function onPointerMove(eventData) {
    posX = eventData.data.global.x;
}

function deltaX(amount) {
    var a = posX;
    var b = app.renderer.width / 2;
    var c = amount;
    return ((a - b) / c);
}

function loop() {
    requestAnimationFrame(loop);
    mountains.x = app.renderer.width / 2 - deltaX(3);
    trees.x = app.renderer.width / 2 - deltaX(1.8);
    cloud1.x = app.renderer.width / 2 - deltaX(2.2);
    cloud2.x = app.renderer.width / 2 - deltaX(1.1);
    count += 0.01;
    var count2 = count + 0.95;
    blur1.alpha = (Math.sin(count) * 0.5) + 0.8;
    blur2.alpha = (Math.sin(count2) * 0.5) + 0.8;
}