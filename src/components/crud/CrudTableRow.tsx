import { useContext } from "react";
import CrudContext, { Caballero } from "../../context/CrudContext";

type CrudTableRowProps = {
  el: Caballero;
};

export const CrudTableRow = ({ el }: CrudTableRowProps) => {
  const { setDataToEdit, deleteData } = useContext(CrudContext);
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.constelation}</td>
      <td className="mysty">
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(el.id)}>Eliminar</button>
      </td>
    </tr>
  );
};
