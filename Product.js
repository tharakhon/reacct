import React, { useState } from 'react';
import Posts from './Posts';
import About from './About';
import Home from './Home';
import {BrowserRouter,Route,Routes,Link, useNavigate} from 'react-router-dom';

const Product=(props)=>{
    const Navigate = useNavigate()

    const myInputRef= React.createRef();
    

    let sum = 0
    props.product.product_list.forEach(element => {
        sum+=element.price*element.count;
    });

    const onDeleteProduct=(item/*deleteKey*/)=>{
        //const product_list=[...productState.product_list];
        //const deleteIndex = product_list.findIndex((item)=>{
        //    return item.id===deleteKey;
        //});
        //product_list.splice(deleteIndex,1);
        //setProductState({
        //    product_list:product_list
        //});
        //////////////////////////////////////////
        const updatedata={
            id: item.id,
            name: item.name,
            price: item.price,
            count: 0
        };
        //console.log(myInputRef.current.value);
        onUpdateProduct(item.id,updatedata);
        
    }

    const OnDeleteAllProduct=()=>{
       
    }

    const onUpdateProduct=(updateKey,data)=>{
        console.log(data);
        const product_list=[...props.product.product_list];
        const updateIndex = product_list.findIndex((item)=>{
            return item.id===updateKey;
        });
        product_list[updateIndex]=data;
        props.setproduct({
             product_list:product_list
        });
    }

    
     const onOkClick=(item)=>{
            const updatedata={
                id: item.id,
                //name: myInputRef.current.value,
                name: item.name,
                price: item.price,
                count: item.count+1
            };
            //console.log(myInputRef.current.value);
            onUpdateProduct(item.id,updatedata);
    }
    
    

    
    const show_product = props.product.product_list.map((item)=>{
            return (
                        
                       <tr key={item.id}><td>&nbsp;&nbsp;{item.id}&nbsp;&nbsp;</td><td>&nbsp;&nbsp;{item.name}&nbsp;&nbsp;</td><td>&nbsp;&nbsp;{item.price}&nbsp;&nbsp;</td>
                       <td>&nbsp;&nbsp;<button onClick={()=>Navigate("/posts/"+item.id)}>รายละเอียดสินค้า</button>&nbsp;&nbsp;</td> 
                        <td>&nbsp;&nbsp;<button onClick={onOkClick.bind(this,item)}>เพิ่มสินค้าลงในตระกร้า</button>&nbsp;&nbsp;</td></tr>                   
            )
    })
    
    /* 
    <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.price}</td><td>{item.count}</td><td>
    <button onClick={onDeleteProduct.bind(this,item.id)}>delete</button></td> 
    <td><button onClick={onOkClick.bind(this,item)}>เพิ่มสินค้าลงในตระกร้า</button></td></tr>*/

    const show_Sell_product = props.product.product_list.map((item)=>{

        if(item.count > 0){
            return (
                        
                        <tr key={item.id}><td>&nbsp;{item.name}&nbsp;</td><td>&nbsp;{item.price*item.count}&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;{item.count}&nbsp;</td>
                        <td>&nbsp;&nbsp;<button onClick={onDeleteProduct.bind(this,item)}>นำสินค้าออก</button></td>
                        </tr>
                        
            )
        }else{
            return 
        }
        
    })

    return (
        <div>
            <h1>&nbsp;&nbsp;Shop</h1>
            <h2>&nbsp;&nbsp;รายการสินค้า</h2>
            <table border='1'><thead><tr><td>&nbsp;&nbsp;ID&nbsp;&nbsp;</td><td>&nbsp;&nbsp;NAME&nbsp;&nbsp;</td><td>&nbsp;&nbsp;PRICE&nbsp;&nbsp;</td></tr></thead><tbody>{show_product}</tbody></table>
            
            <h2>&nbsp;ตระกร้าสินค้า</h2>
            <table border='0'><thead><tr><td>&nbsp;&nbsp;รายการ</td><td>&nbsp;&nbsp;ราคา</td><td>จำนวน</td></tr></thead><tbody>{show_Sell_product}</tbody></table>

            
            <button onClick={()=>{
                const D = props.product.product_list.map(item=>{item.count =0; return item})
                props.setproduct({product_list:D})
                }
            }>ลบทั้งหมด</button>
            <h4>&nbsp;ราคาสินค้าทั้งหมด</h4>
            &nbsp;&nbsp;{sum}
            
        </div>);

    /*   DEFULT
            <h1>Shop</h1>
            <h2>รายการสินค้า</h2>
            <table border='1'><thead><tr><td>id</td><td>name</td><td>price</td><td></td></tr></thead><tbody>{show_product}</tbody></table>
            New value:<input type='text' name='product_name' ref={myInputRef}/>
            <h2>ตระกร้าสินค้า</h2>*/

}
export default Product;