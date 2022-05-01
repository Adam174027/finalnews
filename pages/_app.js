import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from '../Components/Layout'
config.autoAddCss = false;



export default  function MyApp({ Component, pageProps }) {

    // Place this in the pages/_app.js file
useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);
return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
)
}


