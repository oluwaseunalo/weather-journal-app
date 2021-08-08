/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=bd2b98e03e8840ae15485bdb146578b0';


const generate = document.getElementById('generate');

generate.addEventListener ('click', confirmData);

function confirmData (e) {
    const newZip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeatherApi(baseURL,newZip,apiKey)

    .then(function(data){
    postData('/add', {date:newDate, temp:data.main.temp, content:feelings})
    .then (() => {updateUI()
    });
});

}

const getWeatherApi = async (baseURL,newZip,apiKey) => {
    const response = await fetch(baseURL+newZip+apiKey)
    try{
        const data = await response.json();
        //console.log(data);
        return data;
    }
    catch (error){
        console.log("error", error);}
}


const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(data),
        });
    try {
        const newData = await response.json();
        //console.log(newData);
        return newData;
    }
    catch(error){
        console.log("error", error);
    }
}

const updateUI = async () => {
    const request = await fetch ('/all');
    try{
        const allData = await request.json();
        document.getElementById('date').innerHTML = `date: $(allData[0].date)`;
        document.getElementById('temp').innerHTML = `temp: $(allData[0].temp)`;
        document.getElementById('content').innerHTML = `I feel: $(allData[0].content)`;
    }catch(error){
        console.log("error", error);}
}