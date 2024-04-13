import { useContext } from "react";
import { CrudTableRow } from "./CrudTableRow";
import CrudContext from "../../context/CrudContext";

// type CrudTableProps = {
//   data: Caballero[];
//   deleteData: any;
//   setDataToEdit: React.Dispatch<React.SetStateAction<Caballero>>;
// };

export const CrudTable = () => {
  const { db: data } = useContext(CrudContext);
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((el) => <CrudTableRow key={el.id} el={el} />)
          ) : (
            <tr>
              <td colSpan={3}>Sin Datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
