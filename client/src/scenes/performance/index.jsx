import React from "react"
import { Box, useTheme } from "@mui/material"
import { useSelector } from "react-redux"
import { useGetUserPerformanceQuery } from "state/api"
import { DataGrid } from "@mui/x-data-grid"
import Header from "components/Header"
import DataGridCustomColumnMenu from "components/DataGridCustomColumnMenu"

const Performance = () => {
  const theme = useTheme()
  const userId = useSelector((state) => state.global.userId)

  const { data, isLoading } = useGetUserPerformanceQuery(userId)

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "userId", headerName: "User ID", flex: 1 },
    { field: "createdAt", headerName: "CretaedAt", flex: 1 },
    {
      field: "products",
      headerName: "Number of Products",
      flex: 1,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ]
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="PERFORMANCE"
        subtitle="Track your Affiliate performnce here"
      />

      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderRadius: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            border: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[300]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          rows={(data && data.sales) || []}
          getRowId={(row) => row._id}
          columns={columns}
          components={{
            ColumnMenu: DataGridCustomColumnMenu,
          }}
        />
      </Box>
    </Box>
  )
}

export default Performance
