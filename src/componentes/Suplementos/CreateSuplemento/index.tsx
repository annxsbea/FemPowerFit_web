"use client"

import { create } from "@/app/actions/suplemento/create";
import NavBar from "@/componentes/NavBar";
import { SubmitButton } from "@/componentes/SubmitButton/SubmitButton";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useState } from "react";

const initialState = {
    message: '',
}


export default function CadastrarSuplemento(){
    const [state, formAction] = useFormState(create, initialState)
   

    return (
        <main id="services" className="flex min-h-screen flex-col items-center">
            <form action={formAction} className="rounded p-6 min-w-[500px] flex flex-col bg-black/90 outline-none border border-red-400   mt-96 focus:outline-none ">
                <h2 className="text-2xl font-serif">Novo Suplemento</h2>

                <Input
                    key="marca"
                    label="marca"
                    name="marca"
                    labelPlacement={"outside"}
                    isInvalid={state?.message != ''}
                    errorMessage={state?.message}
                />
                 <Input
                    key="tipo"
                    label="tipo"
                    name="tipo"
                    labelPlacement={"outside"}
                    isInvalid={state?.message != ''}
                    errorMessage={state?.message}
                />
                <Input
                        key="quantidade"
                        label="quantidade"
                        name="quantidade"
                        labelPlacement={"outside"}
                        isInvalid={state?.message != ''}
                        errorMessage={state?.message}
                    />

              <div className="flex justify-around mt-4">
                      <Link href="/suplementos">
                          <Button variant="bordered" >cancelar</Button>
                      </Link>
                      <SubmitButton></SubmitButton>
              </div>
            </form>
        </main>
    )
}