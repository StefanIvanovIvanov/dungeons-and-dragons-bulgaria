import React from "react";
import { WeaponsTableData } from "../../models/WeaponsTable";

interface WeaponsTableProps {
  weaponsData: WeaponsTableData[];
}

const WeaponsTable: React.FC<WeaponsTableProps> = ({ weaponsData }) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Weapon</th>
          <th>Cost</th>
          <th>Damage</th>
          <th>Weight</th>
          <th>Properties</th>
        </tr>
      </thead>
      <tbody>
        {weaponsData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.damage}</td>
            <td>{item.weight}</td>
            <td>{item.properties}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeaponsTable;
