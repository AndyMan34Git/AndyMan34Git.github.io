if (typeof(chance) == 'undefined') { let chance; }; // I made this
if (typeof(data) == 'undefined') { let data; }; // I made this
data = { blook: "" }; // I made this
data.blook = prompt("Name of Blook (Case sensitive)"); // I made this
if (typeof(data) == 'undefined') { let pack; }; // I made this
pack = prompt("Pack Name (Case sensitive)"); // I made this
if (blacket.booster.active && blacket.blooks[data.blook].chance <= 10) chance = Math.floor(blacket.blooks[data.blook].chance * 10000) / 10000;
else chance = Math.floor((blacket.blooks[data.blook].chance) * 10000) / 10000;
blookName = `${chance}% - NEW!`; // I edited this

// DO NOT EDIT ANYTHING PAST THIS LINE

if (blacket.blooks[data.blook].art) blookArt = blacket.blooks[data.blook].art;
else blookArt = "/content/packs/art/Default.webp";

if (typeof(backgroundId) == 'undefined') { let backgroundId; };
backgroundId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);

$("body").attr("style", "overflow: hidden;");
$("body").append(`<div id="${backgroundId}" class="styles__openBackground___-U4oX-camelCase" style="background: radial-gradient(circle, ${blacket.packs[pack].color1} 0%, ${blacket.packs[pack].color2} 100%);">
<div class="styles__openContainer___3paFG-camelCase">
<img loading="lazy" src="${blookArt}" class="styles__blookBackground___3rt4N-camelCase" draggable="false">
<div class="styles__blookContainer___36LK2-camelCase styles__unlockedBlookImage___wC4gr-camelCase">
<img loading="lazy" src="${blacket.blooks[data.blook].image}" draggable="false" class="styles__blook___1R6So-camelCase" />
</div>
<div class="styles__unlockedText___1diat-camelCase">
<div class="styles__unlockedBlook___2pr1Z-camelCase" style="font-size: 2.031vw;"><div style="display: block; white-space: nowrap;font-family: Titan One;">${data.blook}</div></div>
<div class="styles__rarityText___1PfSA-camelCase" style="color: ${blacket.rarities[blacket.blooks[data.blook].rarity].color};">${blacket.blooks[data.blook].rarity}</div>
</div>
<div class="styles__bottomText___3_k10-camelCase">${blookName}</div>
<div class="styles__bottomShadow___10ZLG-camelCase"></div>
</div>
<div class="styles__openPackContainer___2m4Yf-camelCase" role="button" tabindex="0">
<div style="transform: rotate(0deg);">
<img loading="lazy" style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);min-width: 16.406vw;object-fit: cover;height: 15.625vw;object-position: bottom; margin-top:1.094vw;" src="${blacket.packs[pack].image}">
<div class="styles__openPack___3QxCP-camelCase" style="background-image: url('/content/packSeelOpen.webp');transform: scale(0.99);"></div>
</div>
</div>
<div class="styles__openBigButton___3KmDM-camelCase styles__canOpen___2znG2-camelCase" role="button" tabindex="0"></div>
</div>
`);
blacket.stopLoading();
$(".styles__openBigButton___3KmDM-camelCase").click(() => {
$(".styles__openBigButton___3KmDM-camelCase").unbind("click");
$(".styles__openPackContainer___2m4Yf-camelCase").attr("class", "styles__openingPackContainer___1ZQzY-camelCase");
$(".styles__openPack___3QxCP-camelCase").attr("class", "styles__openPack___3QxCP-camelCase styles__isOpeningPack___1qY5t-camelCase")
$(".styles__openContainer___3paFG-camelCase").addClass("styles__openingContainer___2OmG9-camelCase");
if (blacket.rarities[blacket.blooks[data.blook].rarity].animation == "epic") $(".styles__openContainer___3paFG-camelCase").addClass("styles__openingContainerEpic___3TzCR-camelCase");
else if (blacket.rarities[blacket.blooks[data.blook].rarity].animation == "legendary") $(".styles__openContainer___3paFG-camelCase").addClass("styles__openingContainerLegendary___RbJZ_-camelCase");
else if (blacket.rarities[blacket.blooks[data.blook].rarity].animation == "chroma" || blacket.rarities[blacket.blooks[data.blook].rarity].animation == "mystical") $(".styles__openContainer___3paFG-camelCase").addClass("styles__openingContainerChroma___3VBd5-camelCase");
setTimeout(() => {
$(".styles__openingPackContainer___1ZQzY-camelCase > div:nth-child(1)").attr("style", "transform: rotate(1deg);");
}, 270);
setTimeout(() => {
$(".styles__openingPackContainer___1ZQzY-camelCase > div:nth-child(1)").attr("style", "transform: rotate(2deg);");
}, 300);
setTimeout(() => {
$(".styles__openingPackContainer___1ZQzY-camelCase > div:nth-child(1)").attr("style", "transform: rotate(2.5deg);");
}, 330);
setTimeout(() => {
$(".styles__openingPackContainer___1ZQzY-camelCase > div:nth-child(1)").attr("style", "transform: rotate(0deg);");
}, 410);
setTimeout(() => {
$(".styles__openingPackContainer___1ZQzY-camelCase > div:nth-child(1) > img:nth-child(1)").remove();
}, 650);
if (blacket.rarities[blacket.blooks[data.blook].rarity].color == "rainbow") {
$(".styles__rarityText___1PfSA-camelCase").attr("class", "styles__rarityText___1PfSA-camelCase rainbow");
$(".styles__rarityText___1PfSA-camelCase").attr("style", `color: ${blacket.rarities[blacket.blooks[data.blook].rarity].color}; text-shadow: 0 0 52.083vw black;`);
}

setTimeout(() => {
if (blacket.rarities[blacket.blooks[data.blook].rarity].animation == "uncommon") {
var config = {
type: Phaser.WEBGL,
width: window.innerWidth,
height: window.innerHeight,
parent: document.getElementById(backgroundId),
render: {
transparent: true
},
scene: {
preload: preload,
create: create
}
};

game = new Phaser.Game(config);

function preload() {
this.load.image('1', '/content/particles/1.webp');
this.load.image('2', '/content/particles/2.webp');
this.load.image('3', '/content/particles/3.webp');
this.load.image('4', '/content/particles/4.webp');
this.load.image('5', '/content/particles/5.webp');
this.load.image('6', '/content/particles/6.webp');
this.load.image('7', '/content/particles/7.webp');
}

function create() {
particle1 = this.add.particles('1');
particle2 = this.add.particles('2');
particle3 = this.add.particles('3');
particle4 = this.add.particles('4');
particle5 = this.add.particles('5');
particle6 = this.add.particles('6');
particle7 = this.add.particles('7');

let emitter1 = particle1.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 800
},
angle: {
min: -115,
max: -65
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
velocityFromRotation: true,
gravityY: 700,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth / 2 - 25,
max: window.innerWidth / 2 + 25
},
y: window.innerHeight / 2 + 25,
});

let emitter2 = particle2.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 800
},
angle: {
min: -115,
max: -65
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
velocityFromRotation: true,
gravityY: 700,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth / 2 - 25,
max: window.innerWidth / 2 + 25
},
y: window.innerHeight / 2 + 25,
});

