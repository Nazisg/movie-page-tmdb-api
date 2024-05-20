import Feature from "@/shared/layout/Feature";
import Footer from "@/shared/layout/Footer";
import Header from "@/shared/layout/Header";
import MoviesAndShows from "./pages/Movies&Shows";

const App: React.FC = () => {
  return (
    <div className="bg-[#141414] flex flex-col items-center">
      <div className="w-[87%] flex flex-col">
        <Header />
        <MoviesAndShows />
        <Feature />
      </div>
      <Footer />
    </div>
  );
};

export default App;
