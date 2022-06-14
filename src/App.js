// import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import LoginControls from "./components/LoginControls";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";

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
            </main>
        </div>
    );
}

export default App;
