/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState } from "react";
import { ErrorReq, helpHttp } from "../components/helpers/helpHttp";

export interface Caballero {
  id: number | null | string;
  name: string;
  constelation: string;
}

interface CrudContextProps {
  db: Caballero[] | null;
  dataToEdit: Caballero | any;
  setDataToEdit: any;
  error: null | ErrorReq;
  loading: boolean;
  createData: ((data: Caballero) => void) | any;
  updateData: ((data: Caballero) => void) | any;
  deleteData: ((id: number) => void) | any;
}

const initialData: CrudContextProps = {
  db: null,
  dataToEdit: null,
  setDataToEdit: undefined,
  error: null,
  loading: false,
  createData: null,
  updateData: null,
  deleteData: null,
};

export const initialDataToEdit: Caballero = {
  id: null,
  constelation: "",
  name: "",
};

const CrudContext = createContext<CrudContextProps>(initialData);

const CrudProvider = ({ children }: any) => {
  const [db, setDb] = useState<Caballero[] | null>(null);
  const [dataToEdit, setDataToEdit] = useState(initialDataToEdit);

  const [error, setError] = useState<null | ErrorReq>(null);
  const [loading, setLoading] = useState(false);

  const { get, post, put, del } = helpHttp();
  const url = "http://localhost:5000/caballeros";

  useEffect(() => {
    setLoading(true);
    //get(url).then((res) => !res.err && setDb(res));
    get(url).then((res) => {
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
        console.log(res);
      }

      setLoading(false);
    });
  }, [url]);

  const createData = (data: Caballero) => {
    data.id = Date.now() + "";

    const dataBI = JSON.stringify(data);

    const options: RequestInit = {
      body: dataBI,
      headers: { "content-type": "application/json" },
    };

    post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        if (db != null) setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data: Caballero) => {
    if (db !== null) {
      const endpoint = `${url}/${data.id}`;

      const dataBI = JSON.stringify(data);

      const options: RequestInit = {
        body: dataBI,
        headers: { "content-type": "application/json" },
      };

      put(endpoint, options).then((res) => {
        console.log(res);
        if (!res.err) {
          const newData: Caballero[] = db.map((el) =>
            el.id === data.id ? data : el
          );
          setDb(newData);
        } else {
          setError(res);
        }
      });
    }
  };

  const deleteData = (id: number) => {
    if (db !== null) {
      const isDelete = confirm(
        `¿Está seguro de eliminar el registro con el id ${id}?`
      );

      if (isDelete) {
        const endpoint = `${url}/${id}`;

        const options: RequestInit = {
          headers: { "content-type": "application/json" },
        };

        del(endpoint, options).then((res) => {
          console.log(res);
          if (!res.err) {
            const newData = db.filter((el) => el.id != id);
            setDb(newData);
          } else {
            setError(res);
          }
        });
      } else return;
    }
  };

  const data: CrudContextProps = {
    db,
    dataToEdit,
    setDataToEdit,
    error,
    loading,
    createData,
    updateData,
    deleteData,
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