let emitter3 = particle3.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 800
},
angle: {
min: -115,
max: -65
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
velocityFromRotation: true,
gravityY: 700,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth / 2 - 25,
max: window.innerWidth / 2 + 25
},
y: window.innerHeight / 2 + 25,
});

let emitter4 = particle4.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 800
},
angle: {
min: -115,
max: -65
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
velocityFromRotation: true,
gravityY: 700,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth / 2 - 25,
max: window.innerWidth / 2 + 25
},
y: window.innerHeight / 2 + 25,
});

let emitter5 = particle5.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 800
},
angle: {
min: -115,
max: -65
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
velocityFromRotation: true,
gravityY: 700,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth / 2 - 25,
max: window.innerWidth / 2 + 25
},
y: window.innerHeight / 2 + 25,
});

let emitter6 = particle6.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 800
},
angle: {
min: -115,
max: -65
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
velocityFromRotation: true,
gravityY: 700,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth / 2 - 25,
max: window.innerWidth / 2 + 25
},
y: window.innerHeight / 2 + 25,
});

let emitter7 = particle7.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 800
},
angle: {
min: -115,
max: -65
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
velocityFromRotation: true,
gravityY: 700,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth / 2 - 25,
max: window.innerWidth / 2 + 25
},
y: window.innerHeight / 2 + 25,
});

