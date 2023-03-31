import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import data  from '../Data/population.json'
import { Grid } from '@mui/material';
import { useEffect } from 'react';

const columns = [
  {
    field: 'Country (or dependency)',
    headerName: 'Country',
    width: 150,
  },
  {
    field: 'Population (2020)',
    headerName: 'Population',
    width: 150,
    
  },
  {
    field: 'Yearly Change',
    headerName: 'Yearly Change',
    type: 'number',
    width: 110,
    
  },
  {
    field: 'Net Change',
    headerName: 'Net Change',
    width: 160,
  },
  {
    field: 'Density (P/Km²)',
    headerName: 'Density',
    
    width: 160,
  },
  {
    field: 'Land Area (Km²)',
    headerName: 'Land Area',
    
    width: 160,
  },
  {
    field: 'Migrants (net)',
    headerName: 'Migrants',
    
    width: 160,
  },
  {
    field: 'Fert. Rate',
    headerName: 'Fert. Rate',
    
    width: 160,
  },
  {
    field: 'Med. Age',
    headerName: 'Med. Age',
    
    width: 160,
  },
  {
    field: 'Urban Pop %',
    headerName: 'Urban Pop %',
    
    width: 160,
  },
  {
    field: 'World Share',
    headerName: 'World Share',
    width: 160,
  },
];

const rows = data;

function DataGridComponent({setData}){
    
    return (
        <Box >
            <Grid xs={12} md={12} sx={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    getRowId={() => Math.floor(Math.random() * 100000000)}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 50,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    onCellClick={(params) => setData(params.row)}
                    onSelectionModelChange ={(newSelection) => {
                        setData(newSelection.rows);
                    }}
                />
            </Grid>
        </Box>
    )
}

export default DataGridComponent