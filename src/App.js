import './App.css';
import { useState,useEffect} from 'react';
import CheckboxesGroup from './View/CheckBox';
import StationDisplay from './View/StationList';
import { Container } from '@material-ui/core';
function App() {
  const [params,setParmas] = useState([])
  const [stationList,setStationList] = useState([])
  const [location,SetLocation] = useState(null)

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=> SetLocation({lat: position.coords.latitude,lng: position.coords.longitude}),()=> null)
  },[])

  const submitList = (list)=>{
    setStationList([...list])
  }
  const paramsHandler = (e)=>{
    let paramsClone = [...params]
    if(paramsClone.filter((parmas)=>parmas === e.target.name).length > 0){
      let newParams = paramsClone.filter((parma)=> parma !== e.target.name)
      setParmas(newParams)
      }
      else{
        setParmas((prev)=>([...prev,e.target.name]))
      }
  };
  const fetchStations = ()=>{
    const url = `http://ravkavonline.co.il/api/pos/service-station/search/?attributes=${[...params].toString()}&lon=${location?.lng}&lat=${location?.lat}`
    const methodrequest = {mode:"no-cors",headers:{mode:"no-cors",'Content-Type': 'application/json','Access-Control-Allow-Origin':"*"}}
    fetch(url)
    .then((res)=> res.json())
    .then((res)=>(submitList(res.data.results)))
    .catch((e)=>console.error('error',e))
  }


  return (
    <Container className="App">
      <CheckboxesGroup paramsHandler={paramsHandler} fetchStations={fetchStations}/>
      <StationDisplay list={stationList} key={params.length}/>
    </Container>
  );
}

export default App;
