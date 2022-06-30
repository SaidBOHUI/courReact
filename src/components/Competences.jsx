import Jauge from "./Jauge"

const Competences = () => {

	return (
			<div className = 'bigContainer'>
				<div className="title">
					<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-code-slash" viewBox="0 0 16 16">
						<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
					</svg>
					<h2>Compétences</h2>
				</div>
				<div className="competenceTab">
					<h3>Mes compétences Pro</h3>
					<div className="fullCompetence">
						<div className="halfCompetence">
							<Jauge matiere = 'html5' color = '#6C1F62' pourcentage = '80%'/>		
							<Jauge matiere = 'css' color = '#5DD3D8' pourcentage = '75%'/>		
							<Jauge matiere = 'PHP' color = '#D9A88E' pourcentage = '60%'/>		
							<Jauge matiere = 'Js' color = '#A80B19' pourcentage = '70%'/>		
						</div>
						<div className="halfCompetence">
							<Jauge matiere = 'React' color = '#F1AC1D' pourcentage = '50%'/>		
							<Jauge matiere = 'Bootstrap' color = '#7C380C' pourcentage = '70%'/>		
							<Jauge matiere = 'Symfony' color = '#E70A55' pourcentage = '70%'/>		
							<Jauge matiere = 'Anglais' color = '#2BF72E' pourcentage = '90%'/>		
						</div>
					</div>
				</div>
			</div>
	)
}


//Tableau compétences



export default Competences
