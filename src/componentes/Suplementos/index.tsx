'use client';

import NavBar from "@/componentes/NavBar"
import Link from "next/link"
import { Button } from "@nextui-org/button";
import { getSuplementos } from "@/app/actions/suplemento/getSuplementos";
import { Suplemento } from "@/@types/index";
import { useEffect, useState } from "react";
import { SuplementoItem } from "./SuplementoItem";



export default function Suplementos() {
    const [suplementos, setSuplementos] = useState<Suplemento[]>([]);

    const callApi = async () => {
        try {
            const suplemento: Suplemento[] = await getSuplementos();
            setSuplementos(suplemento);
        } catch (error) {
            console.error("Error fetching supplements:", error);
            // Handle error: show error message to the user or retry logic
        }
    };

    useEffect(() => {
        callApi();
    }, []);


    return (
        <main className="flex min-h-screen flex-col items-center">
            <section className="flex flex-col gap-2 bg-slate-800 min-w-[600px] mt-4 p-2 rounded">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Suplementos Cadastrados</h2>
                    <Link href="/suplemento/new">
                        <Button>Add New</Button>
                    </Link>
                </div>
                     {suplementos.length === 0 ? (
                    <p>No suplementos found.</p>
                ) : (
                    suplementos.map((suplemento) => (
                        <SuplementoItem key={suplemento.id} suplemento={suplemento} />
                    ))
                )}

            </section>
        </main>
    );
}