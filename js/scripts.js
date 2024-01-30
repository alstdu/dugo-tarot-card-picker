/**
 *  Need To Add Alt text for the images eventually for accessibility
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
    {
        title: 'Temperance',
        uprightKeywords: ['middle path', 'patience', 'finding meaning'],
        reverseKeywords: ['extremes', 'excess', 'lack of balance'],
        imagePath: 'temperance',
    },
    {
        title: 'The Devil',
        uprightKeywords: ['obsession', 'dependency', 'excess', 'powerlessness'],
        reverseKeywords: ['independence', 'freedom', 'revelation', 'release', 'reclaiming power'],
        imagePath: 'the-devil',
    },
    {
        title: 'The Tower',
        uprightKeywords: ['sudden upheaval', 'broken pride', 'disaster', 'breaking down walls'],
        reverseKeywords: ['averting disaster', 'delaying the inevitable', 'resisting change', 'holding it together'],
        imagePath: 'the-tower',
    },
    {
        title: 'The Star',
        uprightKeywords: ['inspiration', 'positivity', 'faith', 'healing', 'rejuvenation'],
        reverseKeywords: [' despair', 'negativity', 'lack of faith'],
        imagePath: 'the-star',
    },
    {
        title: 'The Moon',
        uprightKeywords: ['unconscious', 'illusions', 'intuition', 'complexity', 'secrets'],
        reverseKeywords: ['deception', 'anxiety', 'misunderstanding', 'misinterpretation'],
        imagePath: 'the-moon',
    },
    {
        title: 'The Sun',
        uprightKeywords: ['joy', 'success', 'celebration', 'positivity'],
        reverseKeywords: ['negativity', 'depression', 'sadness', 'failure'],
        imagePath: 'the-sun',
    },
    {
        title: 'Judgement',
        uprightKeywords: ['reflection', 'reckoning', 'awakening'],
        reverseKeywords: ['lack of self-awareness', 'failure to learn lessons', 'self-loathing'],
        imagePath: 'judgement',
    },
    {
        title: 'The World',
        uprightKeywords: ['fulfillment', 'harmony', 'completion', 'sense of belonging'],
        reverseKeywords: ['lack of achievement', 'feeling incomplete', 'emptiness'],
        imagePath: 'the-world',
    },
    {
        title: 'Knight of Wands',
        uprightKeywords: ['action', 'adventure', 'fearlessness'],
        reverseKeywords: ['anger', 'impulsiveness', 'recklessness'],
        imagePath: 'knight-of-wands',
    },
    {
        title: 'King of Wands',
        uprightKeywords: ['big picture', 'leader', 'overcoming challenges'],
        reverseKeywords: ['impulsive', 'overbearing', 'unrealistic expectations'],
        imagePath: 'king-of-wands',
    },
    {
        title: 'Queen of Wands',
        uprightKeywords: ['courage', 'determination', 'joy'],
        reverseKeywords: ['selfishness', 'jealousy', 'insecurities'],
        imagePath: 'queen-of-wands',
    },
    {
        title: 'Page of Wands',
        uprightKeywords: ['exploration', 'excitement', 'freedom'],
        reverseKeywords: ['lack of direction', 'procrastination', 'creating conflic'],
        imagePath: 'page-of-wands',
    },
    {
        title: 'Two of Wands',
        uprightKeywords: ['planning', 'making decisions', 'leaving home'],
        reverseKeywords: ['fear of change', 'playing safe', 'bad planning'],
        imagePath: 'two-of-wands',
    },
    {
        title: 'Three of Wands',
        uprightKeywords: ['looking ahead', 'expansion', 'rapid growth'],
        reverseKeywords: ['obstacles', 'delays', 'frustration'],
        imagePath: 'three-of-wands',
    },
    {
        title: 'Four of Wands',
        uprightKeywords: ['community', 'home', 'celebration', 'belonging'],
        reverseKeywords: ['lack of support', 'instability', 'home conflict', 'feeling unwelcome'],
        imagePath: 'four-of-wands',
    },
    {
        title: 'Five of Wands',
        uprightKeywords: ['competition', 'arguments', 'aggression', 'tension'],
        reverseKeywords: ['cooperation', 'agreements', 'truces'],
        imagePath: 'five-of-wands',
    },
    {
        title: 'six of Wands',
        uprightKeywords: ['victory', 'success', 'triumph'],
        reverseKeywords: ['excess pride', 'lack of recognition', 'punishment'],
        imagePath: 'six-of-wands',
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
    populateKeywords( keywords );
    setImageIsReversed( isReversed );
} );

const populateTitle = ( title ) => {
    titleElm.innerHTML = title;
};

const populatePath = ( path ) => {
    cardImageElm.src = '../assets/cards/' + path + '.png';
};

const populateKeywords = ( keywords ) => {
    keywordElm.innerHTML = '';
    keywords.forEach( ( keyword ) => {
        const spanElm = document.createElement( 'span' );
        keywordElm.appendChild( spanElm );
        spanElm.classList.add( 'keyword' );
        spanElm.innerText = keyword;
    } );
};

const setImageIsReversed = ( isReversed ) => {
    const transform = isReversed ? 'rotate(180deg)' : 'rotate(0deg)';
    cardImageElm.style.transform = transform;
};
