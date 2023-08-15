import React from 'react';

// Imports
import Cards from '../components/Cards';

const Example = () => {
    const currentExamples = [
        {img: require('../images/klc-heat-map.PNG'),
        alt: 'screenshot of the klc heat map', 
        title: 'KLC Participation', 
        text: 'An interactive and dynamic map dashboard visualizing KLC participation for urban and rural participants.', 
        link: "https://bsovic23.github.io/klc-heat-map/"}
    ];

    return(
        <section id='example'>
            <section id='example-intro'>
                <h1>Examples</h1>
                <p>Below include examples of previous NKF work</p>
            </section>
            <section id='example-cards'>
                <Cards exampleCards={currentExamples} />
            </section>
        </section>
    )
};

export default Example;