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
    --margins: 6rem 0 3rem;
    --padding: 6rem;
    --cardRadius: 1.5rem;
    --buttonRadius: 5rem;
    /* Font Sizes */
    --baseFontSize: 1.8rem;
    --smallFontSize: 1.4rem;
    --largeFontSize: 1.8rem;
    --heading-one: 6.4rem;
    --heading-two: 4.8rem;
    --heading-three: 3.6rem;
    --heading-four: 2.4rem;
    --heading-five: 2rem;
    --heading-six: var(--largeFontSize);
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
