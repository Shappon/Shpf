import {  useNavigate } from "react-router-dom";
import * as React from 'react';
import Typical from 'react-typical';


const View4 = () => {
  const navigate = useNavigate();
  const navToview3 = () => { navigate('/') };
  const navToview4 = () => { navigate('/View4') };
  const navToview5 = () => { navigate('/View5') };
  return (<>


   <div className="ecran2 animate__animated animate__fadeInUp " style={{ position: 'fixed', top: 70, right: 10 }} >

   <div className="container-responsive">
  <h2 className="y" ><Typical
        
        steps={['Projets : ', 500,'Projets : Une selections de divers projets informatiques  réalisés ou en cours. ', 500]}
        loop={1}
        wrapper="p"
      /></h2> 
  <br></br> 
  <br></br>        
  <table className="table">
    <thead className="yt" >
      <tr>
        <th ></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody className="yt" >
      <tr>
        <td className="yu">Création/Implémentation d'un plugin dans un site marchand.</td>
        <td><span class="badge bg-info badged">html/css/js</span><span class="badge bg-info badged">WordPress</span><span class="badge bg-info badged">Entreprise</span></td>
         <td><a variant="contained" href="DocP1.pdf" download >Doc</a></td>
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu" >Découverte/Création d'une Application Porte folio en Reactjs.</td>
        <td><span class="badge bg-info badged"></span><span class="badge bg-info badged">html/css/js/json</span><span class="badge bg-info badged">Personnel</span></td>
        <td></td>
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Création d'une application de chiffrage de mot de passe.</td>
        <td><span class="badge bg-info badged">js/Python</span><span class="badge bg-info badged">Personnel</span></td>
        <td></td>
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu" >Création d'un outil de sécurité offensive.</td>
        <td></td>
        <td></td>
        <td className="eca2" ></td>
      </tr>
      <tr>
        <td className="yu" >Création d'un analyseur réseau.</td>
        <td></td>
        <td></td>
        <td className="eca2" ></td>
      </tr>
    
    </tbody>
  </table>
</div>

   </div>

   <div id="borderDemo" style={{ position: 'fixed', bottom: -70,}}className="button-container ">
    
    </div>
    
    <button style={{ position: 'fixed', bottom: 80, left:760  ,}} className="button parcour  g" onClick={navToview3} href="">PARCOURS</button>
  <button style={{ position: 'fixed', bottom: 80 , left:960  ,}} className="button projet g" onClick={navToview4} href="">PROJETS</button>
<button style={{ position: 'fixed', bottom: 80 , left: 1160 ,}} className="button objectif  g" onClick={navToview5} href="">OBJECTIFS</button>
</>
 );
}

export default View4;
