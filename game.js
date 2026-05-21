"use strict";

const STORAGE_KEY = "blueRedEyeCandideState";
const SETTINGS_KEY = "blueRedEyeCandideSettings";

const DEFAULT_SETTINGS = {
  length: "standard",
  ratio: "balanced",
  fontSize: 20,
  letterSpacing: 1,
  lineSpacing: 165,
  plainText: false,
  reduceGlow: false,
  standardFont: false,
  highContrast: false,
  muted: false,
  volume: 45
};

const VALID_LENGTHS = ["short", "standard", "long"];
const VALID_RATIOS = ["balanced", "moreRed", "moreBlue"];

const characterLabels = {
  narrator: "Narrator",
  candide: "Candide",
  pangloss: "Pangloss",
  cunegonde: "Cunegonde",
  martin: "Martin",
  cop: "NYPD Cop",
  "mets-fan": "Mets Fan",
  "flyer-guy": "Flyer Guy"
};

const stages = [
  {
    title: "Penn Station Awakening",
    art: "+----------------------+\n| PENN STATION BOARD   |\n| 7 TRAIN? LOL, WALK   |\n| DELAYS: EMOTIONAL    |\n+----------------------+",
    scenes: {
      short: [
        ["narrator", "Candide wakes under the Penn Station departure board clutching a pretzel receipt like a royal decree."],
        ["candide", "Good Pan, are we near Citi Field?"],
        ["pangloss", "We are near every possible destination, therefore this is optimal."],
        ["martin", "We are near a trash can wearing confidence."]
      ],
      standard: [
        ["narrator", "Candide wakes beneath the Penn Station departure board, holding a pretzel receipt and half a dream about baseball."],
        ["candide", "Good Pan, are we near Citi Field, or merely near despair with fluorescent lighting?"],
        ["pangloss", "My dear Can, Penn Station is the navel of all journeys. If we are lost here, we are lost in the finest possible way."],
        ["martin", "The finest possible way smells like wet cardboard and panic."],
        ["cunegonde", "Everyone stand up. The game will not wait for your philosophy cramps."]
      ],
      long: [
        ["narrator", "Candide wakes beneath the Penn Station departure board, holding a pretzel receipt, a confused MetroCard, and half a dream about baseball under Queens lights."],
        ["candide", "Good Pan, are we near Citi Field, or have we been placed inside a basement designed by a committee of angry clocks?"],
        ["pangloss", "My dear Can, this station is the navel of all journeys. Every incorrect staircase prepares the soul for eventual correctness."],
        ["martin", "That is a beautiful way to say we slept next to a trash can wearing confidence."],
        ["cunegonde", "Everyone stand up. The game will not wait while Pangloss compliments the floor tiles."],
        ["narrator", "Above them, the board flashed delays, cancellations, and one suspiciously cheerful advertisement for salad."]
      ]
    },
    questions: [
      makeQuestion("What is Candide holding when he wakes up?", ["A pretzel receipt", "A foam finger", "A taxi medallion", "A tiny trumpet"], 0, "Not quite. Pangloss could make a tiny trumpet sound historic, but Candide has a pretzel receipt."),
      makeQuestion("Where does Candide wake up?", ["Under the Penn Station departure board", "Inside Citi Field", "On a ferry to Staten Island", "In a bookstore"], 0, "Nope. He is under the Penn Station board, which is basically a weather system with fonts."),
      makeQuestion("What does Cunegonde want everyone to do?", ["Stand up and get moving", "Order salad", "Write a poem", "Sleep longer"], 0, "Not this time. Cunegonde is the practical one: stand up and move."),
      makeQuestion("What is the main problem in the scene?", ["They need to find their way to Citi Field", "They lost a baseball", "They joined a brass band", "They missed a wedding"], 0, "Close only if the brass band is trapped in Penn Station. The problem is getting to Citi Field.")
    ]
  },
  {
    title: "Signage Doom",
    art: "  1 2 3  A C E\n [UP] [DOWN] [NOPE]\n      \\  |  /\n       SIGNS",
    scenes: {
      short: [
        ["narrator", "The signs pointed everywhere except where Candide needed."],
        ["candide", "This arrow says uptown, downtown, and emotional town."],
        ["pangloss", "A sign with many meanings is generous."],
        ["martin", "A sign with many meanings is a wall having a breakdown."]
      ],
      standard: [
        ["narrator", "They reached a forest of signs. Arrows pointed uptown, downtown, sideways, and possibly into a sandwich shop."],
        ["candide", "This one says the 7 is reachable by walking through a corridor, then believing very hard."],
        ["pangloss", "Excellent. Belief is the transfer at the center of all transit."],
        ["cunegonde", "The sign means walk east. The rest is just Penn Station flirting with lawsuits."],
        ["martin", "Every arrow is a tiny betrayal with customer service training."]
      ],
      long: [
        ["narrator", "They reached a forest of signs. Arrows pointed uptown, downtown, sideways, and possibly into a sandwich shop that smelled legally unrelated to cheese."],
        ["candide", "This one says the 7 is reachable by walking through a corridor, then another corridor, then believing very hard."],
        ["pangloss", "Excellent. Belief is the transfer at the center of all transit. The arrow is not confusing; it is abundant."],
        ["cunegonde", "The sign means walk east. The rest is just Penn Station flirting with lawsuits and pretending it has a personality."],
        ["martin", "Every arrow is a tiny betrayal wearing customer service training."],
        ["narrator", "Candide nodded bravely at a sign for restrooms, which immediately felt like a personal attack."]
      ]
    },
    questions: [
      makeQuestion("What do the signs mostly cause?", ["Confusion", "Immediate arrival", "Free snacks", "A parade"], 0, "Nope. The signs cause confusion, not snacks, which feels unfair."),
      makeQuestion("What does Cunegonde think the sign means?", ["Walk east", "Go home", "Buy a hat", "Take a ferry"], 0, "Not quite. Cunegonde reads the chaos and says walk east."),
      makeQuestion("How does Pangloss describe belief?", ["As the transfer at the center of transit", "As a hot dog topping", "As illegal luggage", "As a scoreboard error"], 0, "No. Pangloss says belief is the transfer, because he is allergic to normal sentences."),
      makeQuestion("What is Candide trying to find?", ["A way to the 7 train", "A missing sandwich", "A violin lesson", "A quiet spa"], 0, "Not that one. He is trying to find the 7, not inner peace with cucumber water.")
    ]
  },
  {
    title: "Pangloss Explains Wrongly",
    art: "  PAN'S THEORY\n   _________\n  / WRONG  /|\n /_______ / |\n | LOGIC |  |\n |_______| /",
    scenes: {
      short: [
        ["pangloss", "The 7 train is named for the seven virtues of standing confused."],
        ["candide", "Is that true?"],
        ["martin", "No. It is not even useful."],
        ["cunegonde", "Pan, stop teaching the station new lies."]
      ],
      standard: [
        ["pangloss", "Observe, Can. The 7 train is surely named for seven virtues: patience, sweating, stair climbing, turnstile humility, platform suspicion, snack regret, and hope."],
        ["candide", "That sounds educational."],
        ["martin", "It sounds like a man losing an argument to a map."],
        ["cunegonde", "Pan, stop teaching the station new lies. We need a train, not a TED Talk from a coat."],
        ["narrator", "Pangloss bowed to a vending machine as if it had peer reviewed him."]
      ],
      long: [
        ["pangloss", "Observe, Can. The 7 train is surely named for seven virtues: patience, sweating, stair climbing, turnstile humility, platform suspicion, snack regret, and hope purchased at airport prices."],
        ["candide", "That sounds educational, though I worry hope should not require a receipt."],
        ["martin", "It sounds like a man losing an argument to a map and then inviting the map to dinner."],
        ["cunegonde", "Pan, stop teaching the station new lies. We need a train, not a TED Talk from a coat with crumbs in the pocket."],
        ["narrator", "Pangloss bowed to a vending machine as if it had peer reviewed him. The vending machine blinked, kept his dollar, and became his most honest critic."],
        ["pangloss", "Even theft, properly understood, is a form of inventory relocation."]
      ]
    },
    questions: [
      makeQuestion("What does Pangloss wrongly explain?", ["Why the 7 train is named 7", "How to pitch a curveball", "Why pizza folds", "How to fix a turnstile"], 0, "Nope. He is explaining the 7 train name badly, with maximum confidence."),
      makeQuestion("Who tells Pangloss to stop teaching lies?", ["Cunegonde", "The Mets Fan", "The Cop", "The vending machine"], 0, "Not quite. Cunegonde cuts off the nonsense before it unionizes."),
      makeQuestion("What does Martin compare Pangloss to?", ["A man losing an argument to a map", "A hot dog winning a race", "A pigeon with a badge", "A ticket booth poet"], 0, "No. Martin says Pangloss sounds like a man losing an argument to a map."),
      makeQuestion("Why is Candide interested in Pangloss's explanation?", ["It sounds educational to him", "He hates trains", "He wants to sell maps", "He already knows the answer"], 0, "Nope. Candide is sweetly fooled because it sounds educational.")
    ]
  },
  {
    title: "OMNY Humiliation",
    art: "  +-------+\n  | TAP  |\n  | HERE |\n  | )))  |\n  +-------+",
    scenes: {
      short: [
        ["narrator", "At the OMNY reader, Candide tapped his library card."],
        ["candide", "It contains knowledge. Surely that pays."],
        ["cop", "Buddy, the turnstile wants money, not character development."],
        ["pangloss", "A library card is a passport to the best possible fare."]
      ],
      standard: [
        ["narrator", "At the OMNY reader, Candide tapped his library card with the confidence of a man presenting a sacred relic."],
        ["candide", "It contains knowledge. Surely knowledge pays for transit."],
        ["cop", "Buddy, the turnstile wants money, not character development. Try a card that has met a bank."],
        ["pangloss", "In a just universe, a library card would open every gate."],
        ["martin", "In this universe, it opens late fees and shame."]
      ],
      long: [
        ["narrator", "At the OMNY reader, Candide tapped his library card with the confidence of a man presenting a sacred relic to a plastic altar."],
        ["candide", "It contains knowledge. Surely knowledge pays for transit, or at least earns a student discount from destiny."],
        ["cop", "Buddy, the turnstile wants money, not character development. Try a card that has met a bank and survived the conversation."],
        ["pangloss", "In a just universe, a library card would open every gate, every mind, and possibly a respectable bakery."],
        ["martin", "In this universe, it opens late fees and shame."],
        ["cunegonde", "Move aside. I will pay before the machine starts judging us in another language."]
      ]
    },
    questions: [
      makeQuestion("What did Candide try to tap at the OMNY reader?", ["His library card", "A hot dog wrapper", "A Mets ticket", "Pangloss's forehead"], 0, "Not quite. Pangloss could defend that answer for six unbearable minutes, but Candide tried the library card."),
      makeQuestion("What does the cop say the turnstile wants?", ["Money", "Character development", "A poem", "A handshake"], 0, "Nope. The cop says money, which remains the machine's favorite language."),
      makeQuestion("Why does Candide think the library card might work?", ["It contains knowledge", "It is blue", "It has a hot dog coupon", "It belongs to the mayor"], 0, "Not that one. Candide believes knowledge should pay for transit."),
      makeQuestion("Who steps in to pay?", ["Cunegonde", "Flyer Guy", "A mascot", "The departure board"], 0, "No. Cunegonde moves things along before shame gets a sequel.")
    ]
  },
  {
    title: "Cop Directions",
    art: "   NYPD\n  .----.\n  |STOP|\n  '----'\n   /||\\\n  /_||_\\",
    scenes: {
      short: [
        ["cop", "Take the passage to Times Square, then follow signs for the 7."],
        ["candide", "Is Times Square a square?"],
        ["martin", "It is a rectangle of screams."],
        ["cunegonde", "Thank you, officer. Nobody ask a follow-up."]
      ],
      standard: [
        ["cop", "Listen carefully. Take the passage to Times Square, follow signs for the 7, and do not stop for anyone selling a comedy CD."],
        ["candide", "Is Times Square truly a square?"],
        ["martin", "It is a rectangle of screams with billboards attached."],
        ["pangloss", "Geometry, like happiness, is flexible in New York."],
        ["cunegonde", "Thank you, officer. Nobody ask a follow-up or we will miss first pitch and possibly adulthood."]
      ],
      long: [
        ["cop", "Listen carefully. Take the passage to Times Square, follow signs for the 7, and do not stop for anyone selling a comedy CD, spiritual bracelet, or suspiciously warm phone charger."],
        ["candide", "Is Times Square truly a square, or is that another generous transit metaphor?"],
        ["martin", "It is a rectangle of screams with billboards attached, and every billboard wants your wallet to feel seen."],
        ["pangloss", "Geometry, like happiness, is flexible in New York. A square may become whatever commerce requires."],
        ["cunegonde", "Thank you, officer. Nobody ask a follow-up or we will miss first pitch and possibly adulthood."],
        ["narrator", "The cop pointed with the grave patience of someone who had explained the same hallway to twelve tourists and one haunted saxophone."]
      ]
    },
    questions: [
      makeQuestion("Where does the cop tell them to go first?", ["The passage to Times Square", "A ferry dock", "A rooftop garden", "A gift shop"], 0, "Nope. The first move is the passage to Times Square."),
      makeQuestion("What does Martin call Times Square?", ["A rectangle of screams", "A peaceful square", "A museum of silence", "A secret shortcut"], 0, "Not that. Martin calls it a rectangle of screams, because optimism lost his address."),
      makeQuestion("What does Cunegonde want to avoid?", ["Asking follow-up questions", "Buying pretzels", "Reading signs", "Finding the 7"], 0, "No. Cunegonde wants no follow-ups, just forward motion."),
      makeQuestion("What should they follow after Times Square?", ["Signs for the 7", "A marching band", "A pizza smell", "A yellow balloon"], 0, "Not quite. The cop says follow signs for the 7.")
    ]
  },
  {
    title: "Flyer Guy Incident",
    art: "  TAKE ONE!\n  _________\n / FLYER  /\n/________/\n  \\o/\n   |",
    scenes: {
      short: [
        ["flyer-guy", "Free rooftop comedy, free bracelet, free emotional audit!"],
        ["candide", "How many frees become expensive?"],
        ["martin", "All of them."],
        ["cunegonde", "Do not make eye contact with capitalism in sneakers."]
      ],
      standard: [
        ["flyer-guy", "Free rooftop comedy, free bracelet, free emotional audit, free map to your better self!"],
        ["candide", "How many free things become expensive after the handshake?"],
        ["martin", "All of them. Some charge interest."],
        ["pangloss", "Perhaps the flyer is a gift from providence."],
        ["cunegonde", "Providence has a laminated badge and bad vibes. Keep walking before he sells Can a subscription to confidence."]
      ],
      long: [
        ["flyer-guy", "Free rooftop comedy, free bracelet, free emotional audit, free map to your better self, free sample of a mixtape that knows karate!"],
        ["candide", "How many free things become expensive after the handshake? I ask because his clipboard looks hungry."],
        ["martin", "All of them. Some charge interest, some charge dignity, and some ask for your email in a voice that never sleeps."],
        ["pangloss", "Perhaps the flyer is a gift from providence, delivered through a man with twelve pockets and a portable speaker."],
        ["cunegonde", "Providence has a laminated badge and bad vibes. Keep walking before he sells Can a subscription to confidence."],
        ["narrator", "The flyer landed in Candide's hand anyway, because paper in Midtown obeys darker winds."]
      ]
    },
    questions: [
      makeQuestion("What is Flyer Guy trying to give them?", ["Flyers and free offers", "Baseball gloves", "Train keys", "Fresh socks"], 0, "No. He is pushing flyers and suspiciously free offers."),
      makeQuestion("What does Martin say about the free things?", ["All of them become expensive", "They are legally magic", "They improve the train", "They are from Queens"], 0, "Not quite. Martin says all free things become expensive."),
      makeQuestion("What does Cunegonde tell the group to do?", ["Keep walking", "Join the comedy show", "Trade shoes", "Ask for a receipt"], 0, "Nope. Cunegonde says keep walking."),
      makeQuestion("What does Candide wonder about the free things?", ["How many become expensive", "Whether they are from Queens", "Whether they improve the train", "How many fit in a backpack"], 0, "Nope. Candide is worried about how many free things become expensive.")
    ]
  },
  {
    title: "Queens, Allegedly",
    art: "   _________\n _/  7  7  \\_\n|_TRAIN_TO_QNS_|\n  O         O",
    scenes: {
      short: [
        ["narrator", "The 7 train finally groaned toward Queens."],
        ["candide", "Are we there?"],
        ["mets-fan", "You are never there on the 7. You are approaching emotionally."],
        ["martin", "Queens appears, then retreats like hope."]
      ],
      standard: [
        ["narrator", "The 7 train finally groaned toward Queens, carrying everyone like a metal shoebox full of hot opinions."],
        ["candide", "Are we there? I see sky, which feels promising."],
        ["mets-fan", "You are never there on the 7. You are approaching emotionally. That's different."],
        ["pangloss", "Motion itself is a kind of arrival."],
        ["martin", "Queens appears, then retreats like hope with a transfer problem."]
      ],
      long: [
        ["narrator", "The 7 train finally groaned toward Queens, carrying everyone like a metal shoebox full of hot opinions, backpacks, and one person eating soup with dangerous confidence."],
        ["candide", "Are we there? I see sky, which feels promising, unless Penn Station has followed us in disguise."],
        ["mets-fan", "You are never there on the 7. You are approaching emotionally. That's different, and it builds character nobody asked for."],
        ["pangloss", "Motion itself is a kind of arrival, and delay is simply arrival wearing a thoughtful hat."],
        ["martin", "Queens appears, then retreats like hope with a transfer problem."],
        ["cunegonde", "Everyone hold the pole. If philosophy knocks me over, I am suing the Enlightenment."]
      ]
    },
    questions: [
      makeQuestion("Where is the 7 train heading?", ["Queens", "Brooklyn", "New Jersey", "The moon"], 0, "Nope. The train is heading toward Queens, allegedly and with drama."),
      makeQuestion("What does the Mets Fan say about being there?", ["You are approaching emotionally", "You arrived yesterday", "You must swim", "You need a trumpet"], 0, "Not quite. The Mets Fan says they are approaching emotionally."),
      makeQuestion("What does Candide see that feels promising?", ["Sky", "A scoreboard", "A library", "A quiet couch"], 0, "No. Candide sees sky, which in transit counts as a miracle."),
      makeQuestion("What finally groans toward Queens?", ["The 7 train", "A ferry", "A taxi", "A bicycle"], 0, "Nope. The 7 train finally groans toward Queens.")
    ]
  },
  {
    title: "Mets Fan Philosophy",
    art: "   LETS GO\n  _________\n /  CAP   \\\n|  NY-ish |\n \\_______/",
    scenes: {
      short: [
        ["mets-fan", "Being a fan means believing right up until math calls security."],
        ["candide", "So hope is allowed?"],
        ["mets-fan", "Hope is mandatory. Confidence is a misdemeanor."],
        ["pangloss", "At last, a philosopher in team colors."]
      ],
      standard: [
        ["mets-fan", "Being a fan means believing right up until math calls security and asks hope to leave the building."],
        ["candide", "So hope is allowed?"],
        ["mets-fan", "Hope is mandatory. Confidence is a misdemeanor. Joy is day-to-day with a tight hamstring."],
        ["pangloss", "At last, a philosopher in team colors."],
        ["martin", "He has reduced existence to a bullpen, and somehow improved it."]
      ],
      long: [
        ["mets-fan", "Being a fan means believing right up until math calls security and asks hope to leave the building by the nearest available exit."],
        ["candide", "So hope is allowed, even after delays, wrong signs, and Pan explaining turnstiles like a haunted professor?"],
        ["mets-fan", "Hope is mandatory. Confidence is a misdemeanor. Joy is day-to-day with a tight hamstring and questionable bullpen support."],
        ["pangloss", "At last, a philosopher in team colors. His doctrine is stern, but the cap gives it warmth."],
        ["martin", "He has reduced existence to a bullpen, and somehow improved it."],
        ["cunegonde", "I respect any worldview that comes with snacks and knows when to stop talking."]
      ]
    },
    questions: [
      makeQuestion("According to the Mets Fan, what is mandatory?", ["Hope", "Confidence", "Silence", "A ferry ride"], 0, "No. Hope is mandatory; confidence is apparently a misdemeanor."),
      makeQuestion("What does the Mets Fan compare joy to?", ["Day-to-day with a tight hamstring", "A perfect schedule", "An empty train", "A math textbook"], 0, "Not quite. Joy is day-to-day with a tight hamstring."),
      makeQuestion("How does Pangloss describe the Mets Fan?", ["A philosopher in team colors", "A conductor in disguise", "A sandwich expert", "A weather report"], 0, "Nope. Pangloss calls him a philosopher in team colors."),
      makeQuestion("What does Martin say the fan reduced existence to?", ["A bullpen", "A pretzel", "A turnstile", "A billboard"], 0, "No. Martin says existence has been reduced to a bullpen.")
    ]
  },
  {
    title: "Wrong Exit Panic",
    art: " EXIT? EXIT? EXIT?\n   <-  ->  ^\n  +---------+\n  |  HELP   |\n  +---------+",
    scenes: {
      short: [
        ["narrator", "They left through the wrong exit and met a parking lot of doubt."],
        ["candide", "The stadium was here a moment ago."],
        ["martin", "So was my faith in sidewalks."],
        ["cunegonde", "Turn around. Panic wastes calories we need for stairs."]
      ],
      standard: [
        ["narrator", "They left through the wrong exit and met a parking lot of doubt, traffic cones, and one hot dog cart judging them silently."],
        ["candide", "The stadium was here a moment ago. Did it move?"],
        ["pangloss", "A stadium may relocate itself to improve our journey."],
        ["martin", "So did my faith in sidewalks."],
        ["cunegonde", "Turn around. Panic wastes calories we need for stairs and possibly nachos."]
      ],
      long: [
        ["narrator", "They left through the wrong exit and met a parking lot of doubt, traffic cones, and one hot dog cart judging them silently with the authority of a small court."],
        ["candide", "The stadium was here a moment ago. Did it move, or have we offended geography again?"],
        ["pangloss", "A stadium may relocate itself to improve our journey. Obstacles are merely blessings wearing construction vests."],
        ["martin", "So did my faith in sidewalks. It left quietly and took my patience."],
        ["cunegonde", "Turn around. Panic wastes calories we need for stairs and possibly nachos."],
        ["mets-fan", "Wrong exit. Classic. Happens to rookies, philosophers, and dads who say they know a shortcut."]
      ]
    },
    questions: [
      makeQuestion("What mistake did the group make?", ["They took the wrong exit", "They boarded a boat", "They lost the Mets Fan", "They bought uniforms"], 0, "Nope. The mistake is the wrong exit, a proud New York tradition."),
      makeQuestion("What does Cunegonde say panic wastes?", ["Calories", "Tickets", "Maps", "Shoes"], 0, "Not that. Cunegonde says panic wastes calories."),
      makeQuestion("What does Candide wonder about the stadium?", ["Whether it moved", "Whether it is blue", "Whether it sells books", "Whether it has a basement"], 0, "No. Candide wonders if the stadium moved."),
      makeQuestion("What does Martin mention losing faith in?", ["Sidewalks", "Scoreboards", "Libraries", "Umbrellas"], 0, "Nope. Martin's faith in sidewalks is the thing taking damage.")
    ]
  },
  {
    title: "Citi Field at Last",
    art: "   CITI FIELD-ish\n  ______________\n /              \\\n|   PLAY BALL    |\n \\______________/\n    _   _   _",
    scenes: {
      short: [
        ["narrator", "At last, Citi Field rose ahead like a promise with cup holders."],
        ["candide", "We made it."],
        ["pangloss", "Every delay was educational."],
        ["martin", "This proves my point."],
        ["cunegonde", "I ordered food already."]
      ],
      standard: [
        ["narrator", "At last, Citi Field rose ahead like a promise with cup holders. Candide stared as if the stadium had personally forgiven him."],
        ["candide", "We made it. The journey was strange, but the lights are beautiful."],
        ["pangloss", "Every delay was educational, every wrong stair a tutor, every turnstile a moral instrument."],
        ["martin", "This proves my point, though I forget which miserable point I started with."],
        ["cunegonde", "I ordered food already. Nobody turn this into a lecture before I find the napkins."],
        ["mets-fan", "Respect. You took the 7 and kept your soul mostly assembled."]
      ],
      long: [
        ["narrator", "At last, Citi Field rose ahead like a promise with cup holders. Candide stared as if the stadium had personally forgiven him for every confused staircase."],
        ["candide", "We made it. The journey was strange, loud, sticky, and full of signs that seemed angry at language, but the lights are beautiful."],
        ["pangloss", "Every delay was educational, every wrong stair a tutor, every turnstile a moral instrument, and every flyer a lesson in refusing laminated destiny."],
        ["martin", "This proves my point, though I forget which miserable point I started with. I will select a new one after the first inning."],
        ["cunegonde", "I ordered food already. Nobody turn this into a lecture before I find the napkins and establish a civilized condiment perimeter."],
        ["mets-fan", "Respect. You took the 7 and kept your soul mostly assembled. That counts as a win before the game even starts."],
        ["narrator", "The letters had split red and blue across the whole ridiculous trip, but somehow the meaning made it to Queens."]
      ]
    },
    questions: [
      makeQuestion("What finally rises ahead of the group?", ["Citi Field", "Penn Station", "A ferry", "A courtroom"], 0, "Not quite. Citi Field finally rises ahead, with cup holders and mercy."),
      makeQuestion("What has Cunegonde already done?", ["Ordered food", "Left the city", "Written a speech", "Fixed the train"], 0, "No. Cunegonde has already ordered food, because leadership has condiments."),
      makeQuestion("What does Pangloss say about the delays?", ["They were educational", "They were invisible", "They were delicious", "They were illegal fireworks"], 0, "Nope. Pangloss insists the delays were educational."),
      makeQuestion("What does Candide say when they arrive?", ["We made it", "We missed it", "We should go home", "We need a ferry"], 0, "Not quite. Candide says, with great relief, that they made it.")
    ]
  }
];

