# CodeVerse
## Atharav Dalvi && Ashutosh Shelar 
# Movie Night 
## Objective
This was webpage was made to recommend a movie base on the Database provide from MindSpark term (movies.js) 

## Features

- Search movies by **title or genre**
- Filter by **genre** and **language**
- Sort by **rating** or **release year**
- Add / remove movies from a **watchlist**
- View a **watchlist-only** page
- **Tonight's Pick**: random movie recommendation
- **Details modal** with poster, director, duration, language, genres, rating, overview and cast
- **Dark / Light mode**
- Fallback handling for broken poster images

## Project Structure

```
src/
├── App.js            # Main component (all logic + UI)
├── App.css           # Styles
└── data/
    └── movies.json   # Movie dataset
```

## Flow use is 
we had use vite.js,talwind.css, movies.json file etc

### This is the overall flow of the project 
the plugin use is given bellow:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
