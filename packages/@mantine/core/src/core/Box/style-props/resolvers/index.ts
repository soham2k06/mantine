import { colorResolver } from './color-resolver/color-resolver';
import { fontFamilyResolver } from './font-family-resolver/font-family-resolver';
import { fontSizeResolver } from './font-size-resolver/font-size-resolver';
import { identityResolver } from './identity-resolver/identity-resolver';
import { lineHeightResolver } from './line-height-resolver/line-height-resolver';
import { sizeResolver } from './size-resolver/size-resolver';
import { spacingResolver } from './spacing-resolver/spacing-resolver';

export const resolvers = {
  color: colorResolver,
  fontSize: fontSizeResolver,
  spacing: spacingResolver,
  identity: identityResolver,
  size: sizeResolver,
  lineHeight: lineHeightResolver,
  fontFamily: fontFamilyResolver,
};

export type StylePropType = keyof typeof resolvers;
