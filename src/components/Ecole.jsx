const ecole = ({ecole, startYear, endYear, description}) => {
    return  <>
                <p className="ecole">
                {ecole} | {startYear}-{endYear}<br/>
                {description}
                </p>
            </>
}

export default ecole