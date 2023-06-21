import React, { useEffect, useState,Fragment} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, deleteDoc, getDocs ,doc} from 'firebase/firestore';
import { db } from './Config';
const Allproducts = () => {
  const [dependency, setDependency] = useState(false);
  const [items, setItems] = useState([]);
  const itemCollection = collection(db, "items");


  const allItems = async () => {
    const data = await getDocs(itemCollection);
    setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteItem = async(id) => {
    try{
    const userDoc = doc(db, 'items',id);
    await deleteDoc(userDoc);
    setDependency(!dependency)
    toast.success('Your Record is Deleted successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }catch(error){
    console.log(error.message);
  }
  }
  useEffect(() => {
    allItems();
  }, [dependency]);
  return (
    <div className='row bg-dark'>
      <div className='col-sm-12 text-center bg-dark text-white pb-4'><h2>All items In Shop</h2></div>
       <ToastContainer 
       position="top-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="colored"/>
      <table className="table table-hover table-dark pl-3">
        <thead>
          <tr>
            <th scope="col">Product Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Company Name</th>
            <th scope="col">Orignal Price RS</th>
            <th scope="col">Sale Price RS</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
       
        <tbody>
        
        { items !=[] && items.map((item) => {
                  return<>
                   <tr>
                <th scope="row">{item.itemid}</th>
                <td>{item.itemName}</td>
                <td>{item.companyname}</td>
                <td>{item.originalprice}</td>
                <td>{item.soldprice}</td>
                <td><button className='btn btn-danger' onClick={()=> deleteItem(item.id)}>Delete</button> <button className='btn btn-primary'>Edit</button></td>
                </tr>
                </>
              })}
          
            </tbody>
    
        
      </table>
    </div>
  );
}

export default Allproducts;
