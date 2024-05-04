"use client";

import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { gql, useMutation } from "@apollo/client";
import {
  Dialog,
  Flex,
  Text,
  Button,
  TextField,
  Select,
  Heading,
  Box,
} from "@radix-ui/themes";
import AddDialog from "./AddDialog";
import EditDialog from "./EditDialog";

const GRAPH_UPDATEWEDDINGINVITE = gql`
  mutation updateWeddingRsvp($input: UpdateWeddingRsvpInput!) {
    updateWeddingRsvp(input: $input) {
      name
      fullName
    }
  }
`;

type RenderTableProps = {
  initialData: any;
  password: string;
};

const RenderTable = ({ initialData, password }: RenderTableProps) => {
  const [updateWeddingRsvp, { data, loading, error }] = useMutation(
    GRAPH_UPDATEWEDDINGINVITE
  );

  const rows: GridRowsProp = initialData.map((item: any) => {
    return {
      id: `${item.name}_${item.password}`,
      name: item.name,
      password: item.password,
      fullName: item.fullName,
      human_type: item.human_type,
      planning_to_attend: `${item.planning_to_attend}${
        item.reason && `_${item.reason}`
      }`,
      starter: item.starter,
      main: item.main,
      dessert: item.dessert,
      dietaryRequirements: item.dietary_requirements,
      isPlusOne: item.isPlusOne,
      ff: item.feature_flag,
    };
  });

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "id",
      width: 300,
    },
    {
      field: "name",
      headerName: " ",
      width: 120,
      headerClassName: "headertest",
      cellClassName: "test",
      type: "actions",
      getActions: (params) => [
        <>
          <EditDialog password={params.row.password} initialData={params.row} />
        </>,
      ],
    },

    {
      field: "fullName",
      headerName: "Full name",
      width: 200,
    },
    {
      field: "planning_to_attend",
      headerName: "Attending",
      type: "singleSelect",
      valueOptions: ["true_serious", "true_funny", "false", ""],
      editable: true,
      width: 100,
    },
    {
      field: "isPlusOne",
      headerName: "+1",
      type: "boolean",
      width: 30,
    },
    {
      field: "human_type",
      type: "singleSelect",
      valueOptions: ["ADULT", "CHILD", "BABY"],
      editable: true,
      headerName: "Age",
      width: 80,
    },
    {
      field: "starter",
      type: "singleSelect",
      valueOptions: ["Starter 1", "wild mushroom fricasse", "Starter 3", ""],
      editable: true,
      headerName: "Starter",
      width: 300,
    },
    {
      field: "main",
      headerName: "Main",
      width: 300,
    },
    {
      field: "dessert",
      headerName: "Dessert",
      width: 300,
    },
    {
      field: "dietaryRequirements",
      headerName: "Dietary Requirements",
      width: 300,
    },
    {
      field: "ff",
      headerName: "Feature Flags",
      width: 300,
    },
  ];

  return (
    <>
      <Box
        style={{
          position: "sticky",
          left: 0,
          width: "100vw",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <Heading style={{ margin: "0" }}>{password}</Heading>
        <AddDialog password={password} />
      </Box>
      <DataGrid
        rowHeight={32}
        columnHeaderHeight={32}
        sx={{
          // add a border to the cells
          "& .MuiDataGrid-cell": {
            borderRight: "1px solid #e0e0e0",
          },

          "& .test": {
            backgroundColor: "white",
            position: "sticky",
            left: 0,
            borderRight: "2px solid #e0e0e0",
          },

          "& .headertest": {
            backgroundColor: "white",
            position: "sticky",
            left: 0,
            zIndex: 1,
            borderRight: "2px solid #e0e0e0",
          },

          "& .MuiDataGrid-main": {
            overflow: "visible",
          },

          "& .MuiDataGrid-row": {
            cursor: "pointer",
          },
          // target the virtual scroller part of : .css-1793420-MuiDataGrid-virtualScroller. I want to target anything that ends in virtualScroller
          "& .MuiDataGrid-virtualScroller": {
            overflow: "visible",
          },
        }}
        hideFooter
        rows={rows}
        columns={columns}
        disableVirtualization
        initialState={{
          columns: {
            columnVisibilityModel: {
              id: false,
            },
          },
        }}
        processRowUpdate={(updatedRow, originalRow) => {
          console.log("updatedRow", updatedRow);

          // planning_to_attend is a string, like true_funny, extract true and funny. True is a boolean and mapped to "attendingStatus" and funny is a string and mapped to "reason"
          const [attendingStatus, reason] =
            updatedRow.planning_to_attend.split("_");

          updateWeddingRsvp({
            variables: {
              input: {
                password: originalRow.password,
                name: updatedRow.name,
                // update full name with the new value
                fullName: updatedRow.fullName,
                planning_to_attend: attendingStatus,
                reason: reason,
                feature_flag: updatedRow.ff,
                human_type: updatedRow.human_type,
              },
            },
          });
        }}
      />
    </>
  );
};

export default RenderTable;
