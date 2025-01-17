import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";


export const Form_Registro = () => {
    const { actions } = useContext(Context)
    const [formData, setFormData] = useState({
        user: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await actions.register(formData);
    };

    return (
        <div className="tab-pane fade show active">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="User"
                        name="user"
                        value={formData.user}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn w-100 text-white"
                    style={{ backgroundColor: '#6f42c1' }}
                >
                    Register
                </button>
            </form>
        </div>
    );
};