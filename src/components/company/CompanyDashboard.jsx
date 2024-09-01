import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { getContracts } from '../../services/Contracts';
import { getCurrentUser, logoutUser } from '../../services/Auth';
function CompanyDashboard() {

  const navigate = useNavigate();

  const [contracts, setContracts]  = useState([]);
  const [companyName,  setCompanyName] = useState();

  useEffect(() => {
        const fetchContractts = async()=>{
        try {
        const name = (await getCurrentUser()).name;
        setCompanyName(name);
        const res = await getContracts();
        console.log(res);
        setContracts(res);
        } catch (error) {
          console.log(error)
        }
        }
        fetchContractts();
  }, [])

  const handleLogOut = async ()=>{
    const r = await logoutUser();
    console.log(r);
    navigate('/company/login');
  }

  return (
    <div className=''>
      <h1>Welcome, {companyName}!</h1>
      { contracts.map( contract =>(
        <div key={contract.$id} className='card bg-primary text-primary-content w-96 m-10'>
          <div className='card-body'>
            <h2 className='card-title'>{contract.title}</h2>
            <p>{contract.description}</p>
          </div>
        </div>
      ))}

      <div id='post-contract'>
        <button onClick={()=>navigate(`/${companyName}/postContract`)} className='btn btn-error'>Post Contract</button>
      </div>

      <div className='flex justify-center'>
        <button onClick={handleLogOut}
        className='btn btn-warning text-xl'
        >Logout</button>
      </div>
    </div>
  )
}

export default CompanyDashboard;

/*TODO
getContracts on Dashboard
CreatContracts '' ''

*/