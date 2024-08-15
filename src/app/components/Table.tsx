import React from "react";
import Image from "next/image";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "@emotion/styled";
import { GridToolbar } from "@mui/x-data-grid";

interface Digimon {
  id: number; // Assuming you've added an 'id' field to each Digimon object
  name: string;
  img: string;
  level: string;
}

export default function Table({ value }: Readonly<{ value: Digimon[] }>) {
  const StyledDataGrid = styled(DataGrid)({
    border: "none",
    "& .MuiDataGrid-root": {
      border: "none",
    },
    "& .MuiDataGrid-columnsContainer": {
      borderBottom: "none",
    },
    "& .MuiDataGrid-row": {
      border: "none",
    },
    "& .MuiDataGrid-cell": {
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      color: "oklch(var(--bc))",
      fontFace: "Poppins",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
      color: "oklch(var(--wa))",
      fontSize: "15px",
      textAlign: "center",
      fontFace: "Poppins",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& ::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "& ::-webkit-scrollbar-track": {
      backgroundColor: "#ffffff",
    },
    "& ::-webkit-scrollbar-thumb": {
      backgroundColor: "oklch(var(--wa))",
    },
  });

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
      headerAlign: "center",
      renderCell: (params: any) => (
        <div>
          <span className="text-error font-bold">{params.value}</span>
        </div>
      ),
    },
    {
      field: "img",
      headerName: "Image",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params: any) => (
        <div>
          <Image src={params.value} alt="digimon" width={100} height={100} />
        </div>
      ),
    },
    {
      field: "level",
      headerName: "Level",
      width: 150,
      headerAlign: "center",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1">
        <StyledDataGrid
          rows={value}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          getRowHeight={() => "auto"}
          sx={{
            color: "oklch(var(--bc))",
            fontWeight: "bold",
            "& .MuiDataGrid-cell": {
              borderRight: "1px solid oklch(var(--b3))",
              borderTop: "1px solid oklch(var(--b3))",
            },
            "& .MuiDataGrid-columnHeader": {
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "oklch(var(--b1))",
              borderRight: "1px solid oklch(var(--b3))",
              borderTop: "1px solid oklch(var(--b3))",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
            },
            "& .MuiDataGrid-scrollbar": {
              backgroundColor: "oklch(var(--b))",
            },
            " & .MuiTablePagination-root": {
              color: "oklch(var(--bc))",
            },
            " & .MuiSvgIcon-root ": {
              color: "oklch(var(--bc))",
            },
            "& .MuiButton-text": {
              color: "oklch(var(--bc))",
              fontWeight: "bold",
            },
            " & .MuiDataGrid-scrollbarFiller": {
              backgroundColor: "oklch(var(--b1))",
            },
            "& .MuiTablePagination-selectLabel": {
              color: "oklch(var(--bc))",
              fontWeight: "bold",
            },
            "& .MuiTablePagination-displayedRows": {
              color: "oklch(var(--bc))",
              fontWeight: "bold",
            },
            "& .MuiSelect-select": {
              color: "oklch(var(--bc))",
              fontWeight: "bold",
            },
            "& .MuiInputBase-root": {
              color: "oklch(var(--bc))",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-filler": {
              backgroundColor: "oklch(var(--b1))",
            },
            height: 600,
          }}
        />
      </div>
    </>
  );
}