setTimeout(() => {
emitter1.stop();
emitter2.stop();
emitter3.stop();
emitter4.stop();
emitter5.stop();
emitter6.stop();
emitter7.stop();
}, 1500);
}
} else if (blacket.rarities[blacket.blooks[data.blook].rarity].animation == "rare") {
var config = {
type: Phaser.WEBGL,
width: window.innerWidth,
height: window.innerHeight,
parent: document.getElementById(backgroundId),
render: {
transparent: true
},
scene: {
preload: preload,
create: create
}
};

game = new Phaser.Game(config);

function preload() {
this.load.image('1', '/content/particles/1.webp');
this.load.image('2', '/content/particles/2.webp');
this.load.image('3', '/content/particles/3.webp');
this.load.image('4', '/content/particles/4.webp');
this.load.image('5', '/content/particles/5.webp');
this.load.image('6', '/content/particles/6.webp');
this.load.image('7', '/content/particles/7.webp');
}

function create() {
particle1 = this.add.particles('1');
particle2 = this.add.particles('2');
particle3 = this.add.particles('3');
particle4 = this.add.particles('4');
particle5 = this.add.particles('5');
particle6 = this.add.particles('6');
particle7 = this.add.particles('7');

let emitter1 = particle1.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -70,
max: -20
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: -25,
max: 25
},
y: window.innerHeight,
});

let emitter2 = particle2.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -70,
max: -20
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: -25,
max: 25
},
y: window.innerHeight,
});

let emitter3 = particle3.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -70,
max: -20
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: -25,
max: 25
},
y: window.innerHeight,
});

let emitter4 = particle4.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -70,
max: -20
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: -25,
max: 25
},
y: window.innerHeight,
});

let emitter5 = particle5.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -70,
max: -20
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: -25,
max: 25
},
y: window.innerHeight,
});

let emitter6 = particle6.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -70,
max: -20
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: -25,
max: 25
},
y: window.innerHeight,
});

let emitter7 = particle7.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -70,
max: -20
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: -25,
max: 25
},
y: window.innerHeight,
});

let emitter8 = particle1.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -160,
max: -110
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth - 25,
max: window.innerWidth + 25
},
y: window.innerHeight,
});

let emitter9 = particle2.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -160,
max: -110
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth - 25,
max: window.innerWidth + 25
},
y: window.innerHeight,
});

let emitter10 = particle3.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -160,
max: -110
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth - 25,
max: window.innerWidth + 25
},
y: window.innerHeight,
});

let emitter11 = particle4.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -160,
max: -110
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth - 25,
max: window.innerWidth + 25
},
y: window.innerHeight,
});

let emitter12 = particle5.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -160,
max: -110
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth - 25,
max: window.innerWidth + 25
},
y: window.innerHeight,
});

let emitter13 = particle6.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -160,
max: -110
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth - 25,
max: window.innerWidth + 25
},
y: window.innerHeight,
});

let emitter14 = particle7.createEmitter({
scale: 0.25,
speed: {
min: 700,
max: 750
},
angle: {
min: -160,
max: -110
},
velocity: {
min: 600,
max: 750
},
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
gravityY: 500,
frequency: 75,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: window.innerWidth - 25,
max: window.innerWidth + 25
},
y: window.innerHeight,
});

setTimeout(() => {
emitter1.stop();
emitter2.stop();
emitter3.stop();
emitter4.stop();
emitter5.stop();
emitter6.stop();
emitter7.stop();
emitter8.stop();
emitter9.stop();
emitter10.stop();
emitter11.stop();
emitter12.stop();
emitter13.stop();
emitter14.stop();
}, 1500);
}
} else if (blacket.rarities[blacket.blooks[data.blook].rarity].animation == "epic") {
var config = {
type: Phaser.WEBGL,
width: window.innerWidth,
height: window.innerHeight,
parent: document.getElementById(backgroundId),
render: {
transparent: true
},
scene: {
preload: preload,
create: create
}
};

game = new Phaser.Game(config);

function preload() {
this.load.image('1', '/content/particles/1.webp');
this.load.image('2', '/content/particles/2.webp');
this.load.image('3', '/content/particles/3.webp');
this.load.image('4', '/content/particles/4.webp');
this.load.image('5', '/content/particles/5.webp');
this.load.image('6', '/content/particles/6.webp');
this.load.image('7', '/content/particles/7.webp');
}

function create() {
particle1 = this.add.particles('1');
particle2 = this.add.particles('2');
particle3 = this.add.particles('3');
particle4 = this.add.particles('4');
particle5 = this.add.particles('5');
particle6 = this.add.particles('6');
particle7 = this.add.particles('7');

particle1.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -50,
max: 0
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: 0,
y: {
min: 0,
max: game.config.width
}
});

particle2.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -50,
max: 0
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: 0,
y: {
min: 0,
max: game.config.width
}
});

particle3.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -50,
max: 0
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: 0,
y: {
min: 0,
max: game.config.width
}
});

particle4.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -50,
max: 0
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: 0,
y: {
min: 0,
max: game.config.width
}
});

particle5.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -50,
max: 0
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: 0,
y: {
min: 0,
max: game.config.width
}
});

