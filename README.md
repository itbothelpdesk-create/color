# Color Team Questionnaire

A 3-question quiz. Each question has answers A, B and C. The combination a person picks (27 possible) assigns them to a colored team.

Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Customize

Open `config.js` and edit:

- `QUESTIONS`: the question text and the A / B / C answer text
- `TEAMS`: team names, colors (hex) and the message shown at the end
- `RESULTS`: which team each combination gets (for example `ABC` = Q1 A, Q2 B, Q3 C)

## Run locally

Open `index.html` in a browser, or run:

```
npx serve .
```

## Deploy

1. Push this folder to a GitHub repository.
2. In Vercel, click **Add New Project** and import the repository.
3. Leave all settings at their defaults (Framework Preset: **Other**) and click **Deploy**.
