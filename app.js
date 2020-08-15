// const key = 'cbe3dd267a18f6c89943b3eff94f1ed7';



// const requestCity = async (city) => {
//     const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
//     const query = `?q=${city}&appid=${key}`;

//     const total= await (baseURL=query);
//     fetch(total)
//     .then(res => res.json())
//     .then(data =>{
//       const weather = data.weather[0]
//       const cloud= weather.main
//      document.getElementById('status').innerText = cloud;
      
//      //tempur area
//      const tempur = data.main;
//      const temtNow = Math.round(tempur.temp -273.15);
    
//      document.getElementById('degre').innerText =temtNow;
//      console.log(temtNow)
//     })
// }

//chestai hoi nai
// const requestCity = async (name) =>{
//   const bas = 'http://api.openweathermap.org/data/2.5/weather'

//   const query = `?q=${name}&appid=${key}`;
  
//    //make fetch call (promise call)
//    const response = await fetch(bas + query);
//    red(response);
// }

// const key = 'cbe3dd267a18f6c89943b3eff94f1ed7';

const api =`https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=886705b4c1182eb1c69f28eb8c520e20`

fetch(api)




//  function red(response){

 .then(res => res.json())
.then(data =>{
  const weather = data.weather[0]
  const cloud= weather.main
 document.getElementById('status').innerText = cloud;
  
 //tempur area
 const tempur = data.main;
 const temtNow = Math.round(tempur.temp -273.15);

 document.getElementById('degre').innerText =temtNow;
 console.log(temtNow)

 //icopn area
 const imageName = data.weather[0].icon;
 const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`
 let images= document.getElementById('images');
 images.setAttribute ('src',iconSrc);
 console.log(data.name)

 // city name

 document.getElementById('location').innerText = data.name

 

})
 


//search area

document.getElementById('submit').addEventListener('click', e => {
  const searchCity = document.getElementById('search-loaction');
    const name = searchCity.value;
    name.value="";
    console.log(name)
})


