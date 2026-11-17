import { useState } from 'react'
// import './App.css'

import './StudentCard.css'

function StudentCard(props) {
  
 

  return (
   
      <div className="card">
        <h1 id="F">Fiche Etudiant</h1>
        <img src={props.image} alt="" id="img"/>

        <h3><span id='np'>Nom & prénom :</span> {props.nom} {props.prenom} </h3>

        <h3><span id='email'>Email :</span>  {props.Email} </h3>

        <h3><span id='tel'>Teléphone :</span>  {props.Teléphone}</h3>     

        <h3><span id='fi'>Filére :</span> {props.Filére} </h3>

        <h3><span id='ae'>Année d'etude :</span> {props.Annéedetude}</h3>

        <h3><span id='g'>Groupe :</span>  {props.Groupe}</h3>

        <h3><span id='v'>Ville :</span> {props.Ville} </h3>

        <a href={`mailto:${props.Email}`}>
          <button id='bt'>contacter</button>
        </a>

      </div>

  )
}

export default StudentCard;
