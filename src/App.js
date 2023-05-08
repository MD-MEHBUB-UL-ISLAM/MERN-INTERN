import { Slider } from './components/Slider';
import { ToastContainer } from 'react-toastify';
import { ComingSoon } from './components/ComingSoon';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Slider />
      <ComingSoon />
      <ToastContainer />
    </>
  );
}

export default App;
