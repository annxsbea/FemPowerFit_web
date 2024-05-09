`~`
import Image from "next/image";



export default function Services() {

  return ( 
   
  <div id="services" className="min-h-screen flex-col items-center ">
    <div className="flex justify-center items-center"> 
       <h1 className="text-4xl font-serif">VOCÊ SOFRE COM ALGUM
       </h1>
       
     </div>
     <div className="flex justify-center items-center mt-5">
       <p className="text-2xl"> DESSES PROBLEMAS?</p>
       </div>
 
    <div className="flex space-x-40 ml-20">

       <div className="mt-36">
       <Image src="/proble1.png" alt="Descrição da imagem" width={250} height={300} />
      
       </div>
       <div className="mt-32">
       <Image src="/proble2.png" alt="Descrição da imagem" width={300} height={300} />
      
       </div>
       <div className="mt-36">
       <Image src="/proble3.png" alt="Descrição da imagem" width={250} height={300} />
       </div>

      
    </div>
    <div className=" flex ">
                  <div className="border border-red-300 px-10 rounded-lg h-40 w-60 p-8 mt-10 ml-20 transition-all hover:scale-105 duration-150 ease-linear">
                    <p className="text-sm">Variações hormonais </p>
                    <p>impactando seus treinos e disposição.</p>
                
                  </div>
                  <div className="border border-red-300 px-10 rounded-lg h-40 w-64 p-8   mt-10 ml-52 transition-all hover:scale-105 duration-150 ease-linear">
                    <p className="text-sm">Dificuldade em encontrar orientações </p>
                    <p>personalizadas para seu ciclo menstrual</p>
                  </div>


                  <div className="border border-red-300 px-10 rounded-lg h-44 w-64 p-5 mt-10 ml-40 transition-all hover:scale-105 duration-150 ease-linear">
                  <p  className="text-sm">Frustração com a falta de plataformas holísticas que integram treino, </p>

                    <p className="text-sm">
                    alimentação e suplementação específicos para as necessidades femininas
                    </p>
                  </div>
    </div>
    <div className="flex  justify-center">
    <button  className="mt-16 bg-rose-950    px-10 rounded-lg h-10 transition-all hover:scale-105 duration-150 ease-linear">Quero enfrentar esse desfio!</button> 
    </div>


  </div>
 
 


);






}