/* eslint-disable react-hooks/exhaustive-deps */
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "../loader/Loader";
import { Message } from "../message/Message";
import { useContext } from "react";
import CrudContext from "../../context/CrudContext";

export const CrudAPI = () => {
  const { loading, error } = useContext(CrudContext);
  return (
    <>
      <h2>Crud API con Context API</h2>
      <article className="grid-1-2">
        <CrudForm />

        {loading && <Loader />}
        {error && (
          <Message msg={`Error ${error.statustext}`} bgColor="#dc3545" />
        )}

        <CrudTable />
      </article>
    </>
  );
};
