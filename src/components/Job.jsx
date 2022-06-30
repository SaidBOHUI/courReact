const Job = ({entreprise, startYear, endYear, lieu, secteur, description}) => {
    return  <>
                <div className="job">
                    <p className="entreprise">{entreprise} | {secteur}</p>
                    <p className="lieuDuree">{lieu} | {startYear}-{endYear}<br/></p>
                    <p className="description">{description}</p>
                </div>
            </>
}

export default Job