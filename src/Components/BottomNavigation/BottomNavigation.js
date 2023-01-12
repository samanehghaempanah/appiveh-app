/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddIcon from "@mui/icons-material/Add";
import "./BottomNavigation.css";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="BottomNavigationParent">
      <Box className="BottomNavigation" sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
          <BottomNavigationAction
            label="Explore"
            icon={<ExploreOutlinedIcon />}
          />
          <BottomNavigationAction />
          <BottomNavigationAction
            label="Wallet"
            icon={<AccountBalanceWalletOutlinedIcon />}
          />
          <BottomNavigationAction label="Profile" icon={<PermIdentityIcon />} />
        </BottomNavigation>
      </Box>
      <div className="addBottom">
        <AddIcon fontSize="large" />
      </div>
    </div>
  );
}
