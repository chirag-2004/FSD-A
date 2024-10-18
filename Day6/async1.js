// Asynchronous function
//  sayhello=()=>{
//     console.log("Hello Function");
// };
// console.log("Start");
// setTimeout(sayhello,4000);
// // sayhello();
// console.log("End");



// Nested Asynchronous
// console.log('start');
// setTimeout(() => {
//     console.log("First task completed");
//     setTimeout(()=>{
//         console.log("Second task completed");
//         setTimeout(()=>{
//             console.log("Third task completed");
//         },3000);
//     },2000);
// },1000);
// console.log("End"); 






// Promise
// const mypromise=new Promise((resolve,reject)=>{
//     // let success=false;
//     let success=true;
//     if(success){
//         resolve("Data Send Success");
//     }
//     else{
//         reject("Data Send Failed");
//     }
// });

// mypromise.then((message)=>console.log(message))
// .catch((error)=>console.log("error fetching data "+error));

















// function task(message,delay){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(message);
//             resolve();
//             },delay);
//         });
// }
// task("Task 1 completed",1000)
// .then(()=>task("Task 2 completed",2000))
// .then(()=>task("Task 3 completed",3000));



function task(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data={id:1,roll:23,name:'Rahul'};
            resolve(data);
            },3000);
        });
}
task()
.then((data)=>{console.log("Data Received",data)})
.catch((error)=>{console.error("error",error)});
