// Store each input as a variable (there should be two input boxes - one for each answer) [x ]
// 2. Store the button as a variable (there should be ONE button) [ x]
// 3. Create a click handler [ x]
// 4. Use the .value property to store user input [x ]
// 5. Add console.log to test if the code is being stored [ ]
// 6. Write a conditional statement with else-if to include all 4 possible results [ ]
// 7. Write a compound conditional statement that uses input from both questions to provide the user with a result [ ]
// 8. Write a sentence using string concatenation using the data stored in the user input variables [ ]
// 9. Add a next level feature! [ ]


let submit=document.querySelector(".buttonsubmit");
let  reasultHowl=document.querySelector(".howl");
let  reasultTwilight=document.querySelector(".twilight");
let reasultPearl=document.querySelector(".pearl");
let reasultNottinghill=document.querySelector(".nottinghill");
let nameButton=document.querySelector(".namebutton");
let movieimg=document.querySelector(".movieimg");
let movietext=document.querySelector(".movietext");
  

submit.onclick=function(){
let inputOne=document.querySelector(".inputone").value;
let inputTwo=document.querySelector(".inputtwo").value;
  
  if (inputOne == "formal" 
     && inputTwo == "sweet"){ 
    movieimg.src="https://images.squarespace-cdn.com/content/v1/571abd61e3214001fb3b9966/1633559610525-KU59VDS0A9RPZIXUIEZC/GhibliFest_Posters_Fathom_2021_Badge_Howls.jpg?format=1000w"
    movietext.innerHTML ="A wholesome movie for a wholesome person!"
     }
    
 else if (inputOne == "comfy" 
     && inputTwo == "sweet"){
     movieimg.src="https://m.media-amazon.com/images/I/61t+12Qr+qL.jpg"
    movietext.innerHTML ="You live your life by delusion and I love that!"
     }
    
  else if (inputOne == "formal" 
     && inputTwo == "spicy"){
    movieimg.src="https://i.ebayimg.com/images/g/YokAAOSwQo1i4lTx/s-l500.jpg https://m.media-amazon.com/images/I/61t+12Qr+qL.jpg" 
    movietext.innerHTML ="You are a star!"
     }
    
  else if (inputOne == "comfy" 
     && inputTwo == "spicy"){
    movieimg.src="https://amc-theatres-res.cloudinary.com/v1579118793/amc-cdn/production/2/movies/15900/15874/Poster/p_800x1200_Twilight_En_050316.jpg"
    movietext.innerHTML ="do you also wish life had that blue filter on it?"
     }          






  
};

