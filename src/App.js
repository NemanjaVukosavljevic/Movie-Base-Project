import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import MovieSection from './Components/MovieSection';
import ImageSlider from './Components/ImageSlider';


function App() {




  return (
    <div className='font flex flex-col justify-center items-center p-5 min-h-screen bg-gray-800'>
        <ImageSlider />
        <Header />
        <MovieSection />
    </div>
  );
}

export default App;
