import "@/styles/globals.css";
import Header from "./Components/Header/Header";

export default function App({ Component, pageProps }) {
  return <div>
    <div>
      <Header/>
      <Component {...pageProps} />
    </div>
  </div>;
}
