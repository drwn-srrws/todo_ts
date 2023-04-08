import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";



export default function LabelBottomNavigation() {
  const router = useRouter();
  const [value, setValue] = React.useState<string | null>(router.pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(router.pathname);
    console.log(router.pathname);
  };

  return (
    <BottomNavigation sx={{ width: 400 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        onClick={() => {
          router.push("/");
        }}
        label="Recents"
        value="/"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        onClick={() => {
          router.push("/trashCan");
        }}
        label="trashCan"
        value="/trashCan"
        icon={<FavoriteIcon />}
      />
      
    </BottomNavigation>
  );
}
