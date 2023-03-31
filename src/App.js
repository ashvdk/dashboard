import logo from './logo.svg';
import './App.css';
import data  from './Data/population.json'
import { LineChart, XAxis, YAxis, CartesianGrid, Line, ResponsiveContainer, Tooltip } from 'recharts'
import DataGridComponent from './components/DataGridComponent';
import { Grid, Button } from '@mui/material';
import Container from '@mui/material/Container';
import { useState } from 'react';

function App() {
  let [graphData, setGraphData] = useState([...data]);
  function setData(data) {
    console.log(data)
    let arr = []
    arr.push(data)
    setGraphData([...arr])
  }
  return (
    <Container fixed>
        <Grid xs={12} md={12} paddingBottom={10} marginTop={10}>
          <Button variant="outlined" onClick={() => setGraphData(data)}>All Countries Data</Button>
          <ResponsiveContainer width="100%" aspect={3}>
            {graphData.length > 0 ? <LineChart width={1000} height={500} data={graphData}>
              <XAxis dataKey="Country (or dependency)"/>
              <YAxis/>
              <Tooltip /> 
              <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
              <Line type="monotone" dataKey="Population (2020)" stroke="#8884d8" />
              {/* <Line type="monotone" dataKey="pv" stroke="#82ca9d" /> */}
            </LineChart> : "Loading Graph Data"}
          </ResponsiveContainer>
        </Grid>
        <Grid xs={12} md={12} paddingBottom={10}>
          <DataGridComponent graphData = {graphData} setData={setData}/>
        </Grid>
      </Container>
    
  );
}

export default App;