function makeQuestion(prompt, answers, correctIndex, wrongFeedback) {
  return { prompt, answers, correctIndex, wrongFeedback };
}

class BlueRedEyeCandideGame {
  constructor() {
    this.state = this.loadState();
    this.settings = this.loadSettings();
    this.currentStageIndex = Math.min(this.state.furthestStageReached - 1, stages.length - 1);
    this.currentQuestion = null;
    this.colorCache = new Map();
    this.audioContext = null;
    this.bindElements();
    this.bindEvents();
    this.applySettings();
    this.renderStageMap();
    this.showScreen("titleScreen");
  }

  bindElements() {
    this.screens = Array.from(document.querySelectorAll(".screen"));
    this.els = {
      startGame: document.querySelector("#startGameButton"),
      continueButton: document.querySelector("#continueButton"),
      openSettings: document.querySelector("#openSettingsButton"),
      reroll: document.querySelector("#rerollButton"),
      paper: document.querySelector("#paperButton"),
      question: document.querySelector("#questionButton"),
      backToRead: document.querySelector("#backToReadButton"),
      nextStage: document.querySelector("#nextStageButton"),
      tryAgain: document.querySelector("#tryAgainButton"),
      restartStory: document.querySelector("#restartStoryButton"),
      stageMap: document.querySelector("#stageMap"),
      progressText: document.querySelector("#progressText"),
      stageProgress: document.querySelector("#stageProgress"),
      questionProgress: document.querySelector("#questionProgress"),
      stageTitle: document.querySelector("#stageTitle"),
      nextStop: document.querySelector("#nextStopText"),
      asciiArt: document.querySelector("#asciiArt"),
      sceneText: document.querySelector("#sceneText"),
      questionText: document.querySelector("#questionText"),
      answerList: document.querySelector("#answerList"),
      correctFeedback: document.querySelector("#correctFeedback"),
      wrongFeedback: document.querySelector("#wrongFeedback"),
      length: document.querySelector("#lengthSetting"),
      ratio: document.querySelector("#ratioSetting"),
      fontSize: document.querySelector("#fontSizeSetting"),
      letterSpacing: document.querySelector("#letterSpacingSetting"),
      lineSpacing: document.querySelector("#lineSpacingSetting"),
      volume: document.querySelector("#volumeSetting"),
      plainText: document.querySelector("#plainTextSetting"),
      reduceGlow: document.querySelector("#reduceGlowSetting"),
      standardFont: document.querySelector("#standardFontSetting"),
      highContrast: document.querySelector("#highContrastSetting"),
      muted: document.querySelector("#muteSetting"),
      fontSizeValue: document.querySelector("#fontSizeValue"),
      letterSpacingValue: document.querySelector("#letterSpacingValue"),
      lineSpacingValue: document.querySelector("#lineSpacingValue"),
      volumeValue: document.querySelector("#volumeValue")
    };
  }

