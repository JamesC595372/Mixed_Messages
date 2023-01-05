//Generates a random number to be used with the arrays
const numberGenerator = num => {
    return Math.floor(Math.random() * num);
}

const storyPieces = {
    adjective: ['angry', 'slow', 'quick', 'dangerous', 'happy', 'creepy', 'confused'],
    colour: ['red', 'brown', 'grey', 'black', 'silver', 'ginger', 'white'],
    animal: ['cat', 'dog', 'bear', 'fox', 'mouse', 'wolf', 'horse'],
    movement: ['crept', 'dashed', 'leapt', 'crawled', 'rolled', 'slid', 'dived'],
    destination: ['bush.', 'cave.', 'river.', 'lake.', 'hole.']
}

//Empty array to hold the combined story
let myStory = [];

//Selecting the random story pieces using the number generator
for (let prop in storyPieces) {
    const storyID = numberGenerator(storyPieces[prop].length);

    switch(prop) {
        case 'adjective':
            myStory.push(`The ${storyPieces[prop][storyID]}`);
            break;
        case 'colour':
            myStory.push(`${storyPieces[prop][storyID]}`);
            break;
        case 'animal':
            myStory.push(`${storyPieces[prop][storyID]}`);
            break;
        case 'movement':
            myStory.push(`${storyPieces[prop][storyID]}`);
            break;
        case 'destination':
            myStory.push(`${storyPieces[prop][storyID]}`);
            break;
        default:
            myStory.push('Sorry, I couldn\'t think of a story for you :(');
    }
}

//Formatting the random story pieces
const formatStory = story => {
    console.log('Please enjoy this short story I made for you! :)');
    console.log('------------------------------------------------');
    myStory.splice(4, 0, 'into the')
    console.log(myStory.join(' '));
    console.log('------------------------------------------------');
}

formatStory(myStory)