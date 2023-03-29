import { useNavigate} from "react-router-dom";
import Typical from 'react-typical';


const View5 = () => {

  const navigate = useNavigate();
  const navToview3 = () => {navigate('/')};
  const navToview4 = () => {navigate('/View4')};
  const navToview5 = () => {navigate('/View5')};
    return (<>




   <div className="ecran3 animate__animated  animate__fadeInUp " style={{ position: 'fixed', top: 70, right: 10 }} >

   <div className="container-fluid">


   <h2 className="y" ><Typical
        
        steps={['Objectifs : ', 500, 'Objectifs : Quelques objectifs ateint ou en cours que je me fixe.' ,500]}
        loop={1}
        wrapper="p"
      /></h2> 
  <br></br>    

  <div>

  <table className="table">
 
    <tbody className="yt" >
   
      <tr>
        <td className="yu">Acquérir une expérience professionnelle dans le monde du textile et dans le domaine du rapport client.</td>

        <td className="v2" ></td>
      </tr>
      <tr>
        <td className="yu">Découvrir Reactjs / Créer un portfolio en Reactjs / Le publier</td>
 
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Découvrir en surface le monde de la cybersécurité et ses enjeux.</td>
 
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Réaliser un outil informatique de cryptage de mot de passe.</td>
 
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Intégrer une alternance dans le domaine de la cybérsécurité. </td>
 
        <td className="eca2"></td>
      </tr>
      <tr>
        <td className="yu">INTEMPOREL: Instaurer un apprentisage des techniques et technologies liées à la cybersécurité.</td>
 
        <td className="eca2"></td>
      </tr>
      <tr>
        <td className="yu">INTEMPOREL: Lecture de livres sur la cybersécurité et créations de projets en corrélation avec ce théme.</td>
 
        <td className="eca2"></td>
      </tr>
      <tr>
        <td className="yu">INTEMPOREL: Acquérir des compétences en accéptant des challenges Capture The Flag (https://www.root-me.org).</td>
 
        <td className="eca2"></td>
      </tr>
    </tbody>
  </table>

  </div>
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
    
export default View5;
