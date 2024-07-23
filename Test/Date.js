 
 let newDate = new Date()

 console.log(newDate);   //2024-07-23T10:23:59.848Z

 console.log(newDate.toDateString());    //Tue Jul 23 2024

 console.log(newDate.toISOString());     //2024-07-23T10:25:47.351Z

 console.log(newDate.toJSON());          //2024-07-23T10:25:47.351Z

 console.log(newDate.toLocaleDateString());   //7/23/2024

 console.log(newDate.toLocaleString());       //7/23/2024, 10:25:47 AM



 let MyDate = new Date('07-23-2024')

 console.log(MyDate.toLocaleString());   //7/10/2024, 12:00:00 AM 

 console.log(MyDate.getMonth() + 1 );

 console.log(MyDate.getDay() );

 console.log(MyDate.getHours() );


 console.log('\n');

 let NewCreatedDate = new Date();

 NewCreatedDate.toLocaleString('default' ,{
    weekday : "long",
    
 })

 console.log(NewCreatedDate.toDateString());