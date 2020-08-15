const key = 'cbe3dd267a18f6c89943b3eff94f1ed7';

// const baseURL = 'http://api.lopenweathermap.org/data/2.5/weather?q=Lagos&appid=cbe3dd267a18f6c89943b3eff94f1ed7';

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data
   

}


// const searcbutton= document.getElementById('submit');
// const cityvalue =document.getElementById('search-loaction');
// const imageChange = document.getElementById('images');
// const cityName = document.getElementById('location');
// const temper =document.getElementById('degre');
// const statuse = document.getElementById('status');

// const spitOutCelcius = (kelvin) => {
//     celcius = Math.round(kelvin - 273.15);
//     return celcius;
// }

// const isDayTime = (icon) => {
//     if (icon.includes('d')) { return true }
//     else { return false }
// }

// updateWeatherApp = (city) => {
//     console.log(city)

//  const imageName = data.weather[0].icon;
//  const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`
//  let images= imageChange;
//  images.setAttribute ('src',iconSrc);
//  console.log(iconSrc)
// }