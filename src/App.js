// import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import LoginControls from "./components/LoginControls";
import NavigationBar from "./components/NavigationBar";
import NewsletterForm from "./components/NewsletterForm";
import SearchBar from "./components/SearchBar";
import StatsBar from "./components/StatsBar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationBar />
                <SearchBar />
                <LoginControls />
            </header>
            <main>
                <HeroSection />
                <NewsletterForm />
            </main>
            <footer>
                <StatsBar />
            </footer>
        </div>
    );
}

export default App;
