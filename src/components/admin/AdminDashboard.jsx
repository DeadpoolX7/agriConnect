import React, { useEffect, useState } from 'react'
import { DATABASE_ID, databases } from '../../services/Appwrite'
import { useNavigate } from 'react-router-dom'
import { isAdmin } from '../../services/AdminAuth'
import { COMPANY_CONTRACTS_COLLECTION_ID } from '../../services/Contracts'
const AdminDashboard = () => {
/*     const [IsAdmin, setIsAdmin]  = useState();

    useEffect(()=>{
        const checkAdmin = async ()=>{
           const adminStatus = await isAdmin();
           setIsAdmin(adminStatus);
            if(!adminStatus){
                //navigate to login
            }
        }

        checkAdmin();
    },[]) */
  const navigate = useNavigate();
    const [collections, setCollections] = useState();

    useEffect(() => {
      const fetchCollections = async () => {
          try {
            
            const res =   await databases.listDocuments(DATABASE_ID, COMPANY_CONTRACTS_COLLECTION_ID);
            console.log(res.documents);
            setCollections(res.documents)
              
          } catch (error) {
              console.log(error)
          }
      };

      fetchCollections();
  }, []);

  const handleLogout = ()=>{
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin');
  }

  return (
    <>
    <div className="navbar bg-slate-600">
  <a className="btn btn-ghost text-xl navbar-start">Admin Panel</a>
  <div className='navbar-end'>

  <button className='btn hover:bg-red-700 ' onClick={handleLogout}>Logout</button>
  </div>
</div>
      <h1 className='text-4xl antialiased text-center mt-5'>Hello admin!</h1>
    <div className='h-screen flex flex-col justify-center items-center'>
      <h2 className='text-2xl'>Posted Contracts</h2>
      <div className='flex flex-row'>

    {collections && collections.map(collection => (
      <div key={collection.$id} className='card-body m-5 border rounded-xl'>
        <h1 className='card-title'>
        {collection.title}
        </h1>
        <blockquote>
          {collection.description}
        </blockquote>
        </div>
    ))}
      </div>
    </div>
    </>
  )
}

export default AdminDashboard
