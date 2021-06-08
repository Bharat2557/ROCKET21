var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dcafcaec-a282-41d1-a699-ee0026209f2e","7e15364c-68cd-4c6f-a625-87ffdc116627","5a28d91c-62cf-4849-b83b-c5e2f7e960cf","4155df88-0ae0-4613-8297-bad25803e6cd","73ae3f5b-a351-4a60-a0ae-400cd7d525a5","fcbdfb56-3e1b-451b-a38e-20e5401ecd44"],"propsByKey":{"dcafcaec-a282-41d1-a699-ee0026209f2e":{"name":"space","sourceUrl":"assets/v3/animations/vQHxorLjtJstlvlVdPe7TZftyfvd81M7Q5272UUTRLo/dcafcaec-a282-41d1-a699-ee0026209f2e.png","frameSize":{"x":251,"y":201},"frameCount":1,"looping":true,"frameDelay":4,"version":"WQNdaQQpmtD6HKDSAyTE.oOy8rsCh4A7","loadedFromSource":true,"saved":true,"sourceSize":{"x":251,"y":201},"rootRelativePath":"assets/v3/animations/vQHxorLjtJstlvlVdPe7TZftyfvd81M7Q5272UUTRLo/dcafcaec-a282-41d1-a699-ee0026209f2e.png"},"7e15364c-68cd-4c6f-a625-87ffdc116627":{"name":"rocket","sourceUrl":"assets/v3/animations/vQHxorLjtJstlvlVdPe7TZftyfvd81M7Q5272UUTRLo/7e15364c-68cd-4c6f-a625-87ffdc116627.png","frameSize":{"x":2048,"y":2048},"frameCount":1,"looping":true,"frameDelay":4,"version":"KJUEZgh8njDEnIg3FMSLsOqcjSF7v.a0","loadedFromSource":true,"saved":true,"sourceSize":{"x":2048,"y":2048},"rootRelativePath":"assets/v3/animations/vQHxorLjtJstlvlVdPe7TZftyfvd81M7Q5272UUTRLo/7e15364c-68cd-4c6f-a625-87ffdc116627.png"},"5a28d91c-62cf-4849-b83b-c5e2f7e960cf":{"name":"asteroid","sourceUrl":"assets/v3/animations/XLzzSKOEnmZkUUlfNiB51TGPLyw2GAVkinl6gzFO9F8/5a28d91c-62cf-4849-b83b-c5e2f7e960cf.png","frameSize":{"x":257,"y":196},"frameCount":1,"looping":true,"frameDelay":4,"version":"NQ0028HEsRlPXe.cR0qah6hVzT.7nLSq","loadedFromSource":true,"saved":true,"sourceSize":{"x":257,"y":196},"rootRelativePath":"assets/v3/animations/XLzzSKOEnmZkUUlfNiB51TGPLyw2GAVkinl6gzFO9F8/5a28d91c-62cf-4849-b83b-c5e2f7e960cf.png"},"4155df88-0ae0-4613-8297-bad25803e6cd":{"name":"blast","sourceUrl":"assets/api/v1/animation-library/gamelab/NoHMXwdmldY9LZVfh3RpxscchdU5henz/category_video_games/burst06.png","frameSize":{"x":396,"y":354},"frameCount":1,"looping":true,"frameDelay":2,"version":"NoHMXwdmldY9LZVfh3RpxscchdU5henz","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":354},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NoHMXwdmldY9LZVfh3RpxscchdU5henz/category_video_games/burst06.png"},"73ae3f5b-a351-4a60-a0ae-400cd7d525a5":{"name":"missile","sourceUrl":"assets/v3/animations/XLzzSKOEnmZkUUlfNiB51TGPLyw2GAVkinl6gzFO9F8/73ae3f5b-a351-4a60-a0ae-400cd7d525a5.png","frameSize":{"x":105,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"cOXgQAez1MhgXkwGy0MSKtCxRFEQr6MF","loadedFromSource":true,"saved":true,"sourceSize":{"x":105,"y":400},"rootRelativePath":"assets/v3/animations/XLzzSKOEnmZkUUlfNiB51TGPLyw2GAVkinl6gzFO9F8/73ae3f5b-a351-4a60-a0ae-400cd7d525a5.png"},"fcbdfb56-3e1b-451b-a38e-20e5401ecd44":{"name":"2-20912_ship-clip-art-rocket-launcher-clipart.png_1","sourceUrl":"assets/v3/animations/XLzzSKOEnmZkUUlfNiB51TGPLyw2GAVkinl6gzFO9F8/fcbdfb56-3e1b-451b-a38e-20e5401ecd44.png","frameSize":{"x":300,"y":1137},"frameCount":1,"looping":true,"frameDelay":4,"version":"3DLXH0f.64k8NMnFMzeSHVxIUupiDXKg","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":1137},"rootRelativePath":"assets/v3/animations/XLzzSKOEnmZkUUlfNiB51TGPLyw2GAVkinl6gzFO9F8/fcbdfb56-3e1b-451b-a38e-20e5401ecd44.png"}}};
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

var rocket;
var space;
var missile,missilegroup;
var asteroid,asteroidgroup;
var score;
var gamestate="play";

var space=createSprite(200,200,500,800);
space.setAnimation("space");
space.scale=3.7;
//space.velocityY=(2+score/10);

var rocket=createSprite(200,310);
rocket.setAnimation("rocket");
rocket.scale= 0.07;
//rocket.velocityY=-2;
asteroidgroup=createGroup();
rocket.setCollider("rectangle",0,0,rocket.width,rocket.height);
  rocket.debug = false;
missilegroup=createGroup();
score=0;

function draw() {
  if(gamestate==="play"){
   space.velocityY=(2+score/10);
if(keyDown("RIGHT_ARROW")){
  rocket.x=rocket.x+3;
}
 if(rocket.isTouching(asteroidgroup)){
    rocket.setAnimation("blast");
    rocket.scale=0.5;
    rocket.x=200;
    rocket.y=200;
    gamestate ="end";
}
    if(keyDown("UP_ARROW")){
      missile=createSprite(rocket.x,rocket.y);
      missile.setAnimation("missile");
      missile.velocityY=-(2+score/10);
      missile.scale=0.25;
      missilegroup.add(missile);
      
    }
    
    for(var i=0;i<asteroidgroup.length;i++){
      if (missilegroup.isTouching(asteroidgroup.get(i))) {
         asteroidgroup.get(i).destroy();
         missilegroup.destroyEach();
         score=score+2;
      }
    }
if(keyDown("LEFT_ARROW")){
  rocket.x=rocket.x-3;
}

if(space.y>360){
  space.y=200;
}
spawnasteroid();
}

drawSprites();

if (gamestate==="end"){
       asteroidgroup.destroyEach();
     space.velocityY=0;
     missilegroup.destroyEach();
     textSize("20")
     fill("red");
    text("Press SPACE To Restart The Game",50,45);
    if(keyDown("space")){
      gamestate="play";
      rocket.x=200;
      rocket.y =310;
      rocket.setAnimation("rocket");
      rocket.scale=0.07;
      score=0;
    }
}
 stroke("white");
 textSize(20);
 fill("white");
 text("Score: "+ score, 310,40);
}

 


function spawnasteroid(){
if(frameCount%100===0){
  asteroid=createSprite(50,-30);
  asteroid.setAnimation("asteroid");
  asteroid.x=Math.round(random(120,400));
  asteroid.velocityY=(2+score/10);
  asteroid.scale=0.25;
  asteroidgroup.add(asteroid);
}
  
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
