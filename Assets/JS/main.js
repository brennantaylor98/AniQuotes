var main = document.getElementById('main1')
var btn = document.getElementById('searchbutton')




function getQuote() {
fetch("https://animechan.vercel.app/api/random")
.then((reponse) => reponse.json())
.then((response) => {
    console.log(response)
    
    var titleEl = $('<div>').addClass('quotecard')
    var nameEl = $('<div>').addClass('quotecard')
    var theQuote = $('<div>').addClass('quotecard')
    

    var animeEl = response.anime
    var characterEl = response.character
    var quoteEl = response.quote
   
  titleEl.append(animeEl)
  nameEl.append(characterEl)
  theQuote.append(quoteEl)

  for (let i = 0; i < response.length; i++)
$('.main').append(titleEl, nameEl, theQuote)

})
}



btn.addEventListener('click', getQuote)






//user opens page

//page displays ?? along with a button that says find quote

//when find quote button is pressed then 3-4 anime characters displays at an angle on the side down the page

//the quote comes up along with a picture of the character 

//button can be pressed to refresh the quotes



