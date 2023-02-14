var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]
for ( var i = 0; i < cohortOneStudents.length; i++){
 //   console.log(cohortOneStudents[i])
}
var myInterests = ["playing video games", "writing fantastical stories", "peeling the plastic off of new electronics", "taking naps", "listening to hour long YouTube videos on topics I'm only vaguely interested in"]

let myFavoriteInterest = myInterests[0]

for (var i = 0; i < myInterests.length; i++){
    if (myInterests[i] === myFavoriteInterest){
        console.log(`My absolute favorite interest is: ${myFavoriteInterest}`)
    }

  else {
    console.log(`One of my interests is: ${myInterests[i]}`)
    ;
  }
    
}
