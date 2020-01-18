import { css } from "styled-components"

const vars = css`
  :root {
    /* Colors */
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
    /* Z-Index */
    --headerLevel: 10;
    --highestLevel: 100;
    /* Elevation */
    --elevation-0: inset 0 7px 9px -7px rgba(0, 0, 0, 0.7);
    --elevation-1: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    --elevation-2: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    --elevation-3: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    --elevation-4: 0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
    --elevation-5: 0 19px 38px rgba(0, 0, 0, 0.3),
      0 15px 12px rgba(0, 0, 0, 0.22);

    /* ----- Theme Vars ----- */
    --textColor: var(--dark-grey);
    --primaryColor: var(--orange-500);
    --containerColor: var(--light-grey);
    --bgColor: var(--light-grey);
    --lineColor: var(--lightest-grey);
    /* Misc Sizes */
    --margins: 2.75rem 0 1rem;
    --padding: 2.75rem;
    --cardRadius: 15px;
    --buttonRadius: 15px;
    /* Font Sizes */
    --baseFontSize: 1rem;
    --baseNavSize: 0.64rem;
    --smallFontSize: 0.8rem;
    --smallestFontSize: 0.512rem;
    --heading-one: 1.953rem;
    --heading-two: 1.563rem;
    --heading-three: 1.25rem;
    --heading-four: var(--baseFontSize);
    --heading-five: var(--smallFontSize);
    --heading-six: var(--baseNavSize);
    /* Fonts */
    --bodyFont: "raleway", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    --headingFont: "source sans pro", -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
  }
`

export default vars
