import * as React from 'react';
import italien1 from "../assets/img/lasagne.jpg"
import italien2 from "../assets/img/involtinis.jpg"
import italien3 from "../assets/img/muffuletta.jpg"
import indien1 from "../assets/img/pizza.jpeg"
import indien2 from "../assets/img/omelette.jpeg"
import indien3 from "../assets/img/kefta.jpeg"

export default function main() {
    return (
        <React.Fragment>
            <div>
                <div>
                    <div>
                        <h1>Italien</h1>
                        <img className="img_italien1"
                            src={italien1}
                            alt="Lasagne Italienne"
                        />
                        <h3>Lasagne Italienne</h3>
                    </div>
                    <div>
                        <img className="img_italien2"
                            src={italien2}
                            alt="Involtinis au poulet champignons et mozzarella"
                        />
                        <h3>Involtinis au poulet champignons et mozzarella</h3>
                    </div>
                    <div>
                        <img className="img_italien3"
                            src={italien3}
                            alt="Muffuletta sandwich sicilien au salami mortadelle et provolone"
                        />
                        <h3>Muffuletta sandwich sicilien au salami mortadelle et provolone</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Indien</h1>
                        <img className="img_indien1"
                            src={indien1}
                            alt="Pizza à l'Indienne"
                        />
                        <h3>Pizza à l'Indienne</h3>
                    </div>
                    <div>
                        <img className="img_indien2"
                            src={indien2}
                            alt="Omelette indienne"
                        />
                        <h3>Omelette indienne</h3>
                    </div>
                    <div>
                        <img className="img_indien3"
                            src={indien3}
                            alt="Kefta à l'indienne"
                        />
                        <h3>Kefta à l'indienne</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Italien</h1>
                        <img className="logo_netfood"
                            src={italien1}
                            alt="Lasagne Italienne"
                        />
                        <h3>Lasagne Italienne</h3>
                    </div>
                    <div>
                        <img className="logo_netfood"
                            src={italien2}
                            alt="Involtinis au poulet champignons et mozzarella"
                        />
                        <h3>Involtinis au poulet champignons et mozzarella</h3>
                    </div>
                    <div>
                        <img className="logo_netfood"
                            src={italien3}
                            alt="Muffuletta sandwich sicilien au salami mortadelle et provolone"
                        />
                        <h3>Muffuletta sandwich sicilien au salami mortadelle et provolone</h3>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}

