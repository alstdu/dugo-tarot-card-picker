/**
 * Set up some an array of objects that represent cards in a deck.
 *  They should contain a cardId, an image path, and a list of keyword strings.
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

const tarotCards = [
    {
        cardId: 0,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 1,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 2,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 3,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 4,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 5,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 6,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 7,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 8,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 9,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 10,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 11,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 12,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 13,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 14,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 15,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 16,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 17,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 18,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 19,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 20,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 21,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 22,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 23,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 24,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 25,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 26,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 27,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 28,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 29,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 30,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 31,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 32,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 33,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 34,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 35,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 36,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 37,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 38,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 39,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 40,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 41,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 42,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 43,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 44,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 45,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 46,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 47,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 48,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 49,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 50,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 51,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 52,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 53,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 54,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 55,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 56,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 57,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 58,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 59,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 60,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 61,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 62,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 63,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 64,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 65,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 66,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 67,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 68,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 69,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 70,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 71,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 72,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 73,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 74,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 75,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 76,
        keywords: [],
        imagePath: '',
    },
    {
        cardId: 77,
        keywords: [],
        imagePath: '',
    },
];
