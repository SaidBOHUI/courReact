import Job from "./Job"


const Experiences = () => {
    return  <>
                <div className="experiences bigContainer">
                    <h2>Expériences</h2>
                    <Job entreprise="Belacom" secteur="Marketing digital" lieu="Issy-les-Moulineaux" startYear="Fevrier 2022" endYear="Aujourd'hui" description="Nous auditons et sélectionnons les meilleures solutions marketing du marché. Nous vous accompagnons humainement dans la prise en main et l’assistance technique de votre solution."/>
                    <Job entreprise="CER92" secteur="Formation professionnel" lieu="Asnières-Sur-Seine" startYear="Avril 2018" endYear="Juillet 2018" description="entreprise qui propose des formations dans différents domaines aux entreprise. J'y ai fais de la prospection commerciale ainsi que u marketing et un peu de comptabilité"/>
                    <Job entreprise="Subway" secteur="Marketing digital" lieu="St-Michel Paris 5ème" startYear="Juin 2019" endYear="Aout 2019" description="Agent polyvalent, j'etais en charge de la confection des Sandwichs, de la propreté des locaux"/>
                    <Job entreprise="Ecole elementaire" secteur="Animation" lieu="Marcadet Paris 18eme" startYear="Mai 2015" endYear="Juillet 2015" description="Animateur, j'etais en charge de la sécurité et du bien-être des enfants sous ma responsabilité"/>
                    <Job entreprise="Hopital" secteur="Medical" lieu="Kremlin-Bicêtre" startYear="Juin 2017" endYear="Août 2017" description="Dans le Pôle endocrinologie, j'etais charger des taches auxiliaires comme la gestion de la nourriture ainsi que l'assistance des infirmières"/>
                </div>
            </>
}

export default Experiences