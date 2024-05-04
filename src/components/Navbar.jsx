import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "space-between" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        pl={2}
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          display: { xs: "none", sm: "none", md: "inline" },
        }}
      >
        Youtube <span style={{ color: "red", fontWeight: "bold" }}> Clone</span>
      </Typography>
    </Link>

    <SearchBar />
  </Stack>
);

export default Navbar;
