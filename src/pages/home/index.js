import React from "react";
import SignInBtn from "../../components/signin-btn";
import { CreatePost, Navbar } from "../../containers";
import './style.css';

export default function Home() {
    return (
        <div className="home">
           
            <Navbar />
            <CreatePost />
        </div>
        )
}