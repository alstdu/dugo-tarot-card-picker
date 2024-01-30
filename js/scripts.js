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
        reverseKeywords: ['reckless', 'careless', 'distracted', 'foolish'],
        imagePath: 'the-fool',
    },
    {
        title: 'The Magician',
        uprightKeywords: ['desire', 'willpower', 'ability', 'concentration'],
        reverseKeywords: ['manipulation', 'cunning', 'trickery', 'illusion'],
        imagePath: 'the-magician',
    },
    {
        title: 'The High Priestess',
        uprightKeywords: ['intuition', 'higher power', 'mystery', 'unconscious'],
        reverseKeywords: ['repressed intuition', 'hidden motives', 'superficiality', 'confusion', 'cognitive dissonance'],
        imagePath: 'the-high-priestess',
    },
    {
        title: 'The Empress',
        uprightKeywords: ['beauty', 'nurturing', 'femininity', 'nature', 'abundance'],
        reverseKeywords: ['negligence', 'smothering', 'lack of growth', 'lack of progress'],
        imagePath: 'the-empress',
    },
    {
        title: 'The Emperor',
        uprightKeywords: ['authority', 'control', 'protection', 'structure'],
        reverseKeywords: ['domineering', 'rigid', 'stubborn', 'lack of discipline', 'recklessness'],
        imagePath: 'the-emperor',
    },
    {
        title: 'The Heirophant',
        uprightKeywords: ['tradition', 'social groups', 'knowledge', 'beliefs'],
        reverseKeywords: ['rebellion', 'unconventionality', 'non-conformity', 'new methods', 'ignorance'],
        imagePath: 'the-heirophant',
    },
    {
        title: 'The Lovers',
        uprightKeywords: ['love', 'unions', 'partnerships', 'relationships', 'choices', 'romance', 'balance', 'unity'],
        reverseKeywords: ['disharmony', 'imbalance', 'conflict', 'detachment'],
        imagePath: 'the-lovers',
    },
    {
        title: 'The Chariot',
        uprightKeywords: ['success', 'ambition', 'determination', 'focus'],
        reverseKeywords: ['forceful', 'no direction', 'no control', 'powerless', 'aggression', 'obstacles'],
        imagePath: 'the-chariot',
    },
    {
        title: 'Strength',
        uprightKeywords: ['courage', 'bravery', 'confidence', 'compassion', 'self-confidence', 'inner power'],
        reverseKeywords: ['self-doubt', 'weakness', 'low confidence'],
        imagePath: 'strength',
    },
    {
        title: 'The Hermit',
        uprightKeywords: ['introspection', 'contemplation', 'withdrawal', 'solitude', 'search for self'],
        reverseKeywords: ['loneliness', 'isolation', 'recluse', 'rejection'],
        imagePath: 'the-hermit',
    },
    {
        title: 'Wheel of Fortune',
        uprightKeywords: ['change', 'cycles', 'fate', 'decisive moments', 'luck'],
        reverseKeywords: ['bad luck', 'lack of control', 'unwelcome change'],
        imagePath: 'wheel-of-fortune',
    },
    {
        title: 'Justice',
        uprightKeywords: ['accountability', 'law', 'truth', 'honesty', 'integrity', 'cause and effect'],
        reverseKeywords: ['dishonesty', 'misinformation', 'unfairness'],
        imagePath: 'justice',
    },
    {
        title: 'The Hanged Man',
        uprightKeywords: ['sacrifice', 'release', 'martyrdom'],
        reverseKeywords: ['stalling', 'needless sacrifice', 'fear of letting go'],
        imagePath: 'the-hanged-man',
    },
    {
        title: 'Death',
        uprightKeywords: ['end of cycle', 'beginnings', 'change'],
        reverseKeywords: ['fear of change', 'holding on', 'stagnation', 'decay'],
        imagePath: 'death',
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
const titleElm = document.querySelector( '#card-title' );
const cardImageElm = document.querySelector( '#card' );
const keywordElm = document.querySelector( '#keyword-container' );

drawButton.addEventListener( 'click', () => {
    const card = chooseACard();
    const isReversed = decideIfReversed();
    const title = isReversed ? card.title + ' Reversed' : card.title;
    const keywords = isReversed ? card.reverseKeywords : card.uprightKeywords;
    populateTitle( title );
    populatePath( card.imagePath );
    populateKeywords( keywords.join( ' ' ) );
    setImageIsReversed( isReversed );
} );

const populateTitle = ( title ) => {
    titleElm.innerHTML = title;
};

const populatePath = ( path ) => {
    cardImageElm.src = '../assets/cards/' + path + '.png';
};

const populateKeywords = ( keywords ) => {
    keywordElm.innerHTML = keywords;
};

const setImageIsReversed = ( isReversed ) => {
    const transform = isReversed ? 'rotate(180deg)' : 'rotate(0deg)';
    cardImageElm.style.transform = transform;
};
