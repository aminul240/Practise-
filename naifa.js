const themeswitcher = document.querySelector('#themeswitcher');


//sun rise and sun set er funcition............ start.......................

navigator.geolocation.getCurrentPosition((position) => {
 
    let sunset = new Date().sunset(position.coords.latitude, position.coords.longitude);

    let sunrise = new Date().sunrise(position.coords.latitude, position.coords.longitude);

    

    if (isDay(sunset, sunrise)){

     setTheme('theme-dark');

    } else {
        setTheme('theme-light')
    }
     
      function isDay(sunset, sunrise){

       const nowHours = new Date().getHours();

       return nowHours >= sunrise.getHours() && nowHours < sunset.getHours();

      }


});

//sunrise and sunset end....................................

const defaultTheme = localStorage.getItem('theme') || 'theme-dark';

setTheme(defaultTheme);

themeswitcher.addEventListener('change',(e) => {


    setTheme(e.target.value);
});

function setTheme(theme) {

    theme = theme || 'theme-dark';

    document.documentElement.className = theme;

    localStorage.setItem('theme', theme);

    themeswitcher.value = theme;

}