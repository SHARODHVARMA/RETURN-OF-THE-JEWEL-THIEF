var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var thief = createSprite(20, 380, 20, 20);

var laser1 = createSprite(110, 88, 200, 5);
laser1.shapeColor = "red";

var laser2 = createSprite(209, 295, 200, 5);
laser2.shapeColor = "red";

laser1.velocityX = 0;
laser1.velocityY = 0;

laser2.velocityX = 0;
laser2.velocityY = 0;

laser1.velocityX = 6;
laser1.velocityY = 0;

laser2.velocityX = -6;
laser2.velocityY = 0;

function draw() {
  
  background("yellow");
  shape(390, 0, 380, 10, 390, 20, 400, 10);
 
  thief.velocityX = 0;
  thief.velocityY = 0;
  
createEdgeSprites();

laser1.bounceOff(leftEdge);
laser1.bounceOff(rightEdge);

laser2.bounceOff(leftEdge);
laser2.bounceOff(rightEdge);

if (keyDown("up")) {
  thief.velocityX = 0;
  thief.velocityY = -2;
}

if (keyDown("down")) {
  thief.velocityX = 0;
  thief.velocityY = 2;
}

if (keyDown("left")) {
  thief.velocityX = -2;
  thief.velocityY = 0;
}

if (keyDown("right")) {
  thief.velocityX = 2;
  thief.velocityY = 0;
}

if (laser1.isTouching(thief) || (laser2.isTouching(thief))) {
  textSize(40);
  fill("blue")
  text("Thief is caught", 70, 200);
  
 
  
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  thief.setVelocity(0,0);
  }

 drawSprites(); 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
