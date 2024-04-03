import React from "react";
import { ClassTableData } from "../models/TableData";
import {
  spellLevels,
  headersBase,
  casterHeaders,
} from "../constants/classes/ClassTable";

interface ClassTableProps {
  tableData: ClassTableData[];
  isCaster: boolean;
}

const ClassTable: React.FC<ClassTableProps> = ({ tableData, isCaster }) => {
  const headers = isCaster ? [...headersBase, ...casterHeaders] : headersBase;

  return (
    <table className="table table-striped">
      <thead>
        <tr className="Table _idGenTableRowColumn-3">
          {headers.map((header, index) => (
            <th
              key={index}
              className="Table Table-Header CellOverride-1"
              rowSpan={header.rowSpan}
              colSpan={
                (
                  header as {
                    name: string;
                    colSpan: number;
                    rowSpan?: undefined;
                  }
                ).colSpan
              }
            >
              <p className="Table-Styles_Header--for-Table-Cell-Style- ParaOverride-3">
                {header.name}
              </p>
            </th>
          ))}
        </tr>
        {isCaster && (
          <tr>
            {spellLevels.map((spellLevel, index) => (
              <th key={index} className="spell-level-column">
                <p>{spellLevel}</p>
              </th>
            ))}
          </tr>
        )}
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <th scope="row">{row.level}</th>
            <td>{row.proficiencyBonus}</td>
            <td>{row.features}</td>
            {isCaster && (
              <>
                <td>{row.cantripsKnown}</td>
                {row.spellSlots.map((spellSlot, index) => (
                  <td key={index}>{spellSlot !== 0 ? spellSlot : "-"}</td>
                ))}
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClassTable;
