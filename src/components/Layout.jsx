import React from 'react';
import { Outlet } from "react-router-dom";
import Header  from "../components/Header";
 import  Footer  from "./Footer";
import { Toaster } from "sonner";
const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
            <Header />
            <main className="flex-1 relative">
                <Outlet />
            </main>
            <Footer />
            <Toaster position="bottom-right" />
        </div>
    );
};

export default Layout;