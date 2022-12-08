class App
{
    runApplication()
    {
        let arr = ["Bruno Mars", "leave the door open", "love,s train", "24k",
                    "5SOS", "Teeth", "Youngblood", "don't stop!"]
        
        console.log(arr)

        let headers = document.getElementsByClassName("bandName");

        headers[0] .innerhtml = "Bruno Mars";

        
        headers[0] .innerHTML = arr[0];
        headers[1] .innerHTML = arr[1];
        headers[2] .innerHTML = arr[2];
        headers[3] .innerHTML = arr[3];

        for(let i = 0; i < headers.length; i++){
            headers[i].innerHTML = arr[i];
        }
    }
}

let app = new App();
app.runApplication();