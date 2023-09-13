import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import VideoWatch from "./components/VideoWatch";
import store from "./redux/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      {
        path: "/watch",
        element: <VideoWatch />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Head />
        {/* <Body /> */}
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
