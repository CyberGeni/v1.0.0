//  Initiate Particles.js Library

window.onload= function() {
Particles.init ({
    selector: '.background',
    connectParticles: true,
    color: ['#DA0463', '#404B69', '#DBEDF3'],
    maxParticles: 75,
    minDistance: 150,
    speed: 0.7,
  });
};

// Initialise Typed.js

var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  smartBackspace: true,
});


