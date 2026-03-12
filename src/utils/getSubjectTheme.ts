import { egeMathThemes } from '@/shared/constants/egeMathThemes.ts';
import { ogeMathThemes } from '@/shared/constants/ogeMathThemes.ts';
import { egePhysicsThemes } from '@/shared/constants/egePhysicThemes.ts';
import { ogePhysicsThemes } from '@/shared/constants/ogePhysicThemes.ts';

export function getSubjectTheme(
  subjectId: string | undefined,
  themeNumber: string | undefined,
) {
  switch (subjectId) {
    case 'emath':
      return egeMathThemes.find((theme) => theme.themeNumber === themeNumber)
        ?.themeTitle;
    case 'omath':
      return ogeMathThemes.find((theme) => theme.themeNumber === themeNumber)
        ?.themeTitle;
    case 'ephysic':
      return egePhysicsThemes.find((theme) => theme.themeNumber === themeNumber)
        ?.themeTitle;
    case 'ophysic':
      return ogePhysicsThemes.find((theme) => theme.themeNumber === themeNumber)
        ?.themeTitle;
  }
}
