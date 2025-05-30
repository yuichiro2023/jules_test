const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

// Helper function for random numbers
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Fish class
class Fish {
  constructor(x, y, radius, color, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius; // Using radius for simple circular fish for now
    this.color = color;
    this.speed = speed;
    this.dx = getRandom(-1, 1) * this.speed;
    this.dy = getRandom(-0.5, 0.5) * this.speed; // Fish move more horizontally
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    
    // Simple tail
    ctx.beginPath();
    ctx.moveTo(this.x - this.radius, this.y);
    ctx.lineTo(this.x - this.radius - 10, this.y - 5);
    ctx.lineTo(this.x - this.radius - 10, this.y + 5);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();

    // Eye
    ctx.beginPath();
    const eyeX = this.x + this.radius * 0.3;
    const eyeY = this.y - this.radius * 0.2;
    ctx.arc(eyeX, eyeY, this.radius * 0.2, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(eyeX + 1, eyeY, this.radius * 0.1, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    // Randomly change direction slightly
    if (Math.random() < 0.05) {
      this.dx = getRandom(-1, 1) * this.speed;
      this.dy = getRandom(-0.5, 0.5) * this.speed;
    }

    // Wall bouncing logic
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
      this.x += this.dx * 2; // move out of wall
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
      this.y += this.dy * 2; // move out of wall
    }
  }
}

// Jellyfish class
class Jellyfish {
  constructor(x, y, radius, color, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius; // Head radius
    this.color = color;
    this.speed = speed;
    this.dx = getRandom(-0.3, 0.3) * this.speed;
    this.dy = getRandom(-1, 1) * this.speed; // Jellyfish move more vertically
    this.angle = 0; // For pulsating movement
    this.tentacleLength = radius * 1.5;
    this.numTentacles = 5;
  }

  draw() {
    // Pulsating head
    const currentRadius = this.radius + Math.sin(this.angle) * (this.radius * 0.2);
    
    // Head
    ctx.beginPath();
    ctx.arc(this.x, this.y, currentRadius, Math.PI, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

    // Tentacles
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    for (let i = 0; i < this.numTentacles; i++) {
      ctx.beginPath();
      ctx.moveTo(this.x - currentRadius + (i * (currentRadius*2 / (this.numTentacles-1))), this.y);
      const tentacleEndX = this.x - currentRadius + (i * (currentRadius*2 / (this.numTentacles-1))) + Math.sin(this.angle + i) * 10;
      const tentacleEndY = this.y + this.tentacleLength + Math.cos(this.angle + i) * 10;
      ctx.lineTo(tentacleEndX, tentacleEndY);
      ctx.stroke();
    }
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.angle += 0.05; // For pulsation and tentacle movement

    // Randomly change direction slightly
    if (Math.random() < 0.03) {
      this.dx = getRandom(-0.3, 0.3) * this.speed;
      this.dy = getRandom(-1, 1) * this.speed;
    }

    // Wall bouncing logic
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
      this.x += this.dx * 2;
    }
    if (this.y + this.radius > canvas.height) { // Jellyfish can go off top a bit
        this.y = 0 - this.radius - this.tentacleLength; // Reappear at top
        this.x = getRandom(this.radius, canvas.width - this.radius);
    }
    if (this.y - this.radius < -this.tentacleLength*2) { // If it goes too far up (e.g. from bottom bounce)
        this.dy = Math.abs(this.dy); // ensure it moves downwards
    }
     if (this.y - this.radius > canvas.height) { // if it goes off bottom
        this.y = 0 - this.radius;
        this.x = getRandom(0, canvas.width);
    }


  }
}

const seaCreatures = [];
const numFish = 10;
const numJellyfish = 5;

for (let i = 0; i < numFish; i++) {
  seaCreatures.push(new Fish(
    getRandom(50, canvas.width - 50),
    getRandom(50, canvas.height - 50),
    getRandom(10, 25), // radius
    `hsl(${getRandom(0, 360)}, 70%, 50%)`, // random color
    getRandom(0.5, 1.5) // speed
  ));
}

for (let i = 0; i < numJellyfish; i++) {
  seaCreatures.push(new Jellyfish(
    getRandom(50, canvas.width - 50),
    getRandom(50, canvas.height - 100), // Jellyfish start a bit higher
    getRandom(15, 30), // radius
    `hsla(${getRandom(180, 300)}, 70%, 60%, 0.7)`, // translucent blues/purples
    getRandom(0.3, 0.8) // speed
  ));
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  seaCreatures.forEach(creature => {
    creature.update();
    creature.draw();
  });

  requestAnimationFrame(animate);
}

animate();
