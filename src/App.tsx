import { MyPageContext } from "./components/conContext/MyPageContext";
import { CrudAPI } from "./components/crud/CrudAPI";
import { MyPage } from "./components/sinContext/MyPage";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <>
      <div>
        <h1>React Context API</h1>
        <hr />
        <MyPage />
        <hr />
        <MyPageContext />
        <hr />
        <CrudProvider>
          <CrudAPI />
        </CrudProvider>
      </div>
    </>
  );
}

export default App;
