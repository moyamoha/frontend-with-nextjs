import { Provider } from "react-redux";
import store from "../redux/store";

import "../styles/globals.scss";
import "../styles/header.scss";
import "../styles/footer.scss";
import "../styles/countrycard.scss";
import "../styles/countrytable.scss";
import "../styles/pages.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
