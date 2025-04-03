import { useState } from "react"

export const useForm = (objInicial = {}) => {

    const [formulario, setFormulario] = useState(objInicial);

    const serializarFormulario = (formulario) => {
        const formData = new FormData(formulario);

        let objetoCompleto = {};

        for (let [name, value] of formData) {
            objetoCompleto[name] = value;
        }

        return objetoCompleto;
    }

    const enviado = e => {
        e.preventDefault();

        setFormulario(serializarFormulario(e.target));

        document.querySelector(".codigo").classList.add("enviado");

    }

    const cambiado = ({target}) => {
        const {name, value} = target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return {
        formulario,
        enviado,
        cambiado
    }
}