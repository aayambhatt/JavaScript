// async functions always returns a promise 
// await pauses the execution of its surrounding async function until the promise is settled

async function hello(){
    console.log("hello");
}

function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data");
        resolve(200);
        }, 2000)
    });
}

async function getWeatherData(){
    await api();
}

