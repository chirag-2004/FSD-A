let ar=[1,2,3,4,23,34];


// MAP FUNCTION
// let newar=ar.map((x)=>x*2);
// console.log(newar);




// FILTER FUNCTION

// let newar=ar.filter((x)=>x%2==0);
// console.log(newar);




// MAP AND FILTER

// let newar=ar.filter((x)=>x%2==0).map((x)=>x*3);


// let newar=ar.reduce((x,y)=>x+y,0);

// let newar=ar.filter((x)=>x%2==0).map((x)=>x*4).reduce((x,y)=>x+y,0);

// console.log(newar);



const student=[{
    name:'Alice',score:60},{name:'BOB',score:50}
    ,{name:'Rahul',score:45},{name:'Rocky',score:65}
    ,{name:'Oogy',score:30},{name:'Deepak',score:71}];
    // console.log(student);
    let newar=student.filter((x)=>x.score>60).map((x)=>x.score*2).reduce((x,y)=>x+y,0);
    console.log(newar);