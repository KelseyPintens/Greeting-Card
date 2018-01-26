
const CardMaker = {


    makeFrontMessage: function(string) {
      return `<h2>${string}</h2>`
    }
  }
    
CardMaker.makeInnerMessage = function(string) {
      return `<h2>${string}</h2>`
  
}


const BirthdayCard = Object.create(CardMaker)

document.getElementById("card").innerHTML = BirthdayCard.makeFrontMessage("Happy Birthday");
document.getElementById("inside").innerHTML = BirthdayCard.makeInnerMessage("Hope it's bomb!")


// AdultB = Object.create(BirthdayCard)


