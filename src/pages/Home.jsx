import React from 'react';
import HeroStatus from '../components/HeroStatus';
import TopAppsSection from '../components/TopAppsSection'

const Home = () => {
    return (
        <div className='"flex flex-col"'>
           <HeroStatus />
           <TopAppsSection/>
        </div>
       

    );
};

export default Home;