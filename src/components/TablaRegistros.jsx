import { useReactTable } from "@tanstack/react-table";
import { getData } from "../funcionesmongo/expedientes";
import { useEffect, useState } from "react";

function TablaRegistros() {
    const [expedientes, setExpedientes] = useState([]);

    async function listadoExpedientes() {
        try {
            const lista_expedientes = await getData();
            console.log(lista_expedientes.data);
            setExpedientes(lista_expedientes.data);
        } catch (error) {
            return error;
        }
    }

    function handlerClean(e) {
        e.preventDefault();
        setExpedientes([]);
    }

    function handlerExpedientes(e) {
        e.preventDefault();
        listadoExpedientes();
    }

    useEffect(() => {
        listadoExpedientes();
    }, []);

    return (
        <div>
            <button
                onClick={(e) => {
                handlerClean(e);
                }}
            >{" "}Limpiar
            </button>
        <button
            onClick={(e) => {
            handlerExpedientes(e);
            }}
        >{" "}Llenar
        </button>
        <h1>
        {expedientes == "" ? null : expedientes.map((exp) => (
            <div className="expediente">
                <p className="info">
                    <b className="titulo">Nombre:</b> {exp.nombre}
                </p>
                <p className="info">
                    <b>Alergias:</b> {exp.alergias}
                </p>
                <p className="info">
                    <b>EnfCronicas:</b> {exp.enfCronicas}
                </p>
                <p className="info">
                    <b>Donante:</b> {exp.donante}
                </p>
            </div>
        ))}
        </h1>
        </div>
    );
}
export default TablaRegistros;
