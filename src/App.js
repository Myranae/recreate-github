// import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationBar />
                <SearchBar />
                <h1>Where the World Builds Software</h1>
            </header>
            <main>
                <p>
                    Millions of developers and companies build, ship, and
                    maintain their software on GitHub-the largest and most
                    advanced development platform in the world.
                </p>
            </main>
        </div>
    );
}

export default App;
