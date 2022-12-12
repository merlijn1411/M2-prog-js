class App
{
    runApplication()
    {
        var canvas = document.getElementById('canvasId');
        var g = canvas.getContext('2d');
        g.canvas.width  = window.innerWidth;
        g.canvas.height = window.innerHeight;
        var black = "#000000";
        var white = "#FFFFFF";
        var Yellow = "#FFFF00";
        //roof
        g.beginPath();
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.lineTo(300,100);
        g.fillStyle = black;
        g.closePath();
        g.fill();
        g.stroke();
        
        //side 
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
        
        //front
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
        
        //window
        g.beginPath();
        g.fillStyle = Yellow;
        g.moveTo(450, 500);
        g.lineTo(500, 510);
        g.lineTo(510, 400);
        g.lineTo(400, 375);
        g.lineTo(390, 485);
        g.closePath();
        g.stroke();
        g.fill();
    
        //stroke front 
        g.beginPath();
        g.moveTo(600, 400);
        g.lineTo(600, 400);
        g.lineTo(800, 300);
        g.closePath();
        g.stroke();
        g.fill();
        
    }

}

let app = new App();
app.runApplication();