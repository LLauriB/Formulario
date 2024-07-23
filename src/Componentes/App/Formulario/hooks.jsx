import { useState } from "react";

const FormularioPerson = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const enviarFormulario = (e) => {
        e.preventDefault();
        const newPerson = {
            firstName, lastName, email, password, confirm 
            }    
            props.actualizarHooks(newPerson);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirm("")
        }

    return(
        <>
            <form onSubmit={enviarFormulario}>
                <div className="form">
                    <label htmlFor="firstName">
                        First Name:
                    </label>
                    <input type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="form">
                    <label htmlFor="lastName">
                        Last Name:
                    </label>
                    <input type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="form">
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form">
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form">
                    <label htmlFor="confirm">
                        Confirm Password:
                    </label>
                    <input type="password"
                            id="confirm"
                            name="confirm"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}/>
                </div>
                <button>Add</button>
            </form>
        </>
    )
}

export default FormularioPerson;