/**
 * Set up some an array of objects that represent cards in a deck.
 *  They should contain a title, an image path, and a list of keyword and reverse keyword strings.
 * Set up a function that chooses a random card from the list
 * Set up functions for interacting with the dom.
 *  Add event listeners to buttons.
 *  Add a function to populate the image src when a card is selected.
 *  Add a function to clear the cards from the screen.
 *  Add functions to change which buttons are shown on screen depending on state.
 */

// TODO: should be in a separate file
const tarotCards = [
    {
        title: '1',
        uprightKeywords: [],
        reverseKeywords: [],
        imagePath: '',
    },
    {
        title: '2',
        uprightKeywords: [],
        reverseKeywords: [],
        imagePath: '',
    },
    {
        title: '3',
        uprightKeywords: [],
        reverseKeywords: [],
        imagePath: '',
    },
    {
        title: '4',
        uprightKeywords: [],
        reverseKeywords: [],
        imagePath: '',
    },
    {
        title: '5',
        uprightKeywords: [],
        reverseKeywords: [],
        imagePath: '',
    },
];

const chooseACard = () => {
    const randomIndex = Math.floor( Math.random() * tarotCards.length );
    return tarotCards[randomIndex];
};

const drawButton = document.querySelector( '#draw-a-card' );

drawButton.addEventListener( 'click', () => {
    const card = chooseACard();
    populateTitle( card.title );
} );

const populateTitle = ( title ) => {
    const titleElm = document.querySelector( '#card-title' );
    titleElm.innerHTML = title;
};
