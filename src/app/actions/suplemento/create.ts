'use server'

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){
    // await new Promise( r => setTimeout(r, 5000))

    const data = {
        id: Math.random(),
        marca: formData.get("marca"),
        tipo: formData.get("tipo"),
        quantidade: formData.get("quantidade"),
   }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    const resp = await fetch(process.env.API_BASE_URL + "/suplemento", options)

    if (resp.ok){
        redirect("/suplementos")
    }

    if(resp.status == 400){
        return {
            message: "erro de validação"
        }
    }
    
}