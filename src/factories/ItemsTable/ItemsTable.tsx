import React from "react";
import { itemsData } from "../../constants/items/Items";

const ItemsTable: React.FC = () => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Type</th>
          <th>Attuned</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        {itemsData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.isAttuned ? "Attuned" : "-"}</td>
            <td>{item.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemsTable;
