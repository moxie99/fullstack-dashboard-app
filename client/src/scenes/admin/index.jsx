import React from "react"
import { Box, useTheme } from "@mui/material"
import Header from "components/Header"
import { DataGrid } from "@mui/x-data-grid"
import { useGetAdminsQuery } from "state/api"
import CustomColumnMenu from "components/DataGridCustomColumnMenu"

const Admin = () => {
  const theme = useTheme()
  const { data, isLoading } = useGetAdminsQuery()

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 0.5 },
    { field: "email", headerName: "Email", flex: 0.5 },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3")
      },
    },
    { field: "city", headerName: "City", flex: 0.5 },
    { field: "state", headerName: "State", flex: 0.5 },
    { field: "country", headerName: "Country", flex: 0.5 },
    { field: "occupation", headerName: "Occupation", flex: 1 },
    { field: "transactions", headerName: "Transactions", flex: 1 },
    { field: "role", headerName: "Role", flex: 0.5 },
  ]

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="ADMIN" subtitle="Managing admins and list of admins" />

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
          rows={data || []}
          getRowId={(row) => row._id}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />
      </Box>
    </Box>
  )
}

export default Admin
