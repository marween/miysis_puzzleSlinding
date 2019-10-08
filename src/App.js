import React, {useEffect} from "react";
import './App.css';
import './index.js';
import AOS from 'aos';
import 'aos/dist/aos.css'

import Game from './Game.js'
import background from './images/pexels-photo-926987.jpg';
import gt from './images/photo-1555616635-640b71bdb185.jpg';
import head from './images/pexels-photo-724994.jpg';
import puce from './images/pexels-photo-2582937.jpg';
import puce2 from './images/photo-1555616635-640b71bdb185.jpg';
import labo from './images/pexels-photo-267596.jpg'
import cerveau from './images/photo-1559757148-5c350d0d3c56.jpg'
import color from './images/pexels-photo-2017481.jpg'

function App() {

    AOS.init({

            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1200, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    })
    return (
        <div>

            <div className='header_fond'>
                <h1 id='name'>Formulabs </h1>
            </div>

            <section id="s1" className='slide '>
                <div className='title '>
                    <h2 className='sTitle '>Interfaces processeur-cerveau</h2>
                    <hr/>
                </div>
                    <p data-aos="fade-up" >Formulabs propose des solutions innovantes dans le cadre le la connexion du cerveau
                        humain et
                        des dernières technologies CPU. Les études cliniques ont duré plus de vingt années et
                        nos
                        résultats sont désormais validés. Nos premières interfaces neuronales sont donc dès à
                        présent disponibles.
                    </p>
                <img data-aos="flip-left" className=' img ' src={head}/>

            </section>

            <section id="s2" className='slide aos-animate'>
                <div className='title'>
                    <h2 className='sTitle'>La technologie</h2>
                    <hr/>

                </div>
                <p data-aos="fade-up" className="aos-animate" >
                    L'interface entre le cerveau humain et la puissance de calcul d'un processeur n'est désormais
                    plus un rêve. Les laboratoires de Formulabs ont mis au point un procédé breveté et unique au
                    monde permettant d'implanter une processeur au sein d'un cerveau organique.
                </p >
                <p data-aos="fade-up" className="aos-animate" >
                    La connexion entre l'organe humain et son annexe numérique se fait au travers d'un réseau
                    neuronal arti􏰀ciel intermédiaire qui est posé lors de l'opération. L'installation des
                    composants est sans douleur et parfaitement sans risque.
                </p>
                <p data-aos="fade-up" className="aos-animate" >
                    La technologie Formulabs est 􏰀able et o􏰁re des possibilités absolument incroyables. Nos
                    clients a􏰂chent un taux de satisfaction proche de 100%.
                </p>
                <img data-aos="flip-left" className=' img ' src={labo}/>
            </section>

            <section id="s3" className='slide'>
                <div className='title'>
                    <h2 className='sTitle'>La puce GT2100</h2>
                    <hr/>

                </div>
                <p data-aos="fade-up" className="aos-animate" >
                    Notre gamme actuelle comprend un processeur unique, le GT2100. Il o􏰁re une puissance de calcul
                    d e 841,73 GFLOPS. Cette puce est produite dans des conditions très stricte et dans des
                    matériaux bio-compatibles évitant tout risque de rejet.
                </p>
                <p data-aos="fade-up" className="aos-animate" >
                    La puce GT2100 est aussi doté d'un récepteur TMZ permettant des updates réguliers sans aucun
                    risque de nuisances pour le corps. Cette puce est un produit unique sur le marché, elle
                    constitue une révolution majeur dans le domaine des neuro- sciences.
                </p>
                <img data-aos="flip-left" className='  img' src={puce}/>
                <img data-aos="flip-right" className=' img ' src={puce2}/>

            </section>

            <section id="s4" className='slide'>
                <div className='title '>
                    <h2 className='sTitle'>Les avantages du Formulabs GT2100</h2>
                    <hr/>

                </div>
                <p data-aos="fade-up" className="aos-animate" >
                    L'installation de la puce GT2100 permet l'augmentation de nombreuses facultés du cerveau. En
                    voici une liste non exhaustive:
                </p>

                <ul>
                    <li data-aos="fade-up" className="aos-animate" >Augmentation du nombre de couleurs perçues et de la netteté générale</li>
                    <li data-aos="fade-up" className="aos-animate" >Capacité artistiques augmentées jusqu'à 750%</li>
                    <li data-aos="fade-up" className="aos-animate" >Possibilité de travailler en multitâche et donc de gagner un temps précieux</li>
                    <li data-aos="fade-up" className="aos-animate" >Capacité maximale de calcul numérique</li>
                    <li data-aos="fade-up" className="aos-animate" >Possibilité d'une connexion Internet donnant accès à des milliards d'informations</li>
                    <li data-aos="fade-up" className="aos-animate" >Capacités logiques décuplées</li>
                </ul>
                <img data-aos="flip-left" className=' img ' src={color}/>

            </section>
            <section id="s5" className='slide'>
                <div className='title '>
                    <h2 className='sTitle'>Test de logique Avant - Après</h2>
                    <hr/>
                    <p data-aos="fade-up" className="aos-animate" >
                        Voici un test de logique développé pour vous permettre d'évaluer concrètement le gain o􏰁ert
                        par la puce GT2100. Reconstituer le puzzle suivant, prend en moyenne 2,1 secondes à nos clients
                        augmentés.
                    </p >
                    <p data-aos="fade-up" className="aos-animate" > Vous pouvez facilement tester vos capacités actuelles afin de mieux apprécier les avantages
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
                <p data-aos="fade-up" className="aos-animate" >
                    Le cerveau est donc couplé au processeur Formulabs. Notre client est donc considéré dès
                    l'installation de notre puce, dans la catégorie des humains augmentés. Veuillez noter que cela
                    n'a􏰁ectera en rien vos droits et devoirs en tant que citoyen dans votre pays.
                </p>
                <p data-aos="fade-up" className="aos-animate" >
                    Il est tout de même obligatoire de vous enregistrer au service international de
                    répertorisation des augmentations non biologiques. C'est une démarche administrative simple
                    dont nous pouvons nous occuper sur demande.
                </p>
                <p data-aos="fade-up" className="aos-animate" >
                    Vos futurs employeurs seront systématiquement averti de votre Augmentation, ce qui est souvent
                    considéré comme un atout non négligeable.
                </p>
                <img data-aos="flip-right" className=' img ' src={cerveau}/>

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