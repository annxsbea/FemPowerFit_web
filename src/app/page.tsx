'use client';

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Services from "../componentes/Services";
import About from "../componentes/About";
import Home from "../componentes/Home";
import NavBar from "@/componentes/NavBar";
import { LoginModal } from "@/componentes/LoginModal";
import { CreateAcountModal } from "@/componentes/CreateAcountModal";

export default function Page() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCreateAcountOpen, setIsCreateAcountOpen] = useState(false);
  return (
    <>
      <header>
        <NavBar setIsLoginOpen={setIsLoginOpen} setIsCreateAcountOpen={setIsCreateAcountOpen} />
      </header>
     
   
      <Home />
      <About />
      <Services />

      <LoginModal setIsLoginOpen={setIsLoginOpen} isOpen={isLoginOpen} />
      <CreateAcountModal setIsCreateAcountOpen={setIsCreateAcountOpen} isOpen={isCreateAcountOpen} />
    </>
  );
}
