document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
  
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
  
    canvas.style.zIndex = '-1';
  
    var width = window.innerWidth;
    var height = window.innerHeight;
  
    canvas.width = width;
    canvas.height = height;
  
    var ctx = canvas.getContext("2d");

    var snowflakes = [];
    for (var i = 0; i < 100; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 4 + 1, 
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random(),
      });
    }
  
    function drawSnowflakes() {
      ctx.clearRect(0, 0, width, height);
  
      for (var i = 0; i < snowflakes.length; i++) {
        var snowflake = snowflakes[i];
  
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, " + snowflake.opacity + ")";
        ctx.fill();
  
        snowflake.y += snowflake.speed;
  
        if (snowflake.y > height) {
          snowflake.y = 0;
        }
      }
  
      requestAnimationFrame(drawSnowflakes);
    }
  
    drawSnowflakes();
  });