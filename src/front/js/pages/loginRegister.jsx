import React, { useContext, useEffect, useState } from "react";
import { LoginForm } from "../component/loginForm.jsx";
import { UserForm } from "../component/userForm.jsx";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../component/spinner.jsx";

export default function LoginRegister() {

    const { store, actions } = useContext(Context);
    const [isLogin, setIsLogin] = useState(true);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    // Alternar entre Login y Register
    const toggleForm = () => setIsLogin(!isLogin);

    // Manejar el envío del formulario
    const handleSubmit = async (formData) => {
        let success;
        setLoading(true);
        if (isLogin) {
            // Intentar iniciar sesión
            success = await actions.login(formData);
            await actions.getUserInfo()
            const user_id = store.user.id;
            //console.log("The user who just logged in has the id of: " + user_id)

        } else {
            // Intentar registrar un nuevo usuario
            success = await actions.register(formData);
        }

        if (success) {
            // Actualizar el token si el login o registro fue exitoso
            setToken(localStorage.getItem("token"));

            // Si fue un registro exitoso, cambiar automáticamente a login
            if (!isLogin) {
                setIsLogin(true);
                console.log("Successful registration. Switching to login form.");
            } else {
                console.log("Successful login.");
                navigate("/");
            }
        } else {
            // Si no fue exitoso, asegurarse de mantenerse en la página de registro
            if (!isLogin) {
                setMessage({ type: "success", text: response.message });
                console.log("Failed registration. Staying on registration form.");
                setIsLogin(false);
            } else {
                setMessage({ type: "error", text: response.message });
                console.log("Failed login. Staying on login form.");
            }
        }
        setLoading(false); // Detener el spinner al finalizar
    };

    useEffect(() => {
        //console.log("Token actual:", token);
    }, [token]);

    return (
        <section className="banner__login" aria-labelledby="banner__title">

            {loading && <Spinner />}

            <div className="banner__image-container">
                <img src="https://res.cloudinary.com/dfhhq651o/image/upload/v1737888561/women-banner-2_aqfefy.png" alt="Banner background showing a happy girl" className="banner__image-login" />
            </div>

            {/* Mostrar el formulario con la lógica de tipo login/register */}
            {isLogin ?
                <div className="banner__login-content container">
                    <div className="banner__column-login col-sm-12 col-md-12 col-lg-6">
                        <div className="login__text">
                            <h2 className="login__heading m-0">Join Us and Start Planning!</h2>
                        </div>
                        <LoginForm onSubmit={handleSubmit} />
                        <p className="login-form__text" onClick={toggleForm} role="button" tabIndex="0">
                            Don't have an account? <span className="login-form__highlight">Register</span>
                        </p>
                    </div>
                </div>
                :
                <div className="banner__login-content container">
                    <div className="banner__column-login col-sm-12 col-md-12 col-lg-6">
                        <div className="login__text">
                            <h2 className="login__heading m-0">Welcome Back! <br /> Ready to Plan Your Next Meal?</h2>
                        </div>
                        <UserForm onSubmit={handleSubmit} />
                        <p className="login-form__text" onClick={toggleForm} role="button" tabIndex="0">
                            Already have an account? <span className="login-form__highlight">Login</span>
                        </p>
                    </div>
                </div>
            }
        </section>
    );
}
