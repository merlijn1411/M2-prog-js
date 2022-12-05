class app
{
    runapplication()
    {
        var canvas = document.getElementById('canvasId');
        var g = canvas.getContext('2d');
        g.fillRect(0,0,10,10);
    }
}

let app = new app();
app.runapplication();
