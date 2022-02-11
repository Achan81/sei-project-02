
function ProfileCompare() {
  return (
    <section className="dancing-spidey section is-half">  
      <div className="title is-1 has-text-centered">
        <h1>SORRY!</h1> 
      </div>
      <div className="title is-2 has-text-centered">
        <h2>PAGE UNDER CONSTRUCTION</h2>
      </div>
      <p div className="title is-4 has-text-centered">THIS IS WHERE YOU WOULD COMPARE PROFILES</p>
    
    </section>

  )
}

export default ProfileCompare





// import React from 'react'
// import { useParams } from 'react-router'
// import { getSingleCharacter } from '../../lib/api'

// function ProfileCompare() {

//   const [randomCharacter, setRandomCharacter] = React.useState(null)
//   const [character, setCharacter] = React.useState(null)
//   const { characterId } = useParams()

//   const randomCharacterId = Math.floor(Math.random() * 10)

//   React.useEffect(() => {
//     const getData = async () => {
      
//       const randomCharacterRes = await getSingleCharacter(randomCharacterId)
//       console.log(randomCharacterRes.data)
//       setRandomCharacter(randomCharacterRes.data)
//     }
//     getData()
//   }, [randomCharacterId])

//   console.log(randomCharacterId)
//   return (
//     <div className="character">
//       <h4 className="title has-text-centered">{randomCharacter.name}</h4>
//       <hr/>

//       <div className="columns">
//         <div className="column is-half">
//           <figure className="image">
//             <img src={randomCharacter.images.lg} alt={randomCharacter.name}/>
//           </figure>
//         </div>

//         <div className="columns">
//           <div className="column">
//             <h2 className="title is-4 has-text-centered">Powerstats</h2> 
    
//             <div className="columns is-mobile">
//               <div className="column"> Intelligence
//                 <h3 className="title is-4 has-text-centered">{
//                   randomCharacter.powerstats.intelligence}</h3>
//               </div>

//               <div className="column"> Strength
//                 <h3 className="title is-4 has-text-centered">{
//                   randomCharacter.powerstats.strength}</h3>
//               </div>
//               <div className="column"> Speed
//                 <h3 className="title is-4 has-text-centered">{
//                   randomCharacter.powerstats.speed}</h3>
//               </div>

//               <div className="column"> Durability
//                 <h3 className="title is-4 has-text-centered">{
//                   randomCharacter.powerstats.durability}</h3>
//               </div>

//               <div className="column"> Power
//                 <h3 className="title is-4 has-text-centered">{
//                   randomCharacter.powerstats.power}</h3>
//               </div>

//               <div className="column"> Combat
//                 <h3 className="title is-4 has-text-centered">{
//                   randomCharacter.powerstats.combat}</h3>
//               </div>
//             </div> 
//             <hr/>

//             <div className="column"> 
//               <h4 className="title is-6 has-text-centered">Full Name : {
//                 randomCharacter.biography.fullName}</h4>
//               <h4 className="title is-6 has-text-centered">Gender : {
//                 randomCharacter.appearance.gender}</h4>
//               <h4 className="title is-6 has-text-centered">Race : {
//                 randomCharacter.appearance.race}</h4>
//               <h4 className="title is-6 has-text-centered">Height : {
//                 randomCharacter.appearance.height[0]}</h4>
//               <h4 className="title is-6 has-text-centered">Weight : {
//                 randomCharacter.appearance.weight[0]}</h4>
//               <h4 className="title is-6 has-text-centered">Place of Birth : {
//                 randomCharacter.biography.placeOfBirth}</h4>
//               <h4 className="title is-6 has-text-centered">First Appearance : {
//                 randomCharacter.biography.firstAppearance}</h4>
//               <h4 className="title is-6 has-text-centered">Publisher : {
//                 randomCharacter.biography.publisher}</h4>
//               <h4 className="title is-6 has-text-centered">Alignment : {
//                 randomCharacter.biography.alignment}</h4>
//               <h4 className="title is-6 has-text-centered">Group Affiliation : {
//                 randomCharacter.connections.groupAffiliation}</h4>
//               <h4 className="title is-6 has-text-centered">Relatives : {
//                 randomCharacter.connections.relatives}</h4>
//             </div>
//           </div>        
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProfileCompare
