class App
{
    runApplication()
    {
        

        let AppDate = "24-11-2022";
        let VNumber = "versienummer: 98701";
        let AppNaaam = "WEB";
        let Autheur = "Autheur: Merlijn van Aalst";
        let copyright = "Copyright = @34530" ;
        let dis = "Merlijn/34530";
        const darkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
        
        //dit is de lijst netjes onder elkaar 
        var Data = [AppDate, VNumber, AppNaaam, Autheur, copyright, dis, darkMode];
        Data.forEach(function(onderElkaar){
            console.log(onderElkaar)
        }) 
    }
}



let app = new App();
app.runApplication();