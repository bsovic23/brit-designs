import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = ({exampleCards}) => {
    return(
        <section id='cards'>
            {exampleCards ? (
                <section>
                    {exampleCards.map((cards, index) => (
                        <div class='card' style={{ width: '18rem' }} key={index}>
                            <img src={cards.img} class='card-img-top' alt={cards.alt} />
                            <div class='card-body'>
                                <h5 class="card-title">{cards.title}</h5>
                                <p class="card-text">{cards.text}</p>
                                <a href={cards.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Click to view</a>
                            </div>
                        </div>
                    ))}
                </section>
            ) : null};
        </section>
    )
}

export default Cards;