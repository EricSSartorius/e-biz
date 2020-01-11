import { css } from "styled-components"

const vars = css`
  :root {
    --white: #fefefe;
    --lightest-grey: #ecf0f2;
    --light-grey: #d2dbdf;
    --grey: #253840;
    --dark-grey: #172529;
    --black: #000;
    --blue-600: #4a6572;
    --blue-700: #334955;
    --blue-800: #232f34;
    --orange-500: #f9aa33;

    /* Template colors */
    --textColor: var(--dark-grey);
    --primaryColor: var(--orange-500);
    --containerColor: var(--light-grey);
    --bgColor: var(--light-grey);
    --lineColor: var(--lightest-grey);

    --cardRadius: 15px;
    --buttonRadius: 15px;

    /* Font Sizes */
    --baseFontSize: 1rem;
    --baseNavSize: 0.64rem;
    --smallFontSize: 0.8rem;
    --smallestFontSize: 0.512rem;

    --heading-1: 1.953rem;
    --heading-2: 1.563rem;
    --heading-3: 1.25rem;
    --heading-4: var(--baseFontSize);
    --heading-5: var(--smallFontSize);
    --heading-6: var(--baseNavSize);

    /* Z-Index */
    --headerLevel: 10;
    --highestLevel: 100;

    /* Fonts */
    --bodyFont: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    --headingFont: var(--bodyFont);

    /* Elevation */
    --elevation-0: inset 0 7px 9px -7px rgba(0, 0, 0, 0.7);
    --elevation-1: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    --elevation-2: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    --elevation-3: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    --elevation-4: 0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
    --elevation-5: 0 19px 38px rgba(0, 0, 0, 0.3),
      0 15px 12px rgba(0, 0, 0, 0.22);

    /* Margin */
    --margin: 2.75rem 0 1rem;
  }
`

export default vars
