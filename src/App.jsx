import { useState } from 'react'
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import heroImg from './assets/pr.png';


const etudiant = [
{
  nom : "Mohamed Yassine",
  prenom : "El ghali",
  Email : "mohamedyassineelghali01@gmail.com" ,
  Teléphone : "+216 25020408",
  Filére : "Génie logiciel et systemes d'information",
  Annéedetude : "2éme",
  Groupe : "GLSI2",
  Ville : "Mahdia",
  image: heroImg
},
{
    prenom: "Slim",
    nom: "Boubaker",
    Email: "slimboubaker@gmail.com",
    Teléphone: "+216 99 999 999",
    Filére: "Génie Logiciel et Systèmes d'Information",
    Annéedetude : "2éme",
    Groupe : "GLSI2",
    Ville : "Mahdia",
    image: heroImg
  },
  {
    prenom: "Sarra",
    nom: "Trabelsi",
    Email: "sarra.trabelsi@gmail.com",
    Teléphone: "+216 22 345 678",
    Filére: "Génie Logiciel et Systèmes d'Information",
    Annéedetude : "2éme",
    Groupe : "GLSI2",
    Ville : "sousse",
    image: heroImg
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    Email: "mariem.khalfallah@gmail.com",
    Teléphone: "+216 27 567 890",
    Filére: "Génie Logiciel et Systèmes d'Information",
    Annéedetude : "2éme",
    Groupe : "GLSII2",
    Ville : "sousse",
    image: heroImg
  },
]


function App() {

  return (
    <div className="app">
      <Header />
      <Navbar />
      <main className="container">
        {etudiant.map((etudiant) => (
          <StudentCard
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            Email={etudiant.Email}
            Teléphone={etudiant.Teléphone}
            Filére={etudiant.Filére}
            Annéedetude={etudiant.Annéedetude}
            Groupe={etudiant.Groupe}
            Ville={etudiant.Ville}
            image={etudiant.image}
          />
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default App;