particle6.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -50,
max: 0
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: 0,
y: {
min: 0,
max: game.config.width
}
});

particle7.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -50,
max: 0
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: 0,
y: {
min: 0,
max: game.config.width
}
});

particle1.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -180,
max: -130
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: game.config.width,
y: {
min: 0,
max: game.config.width
}
});

particle2.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -180,
max: -130
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: game.config.width,
y: {
min: 0,
max: game.config.width
}
});

particle3.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -180,
max: -130
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: game.config.width,
y: {
min: 0,
max: game.config.width
}
});

particle4.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -180,
max: -130
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: game.config.width,
y: {
min: 0,
max: game.config.width
}
});

particle5.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -180,
max: -130
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: game.config.width,
y: {
min: 0,
max: game.config.width
}
});

particle6.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -180,
max: -130
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: game.config.width,
y: {
min: 0,
max: game.config.width
}
});

particle7.createEmitter({
scale: 0.25,
speed: 650,
angle: {
min: -180,
max: -130
},
velocity: {
min: 600,
max: 750
},
gravityY: 400,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: game.config.width,
y: {
min: 0,
max: game.config.width
}
});
}
} else if (blacket.rarities[blacket.blooks[data.blook].rarity].animation == "legendary") {
var config = {
type: Phaser.WEBGL,
width: window.innerWidth,
height: window.innerHeight,
parent: document.getElementById(backgroundId),
render: {
transparent: true
},
scene: {
preload: preload,
create: create
}
};

game = new Phaser.Game(config);

function preload() {
this.load.image('1', '/content/particles/1.webp');
this.load.image('2', '/content/particles/2.webp');
this.load.image('3', '/content/particles/3.webp');
this.load.image('4', '/content/particles/4.webp');
this.load.image('5', '/content/particles/5.webp');
this.load.image('6', '/content/particles/6.webp');
this.load.image('7', '/content/particles/7.webp');
}

function create() {
particle1 = this.add.particles('1');
particle2 = this.add.particles('2');
particle3 = this.add.particles('3');
particle4 = this.add.particles('4');
particle5 = this.add.particles('5');
particle6 = this.add.particles('6');
particle7 = this.add.particles('7');

particle1.createEmitter({
scale: 0.25,
speed: 500,
angle: 90,
velocity: 180,
gravityY: 300,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: 0,
max: game.config.width
},
y: -50
});

particle2.createEmitter({
scale: 0.25,
angle: 90,
speed: 500,
velocity: 180,
gravityY: 300,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: 0,
max: game.config.width
},
y: -50
});

particle3.createEmitter({
scale: 0.25,
angle: 90,
speed: 500,
velocity: 180,
gravityY: 300,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: 0,
max: game.config.width
},
y: -50
});

particle4.createEmitter({
scale: 0.25,
angle: 90,
speed: 500,
velocity: 180,
gravityY: 300,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: 0,
max: game.config.width
},
y: -50
});

particle5.createEmitter({
scale: 0.25,
angle: 90,
speed: 500,
velocity: 180,
gravityY: 300,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: 0,
max: game.config.width
},
y: -50
});

particle6.createEmitter({
scale: 0.25,
angle: 90,
speed: 500,
velocity: 180,
gravityY: 300,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: 0,
max: game.config.width
},
y: -50
});

particle7.createEmitter({
scale: 0.25,
angle: 90,
speed: 500,
velocity: 180,
gravityY: 300,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 65,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: 5000,
x: {
min: 0,
max: game.config.width
},
y: -50
});
}
} else if (blacket.rarities[blacket.blooks[data.blook].rarity].animation == "chroma" || blacket.rarities[blacket.blooks[data.blook].rarity].animation == "mystical") {
var config = {
type: Phaser.WEBGL,
width: window.innerWidth,
height: window.innerHeight,
parent: document.getElementById(backgroundId),
render: {
transparent: true
},
scene: {
preload: preload,
create: create
}
};

game = new Phaser.Game(config);

function preload() {
this.load.image('1', '/content/particles/1.webp');
this.load.image('2', '/content/particles/2.webp');
this.load.image('3', '/content/particles/3.webp');
this.load.image('4', '/content/particles/4.webp');
this.load.image('5', '/content/particles/5.webp');
this.load.image('6', '/content/particles/6.webp');
this.load.image('7', '/content/particles/7.webp');
}

function create() {
particle1 = this.add.particles('1');
particle2 = this.add.particles('2');
particle3 = this.add.particles('3');
particle4 = this.add.particles('4');
particle5 = this.add.particles('5');
particle6 = this.add.particles('6');
particle7 = this.add.particles('7');
randomy1 = game.config.height - 651
randomy2 = game.config.height - 652
randomy3 = game.config.height - 653
randomy4 = game.config.height - 654
randomy5 = game.config.height - 655
randomy6 = game.config.height - 656
randomy7 = game.config.height - 657
particle1.createEmitter({
speed: 700,
angle: -30,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 350,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy1,
max: game.config.height
},
x: 0
});

particle2.createEmitter({
speed: 700,
angle: -30,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 300,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy2,
max: game.config.height
},
x: 0
});

