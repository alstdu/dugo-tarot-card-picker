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
        title: 'The Fool',
        uprightKeywords: ['beginnings', 'innocence', 'idealism', 'adventure'],
        reverseKeywords: [],
        imagePath: 'the-fool',
    },
    {
        title: 'The Magician',
        uprightKeywords: ['desire', 'willpower', 'ability', 'concentration'],
        reverseKeywords: [],
        imagePath: 'the-magician',
    },
    {
        title: 'The High Priestess',
        uprightKeywords: ['intuition', 'higher power', 'mystery', 'unconscious'],
        reverseKeywords: [],
        imagePath: 'the-high-priestess',
    },
    {
        title: 'The Empress',
        uprightKeywords: ['beauty', 'nurturing', 'femininity', 'nature', 'abundance'],
        reverseKeywords: [],
        imagePath: 'the-empress',
    },
    {
        title: 'The Emperor',
        uprightKeywords: ['authority', 'control', 'protection', 'structure'],
        reverseKeywords: [],
        imagePath: 'the-emperor',
    },
];

const chooseACard = () => {
    const randomIndex = Math.floor( Math.random() * tarotCards.length );
    return tarotCards[randomIndex];
};

const decideIfReversed = () => {
    return Math.random() >= 0.5;
};

const drawButton = document.querySelector( '#draw-a-card' );

drawButton.addEventListener( 'click', () => {
    const card = chooseACard();
    const isReversed = decideIfReversed();
    const title = isReversed ? card.title + ' Reversed' : card.title;
    const keywords = isReversed ? card.reverseKeywords : card.uprightKeywords;
    populateTitle( title );
    populatePath( card.imagePath );
    populateKeywords( keywords.join( ' ' ) );
} );

const populateTitle = ( title ) => {
    const titleElm = document.querySelector( '#card-title' );
    titleElm.innerHTML = title;
};

const populatePath = ( path ) => {
    const cardImageElm = document.querySelector( '#card' );
    cardImageElm.src = '../assets/cards/' + path + '.png';
};

const populateKeywords = ( keywords ) => {
    const keywordElm = document.querySelector( '#keyword-container' );
    keywordElm.innerHTML = keywords;
};
