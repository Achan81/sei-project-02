# GA SEI 60 Project Two - Heroes & Villain DB README

[Overview](#overview "Goto overview") |
[Brief](#brief "Goto brief") |
[Timeframe](#timeframe "Goto timeframe") |
[Technologies used](#technologies-used "Goto technologies-used") |
[Deployment](#deployment "Goto deployment") |
[Getting Started](#getting-started "Goto getting started") |
[Approach](#approach "Goto approach") |
[Planning](#planning "Goto planning") |
[Build](#build "Goto build") |
[Challenges](#challenges "Goto challenges") |
[Wins](#wins "Goto wins") |
[Bugs](#bugs "Goto bugs") |
[Key Learnings](#key-learnings "Goto key-learnings") |
[Future Content and Improvements](#future-content-and-improvements "Goto future-content-and-improvements")

## Overview:
HVDB (Heroes & Villains Database) is a front end app that lets users search for their favourite fictional characters. This project was a 48 hour paired hackathon built in collaboration with [**Harry Murphy**](https://github.com/harrymurphyprojects/). 

## Brief:
* Consume a public API
* Have several components
* The app can have a router - with several "pages", this is up to your discretion and if it makes sense for your project
* Include wireframes - that you designed before building the app
* Be deployed online and accessible to the public
​
## Timeframe:
* 48 hours

## Technologies used:
* HTML
* CSS
* Bulma
* JavaScript
* React
* Axios
* React-Router-Dom
* Git
* GitHub

## Deployment:
This app has been deployed on Netlify and can be found [**here**](https://havdb.netlify.app/ "here")

## Getting Started:
Use the clone button to download the app source code. 

* Using NPM:\
`npm run start` or `npm run dev` to run the development server
`npm run build` to create a build directory

* To prevent the `failed-to-compile` issue for linter errors like `no-unused-vars`, rename the `.env.example` to `.env` and restart your development server. Note this will only change the behaviour of certain linter errors to now be warnings, and is added just to allow your code to compile in development. These errors should still be fixed and other errors will still result in the code being unable to compile

## Approach:

### Planning:
After being randomly paired into a breakout room for this project briefing, our initial thought process was to spend 10 minutes each researching existing free to use API’s that were interesting for both Harry and myself. We found that many available API’s were not free, or were for limited use which was unfortunate but understandable.
<br></br>
We found on a 3rd party free SuperHero API (731 individual characters) which we felt was inline with our interests. [**SuperHero API**](https://akabab.github.io/superhero-api/api// "here") (Featuring multiple universes SuperHeroes open-source REST API)

* We then studied the key deliverables needed for this project:
  * App to have multiple components (Index & Detail Show cards)
  * Navbar (mobile responsive)
  * Search / Filter functionality

* Stretch goals if time permitted were:
  * Trumps style game

To visualise the build, Excalidraw was used to make some initial sketches to help portray our ideas so we were in sync with what we wanted to achieve.



![excalidraw](/assets/havdb.png)



## Build:
Using Zoom and VS Code Live Share to pair code, we began by creating the basic components and BrowserRouter. By doing so, we were able to begin to see each page and test that each page connected up ok by adding filler text on each page (such as “Hello World”.

```js
function App() {
 return (
   <BrowserRouter>
     <Nav/>
     <Switch>
        <Route exact path="/">
         <Home />
       </Route>
       <Route path="/characters/:characterId">
         <CharacterShow /> 
       </Route>
       <Route path="/characters">
         <CharacterIndex />
       </Route>
       <Route path="/ProfileCompare">
         <ProfileCompare />
       </Route>
     </Switch>
   </BrowserRouter>
 )
}
```
The next step and probably most important of all, was to test that we could communicate with the SuperHero API.  Following the API docs, the calling process was relatively straight forward. We tested API activity by creating a ‘client.http terminal’ to send requests. (first by calling all super heroes and all data related), with this step succeeding we were able to continue the build.

```js
@baseUrl = https://akabab.github.io/superhero-api/api/

# GET ALL SUPERHEROES
GET {{baseUrl}}/all.json

###
# GET SINGLE SUPERHERO
GET {{baseUrl}}/id/1.json
```

## Landing Page:
This was designed to be a clean looking page which would have the app name in the centre on top of a large image/collage of images to symbolise the SuperHeroes environment.

![landingpage](/assets/01home.png)

## Navbar:
Using Bulma, we created a black nav bar to show the pages to the site.
Whilst building the Navbar, we also set up the mobile responsive side of things / burger menu.

![landingpage mobile responsive](/assets/01mob.png)

```js
 return (
   <nav className="navbar is-black">
     <div className="container">
       <div className="navbar-brand">
 
         <Link to="/" className="navbar-item">
           Home
         </Link>
         <span className={`navbar-burger ${isOpen ? 'is-active' : ''}`} onClick={handleMenuToggle}>
           <span />
           <span />
           <span />
         </span>
       </div>
       <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
         <div className="navbar-start">
           <Link to="/characters" className="navbar-item">
             See all characters
           </Link>
           <Link to="/ProfileCompare" className="navbar-item">
             Compare Powerstats!
           </Link>
         </div>
       </div>
     </div>
   </nav>
 )
```

## Character Index Page:
Upon navigating to the Characters Index Page, an async function is used to get all data via try & catch statements. Axios will then deliver a promise to set all the requested data into state.

```js
 React.useEffect(() => {
   const getData = async () => {
     try {
       const res = await getAllCharacters()
       setCharacters(res.data)
     } catch (err) {
       setIsError(true)
     }
   }
   getData()
 }, [])
```
## Character Cards:
To present characters on the Index Page, we created a function called CharacterCard.js to customise data to be shown on a card to be imported back to the CharacterIndex.js page. Each card would be defined by its own characterId in accordance to how the we set up the axios.

```js
//*Api Requests
export function getAllCharacters() {
  return axios.get(`${baseUrl}/all.json`)
}

export function getSingleCharacter(charactersCharacterId) {
  return axios.get(`${baseUrl}/id/${charactersCharacterId}.json`)
}
```

Bulma CSS was used on this component to create a card to package the data in a presentable format. Bulma uses its own className syntax to style and layout the class as shown below.

```js
  <Link to={`/characters/${characterId}`}>
    <div className="card">
      <div className="card-header">
        <h3 className="card-header-title">{name}</h3>
      </div>
      <div className="card-image">
        <figure className="image image-is-1by1">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="card-content has-text-centered">
        <h5 className="is-italic">{firstAppearance}</h5>
        <h5 className="has-text-weight-semibold is-uppercase">({publisher})</h5>
        <hr/>
        <h6>Intelligence : {powerstatsIntelligence}</h6>
        <h6>Strength : {powerstatsStrength}</h6>
        <h6>Speed : {powerstatsSpeed}</h6>
        <h6>Durability : {powerstatsDurability}</h6>
        <h6>Power : {powerstatsPower}</h6>
        <h6>Combat : {powerstatsCombat}</h6>
      </div> 
    </div>
  </Link>
```

![Character Index page](/assets/02index.png)

## Character Show: 
When on the Index Page, any of the Character Cards can be clicked on. Doing so will take the user to the selected CharacterShow.js page. The Character Show page presents the sole character chosen and has extra on that character. 

![Character Show page](/assets/03show.png)

The data we chose to use was all picked out from the API and presented with the help of Bulma CSS also.

```js 
React.useEffect(() => {
  const getData = async () => {
    try {
      const characterRes = await getSingleCharacter(characterId)
      setCharacter(characterRes.data)
    } catch {
      setIsError(true)
    }
  }
  getData()
}, [characterId])
```


## Challenges:
Publisher null in filter

## Wins:

## Bugs:

## Key Learnings:
## Future Content and Improvements:




___
### PREP / SKETCH

 
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
 
