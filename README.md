# Blue Red Eye: Candide Takes the 7

Blue Red Eye: Candide Takes the 7 is a mobile-friendly static browser game about modern Candide, Pangloss, Cunegonde, Martin, and several New York interruptions trying to get from Penn Station to Citi Field.

The game is a split-letter reading comedy quiz. It is not score-based, not an arcade action game, not a medical app, and not an eye-training treatment.

This game is for play and experimentation only. It is not medical advice, diagnosis, or treatment. Stop playing if you feel discomfort.

## How to Play

The loop is simple:

1. Read a short comedy scene.
2. Answer one A/B/C/D reading comprehension question.
3. Advance to the next stage after a correct answer.

Wrong answers do not advance the stage. The game gives funny PG-13 feedback, sends the player back to reread, and keeps the same question until it is answered correctly.

## Split-Letter Reading

In split-letter mode, each alphabetic letter in the scene is assigned either red or blue. Spaces remain normal, and punctuation is neutral. The red/blue pattern stays stable while the passage is on screen and does not flicker.

Players can reroll the colors for the current scene. A plain text mode is also available.

## Stage Progression

There are 10 stages:

1. Penn Station Awakening
2. Signage Doom
3. Pangloss Explains Wrongly
4. OMNY Humiliation
5. Cop Directions
6. Flyer Guy Incident
7. Queens, Allegedly
8. Mets Fan Philosophy
9. Wrong Exit Panic
10. Citi Field at Last

Progress is saved in `localStorage` as the furthest stage reached, whether the game was completed, preferred settings, and the last played date. No personal data is stored.

## Questions

Each stage has at least four possible A/B/C/D questions. When a stage loads, the game randomly picks one question from that stage's pool. If the player answers incorrectly, the same question remains active until the player answers correctly.

Question types include detail recall, main idea, sequence, vocabulary in context, character motivation, simple inference, pronoun/reference tracking, cause and effect, background knowledge, and comprehension monitoring.

## Settings

Settings include:

- Reading length: Short, Standard, or Long
- Red/blue ratio: 50/50, more red, or more blue
- Plain text mode
- Reduce glow
- Standard font
- Font size
- Letter spacing
- Line spacing
- High contrast

Each stage has short, standard, and long scene text.

## Sound Controls

Sounds are generated with the Web Audio API. There are no external audio files and no official MTA, Mets, or MLB sounds.

The game includes generated sounds for start, new stage, correct answer, wrong answer, reread paper shuffle, train-door style advance, and final completion. Audio only starts after user interaction. Use the mute toggle or volume slider in Settings.

## Mobile Support

The layout is responsive and designed for phones, with large buttons, readable text, sticky reading controls, thumb-friendly spacing, and no horizontal scrolling in the main interface. ASCII art is small and scroll-safe if needed.

## Run Locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Publish with GitHub Pages

After pushing to GitHub:

1. Open the repository settings.
2. Go to Pages.
3. Choose the branch containing `index.html`.
4. Save the Pages configuration.

No build step is required.
