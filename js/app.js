const API_Key = `2445c4710b58016f93a856255e7a4e26`;
// 2445c4710b58016f93a856255e7a4e26

const loadData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`)
        .then(res => res.json())
        .then(data => {
            displayData(data);
        })
        .catch((error) => { console.log(error); })
};

const displayData = (getData) => {
    console.log(getData);
    // const tem = document.getElementById('Temperature');
    //     tem.innerText = getData.main.temp; 
    //     const clouds = document.getElementById('clouds');
    //             clouds.innerText = getData.weather[0].main;

    setValueById('Temperature', getData.main.temp);
    setValueById('clouds', getData.weather[0].main);

};

const setValueById = (id, text) => {
    const Temperature = document.getElementById(id);
    Temperature.innerText = text;
    const clouds = document.getElementById(id);
    clouds.innerText = text;
};

const searchBtn = () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    inputField.value = '';
    loadData(inputValue);
    const dhaka = document.getElementById('dhaka');
    dhaka.innerText = inputValue;
}

loadData('city');