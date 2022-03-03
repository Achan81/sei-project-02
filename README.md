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
[Landing Page](#landing-page "Goto landing-page") |
[Navbar](#navbar "Goto navbar") |
[Character Index Page](#character-index-page "Goto character-index-page") |
[Character Cards](#character-cards "Goto character-cards") |
[Character Show](#character-show "Goto character-show") |
[Filtering & Searching Index](#filtering-and-searching-index "Goto filtering-and-searching-index") |
[Loading and Error Pages](#loading-and-error-pages "Goto loading-and-error-pages") |
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

![demo app](/assets/d-main.gif)

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
We found a 3rd party free SuperHero API (731 individual characters) which we felt was inline with our interests. [**SuperHero API**](https://akabab.github.io/superhero-api/api// "here") (Featuring multiple universes SuperHeroes open-source REST API).

* We then studied the key deliverables needed for this project:
  * App to have multiple components (Index & Detail Show cards)
  * Navbar (mobile responsive)
  * Search / Filter functionality

* Stretch goals if time permitted were:
  * Trumps style game

To visualise the build, Excalidraw was used to make some initial sketches to help portray our ideas so we were in sync with what we wanted to achieve.


### excalidraw sketch:
![excalidraw screenshot](/assets/havdb-ex.png)

## Build:
Using Zoom and VS Code Live Share to pair code, we began by creating the basic components and BrowserRouter. By doing so, we were able to begin to see each page and test that each page connected up ok by adding filler text on each page (such as “Hello World”).

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
The next step and probably most important of all, was to test that we could communicate with the SuperHero API.  Following the API docs, the calling process was relatively straight forward. We tested API activity by creating a ‘client.http terminal’ to send requests. (first by calling all superheroes and all data related), with this step succeeding we were able to continue the build.

```js
@baseUrl = https://akabab.github.io/superhero-api/api/

# GET ALL SUPERHEROES
GET {{baseUrl}}/all.json

###
# GET SINGLE SUPERHERO
GET {{baseUrl}}/id/1.json
```

## Landing Page:
This was designed to be a clean looking page which would have the app name in the centre on top of a large image/collage of images to symbolise the superheroes environment.

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

 <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {isError && <Error />}
          {isLoading && <Loading />}
          {characters && (
            filterCharacters().map(character => (
              <CharacterCard
                key={character.id}
                name={character.name}
                image={character.images.sm} loading="lazy"
                firstAppearance={character.biography.firstAppearance}
                publisher={character.biography.publisher}
                powerstatsIntelligence={character.powerstats.intelligence}
                powerstatsStrength={character.powerstats.strength}
                powerstatsSpeed={character.powerstats.speed}
                powerstatsDurability={character.powerstats.durability}
                powerstatsPower={character.powerstats.power}
                powerstatsCombat={character.powerstats.combat}
                characterId={character.id} />
            ))
          )}
        </div>
      </div>
    </section>
```
## Character Cards:
To present characters on the Index Page, we created a function called CharacterCard.js to customise data to be shown on a card to be imported back to the CharacterIndex.js page. Each card would be defined by its own characterId.

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
        <div className="card bebas-font sub-space">
          <div className="card-header">
            <h3 className="card-header-title is-uppercase bebas-font">{name}</h3>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="card-content has-text-centered">
            <h5 className="is-italic">{firstAppearance}</h5>
            <h5 className="has-text-weight-semibold is-uppercase title is-5">({publisher})</h5>
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
When on the Index Page, any of the Character Cards can be clicked on. Doing so will take the user to the selected CharacterShow.js page. The Character Show page presents the sole character chosen and has extra information on that character. 

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

## Filtering and Searching Index:
With such a large index of unique characters, being able to find single characters with ease via filtering or searching directly by name is a key feature of this app. 

* Filter by Publisher:\
This method seemed appropriate for separating out character by the types of comics/movies that they derive from  

* Filter by Alignment:\
Probably the most obvious choice for character separation as per the app's title - Heroes & Villains (Good & Bad)

* Searching by Name:\
The most direct route for finding your desired character is spelling out the name into the Search bar and letting it filter only matching characters

The above filters & name search were created as below...

```js

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  const handleFilter = (e) => {
    setFilterValue(e.target.value)
  }
  const handlePublisherFilter = (e) => {
    setPublisherFilterValue(e.target.value)
  }
  const publisherNull = null 
  const filterCharacters = () => {

    return characters.filter(character => {
      return (
        character.name.toLowerCase().includes(searchValue.toLowerCase()) 
        && character.biography.alignment.toLowerCase().includes(filterValue.toLowerCase())
        && ((character.biography.publisher && character.biography.publisher === publisherFilterValue ) || publisherFilterValue === '')
      )
    })
  }
  
  return (
    <><div className="level">
      <div className="control">
        <div className="select is-normal ">
          <select className="filter bebas-font" onChange={handlePublisherFilter}>
            <option value="">Filter by Publisher</option>
            <option>ABC Studios</option>
            <option>Angel Salvadore</option>
            <option>Ant-Man</option>
          </select>
        </div>
      </div>

      <div className="control">
        <div className="select is-normal"> 
          <select className="filter bebas-font" onChange={handleFilter}>
            <option value="">Filter by Good or Bad</option>
            <option>Good</option>
            <option>Bad</option>
            <option>-</option>
          </select>
        </div>
      </div>

      <div className="field has-addons"> 
        <div className="control is-loading"> 
          <input 
            className="input is-rounded search bebas-font"  
            placeholder="Find Character by Name"
            onChange={handleSearch}
          />
        </div>
      </div> 
    </div>
```

## Loading and Error Pages:
* "...Loading"\
To help notify the user that the page has not stalled (since we have a number of images that need to load)

```js
function Loading() {
  return <p>...loading</p>
}
export default Loading
```

* "Oh no! something went wrong"\
This will be useful if app fails to retrieve data from the API 

```js
function Error() {
  return (
    <div className="container has-text-centered">
      <h2 className="title">
        Oh no! something went wrong <span>☠️</span>
      </h2>
    </div>
  )
}
export default Error

```

## Challenges:
* The filter & search functions were quite difficult to get right as it was a multi-use filter. Initially, we were not able to return the filter for publishers. The main reason being that some of the characters did not carry any publisher information. With help from our course tutor & teaching assistant, this was overcome with some simple tweaks to the code. NULL being one of the main reasons, and adding empty strings `''` to the filter value as well as `{publisherNull}` helped fix this...
  ```js 
  const publisherNull = null
  ``` 

* Learning to use Bulma and override its syntax. Bulma is a fantastic CSS framework for its ease of producing cards quickly and accurately, however I did find myself fighting with the frame work when trying to take control when using normal CSS

* Working with this API, we found that the data was not always complete for each character and ruined the consistency of data shown on the app

* Index images load time - depending on the users bandwidth, we had a concern for the user experience when images would be loaded on the index. To make sure we minimise the load time, we used the smallest available API images for the index page.  After a little bit of research, we also tried implementing lazy loading where the image API is called. I am not 100% sure if it made any difference with and without it 
```js
  image={character.images.sm} loading="lazy"
``` 

## Wins:
* Working in a pair allowed me to be disciplined, organised and structured in my approach
* With our limited knowledge at this stage of the course, I'm happy to have a clean looking and functioning app
* A mobile responsive app (especially the index page)
```js    
<div className="column 
      is-full-mobile
      is-half-tablet 
      is-one-third-desktop
      is-one-quarter-widescreen 
      is-one-fifth-fullhd
      ">
```
![Demo responsive Index](/assets/d-responsive.gif)

## Bugs:
* Probably not a bug, but something I couldn't overcome (my personal struggle with Bulma) The cards shown on the index page all have a black top with character name aligned to the left. I did not want this outcome.  Unfortunately, I was unable to get the text to align center whether using CSS or BULMA. Unlikely to be a bug, probably just me! 

## Key Learnings:
* Learning to pair code and communicate clearly within a team
* Learning how to pull data and use it how we wanted it to be used 
* Planning ahead especially when working in a team as it vastly improves communication
* Familiarising with what we have learnt so far
* Testing out the Bulma framework

## Future Content and Improvements:
* Trumps game on Profile Compare page ([excalidraw sketch](#excalidraw-sketch "Goto excalidraw sketch"))
* Show page buttons to navigate "previous" &  "next" page ([excalidraw sketch](#excalidraw-sketch "Goto excalidraw sketch"))

<br></br>
<hr></hr>

[Back to TOP](#overview "Goto overview")



 
