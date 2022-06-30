import React from 'react';
// import Loader from './Loader'
import Header from '../components/header';
import Footer from '../components/footer';
import APropos from '../components/APropos';
import Formations from '../components/Formations';
import Experiences from '../components/Experiences';
import Competences from '../components/Competences';
// import Degrees from '../components/Degrees';
// import Hobbies from '../components/Hobbies';


const Cv = () => {
    return  <>
                <Header />
                    <h1>Mon Cv</h1>
                    <APropos/>
                    <Formations/>
                    <Experiences/>
                    <Competences/>
                    {/* <Degrees/> */}
                    {/* <Hobbies/> */}
                <Footer />
            </>
}

export default Cv;