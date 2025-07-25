import React from "react";
import Hero from "./components/Hero";
import RequestPickup from "./components/RequestPickup";
import CollectorSignup from "./components/CollectorSignup";
import Benefits from "./components/Benefits";
import ClientReviews from "./components/ClientReviews";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <main className="flex flex-col items-center justify-center mt-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4">
          Clean Nairobi, Smartly.
        </h1>
        <p className="text-gray-700 max-w-xl">
          TakaCare connects households, institutions, and businesses with verified
          waste collectors. Real-time pickup. Transparent billing. Cleaner city.
        </p>
      </main>
      <>
      {/* Existing sections */}
      <Hero />
      <RequestPickup />
      <CollectorSignup />
      <Benefits />
      <ClientReviews />
      <Footer />
      <ToastContainer />
    </>
    </div>
  );
}

export default App;
