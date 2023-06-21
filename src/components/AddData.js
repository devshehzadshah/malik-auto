import React, { useState } from 'react';
import { db } from './Config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
const AddData = () => {
  const [itemName, setItemName] = useState('');
  const [itemid, setItemid] = useState('');
  const [companyname, setCompanyName] = useState('');
  const [originalprice, setOriginalPrice] = useState('');
  const [soldprice, setSoldPrice] = useState('');
  const itemCollection = collection(db, "items");
  const navigate = useNavigate();
  const addItems = async () => {
    try{
    await addDoc(itemCollection, {
      itemName: itemName,
      itemid: itemid,
      companyname: companyname,
      originalprice: originalprice,
      soldprice: soldprice,
    });
    navigate('/Allproducts')
  }catch(error){
    console.log(error.message);
  }
  }
  return (
    <div className='row backgroud_products '>
      <div className='col-sm-4 offset-4 text-center py-4 px-3 custom_form'>
        <h3 className='text-white'>Add new new items here</h3>
        <input type='text' className='form-control add_form mt-2' placeholder='product name' onChange={(e) => setItemName(e.target.value)} />
        <input type='text' className='form-control add_form  mt-2' placeholder='product Id' onChange={(e) => setItemid(e.target.value)} />
        <input type='text' className='form-control add_form mt-2' placeholder='Company Name' onChange={(e) => setCompanyName(e.target.value)} />
        <input type='number' className='form-control add_form  mt-2' placeholder='product orignal Prices' onChange={(e) => setOriginalPrice(e.target.value)} />
        <input type='number' className='form-control add_form  mt-2' placeholder='product Sold Prices' onChange={(e) => setSoldPrice(e.target.value)} />
        <button className='btn btn-lg btn-dark mt-2' onClick={addItems}>Add items</button>
      </div>
    </div>
  );
}

export default AddData;
