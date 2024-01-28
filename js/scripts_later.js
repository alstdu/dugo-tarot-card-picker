/**
 * X Set up some an array of objects that represent cards in a deck.
 *  X They should contain a cardId, an image path, and a list of keyword strings.
 * Set up a function that chooses a random card from the list
 * Set up a function that chooses two or three random cards from the list
 *  To do this, select one number between 0 and the deck size,
 *  then select another from 0 to the deck size minus 1.
 *  Then check if the second number is equal to or greater than the first number.
 *  If it is, add 1 to the second number.
 *  You can extrapolate this process for selecting three cards.
 * Set up functions for interacting with the dom.
 *  Add event listeners to buttons.
 *  Add a function to populate the image src when a card is selected.
 *  Add a function to clear the cards from the screen.
 *  Add functions to change which buttons are shown on screen depending on state.
 */

const lang = 'en';

const cardTitles = {
    en: {
        the_fool: 'The Fool',
    },
};

const keywords = {
    en: {
        innocence: 'innocence',
        self_sabotage: 'self sabotage',
    },
};

const tarotCards = [
    {
        title: 'the_fool',
        uprightKeywords: ['innocence'],
        reversedKeywords: ['self_sabotage'],
        imagePath: '',
    },
];

/**
 * Example of an object in here
 * {
 *     index: 0,
 *     reversed: false,
 *     tarotCard: tarotCards[0],
 * },
 */
const drawnCards = [];

const getRandomIndexes = ( count ) => {
    if ( count > tarotCards.length ) {
        // panic
        return;
    }

    const randomIndexes = [];

    // randomIndexes[0] = getRandomBetween( 0, tarotCards.length );
    // randomIndexes[1] = getRandomBetween( 0, tarotCards.length - 1 );
    // if ( randomIndexes[1] >= randomIndexes[0] ) {
    //     randomIndexes[1] += 1;
    // }
    // randomIndexes[2] = getRandomBetween( 0, tarotCards.length - 2 );
    // if ( randomIndexes[2] >= randomIndexes[0] ) {
    //     randomIndexes[2] += 1;
    // }
    // if ( randomIndexes[2] >= randomIndexes[1] ) {
    //     randomIndexes[2] += 1;
    // }

    for ( let i = 0; i < count; i++ ) {
        randomIndexes[i] = getRandomBetween( 0, tarotCards.length - i );
        for ( let j = i - 1; j >= 0; j-- ) {
            if ( randomIndexes[i] >= randomIndexes[j] ) {
                randomIndexes[i] += 1;
            }
        }
    }

    return randomIndexes;
};
