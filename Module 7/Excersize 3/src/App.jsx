import './App.css';
import BitcoinRates from './components/bitcoin'
import {MoodProvider} from './contexts/MoodContext';



function App() {
  return (
    <MoodProvider>
      <BitcoinRates />
    </MoodProvider>
  );
}

export default App