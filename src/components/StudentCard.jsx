import { useState } from 'react'
import heroImg from './assets/pec.jpg'
import './App.css'

const etudiant = {
  nom : "Mohamed Yassine",
  prenom : "El ghali",
  Email : "mohamedyassineelghali01@gmail.com" ,
  Teléphone : "+216 25020408",
  Filére : "Génie logiciel et systemes d'information",
  Annéedetude : "2éme",
  Groupe : "GLSI2",
  Ville : "Mahdia",
  image: heroImg
}

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="card">
        <h1>Fiche étudiant</h1> <br />
        <img src={etudiant.image} alt="" />
        <h3><span id='np'>Nom & prénom :</span> {etudiant.nom} {etudiant.prenom} </h3>
        <h3><span id='email'>Email :</span>  {etudiant.Email} </h3>
        <h3><span id='tel'>Teléphone :</span>  {etudiant.Teléphone}</h3>     
        <h3><span id='fi'>Filére :</span> {etudiant.Filére} </h3>
        <h3><span id='ae'>Année d'etude :</span> {etudiant.Annéedetude}</h3>
        <h3><span id='g'>Groupe :</span>  {etudiant.Groupe}</h3>
        <h3><span id='v'>Ville :</span> {etudiant.Ville} </h3>
        <a href="mailto:mohamedyassineelghali01@gmail.com">
        <button id='bt'>contune</button>
        </a>
      </div>
    </div>
  )
}

export default App