particle3.createEmitter({
speed: 700,
angle: -30,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 400,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy3,
max: game.config.height
},
x: 0
});

particle4.createEmitter({
speed: 700,
angle: -30,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 350,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy4,
max: game.config.height
},
x: 0
});

particle5.createEmitter({
speed: 700,
angle: -30,
velocity: 650,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 400,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy5,
max: game.config.height
},
x: 0
});

particle6.createEmitter({
speed: 700,
angle: -30,
velocity: 750,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 200,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy6,
max: game.config.height
},
x: 0
});

particle7.createEmitter({
speed: 700,
angle: -30,
velocity: 450,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 300,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy7,
max: game.config.height
},
x: 0
});
particle1.createEmitter({
speed: 700,
angle: -150,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 350,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy1,
max: game.config.height
},
x: game.config.width
});

particle2.createEmitter({
speed: 700,
angle: -150,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 300,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy2,
max: game.config.height
},
x: game.config.width
});

particle3.createEmitter({
speed: 700,
angle: -150,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 400,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy3,
max: game.config.height
},
x: game.config.width
});

particle4.createEmitter({
speed: 700,
angle: -150,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 350,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy4,
max: game.config.height
},
x: game.config.width
});

particle5.createEmitter({
speed: 700,
angle: -150,
velocity: 650,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 400,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy5,
max: game.config.height
},
x: game.config.width
});

particle6.createEmitter({
speed: 700,
angle: -150,
velocity: 750,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 200,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy6,
max: game.config.height
},
x: game.config.width
});

particle7.createEmitter({
speed: 700,
angle: -150,
velocity: 450,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 300,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: randomy7,
max: game.config.height
},
x: game.config.width
});
particle1.createEmitter({
speed: 700,
angle: 30,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 350,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 601
},
x: 0
});

particle2.createEmitter({
speed: 700,
angle: 30,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 300,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 602
},
x: 0
});

particle3.createEmitter({
speed: 700,
angle: 30,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 400,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 603
},
x: 0
});

particle4.createEmitter({
speed: 700,
angle: 30,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 350,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 604
},
x: 0
});

particle5.createEmitter({
speed: 700,
angle: 30,
velocity: 650,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 400,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 605
},
x: 0
});

particle6.createEmitter({
speed: 700,
angle: 30,
velocity: 750,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 200,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 606
},
x: 0
});

particle7.createEmitter({
speed: 700,
angle: 30,
velocity: 450,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 300,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 607
},
x: 0
});
particle1.createEmitter({
speed: 700,
angle: -210,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 350,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 601
},
x: game.config.width
});

particle2.createEmitter({
speed: 700,
angle: -210,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 300,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 602
},
x: game.config.width
});

particle3.createEmitter({
speed: 700,
angle: -210,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 400,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 603
},
x: game.config.width
});

particle4.createEmitter({
speed: 700,
angle: -210,
velocity: 700,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 350,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 604
},
x: game.config.width
});

particle5.createEmitter({
speed: 700,
angle: -210,
velocity: 650,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 400,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 605
},
x: game.config.width
});

particle6.createEmitter({
speed: 700,
angle: -210,
velocity: 750,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 200,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 606
},
x: game.config.width
});

particle7.createEmitter({
speed: 700,
angle: -210,
velocity: 450,
gravityY: 0,
rotate: {
onEmit: (particle) => {
return 0
},
onUpdate: (particle) => {
return particle.angle + 1
},
},
frequency: 300,
scale: 0.25,
tint: parseInt(blacket.rarities[blacket.blooks[data.blook].rarity].color.replace("#", "").substring(0, 6), 16),
lifespan: {
min: 3000,
max: 2500
},
y: {
min: 0,
max: 607
},
x: game.config.width
});
}
}
}, 240);

setTimeout(() => {
$(`#${backgroundId}`).click(() => {
$(`#${backgroundId}`).remove()
$(`#${backgroundId}`).unbind("click");
$("body").attr("style", "");
});
}, blacket.rarities[blacket.blooks[data.blook].rarity].wait);
});