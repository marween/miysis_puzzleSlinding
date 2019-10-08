import React from "react";
import './App.css';
import './index.js';
import Game from './Game.js'
import image from './images/pexels-photo-926987.jpg';
import gt from './images/photo-1555616635-640b71bdb185.jpg';
import head from './images/pexels-photo-724994.jpg';
import puce from './images/pexels-photo-2582937.jpg';
import puce2 from './images/photo-1555616635-640b71bdb185.jpg';

function App() {


    return (
        <div>
            <img className='header_fond' src={image}/>
            <div className='pheader'>
                <h1 className='ptitle'>Formulabs </h1>
            </div>


            <section id="s1" className='slide'>
                <div className='title '>
                    <h2 className='sTitle '>Interfaces processeur-cerveau</h2>
                    <hr/>

                </div>
                <p>Formulabs propose des solutions innovantes dans le cadre le la connexion du cerveau
                    humain et
                    des dernières technologies CPU. Les études cliniques ont duré plus de vingt années et
                    nos
                    résultats sont désormais validés. Nos premières interfaces neuronales sont donc dès à
                    présent disponibles.
                </p>
                <img className=' img ' src={head}/>
            </section>


            <section id="s2" className='slide'>
                <div className='title'>
                    <h2 className='sTitle'>La technologie</h2>
                    <hr/>

                </div>
                <p>
                    L'interface entre le cerveau humain et la puissance de calcul d'un processeur n'est désormais
                    plus un rêve. Les laboratoires de Formulabs ont mis au point un procédé breveté et unique au
                    monde permettant d'implanter une processeur au sein d'un cerveau organique.
                </p>
                <p>
                    La connexion entre l'organe humain et son annexe numérique se fait au travers d'un réseau
                    neuronal arti􏰀ciel intermédiaire qui est posé lors de l'opération. L'installation des
                    composants est sans douleur et parfaitement sans risque.
                </p>
                <p>
                    La technologie Formulabs est 􏰀able et o􏰁re des possibilités absolument incroyables. Nos
                    clients a􏰂chent un taux de satisfaction proche de 100%.
                </p>
                <img className=' img ' src={head}/>
            </section>

            <section id="s3" className='slide'>
                <div className='title'>
                    <h2 className='sTitle'>La puce GT2100</h2>
                    <hr/>

                </div>
                <p>
                    Notre gamme actuelle comprend un processeur unique, le GT2100. Il o􏰁re une puissance de calcul
                    d e 841,73 GFLOPS. Cette puce est produite dans des conditions très stricte et dans des
                    matériaux bio-compatibles évitant tout risque de rejet.
                </p>
                <p>
                    La puce GT2100 est aussi doté d'un récepteur TMZ permettant des updates réguliers sans aucun
                    risque de nuisances pour le corps. Cette puce est un produit unique sur le marché, elle
                    constitue une révolution majeur dans le domaine des neuro- sciences.
                </p>
                <img className='  img' src={puce}/>
                <img className=' img ' src={puce2}/>

            </section>

            <section id="s4" className='slide'>
                <div className='title '>
                    <h2 className='sTitle'>Les avantages du Formulabs GT2100</h2>
                    <hr/>

                </div>
                <p>
                    L'installation de la puce GT2100 permet l'augmentation de nombreuses facultés du cerveau. En
                    voici une liste non exhaustive:
                </p>

                <ul>
                    <li>Augmentation du nombre de couleurs perçues et de la netteté générale</li>
                    <li>Capacité artistiques augmentées jusqu'à 750%</li>
                    <li>Possibilité de travailler en multitâche et donc de gagner un temps précieux</li>
                    <li>Capacité maximale de calcul numérique</li>
                    <li>Possibilité d'une connexion Internet donnant accès à des milliards d'informations</li>
                    <li>Capacités logiques décuplées</li>
                </ul>
                <img className=' img ' src={head}/>

            </section>
            <section id="s5" className='slide'>
                <div className='title '>
                    <h2 className='sTitle'>Test de logique Avant - Après</h2>
                    <hr/>
                    <p>
                        Voici un test de logique développé pour vous permettre d'évaluer concrètement le gain o􏰁ert
                        par la puce GT2100. Reconstituer le puzzle suivant, prend en moyenne 2,1 secondes à nos clients
                        augmentés.
                    </p>
                    <p> Vous pouvez facilement tester vos capacités actuelles afin de mieux apprécier les avantages
                        liés à l'augmentation.</p>
                    <p> Voici le test, veillez à bien noter votre temps: </p>
                    <Game/>
                </div>


            </section>

            <section id="s6" className='slide'>
                <div className='title'>
                    <h2 className='sTitle'>Aspects légaux liés à l'augmentation</h2>
                    <hr/>

                </div>
                <p>
                    Le cerveau est donc couplé au processeur Formulabs. Notre client est donc considéré dès
                    l'installation de notre puce, dans la catégorie des humains augmentés. Veuillez noter que cela
                    n'a􏰁ectera en rien vos droits et devoirs en tant que citoyen dans votre pays.
                </p>
                <p>
                    Il est tout de même obligatoire de vous enregistrer au service international de
                    répertorisation des augmentations non biologiques. C'est une démarche administrative simple
                    dont nous pouvons nous occuper sur demande.
                </p>
                <p>
                    Vos futurs employeurs seront systématiquement averti de votre Augmentation, ce qui est souvent
                    considéré comme un atout non négligeable.
                </p>
                <img className='  img' src={head}/>

            </section>
            <section id="s7" className='slide'>
                <div className='title '>
                    <h2 className='sTitle'>Formulaire de contact</h2>
                    <hr/>
                    <p>
                        Si vous souhaitez nous rencontrer ou simplement obtenir plus d'information sur nos services, merci de remplir ce formulaire:
                    </p>

                    <form role="form">
                        <div className="form-group col-lg-4">
                            <label className="form-control-label" htmlFor="form-group-input">Nom</label>
                            <input type="text" className="form-control" id="form-group-input" name="name" />
                        </div>
                        <div className="form-group col-lg-4">
                            <label className="form-control-label" htmlFor="form-group-input">Prenom</label>
                            <input type="text" className="form-control" id="form-group-input" name="name" />
                        </div>
                        <div className="form-group col-lg-4">
                            <label className="form-control-label" htmlFor="form-group-input">Email</label>
                            <input type="text" className="form-control" id="form-group-input" name="email"/>
                        </div>
                        <div className="form-group col-lg-12">
                            <label className="form-control-label" htmlFor="form-group-input">Message</label>
                            <textarea className="form-control" id="form-group-input" name="notes" rows="6"></textarea>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    );
}


export default App;