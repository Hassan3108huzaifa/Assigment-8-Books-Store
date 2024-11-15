import About from "@/components/About";
import Books from "@/components/Books";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <hr className="bg-gray-500" />
      <Header />
      <hr className="bg-gray-500" />
      <div id="books">
        <Books />
      </div>
      <hr className="bg-gray-500" />
      <div id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
}
