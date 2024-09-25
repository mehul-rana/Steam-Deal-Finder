document.querySelector('#findDeal').addEventListener('click', findDeal)
document.querySelector('#nextDeal').addEventListener('click', nextDeal)

let i = 0;
let gamesLength;

function findDeal(){
  const choice = document.querySelector('input').value
  const url = `https://www.cheapshark.com/api/1.0/games?title=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
            document.querySelector('h2').innerText = data[i].external
            document.querySelector('img').src = data[i].thumb
            document.querySelector('#cheap').innerText = data[i].cheapest
            document.querySelector('#steamID').innerText = data[i].steamAppID
    
        gamesLength = data.length
          
          let steamAppIDArr = []

          for(const property in data[i]){
            if(property.includes('steamAppID') && data[i][property] !== null){
              steamAppIDArr.push(data[i][property])
            }
          }

          console.log(steamAppIDArr)
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function nextDeal(){
  i++
  if(i == gamesLength) i = 0;
  findDeal()
}