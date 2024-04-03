import React from "react";
import { ClassTableData } from "../models/ClassTableData";
import { spellLevels } from "../constants/classes/ClassTable";

interface ClassTableProps {
  tableData: ClassTableData[];
  isCaster: boolean;
}

const ClassTable: React.FC<ClassTableProps> = ({ tableData, isCaster }) => {
  const hasRages = tableData.some((row) => "rages" in row);
  const hasRageDamage = tableData.some((row) => "rageDamage" in row);

  return (
    <table className="table table-striped">
      <thead>
        <tr className="Table _idGenTableRowColumn-3">
          <th className="Table Table-Header CellOverride-1" rowSpan={2}>
            <p className="Table-Styles_Header--for-Table-Cell-Style- ParaOverride-3">
              Level
            </p>
          </th>
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style- ParaOverride-3">
              Proficiency Bonus
            </p>
          </th>
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Features
            </p>
          </th>
          {isCaster ? (
            <th
              className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
              rowSpan={2}
            >
              <p className="Table-Styles_Header--for-Table-Cell-Style-">
                Cantrips Known
              </p>
            </th>
          ) : null}
          {isCaster ? (
            <th
              className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
              colSpan={9}
            >
              <p className="Table-Styles_Header--for-Table-Cell-Style-">
                —Spell Slots per Spell Level—
              </p>
            </th>
          ) : null}
          {hasRages ? (
            <th
              className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
              rowSpan={2}
            >
              <p className="Table-Styles_Header--for-Table-Cell-Style-">
                Rages
              </p>
            </th>
          ) : null}
          {hasRageDamage ? (
            <th
              className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
              rowSpan={2}
            >
              <p className="Table-Styles_Header--for-Table-Cell-Style-">
                Rage Damage
              </p>
            </th>
          ) : null}
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
            {hasRages && <td>{row.rages}</td>}
            {hasRageDamage && <td>{row.rageDamage}</td>}
            {isCaster && (
              <>
                <td>{row.cantripsKnown}</td>
                {row.spellSlots?.map((spellSlot, index) => (
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
