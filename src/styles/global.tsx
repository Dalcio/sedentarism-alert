import { Global } from "@mantine/core";

const GlobalStyles = () => (
  <Global
    styles={{
      "*, *::before, *::after": {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
      },
    }}
  />
);

export default GlobalStyles;
