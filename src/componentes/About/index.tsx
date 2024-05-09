'use client';
import Image from "next/image";

import { api } from "@/helper/api";
import { useEffect, useState } from "react";

// interface Suplemento {
//   body: string;
//   userId: number;
//   id: number;
//   title: string;
  
// }

export default function About()  {
  // const [suplementos, setSuplementos] = useState<Suplemento[]>([]);

  // const listaSuplementos =async () => {
  //   const suplementos =await api<Suplemento[], null>('posts')
  //   setSuplementos(suplementos)
  // }
  
  // useEffect(() => {
  //   // listaSuplementos()
  // }, [])

  return ( 
    <div id="about" className=" min-h-screen  flex-col  ">
    <div>
      <div className="max-w-5xl mx-auto ">
          
        <h1 className="text-4xl font-serif   ml-96 p-10"></h1>
         <h2 className="container text-red-300 text-6xl font-serif italic pt-15">Plataforma </h2>
          <p className="text-2xl mt-4"> Gerenciamento de treino e </p>
          <p> vida saudável voltada para mulheres</p>
          <div className="flex space-x-52 ">
            
            <div className="mt-5 bg-red-300 w-70 p-10 text-black rounded-3xl transition-all hover:scale-105 duration-150 ease-linear">
            <p className="text-2xl   ">Considerando fatores hormonais</p>
            <p> armazenamento de informações de</p>
            <p> informações de alimentação suplementação,</p>
            <p> e acompanhamento da evolução.</p>
           
            </div> 
            <Image src="/imgAbout.png" alt="Descrição da imagem" width={500} height={300} />
            </div>

      </div>
    </div>
    </div>
  );
};













 {/* {suplementos.map((suplemento) => {
            return (
              <div>
                <h2>{suplemento.title}</h2>
                <p>{suplemento.body}</p>
                <p>Usuario - {suplemento.userId}</p>
              </div>
            )
          })} */}