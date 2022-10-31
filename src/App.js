
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card 
        img="https://www.pixelstalk.net/wp-content/uploads/images6/Michael-Jordan-Wallpaper-for-iPhone.jpg"
        name="Michal Jorden"
        rating=" 5 * Rating"
        fees="130$/ person"
      />
    </div>
  );
}

export default App;
