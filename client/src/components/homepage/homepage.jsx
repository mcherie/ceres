import React from 'react'
import { Home } from "./home"
import { AboutMe } from './about-me';
import { Portfolio } from "./portfolio"
import { Navbar } from "./navbar"
import { ContactMe } from './contact-me';
import { Footer } from "./footer"

export const Homepage = () => {
    return <>
        <header className="App-header">
            <Navbar />
        </header>
        <Home />
        <AboutMe />
        <Portfolio />
        <ContactMe />
        <Footer />
    </>
}