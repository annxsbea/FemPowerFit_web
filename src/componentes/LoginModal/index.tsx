import Link from "next/link";
import { Dispatch, SetStateAction, useRef } from "react";

interface LoginModalProps {
  setIsLoginOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export function LoginModal({ isOpen, setIsLoginOpen }: LoginModalProps) {
  if (!isOpen) {
    return null
  }
  const refLogin = useRef(null)
  const refSenha = useRef(null)
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/20">
      {/* muda a largura do modal */}
      <div className="relative w-6/12 my-6 mx-auto"> 
        <div className=" rounded-3xl shadow-lg relative flex flex-col w-full bg-black/90 outline-none border border-red-400 focus:outline-none">

          <div className="flex items-start justify-between p-12  ">
            <div></div>
            <h3 className="text-3xl font-semibold">Login</h3>
            <button
              className="bg-transparent border-0 text-gray-300  text-3xl font-bold"
              onClick={() => setIsLoginOpen(false)}
            >
              x
            </button>
          </div>

          <div className="relative p-6 flex-auto ">
         
            <form >
              <div className="flex flex-col gap-4  w-1/2 mx-auto">
                <label>Nome</label>
                <input type="text" ref={refLogin} className="border border-red-300 bg-black rounded-lg  p-2 " />
              </div>
            <div className="flex flex-col gap-4  w-1/2 mx-auto mt-10">
            <label>Senha</label>
            <input type="password" ref={refSenha} className="border border-red-300 bg-black rounded-lg p-2 " />
            </div>
            </form>
          </div>

          <div className="flex items-center justify-end p-6 ">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setIsLoginOpen(false)}
            >
              Fechar
            </button>

            <Link href="/account"
               className="border border-red-300 px-10
              rounded-lg h-10 transition-all hover:bg-red-300
              hover:text-black duration-150 ease-linear p-2">Entrar</Link>
              
          

          </div>

        </div>
      </div>
    </div>
  )
}