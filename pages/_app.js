import '../styles/globals.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
		<>
			<Component {...pageProps} />
			<ToastContainer className="impct-toast" />
		</>
	);
  
}

export default MyApp
