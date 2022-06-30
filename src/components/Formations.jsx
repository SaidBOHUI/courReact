import Ecole from "./Ecole"

const Formations = () => {
    return  <>
                <div className="formations bigContainer">
                    <h2>Formations</h2>
                    <Ecole ecole="Ipssi" startYear="2022" endYear="2022" description="Mon parcours à l’IPSSI permet l’obtention de diplômes et de titres reconnus par l’État, certifiés Qualiopi, Datadock et France compétences du BTS au BAC+5."/>
                    <Ecole ecole="Doranco" startYear="2020" endYear="2021" description="DORANCO forme depuis de nombreuses années des professionnels en reconversion ou des étudiants aux métiers de l'informatique, du Web, du Digital et de la Tech."/>
                    <Ecole ecole="Esam" startYear="2015" endYear="2018" description="L’ESAM, l’école de management du Groupe IGS basée à Paris, Lyon, Toulouse et Rennes vous prépare aux métiers de la Finance d’Entreprise, du Management Stratégique et du Droit des affaires. Notre parcours d’études allie dimensions entrepreneuriale et internationale, excellence académique et acquisition des compétences professionnelles, indispensables aux managers, responsables financiers et juristes de demain."/>
                    <Ecole ecole="Université de Cergy" startYear="2014" endYear="2015" description="Université situé sur le campus de cergy-st-martin ou l'on enseigne le cursus math-physique-informatique"/>
                    <Ecole ecole="Lycée Honoré de Balzac" startYear="2011" endYear="2014" description="Lycée internationnale Honoré de balzac"/>
                    <Ecole ecole="College Gerard Philipe" startYear="2007" endYear="2011" description="Collège public Gerard Philipe situé à Paris 18"/>
                </div>
            </>
}

export default Formations