// // PROMISES 
// let promise = new Promise((resolve, reject) => {
//     console.log("I'm a promise");
//     // resolve("success");
//     reject("some error occured")
// })
//-----------------------------------------------------


//-----------------------------------------------------
// PROMISE EXAMPLE 
// function getData(dataID, getNextData){
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             console.log("Data", dataID);
//             resolve("sucess");
//             if(getNextData){
//                 getNextData();
//             }
//         },4000);

//     });
// }
//-----------------------------------------------------



//-----------------------------------------------------
// PROMISE THEN, CATCH
// const getPromise = () => {
//    return new Promise((resolve, reject) => {
//         console.log("Im a promise");
//         resolve("success message")

//     });
// };

// let promise = getPromise();

// promise.then((res)=>{
//     console.log("Promise fulfilled", res);
// })
//-----------------------------------------------------



//-----------------------------------------------------
// PROMISE CHAINING
function asyncFun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success")
        },4000);

    });
}

function asyncFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success")
        },4000);

    });
}

console.log("Fetching Data1.....");
asyncFun1().then((res)=>{
    console.log("Fetching data2....");
    asyncFun2().then((res)=>{

    });
});

//-----------------------------------------------------