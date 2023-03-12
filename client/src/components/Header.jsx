import React from "react"
import { Typography, Box, useTheme } from "@mui/material"

const Header = ({ title, subtitle }) => {
  const theme = useTheme()
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "7px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.secondary[500]}
        fontWeight="300"
        sx={{ mb: "7px" }}
      >
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header
