export interface ClassesTableData {
  level: number;
  proficiencyBonus: string;
  features: string;
  cantripsKnown?: string;
  spellSlots?: number[];
  rages?: string;
  rageDamage?: string;
  infusedItems?: string;
  infusionsKnown?: string;
  hemocraftDie?: string;
  bloodCursesKnown?: string;
  martialArts?: string;
  kiPoints?: string;
  unarmoredMovement?: string;
  sneakAttack?: string;
  sorceryPoints?: string;
  spellsKnown?: string;
  warlockSpellSlots?: string;
  slotLevel?: string;
  invocationsKnown?: string;
}

export interface OptionalColumns {
  hasSpelSlotsLevelList: boolean;
  maxSpellSlots: number;
  hasRages: boolean;
  hasRageDamage: boolean;
  hasInfusionsKnown: boolean;
  hasInfusedItems: boolean;
  hashemocraftDie: boolean;
  hasbloodCursesKnown: boolean;
  hasMartialArts: boolean;
  hasKiPoints: boolean;
  hasUnarmoredMovement: boolean;
  hasSneakAttack: boolean;
  hasSorceryPoints: boolean;
  hasCantripsKnown: boolean;
  hasSpellsKnown: boolean;
  hasWarlockSpellSlots: boolean;
  hasSlotLevel: boolean;
  hasInvocationsKnown: boolean;
}
