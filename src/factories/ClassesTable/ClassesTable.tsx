import React from "react";
import { ClassesTableData, OptionalColumns } from "../../models/ClassesTable";
import ClassesTableHeaders from "./ClassesTableHeaders";

interface ClassesTableProps {
  tableData: ClassesTableData[];
}

const ClassesTable: React.FC<ClassesTableProps> = ({ tableData }) => {
  const optionalColumns: OptionalColumns = {
    hasSpelSlotsLevelList:
      tableData.filter((row) => "spellSlots" in row).length > 0,
    maxSpellSlots: tableData.some((row) => "spellSlots" in row)
      ? tableData[0].spellSlots?.length || 0
      : 0,
    hasRages: tableData.some((row) => "rages" in row),
    hasRageDamage: tableData.some((row) => "rageDamage" in row),
    hasInfusionsKnown: tableData.some((row) => "infusionsKnown" in row),
    hasInfusedItems: tableData.some((row) => "infusedItems" in row),
    hashemocraftDie: tableData.some((row) => "hemocraftDie" in row),
    hasbloodCursesKnown: tableData.some((row) => "bloodCursesKnown" in row),
    hasMartialArts: tableData.some((row) => "martialArts" in row),
    hasKiPoints: tableData.some((row) => "kiPoints" in row),
    hasUnarmoredMovement: tableData.some((row) => "unarmoredMovement" in row),
    hasSneakAttack: tableData.some((row) => "sneakAttack" in row),
    hasSorceryPoints: tableData.some((row) => "sorceryPoints" in row),
    hasCantripsKnown: tableData.some((row) => "cantripsKnown" in row),
    hasSpellsKnown: tableData.some((row) => "spellsKnown" in row),
    hasWarlockSpellSlots: tableData.some((row) => "warlockSpellSlots" in row),
    hasSlotLevel: tableData.some((row) => "slotLevel" in row),
    hasInvocationsKnown: tableData.some((row) => "invocationsKnown" in row),
  };

  return (
    <table className="table table-striped">
      <ClassesTableHeaders optionalColumns={optionalColumns} />
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <th scope="row">{row.level}</th>
            <td>{row.proficiencyBonus}</td>
            {optionalColumns.hasMartialArts && <td>{row.martialArts}</td>}
            {optionalColumns.hasKiPoints && <td>{row.kiPoints}</td>}
            {optionalColumns.hasUnarmoredMovement && (
              <td>{row.unarmoredMovement}</td>
            )}
            {optionalColumns.hasSneakAttack && <td>{row.sneakAttack}</td>}
            {optionalColumns.hasSorceryPoints && <td>{row.sorceryPoints}</td>}
            {optionalColumns.hashemocraftDie && <td>{row.hemocraftDie}</td>}
            {optionalColumns.hasbloodCursesKnown && (
              <td>{row.bloodCursesKnown}</td>
            )}
            <td>{row.features}</td>
            {optionalColumns.hasRages && <td>{row.rages}</td>}
            {optionalColumns.hasRageDamage && <td>{row.rageDamage}</td>}
            {optionalColumns.hasInfusionsKnown && <td>{row.infusionsKnown}</td>}
            {optionalColumns.hasInfusedItems && <td>{row.infusedItems}</td>}
            {optionalColumns.hasCantripsKnown && <td>{row.cantripsKnown}</td>}
            {optionalColumns.hasSpellsKnown && <td>{row.spellsKnown}</td>}
            {optionalColumns.hasSpelSlotsLevelList && (
              <>
                {row.spellSlots?.map((spellSlot, index) => (
                  <td key={index}>{spellSlot !== 0 ? spellSlot : "-"}</td>
                ))}
              </>
            )}
            {optionalColumns.hasWarlockSpellSlots && (
              <td>{row.warlockSpellSlots}</td>
            )}
            {optionalColumns.hasSlotLevel && <td>{row.slotLevel}</td>}
            {optionalColumns.hasInvocationsKnown && (
              <td>{row.invocationsKnown}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClassesTable;
