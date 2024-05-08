import Hero from "./Hero";
import CalcProvider from "./context/CalcContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
   return (
       <Hero/>
    )
}

const AppWithProvider = () => (
    <CalcProvider>
         <ToastContainer />
        <App />
    </CalcProvider>
);

export default AppWithProvider;
