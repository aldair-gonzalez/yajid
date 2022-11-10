import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";


// Componentes
import Footer from "./components/footer/Index";
import Intro from "./components/intro/Index";
import Navbar from "./components/navbar/Index";


function App() {
	return (
		<>
			<Router basename="/yajid">
				<Navbar/>
				<Routes>
					<Route path="/" element={<Intro/>}/>
				</Routes>
				<Footer></Footer>
			</Router>
		</>
  );
}

export default App;