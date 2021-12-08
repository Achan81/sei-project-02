§
### PREP / SKETCH
https://excalidraw.com/#json=463qRv9TCXy_sEpanEslb,aw3FAi-c9CwBaVlQHoh2VA

###DAY 01
- [X] home page
- [X] Navbar to navigate around

- [X] Home Page, route url "/" - basic landing page
- [X] Index page, router url "/characters",- shows ALL the character cards
- [X] Show page, router url "/characters/:characterId" , shows a SINGLE character in more detail
- [X] Error Handling on fetching, Show & Index page
- [X] STYLING started.
- [X] Improve Navbar, make it responsive - done but don't really like it, seems a bit empty - would like more content.

###DAY02
- [ ] FILTERS - By Publisher
- [X] FILTERS - By Alignment (Good/Bad)
- [X] FILTERS - Search bar by Name (multi case)  
- [X] characterShow // height/width array [0] fix
- [X] SORT ***bulma visual set up
- [ ] PROFILE COMPARISONS ******** (TRUMPS)
- [ ] select (LEFT), random generator 
- [X] Favicon.png (Superman added)
- [X] fonts (added / but hidden from A.Chan version)

###DAY03
- [X] FILTERS - By Publisher (Help needed because null object errored return)
- [ ] PLAN A / PROFILE COMPARISONS PAGE set up (encountered difficulties... )
- [X] PLAN B / POWER STATS to be added to INDEX CARDS to improve user experience  


###TROUBLE SHOOTING
- [ ] bulma styling on search and drop down - how to style so they stretch full width of page on desktop view, and same on mobile view. ~~
- [X] CharacterShow - retrived data, how to space out height and width from bunching each other.
- [X] loading="lazy" (does it work? see ).. maybe?

###EXTRA 
- [ ] LIKE (local storage) *** if time 
- [ ] Revisit this project to work on Profile Compare function and ideally turn into TRUMPS game.

















# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) GA London React Template

## Using NPM

`npm run start` or `npm run dev`  to run the development server

`npm run build` to create a build directory

## Using Yarn

`yarn start` or `yarn dev`  to run the development server

`yarn build` to create a build directory

### ⚠️

To prevent the `failed-to-compile` issue for linter errors like `no-unsed-vars`, rename the `.env.example` to `.env` and restart your development server. Note this will only change the behaviour of certain linter errors to now be warnings, and is added just to allow your code to compile in development. These errors should still be fixed and other errors will still result in the code being unable to compile

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

