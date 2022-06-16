function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride<=400){return 'This one is on me!' }  
  if(ride >400 && ride <=2000){
    return 'That will be twenty bucks.'
 }
 if(ride>2000 && ride<=2500) {return "I will gladly take your thirty bucks."}
 else if(ride > 2500)  { return "No can do."}

}

function ternaryCheckCity(city){
  // Write your code here!

const destination = (city === "NYC" ) ? "Ok, sounds good." : "No go."
  return destination;

}

function switchOnCharmFromTip(generous){
  // Write your code here!
  let tip = generous 

  let response

  switch (tip) { 
    case 'generous':
       return response = 'Thank you so much.';
         break;

         case 'not as generous':
         return response = 'Thank you.';
         break;

        default :
      return 'Bye.'
    break; } 
}
