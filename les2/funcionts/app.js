class App
{
    runApplication()
    {
        var canvas = document.getElementById('canvasId');
        var g = canvas.getContext('2d');
        g.canvas.width  = window.innerWidth;
        g.canvas.height = window.innerHeight;
        var gX = canvas.width / 2;
        var gY = canvas.height / 2;
        var black = "#000000";
        var white = "#FFFFFF";
        var red = "#ff0000";

        g.beginPath();
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.lineTo(300,100);
        g.fillStyle = black;
        g.fill();
        g.closePath();

        g.beginPath();
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.fillStyle = white;
        g.fill();
        g.stroke();
        g.closePath();

        g.beginPath();
        g.fillStyle = white;
        g.moveTo(600, 400);
        g.lineTo(600, 600);
        g.lineTo(800, 500);
        g.lineTo(800, 300);
        g.lineTo(700, 200);
        g.lineTo(600, 400);
        g.closePath();
        g.stroke();
        g.fill();
    }

}

let app = new App();
app.runApplication();