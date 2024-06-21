import React, { useEffect, useState } from "react";
import Dashboard from "./pages/dashboard";
import Api from "./service/api";
import Auth from "./pages/auth";

export type UserDataType = {
  created_at: string,
  email: string,
  id: string,
  name: string,
  updated_at: string,
  token?: string,
};

function App() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token === null || token === '') {
      return;
    }

    Api.post('/auth/me', undefined, {headers: {'Authorization': `Bearer ${token}`}})
    .then(res => res.data)
    .then((res: UserDataType) => res?.id ? setLogged(true) : localStorage.clear())
    .catch(error => {
      console.error(error);
      localStorage.clear();
    });
  }, []);

  return (
    <>
      {logged ? <Dashboard /> : <Auth />}
    </>
  );
}

export default App;
