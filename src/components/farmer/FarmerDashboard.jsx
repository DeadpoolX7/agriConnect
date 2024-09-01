import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getApplications } from '../../services/Applications';
import { getCurrentUser } from '../../services/Auth';

const FarmerDashboard = () => {
    const location = useLocation();
    const [applications, setApplications ] = useState([]);
    const [ farmerName, setFarmerName ] = useState();

    useEffect(()=>{
        const fetchApplications = async ()=>{
          const name = (await getCurrentUser()).name;
          setFarmerName(name);
           const res  =  await getApplications();
           console.log(res);
           setApplications(res);
        }
        fetchApplications();
    }, [])

  return (
    <div>
      <p>Welcome {farmerName}</p>
    {applications.map(application=>(
        <p key={application.$id}>{application.crops_grown}</p>
    ))}
    </div>
  )
}

export default FarmerDashboard

//fetch his contracts [done]
//post contracts