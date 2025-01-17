const URL = "https://cat-fact.herokuapp.com/facts"

const factPara = document.querySelector("#fact");

const btn = document.querySelector("#btn");


const getFacts = async ()=>{
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    // console.log(data[0].text);
    factPara.innerText = data[2].text;

}

btn.addEventListener("click", getFacts);