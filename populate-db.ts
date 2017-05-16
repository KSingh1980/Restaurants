import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./firebase.config";
import {dbData,restaurantconfig} from "./db-data";



console.log('Initizalizing Firebase database ... ');

initializeApp(firebaseConfig);


const resconfigRef = database().ref('restaurantconfig');
//const foodMenuRef = database().ref('restaurants/foodmenu');



restaurantconfig.restaurants.forEach( restaurant => {

  console.log('adding restaurantconfig', restaurant.type);


  const rescloudconfigRef = resconfigRef.push({
      type:restaurant.type
    
  });
  rescloudconfigRef.child("foodmenu");
 

  let foodmenutItemPerRestaurant = [];

  restaurant.foodmenu.forEach((foodItem:any) =>  {

   
    console.log('adding foodmenu ', foodItem);

    rescloudconfigRef.child("foodmneu").push({
        name:foodItem.name,
        description: foodItem.description,
        urlofimage: foodItem.urlofimage
      
      });
 
  });

});


//How to read from database and create new instance .
