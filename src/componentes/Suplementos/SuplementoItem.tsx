 "use client"

 import DropDownActions from "@/componentes/DropDownActions";
//  import { imagem } from "@/componentes/imagem";
 import { create } from "domain";
 import { toast } from "react-hot-toast";
import { destroy } from "../../app/actions/suplemento/destroy";
 import { useRouter } from "next/navigation";
 import { Suplemento } from "@/../ types";


 interface SuplementoItemProps {
     suplemento: Suplemento
 }

 export function SuplementoItem({ suplemento }: SuplementoItemProps){
     const router = useRouter()

     function handleDelete(){
         toast.promise(
             destroy(suplemento.id),
             {
                 loading: "apagando...",
                 success: "apagado com sucesso",
                 error: "erro ao apagar",
             }
         );
     }

     return (
         <div className="flex justify-between p-2">
             <div className="flex gap-2 items-center">
                 <span>{suplemento.nome}</span>
             </div>
             < DropDownActions onDelete={handleDelete} />
         </div>
     )
 }