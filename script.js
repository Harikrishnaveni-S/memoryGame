const cardsArray = [
    {
        name: 'tree',
        icon: '<i class="fa-solid fa-tree"></i>'
    },
    {
        name: 'feather',
        icon: '<i class="fa-solid fa-feather"></i>'
    },
    {
        name: 'cloudSun',
        icon: '<i class="fa-solid fa-cloud-sun"></i>'
    },
    {
        name: 'water',
        icon: '<i class="fa-solid fa-water"></i>'
    },
    {
        name: 'leaf',
        icon: '<i class="fa-brands fa-canadian-maple-leaf"></i>'
    },
    {
        name: 'fire',
        icon: '<i class="fa-solid fa-fire"></i>'
    },
    {
        name: 'tree',
        icon: '<i class="fa-solid fa-tree"></i>'
    },
    {
        name: 'feather',
        icon: '<i class="fa-solid fa-feather"></i>'
    },
    {
        name: 'cloudSun',
        icon: '<i class="fa-solid fa-cloud-sun"></i>'
    },
    {
        name: 'water',
        icon: '<i class="fa-solid fa-water"></i>'
    },
    {
        name: 'leaf',
        icon: '<i class="fa-brands fa-canadian-maple-leaf"></i>'
    },
    {
        name: 'fire',
        icon: '<i class="fa-solid fa-fire"></i>'
    }
]
const gameBoard = document.getElementById('gameBoard');
let randomIndex ;
let flippedCards=[];
let matchedPairs=0;

shuffleCards();
displayCards();
// console.log(cardsArray)

function shuffleCards() {
    for (let i = cardsArray.length - 1; i >= 0; i--) {
         randomIndex = Math.floor(Math.random() * i);
        [cardsArray[i], cardsArray[randomIndex]] = [cardsArray[randomIndex], cardsArray[i]];
    }
}

function displayCards()
{
    cardsArray.forEach((curr,index,arr)=>{
       const card =  document.createElement('div');
       card.setAttribute('id',index)
       card.classList.add('cardBack')
       card.classList.add('active')
       gameBoard.appendChild(card);
       card.addEventListener('click',flipCard)
    })
}

function flipCard()
{
    if(flippedCards.length<2 && this.classList.contains('active'))
    {
        let cardId = this.getAttribute('id')
        // console.log(cardId)
        // console.log(this)
        flippedCards.push(this);
        this.classList.remove('cardBack');
        // console.log('cardBack removed')
        this.innerHTML = cardsArray[cardId].icon
        console.log(flippedCards)

        if(flippedCards.length==2 && this.classList.contains('active'))
        {
            setTimeout(checkMatch,1000)
        }
    }

}


function checkMatch()
{
    let card1= flippedCards[0].getAttribute('id')
    let card2 = flippedCards[1].getAttribute('id')
    if(cardsArray[card1].name === cardsArray[card2].name){
        flippedCards[0].style.border = 'none'
        flippedCards[0].innerHTML='';
        flippedCards[0].classList.remove('active');
        flippedCards[0].style.background='rgb(226, 174, 128)'
        flippedCards[1].style.border = 'none'
        flippedCards[1].innerHTML='';
        flippedCards[1].classList.remove('active');
        flippedCards[1].style.background='rgb(226, 174, 128)'
        matchedPairs++;
        checkGameOver();
    }

    else{
        flippedCards[0].innerHTML='';
        flippedCards[0].classList.add('cardBack');
        flippedCards[1].innerHTML='';
        flippedCards[1].classList.add('cardBack');
    }

    flippedCards=[];
}


function checkGameOver()
{
    if(matchedPairs == cardsArray.length/2)
    {
        while(gameBoard.firstChild)
        {
            gameBoard.removeChild(gameBoard.firstChild);
        }

    gameBoard.innerHTML = 'You Won &#128512';
    gameBoard.classList.remove('game');
    gameBoard.classList.add('won')
    }
}