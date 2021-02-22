const fs = require('fs');
const axios = require('axios')

let arrayOfShowsID = [1, 2,3,4,5,6,7,8,9,10]

const pullShows = async () => {

  let arrayOfShows = []
   arrayOfShowsID.forEach((item, index) => {
    setTimeout(() => {
      axios.get(`http://api.tvmaze.com/shows/${item}`)
        .then(async response => {
          let element = await response.data

          if (index == arrayOfShowsID.length-1) {
            arrayOfShows.push(element)
            const jsonArray =  JSON.stringify(arrayOfShows)
            fs.writeFile("./shows.json", jsonArray, 'utf8', (err) => {
              if (err) {
                return console.log(err);
              }
              console.log("The file was saved!");
            });
          } else {
            arrayOfShows.push(element)
          }

        })

    }, item * 2000)
  })
// clean below 
 
  
  

}

pullShows()


////////PREVIOUS ATTEMPTt

// const fs = require('fs');
// const axios = require('axios')

// let arrayOfShows = []

// for(let i=1; i< 3; i++) {
//     axios.get(`http://api.tvmaze.com/shows/${i}`)
//     .then(async response => {
//     let show = await response.data
//     console.log(show)
//     arrayOfShows.push(show)
//     return arrayOfShows
//         })
//         .then((theArray) => {
//           let mappedArray = JSON.stringify(theArray)
//           fs.writeFile("./shows.json", mappedArray, 'utf8', function (err) {
//             if (err) {
//                     return console.log(err);
//             }

//                 console.log("The file was saved!");
//             }); 
//         })
//       }
