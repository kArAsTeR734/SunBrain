import {egeMathThemes} from "../pages/StudentObjectCatalog/components/db/egeMathThemes.ts";
import {ogeMathThemes} from "../pages/StudentObjectCatalog/components/db/ogeMathThemes.ts";
import {ogePhysicsThemes} from "../pages/StudentObjectCatalog/components/db/ogePhysicThemes.ts";
import {egePhysicsThemes} from "../pages/StudentObjectCatalog/components/db/egePhysicThemes.ts";

export const THEMES_BY_SUBJECT = {
  emath: egeMathThemes,
  omath: ogeMathThemes,
  ophysic: ogePhysicsThemes,
  ephysic: egePhysicsThemes,
} as const;

export type SubjectId = keyof typeof THEMES_BY_SUBJECT;
