import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CreateUser, DetailUser, EditUser, Home } from "./routes/Routes";

function App() {
  return (
    <Routes>
      <Route index element={<Suspense fallback={"Loading ..."}>
       <Home />
      </Suspense>}/>

       <Route path="create" element={<Suspense>
        <CreateUser/>
      </Suspense>}/>

      <Route path="detail/:id" element={<Suspense>
        <DetailUser/>
      </Suspense>}/>

      <Route path="edit/:id" element={<Suspense>
        <EditUser/>
      </Suspense>}/> 
    </Routes>
  );
}

export default App;
