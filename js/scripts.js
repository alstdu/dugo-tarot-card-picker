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
        keywords: ['love', 'compassion', 'new feelings', 'new relationships', 'spirituality'],
        imagePath: '',
    },
    {
        cardId: 1,
        keywords: ['unity', 'close bonds', 'mutual respect', 'connection'],
        imagePath: '',
    },
    {
        cardId: 2,
        keywords: ['friendship', 'community', 'social events', 'celebration'],
        imagePath: '',
    },
    {
        cardId: 3,
        keywords: ['boredom', 'indifference', 'discontent', 'contemplation'],
        imagePath: '',
    },
    {
        cardId: 4,
        keywords: ['loss', 'grief', 'feeling let down', 'saddness'],
        imagePath: '',
    },
    {
        cardId: 5,
        keywords: ['healing', 'comfort', 'nostalgia', 'memories'],
        imagePath: '',
    },
    {
        cardId: 6,
        keywords: ['daydreaming', 'wishes', 'illusion', 'choices'],
        imagePath: '',
    },
    {
        cardId: 7,
        keywords: ['letting go', 'abandonment', 'finding truth', 'leaving behind'],
        imagePath: '',
    },
    {
        cardId: 8,
        keywords: ['fulfilment', 'confidence', 'joy', 'wishes coming true'],
        imagePath: '',
    },
    {
        cardId: 9,
        keywords: ['happiness', 'emotional stability', 'domestic harmony', 'security'],
        imagePath: '',
    },
    {
        cardId: 10,
        keywords: ['idealism', 'innocence', 'inner child', 'sensitivity'],
        imagePath: '',
    },
    {
        cardId: 11,
        keywords: ['idealist', 'artistic', 'negotiation', 'diplomatic'],
        imagePath: '',
    },
    {
        cardId: 12,
        keywords: ['kindness', 'mature female', 'listener', 'feminitity', 'supportive'],
        imagePath: '',
    },
    {
        cardId: 13,
        keywords: ['wise', 'advisor', 'head and heart balance', 'diplomatic'],
        imagePath: '',
    },
    {
        cardId: 14,
        keywords: ['inspiration', 'new passion', 'energy', 'new initiative'],
        imagePath: '',
    },
    {
        cardId: 15,
        keywords: ['planning', 'first steps', 'taking risks', 'making decisions'],
        imagePath: '',
    },
    {
        cardId: 16,
        keywords: ['momentum', 'growth', 'expansion', 'confidence'],
        imagePath: '',
    },
    {
        cardId: 17,
        keywords: ['happy families', 'self-esteem', 'success', 'teamwork', 'proud of achievements'],
        imagePath: '',
    },
    {
        cardId: 18,
        keywords: ['conflict', 'aggression', 'tension', 'competition'],
        imagePath: '',
    },
    {
        cardId: 19,
        keywords: ['success', 'rewards', 'recognition', 'pride'],
        imagePath: '',
    },
    {
        cardId: 20,
        keywords: ['protectiveness', 'standing up for yourself', 'protecting'],
        imagePath: '',
    },
    {
        cardId: 21,
        keywords: ['movement', 'speed', 'sudden changes', 'progress'],
        imagePath: '',
    },
    {
        cardId: 22,
        keywords: ['courage', 'ongoing battle', 'low energy', 'setbacks'],
        imagePath: '',
    },
    {
        cardId: 23,
        keywords: ['obligation', 'struggles', 'burn-out', 'taking on too much'],
        imagePath: '',
    },
    {
        cardId: 24,
        keywords: ['adventure', 'extroverted', 'fearless', 'cheerful'],
        imagePath: '',
    },
    {
        cardId: 25,
        keywords: ['adventurous', 'free spirit', 'taking risks', 'energetic'],
        imagePath: '',
    },
    {
        cardId: 26,
        keywords: ['energetic', 'motivated', 'leader', 'optimistic', 'passionate'],
        imagePath: '',
    },
    {
        cardId: 27,
        keywords: ['social', 'self-assured', 'determined', 'charismatic'],
        imagePath: '',
    },
    {
        cardId: 28,
        keywords: ['clarity', 'vision', 'concentration', 'new idea'],
        imagePath: '',
    },
    {
        cardId: 29,
        keywords: ['serious', 'reason', 'authority', 'discipline'],
        imagePath: '',
    },
    {
        cardId: 30,
        keywords: ['direct', 'daring', 'focused', 'ambitious'],
        imagePath: '',
    },
    {
        cardId: 31,
        keywords: ['honest', 'constructive criticism', 'independent', 'fair'],
        imagePath: '',
    },
    {
        cardId: 32,
        keywords: ['witty', 'communicative', 'inspired', 'mental agility'],
        imagePath: '',
    },
    {
        cardId: 33,
        keywords: ['stalemate', 'denial', 'hidden information', 'difficult choices'],
        imagePath: '',
    },
    {
        cardId: 34,
        keywords: ['sorrow', 'separation', 'heartbreak', 'upset'],
        imagePath: '',
    },
    {
        cardId: 35,
        keywords: ['rest', 'relaxation', 'rejuvenation', 'peace'],
        imagePath: '',
    },
    {
        cardId: 36,
        keywords: ['disputes', 'bullying', 'stress', 'conflict'],
        imagePath: '',
    },
    {
        cardId: 37,
        keywords: ['moving on', 'distance', 'accepting lessons', 'departure'],
        imagePath: '',
    },
    {
        cardId: 38,
        keywords: ['lies', 'strategy', 'trickery', 'cunning'],
        imagePath: '',
    },
    {
        cardId: 39,
        keywords: ['trapped', 'helpless', 'imprisionment', 'restricted'],
        imagePath: '',
    },
    {
        cardId: 40,
        keywords: ['anxiety', 'fear', 'isolation', 'nightmares'],
        imagePath: '',
    },
    {
        cardId: 41,
        keywords: ['ruin', 'dead end', 'betrayal', 'failure'],
        imagePath: '',
    },
    {
        cardId: 42,
        keywords: ['resources', 'manifestation', 'new opportunities', 'stability'],
        imagePath: '',
    },
    {
        cardId: 43,
        keywords: ['adaptation', 'flexibility', 'balancing resources'],
        imagePath: '',
    },
    {
        cardId: 44,
        keywords: ['shared goals', 'pooling energy', 'collaboration', 'teamwork'],
        imagePath: '',
    },
    {
        cardId: 45,
        keywords: ['insecurity', 'stability', 'wealth', 'boundaries', 'possessiveness'],
        imagePath: '',
    },
    {
        cardId: 46,
        keywords: ['hardship', 'unemployment', 'isolation', 'struggle'],
        imagePath: '',
    },
    {
        cardId: 47,
        keywords: ['charity', 'sharing', 'giving and recieving', 'gratitude'],
        imagePath: '',
    },
    {
        cardId: 48,
        keywords: ['harvest', 'planning', 'rewards', 'results'],
        imagePath: '',
    },
    {
        cardId: 49,
        keywords: ['skill', 'high standards', 'mastery', 'accomplishment'],
        imagePath: '',
    },
    {
        cardId: 50,
        keywords: ['achievement', 'self-sufficiency', 'success'],
        imagePath: '',
    },
    {
        cardId: 51,
        keywords: ['solid foundations', 'old money', 'riches', 'security'],
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
