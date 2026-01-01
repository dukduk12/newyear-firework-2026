import { ReactP5Wrapper } from "react-p5-wrapper";

export default function FireworkCanvas() {
  const sketch = (p) => {
    let particles = [];
    let w = 0;
    let h = 0;

    p.setup = () => {
      const card = document.querySelector(".card");
      w = card ? card.offsetWidth : window.innerWidth;
      h = card ? card.offsetHeight : window.innerHeight;
      p.createCanvas(w, h);
      p.colorMode(p.HSB, 360, 100, 100, 255);
      p.background(0);
    };

    p.windowResized = () => {
      const card = document.querySelector(".card");
      w = card ? card.offsetWidth : window.innerWidth;
      h = card ? card.offsetHeight : window.innerHeight;
      p.resizeCanvas(w, h);
    };

    p.draw = () => {
      p.background(0, 0, 0, 35);
 
      if (p.frameCount % 45 === 0) {
        explode(p.random(w * 0.2, w * 0.8), p.random(h * 0.2, h * 0.6));
      }
 
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life <= 0) particles.splice(i, 1);
      }
    };

    function explode(x, y) {
      for (let i = 0; i < 100; i++) { 
        const hue = p.random(0, 360);
        particles.push(new Particle(x, y, hue));
      }
    }

    class Particle {
      constructor(x, y, hue) {
        const angle = p.random(p.TWO_PI);
        const speed = p.random(2, 5);
        this.pos = p.createVector(x, y);
        this.vel = p.createVector(p.cos(angle) * speed, p.sin(angle) * speed);
        this.life = 255;
        this.hue = hue;
      }

      update() {
        this.vel.mult(0.96);
        this.pos.add(this.vel);
        this.life -= 4;
      }

      draw() {
        p.stroke(this.hue, 50, 95, this.life); 
        p.strokeWeight(2);
        p.point(this.pos.x, this.pos.y);
      }
    }
  };

  return <ReactP5Wrapper sketch={sketch} />;
}
