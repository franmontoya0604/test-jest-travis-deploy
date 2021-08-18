import {useState,useEffect} from 'react';


const useGoogleAdress = address =>{
  const [map,setMap] = useState({});
const API = `http://api.positionstack.com/v1/forward?access_key=653d7887af48efa55ea24d6e3e72ad97&query=${address}`; //aca uso position stack para obtener la lat y lng del comprador

useEffect(  ()=> {

 async function fetchData(){
const response = await fetch(API);

const info = await response.json();

console.log(info)

setMap(info.data[0]);//guardo en mpa para luego pasarlo
 }

 fetchData();
},[]);

return map;

};

export default useGoogleAdress;
