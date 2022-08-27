import { Box, Divider, Grid, Typography } from '@mui/material';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useQuery } from '@apollo/client';
import { GQL_LISTINFO } from './gql/access';

const Access = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'date',
            headerName: 'Date',
            width: 200,
            editable: false,
        },
        {
            field: 'browser',
            headerName: 'Browser',
            width: 550,
            editable: false,
        },
        {
            field: 'ip',
            headerName: 'IP',
            width: 180,
            editable: false,
        },
    ];

    const { loading, data } = useQuery(GQL_LISTINFO);

    //While Loading don't do
    if (loading) {
        return (<></>);
    }

    //render 1 time
    return (
        <Grid container>
            <Grid item xs={2} />
            <Grid item xs={8}>
                <Box sx={{ width: '100%', marginTop: '20px' }}>
                    <Typography variant="h4" gutterBottom>
                        User access logs
                    </Typography>
                </Box>
                <Divider  />
                <Box sx={{ height: 400, width: '100%', marginTop: '20px'  }}>
                    <DataGrid
                        rows={data && !loading ? data.access : []}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Access;