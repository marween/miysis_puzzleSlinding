import React, {useState} from 'react'
import useForm from 'react-hook-form'
import './App.css';
import './index.js';
import ReactDOM from "react-dom";


function Contact () {
    const { register, errors,  handleSubmit  } = useForm();
    const [showText, setShowText] = useState(false);
    const onSubmit = () => setShowText(!showText);

    return (
        <div className=" form ">
        <form onSubmit={handleSubmit(onSubmit )} >
            {showText &&
            <div >
                <h1 style={{ textAlign: "center" }}>Success!</h1>
                <p style={{ textAlign: "center" }}>
                   Votre message a été envoyé avec succes
                </p>
            </div>
            }
            <div className="form-group col-6 ">
                <label className="form-control-label" htmlFor="form-group-input">Nom</label>
                <input type="text"
                       className="form-control"
                       name="nom"
                       ref={register({ required: true, maxlength: 20 })}
                />
                {errors.nom &&  <p style={{ color: "white" }}>
                    Nom obligatoire
                </p>}
            </div>

            <div className="form-group col-6">
                <label className="form-control-label" htmlFor="form-group-input">Prenom</label>
                <input type="text"
                       className="form-control"
                       name="prenom"
                       ref={register({ required: true, maxlength: 20 })}
                />
                {errors.prenom && <p style={{ color: "white" }}>
                    Prénom obligatoire
                </p>}
            </div>

            <div className="form-group col-6">
                <label className="form-control-label" htmlFor="form-group-input">Email</label>
                <input type="text"
                       className="form-control"
                       name="email"
                       ref={register({
                           required: true,
                           pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                       })}
                />
                {errors.email && <p style={{ color: "white" }}>
                   email non valide
                </p>}
            </div>

            <div className="form-group col-6">
                <label className="form-control-label" htmlFor="form-group-input">Message</label>
                <textarea
                    className="form-control"
                    id="form-group-input"
                    name="message"
                    ref={register({
                        required: true,
                    })}>
                </textarea>
                {errors.message && <p style={{ color: "white" }}>
                    vous devevez mettre un message
                </p>}
            </div>
            <div className="form-group col-6">
                <button
                    type="submit"
                    > Envoyer </button>


            </div>

        </form>
        </div>


    );
}
ReactDOM.render(<Contact  />, document.getElementById('root'));
export default Contact ;