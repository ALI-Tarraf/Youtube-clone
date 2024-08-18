import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
const Sidebar = ({ selectedCategory, setSelectedCategory, setVideos }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((categorie) => (
      <button
        className="category-btn"
        onClick={() => {
          setSelectedCategory(categorie.name);
          setVideos(undefined);
        }}
        style={{
          background: categorie.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={categorie.name}
      >
        <span
          style={{
            color: categorie.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {categorie.icon}
        </span>
        <span
          style={{ opacity: categorie.name === selectedCategory ? "1" : "0.8" }}
        >
          {categorie.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
