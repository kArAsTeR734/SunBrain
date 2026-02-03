import {egeMathThemes} from "../shared/constants/egeMathThemes.ts";
import {ogeMathThemes} from "../shared/constants/ogeMathThemes.ts";
import {ogePhysicsThemes} from "../shared/constants/ogePhysicThemes.ts";
import {egePhysicsThemes} from "../shared/constants/egePhysicThemes.ts";

export const THEMES_BY_SUBJECT = {
  emath: egeMathThemes,
  omath: ogeMathThemes,
  ophysic: ogePhysicsThemes,
  ephysic: egePhysicsThemes,
} as const;

export type SubjectId = keyof typeof THEMES_BY_SUBJECT;
