import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Body from "./components/Body";
import { appStore, persistor } from "./redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <Body />
      </PersistGate>
    </Provider>
  );
}

export default App;
