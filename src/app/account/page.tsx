

"use client"
import CreateSuplemento from "@/componentes/Suplementos/CreateSuplemento";
import "../globals.css";
import NavBar from "@/componentes/NavBar";
import { useState } from "react";
import Suplementos from "@/componentes/Suplementos";

export default function account() {

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isCreateAcountOpen, setIsCreateAcountOpen] = useState(false);

    return (
        <>
            <NavBar setIsLoginOpen={setIsLoginOpen} setIsCreateAcountOpen={setIsCreateAcountOpen} />
            <CreateSuplemento />
            <Suplementos />
        </>   
    )
}