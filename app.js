

const key = 'cbe3dd267a18f6c89943b3eff94f1ed7';

// const api =`https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=886705b4c1182eb1c69f28eb8c520e20`
const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
// const query = `?q=${city}&appid=${key}`

function getData(call) {

  fetch(`${baseURL}?q=${call}&appid=${key}`)

    .then(res => res.json())
    .then(data => {
      const weather = data.weather[0]
      const cloud = weather.main
      document.getElementById('status').innerText = cloud;

      
  //tempur area
      const tempur = data.main;
      const temtNow = Math.round(tempur.temp - 273.15);

  //icopn area
      document.getElementById('degre').innerText = temtNow;
      console.log(temtNow)
      const imageName = data.weather[0].icon;
      const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`
      let images = document.getElementById('images');
      images.setAttribute('src', iconSrc);
      console.log(data.name)

      // city name

      document.getElementById('location').innerText = data.name


    })
  }










  //search area

  document.getElementById('submit').addEventListener('click', function(){
    const searchCity = document.getElementById('search-loaction');
    const name = searchCity.value;
    getData(name);
    name.value = "";
  });


  getData('Dhaka');

  