  bindEvents() {
    document.querySelectorAll("[data-screen]").forEach((button) => {
      button.addEventListener("click", () => {
        this.unlockAudio();
        this.showScreen(button.dataset.screen);
      });
    });

    this.els.startGame.addEventListener("click", () => {
      this.unlockAudio();
      this.loadStage(this.currentStageIndex);
    });
    this.els.continueButton.addEventListener("click", () => this.loadStage(this.currentStageIndex));
    this.els.openSettings.addEventListener("click", () => this.showScreen("settingsScreen"));
    this.els.reroll.addEventListener("click", () => {
      this.clearCurrentStageColorCache();
      this.renderScene();
    });
    this.els.paper.addEventListener("click", () => this.playSound("paper"));
    this.els.question.addEventListener("click", () => this.showQuestion());
    this.els.backToRead.addEventListener("click", () => this.showScreen("readingScreen"));
    this.els.tryAgain.addEventListener("click", () => {
      this.playSound("paper");
      this.showScreen("readingScreen");
    });
    this.els.nextStage.addEventListener("click", () => this.advanceStage());
    this.els.restartStory.addEventListener("click", () => this.restartStory());

    this.settingControls().forEach((control) => {
      control.addEventListener("input", () => this.updateSettingsFromForm());
      control.addEventListener("change", () => this.updateSettingsFromForm());
    });
  }

