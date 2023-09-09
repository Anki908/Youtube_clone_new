const nameList = [
    'John',
    'Emily',
    'Michael',
    'Sophia',
    'William',
    'Olivia',
    'James',
    'Emma',
    'Alexander',
    'Ava',
    'Daniel',
    'Isabella',
    'Christopher',
    'Mia',
    'Matthew',
    'Charlotte',
    'Joseph',
    'Amelia',
    'Andrew',
    'Ella',
    'David',
    'Grace',
    'Benjamin',
    'Liam',
    'Elizabeth',
    'Daniel',
    'Abigail',
    'Henry',
    'Sofia',
    'Matthew',
    'Lucas',
    'Samuel',
    'Ethan',
    'Oliver',
    'Scarlett',
    'Aiden',
    'Lily',
    'Mason',
    'Chloe',
    'Elijah',
    'Madison',
    'Jackson',
    'Avery',
    'William',
    'Evelyn',
    'David',
    'Zoe',
    'Nathan',
    'Natalie',
    'Jonathan',
    'Grace',
    'Nicholas',
    'Lillian',
    'Jacob',
    'Hannah',
    'Joshua',
    'Victoria',
    'Christian',
    'Aria',
    'Ryan',
    'Alexa',
    'Noah',
    'Aubrey',
    'Evan',
    'Stella',
    'William',
    'Scarlet',
    'Gabriel',
    'Luna',
    'Logan',
    'Penelope',
    'Carter',
    'Hazel',
    'Isaac',
    'Mila',
    'Eli',
    'Nora',
    'Samuel',
    'Audrey',
    'Anthony',
    'Bella',
    'Thomas',
    'Ariana',
    'Jackson',
    'Leah',
    'James',
    'Savannah',
    'Luke',
    'Camila',
    'Daniel',
    'Eleanor',
    'Joseph',
    'Haley',
    'William',
    'Addison',
    'Matthew',
    'Natalia',
    'Lucas',
    'Violet',
    'Alexander',
    'Hannah',
    'Ethan',
    'Claire',
    'Liam',
    'Samantha',
    'Joshua',
    'Aaliyah',
  ];
  
  export function generateName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
  }

  const conversationMessages = [
    "How's the weather today?",
    'Any exciting plans for the weekend?',
    'Recommend any good movies to watch?',
    "What's your favorite type of music?",
    'Have you tried a new restaurant recently?',
    "Any interesting hobbies you've picked up?",
    'Did you catch any sports events lately?',
    "What's your dream vacation spot?",
    'Any book recommendations?',
    'How do you like to spend your free time?',
    'Have you explored any cool hiking trails?',
    'Tell me about your recent travels.',
    "What's your favorite season of the year?",
    'Do you have any furry friends at home?',
    'Have you been to any exciting places recently?',
    'Pizza or sushi for dinner?',
    'Do you enjoy experimenting with cooking?',
    "What's the last live concert you attended?",
    "Any good books you've read lately?",
    'Share a recent highlight of your week.',
    "Coffee or tea, which one's your go-to?",
    'Favorite type of cuisine to indulge in?',
  ];
  
  
  export function getMessage() {
    return conversationMessages[
      Math.floor(Math.random() * conversationMessages.length)
    ];
  }

  export const formatCompactNumber = number => {
    if (number < 1000) {
        return number;
    } else if (number >= 1000 && number < 1_000_000) {
        return (number / 1000).toFixed(1) + "K";
    } else if (number >= 1_000_000 && number < 1_000_000_000) {
        return (number / 1_000_000).toFixed(1) + "M";
    } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
        return (number / 1_000_000_000).toFixed(1) + "B";
    } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
        return (number / 1_000_000_000_000).toFixed(1) + "T";
    }
}