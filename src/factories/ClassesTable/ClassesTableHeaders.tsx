import React from "react";
import { OptionalColumns } from "../../models/ClassesTable";
import { spellLevels } from "../../constants/classes/ClassesTable";

interface ClassesTableHeadersProps {
  optionalColumns: OptionalColumns;
}

const ClassesTableHeaders: React.FC<ClassesTableHeadersProps> = ({
  optionalColumns,
}) => {
  return (
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
        {optionalColumns.hasMartialArts && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Martial Arts
            </p>
          </th>
        )}
        {optionalColumns.hasKiPoints && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Ki Points
            </p>
          </th>
        )}
        {optionalColumns.hasUnarmoredMovement && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Unarmored Movement
            </p>
          </th>
        )}
        {optionalColumns.hasSneakAttack && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Sneak Attack
            </p>
          </th>
        )}
        {optionalColumns.hasSorceryPoints && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Sorcery Points
            </p>
          </th>
        )}
        {optionalColumns.hashemocraftDie && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Hemocraft Die
            </p>
          </th>
        )}
        {optionalColumns.hasbloodCursesKnown && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Blood Curses Known
            </p>
          </th>
        )}
        <th
          className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
          rowSpan={2}
        >
          <p className="Table-Styles_Header--for-Table-Cell-Style-">Features</p>
        </th>
        {optionalColumns.hasRages && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">Rages</p>
          </th>
        )}
        {optionalColumns.hasRageDamage && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Rage Damage
            </p>
          </th>
        )}
        {optionalColumns.hasInfusionsKnown && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Infusions Known
            </p>
          </th>
        )}
        {optionalColumns.hasInfusedItems && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Infused Items
            </p>
          </th>
        )}
        {optionalColumns.hasCantripsKnown && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Cantrips Known
            </p>
          </th>
        )}
        {optionalColumns.hasSpellsKnown && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Spells Known
            </p>
          </th>
        )}
        {optionalColumns.hasSpelSlotsLevelList && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            colSpan={9}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              —Spell Slots per Spell Level—
            </p>
          </th>
        )}
        {optionalColumns.hasWarlockSpellSlots && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Spell Slots
            </p>
          </th>
        )}
        {optionalColumns.hasSlotLevel && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Slot Level
            </p>
          </th>
        )}
        {optionalColumns.hasInvocationsKnown && (
          <th
            className="Table Table-Header CellOverride-1 _idGenCellOverride-1"
            rowSpan={2}
          >
            <p className="Table-Styles_Header--for-Table-Cell-Style-">
              Invocations Known
            </p>
          </th>
        )}
      </tr>
      {optionalColumns.hasSpelSlotsLevelList && (
        <tr>
          {spellLevels
            .slice(0, optionalColumns.maxSpellSlots)
            .map((spellLevel, index) => (
              <th key={index} className="spell-level-column">
                <p>{spellLevel}</p>
              </th>
            ))}
        </tr>
      )}
    </thead>
  );
};

export default ClassesTableHeaders;