  settingControls() {
    return [
      this.els.length,
      this.els.ratio,
      this.els.fontSize,
      this.els.letterSpacing,
      this.els.lineSpacing,
      this.els.volume,
      this.els.plainText,
      this.els.reduceGlow,
      this.els.standardFont,
      this.els.highContrast,
      this.els.muted
    ];
  }

  loadState() {
    const fallback = { furthestStageReached: 1, completedGame: false, lastPlayedDate: null };
    const stored = this.readJson(STORAGE_KEY, fallback);
    return {
      furthestStageReached: this.clampNumber(stored.furthestStageReached, 1, stages.length, 1),
      completedGame: Boolean(stored.completedGame),
      lastPlayedDate: typeof stored.lastPlayedDate === "string" ? stored.lastPlayedDate : null
    };
  }

  loadSettings() {
    return this.normalizeSettings({ ...DEFAULT_SETTINGS, ...this.readJson(SETTINGS_KEY, {}) });
  }

  readJson(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch (error) {
      return fallback;
    }
  }

  saveState() {
    this.state.lastPlayedDate = new Date().toISOString();
    this.writeJson(STORAGE_KEY, this.state);
  }

  saveSettings() {
    this.writeJson(SETTINGS_KEY, this.settings);
  }

  writeJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn("Unable to save local game data.", error);
    }
  }

  updateSettingsFromForm() {
    this.settings = this.normalizeSettings({
      length: this.els.length.value,
      ratio: this.els.ratio.value,
      fontSize: Number(this.els.fontSize.value),
      letterSpacing: Number(this.els.letterSpacing.value),
      lineSpacing: Number(this.els.lineSpacing.value),
      volume: Number(this.els.volume.value),
      plainText: this.els.plainText.checked,
      reduceGlow: this.els.reduceGlow.checked,
      standardFont: this.els.standardFont.checked,
      highContrast: this.els.highContrast.checked,
      muted: this.els.muted.checked
    });
    this.applySettings();
    this.saveSettings();
    if (document.querySelector("#readingScreen").classList.contains("active")) this.renderScene();
  }

  applySettings() {
    this.els.length.value = this.settings.length;
    this.els.ratio.value = this.settings.ratio;
    this.els.fontSize.value = this.settings.fontSize;
    this.els.letterSpacing.value = this.settings.letterSpacing;
    this.els.lineSpacing.value = this.settings.lineSpacing;
    this.els.volume.value = this.settings.volume;
    this.els.plainText.checked = this.settings.plainText;
    this.els.reduceGlow.checked = this.settings.reduceGlow;
    this.els.standardFont.checked = this.settings.standardFont;
    this.els.highContrast.checked = this.settings.highContrast;
    this.els.muted.checked = this.settings.muted;

    this.els.fontSizeValue.textContent = `${this.settings.fontSize}px`;
    this.els.letterSpacingValue.textContent = `${this.settings.letterSpacing}px`;
    this.els.lineSpacingValue.textContent = `${(this.settings.lineSpacing / 100).toFixed(2)}`;
    this.els.volumeValue.textContent = `${this.settings.volume}%`;

    document.documentElement.style.setProperty("--reader-size", `${this.settings.fontSize}px`);
    document.documentElement.style.setProperty("--reader-letter-spacing", `${this.settings.letterSpacing}px`);
    document.documentElement.style.setProperty("--reader-line-height", String(this.settings.lineSpacing / 100));
    document.body.classList.toggle("plain-text", this.settings.plainText);
    document.body.classList.toggle("reduce-glow", this.settings.reduceGlow);
    document.body.classList.toggle("standard-font", this.settings.standardFont);
    document.body.classList.toggle("high-contrast", this.settings.highContrast);
  }

  normalizeSettings(settings) {
    return {
      length: VALID_LENGTHS.includes(settings.length) ? settings.length : DEFAULT_SETTINGS.length,
      ratio: VALID_RATIOS.includes(settings.ratio) ? settings.ratio : DEFAULT_SETTINGS.ratio,
      fontSize: this.clampNumber(settings.fontSize, 16, 30, DEFAULT_SETTINGS.fontSize),
      letterSpacing: this.clampNumber(settings.letterSpacing, 0, 5, DEFAULT_SETTINGS.letterSpacing),
      lineSpacing: this.clampNumber(settings.lineSpacing, 130, 210, DEFAULT_SETTINGS.lineSpacing),
      volume: this.clampNumber(settings.volume, 0, 100, DEFAULT_SETTINGS.volume),
      plainText: Boolean(settings.plainText),
      reduceGlow: Boolean(settings.reduceGlow),
      standardFont: Boolean(settings.standardFont),
      highContrast: Boolean(settings.highContrast),
      muted: Boolean(settings.muted)
    };
  }

  clampNumber(value, min, max, fallback) {
    const number = Number(value);
    if (!Number.isFinite(number)) return fallback;
    return Math.min(max, Math.max(min, number));
  }

  showScreen(id) {
    this.screens.forEach((screen) => screen.classList.toggle("active", screen.id === id));
    if (id === "mapScreen") this.renderStageMap();
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  renderStageMap() {
    this.els.progressText.textContent = this.state.completedGame
      ? "Completed: 10 of 10"
      : `Stage ${Math.min(this.state.furthestStageReached, stages.length)} of ${stages.length}`;
    this.els.stageMap.innerHTML = "";
    stages.forEach((stage, index) => {
      const unlocked = index < this.state.furthestStageReached;
      const card = document.createElement("button");
      card.className = `stage-card ${unlocked ? "" : "locked"} ${index === this.currentStageIndex ? "current" : ""}`;
      card.type = "button";
      card.disabled = !unlocked;
      card.innerHTML = `<span class="stage-number">${index + 1}</span><span>${stage.title}</span>`;
      card.addEventListener("click", () => this.loadStage(index));
      this.els.stageMap.append(card);
    });
  }

  loadStage(index, soundType = index === 0 ? "start" : "stage") {
    this.currentStageIndex = index;
    this.currentQuestion = this.pickQuestion(index);
    this.renderScene();
    if (soundType) this.playSound(soundType);
    this.showScreen("readingScreen");
  }

  renderScene() {
    const stage = stages[this.currentStageIndex];
    this.els.stageProgress.textContent = `Stage ${this.currentStageIndex + 1} of ${stages.length}`;
    this.els.stageTitle.textContent = stage.title;
    this.els.nextStop.textContent = this.currentStageIndex < stages.length - 1
      ? `Next stop: ${stages[this.currentStageIndex + 1].title}`
      : "Next stop: Citi Field seats";
    this.els.asciiArt.textContent = stage.art;
    this.els.sceneText.innerHTML = "";
    stage.scenes[this.settings.length].forEach(([character, text], lineIndex) => {
      const paragraph = document.createElement("p");
      paragraph.className = `scene-line ${character}`;
      const speaker = document.createElement("span");
      speaker.className = "speaker";
      speaker.textContent = `${characterLabels[character]}:`;
      paragraph.append(speaker, " ");
      paragraph.append(this.renderSplitLetters(text, `${this.currentStageIndex}-${this.settings.length}-${lineIndex}`));
      this.els.sceneText.append(paragraph);
    });
  }

  renderSplitLetters(text, cacheKey) {
    const fragment = document.createDocumentFragment();
    const colors = this.getStableColors(cacheKey, text);
    let colorIndex = 0;
    for (const char of text) {
      const span = document.createElement("span");
      span.textContent = char;
      if (/[a-z]/i.test(char)) {
        span.className = colors[colorIndex] === "red" ? "char-red" : "char-blue";
        colorIndex += 1;
      } else if (char.trim() !== "") {
        span.className = "char-neutral";
      }
      fragment.append(span);
    }
    return fragment;
  }

  getStableColors(cacheKey, text) {
    const ratioKey = `${cacheKey}-${this.settings.ratio}`;
    if (this.colorCache.has(ratioKey)) return this.colorCache.get(ratioKey);
    const redChance = this.settings.ratio === "moreRed" ? 0.68 : this.settings.ratio === "moreBlue" ? 0.32 : 0.5;
    const colors = Array.from(text.replace(/[^a-z]/gi, "")).map(() => Math.random() < redChance ? "red" : "blue");
    this.colorCache.set(ratioKey, colors);
    return colors;
  }

  clearCurrentStageColorCache() {
    const prefix = `${this.currentStageIndex}-${this.settings.length}-`;
    for (const key of this.colorCache.keys()) {
      if (key.startsWith(prefix)) this.colorCache.delete(key);
    }
  }

  pickQuestion(index) {
    const pool = stages[index].questions;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  showQuestion() {
    this.els.questionProgress.textContent = `Stage ${this.currentStageIndex + 1} of ${stages.length}`;
    this.els.questionText.textContent = this.currentQuestion.prompt;
    this.els.answerList.innerHTML = "";
    this.currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.className = "answer-button";
      button.type = "button";
      button.innerHTML = `<span class="answer-key">${String.fromCharCode(65 + index)}</span><span></span>`;
      button.querySelector("span:last-child").textContent = answer;
      button.addEventListener("click", () => this.answerQuestion(index));
      this.els.answerList.append(button);
    });
    this.showScreen("questionScreen");
  }

  answerQuestion(index) {
    if (index === this.currentQuestion.correctIndex) {
      this.els.correctFeedback.textContent = this.currentStageIndex === stages.length - 1
        ? "Correct. Queens has accepted your reading comprehension paperwork."
        : "Correct. The train doors ding, and the story lurches forward.";
      this.playSound("correct");
      this.showScreen("correctScreen");
      return;
    }
    this.els.wrongFeedback.textContent = this.currentQuestion.wrongFeedback;
    this.playSound("wrong");
    this.showScreen("wrongScreen");
  }

  advanceStage() {
    if (this.currentStageIndex === stages.length - 1) {
      this.state.completedGame = true;
      this.state.furthestStageReached = stages.length;
      this.saveState();
      this.playSound("victory");
      this.showScreen("completionScreen");
      return;
    }
    this.currentStageIndex += 1;
    this.state.furthestStageReached = Math.max(this.state.furthestStageReached, this.currentStageIndex + 1);
    this.saveState();
    this.loadStage(this.currentStageIndex, "train");
  }

  restartStory() {
    this.state = { furthestStageReached: 1, completedGame: false, lastPlayedDate: new Date().toISOString() };
    this.currentStageIndex = 0;
    this.colorCache.clear();
    this.saveState();
    this.renderStageMap();
    this.loadStage(0);
  }

  unlockAudio() {
    if (!this.audioContext) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.audioContext = new AudioContext();
    }
    if (this.audioContext?.state === "suspended") this.audioContext.resume();
  }

  playSound(type) {
    if (this.settings.muted || !this.audioContext) return;
    const patterns = {
      start: [440, 660, 880],
      stage: [660, 880],
      correct: [523, 784, 1046],
      wrong: [160, 120],
      paper: [260, 220, 300],
      train: [740, 740, 980],
      victory: [523, 659, 784, 1046]
    };
    const sequence = patterns[type] || patterns.stage;
    sequence.forEach((frequency, index) => {
      this.tone(frequency, 0.08, index * 0.09, type === "wrong" ? "sawtooth" : "sine");
    });
  }

  tone(frequency, duration, delay, waveform) {
    const ctx = this.audioContext;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = waveform;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(this.settings.volume / 450, ctx.currentTime + delay + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration);
    oscillator.connect(gain).connect(ctx.destination);
    oscillator.start(ctx.currentTime + delay);
    oscillator.stop(ctx.currentTime + delay + duration + 0.02);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new BlueRedEyeCandideGame();
});
