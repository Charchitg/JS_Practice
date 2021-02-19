const minhand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');
const sechand = document.querySelector('.second-hand');

function SetTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secdeg = ((seconds/60) * 360) + 90;
  sechand.style.transform = `rotate(${secdeg}deg)`;
  
  const minutes = now.getMinutes();
  const mindeg = ((minutes/60)*360) + ((seconds/60)*6) + 90;
  minhand.style.transform = `rotate(${mindeg}deg)`;

  const hour = now.getHours();
  const hourdeg = ((hour/12)*360) + ((minutes/60)*30) + 90;
  hourhand.style.transform = `rotate(${hourdeg}deg)`;
  }

setInterval(SetTime , 1000);
SetTime();