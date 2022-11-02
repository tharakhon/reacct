import React from "react";
import PostItem from "./Post-item";
import {useParams,useLocation} from 'react-router-dom';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
const Posts= (props)=>{

    const {id}=useParams();
    const urlstring=new URLSearchParams(useLocation().search);
    const fname=urlstring.get("fname");
    const lname=urlstring.get("lname");
    const p = props.product.product_list.find(item=>item.id == id)

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

    return (
        <div>
            <h2>&nbsp;&nbsp;รายละเอียดสินค้า</h2>
            <p>&nbsp;&nbsp;ชื่อ {p.name}</p>
            <p>&nbsp;&nbsp;ราคา {p.price}</p>
            
            &nbsp;&nbsp;<button onClick={onOkClick.bind(this,p)}>เพิ่มสินค้า</button>
            <br/><br/>&nbsp;&nbsp;<Link to="/">กลับไปหน้ารายการสินค้า</Link>
        </div>
    );
}
export default Posts;