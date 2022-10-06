import React, { useEffect, useState } from 'react'
import style from "./customer.module.css"

const Custo = () => {
    // console.log(data);
const [show, setShow]=useState([]);
const [filterBrand, setFilterBrand] = useState("");

    useEffect(()=>{

        fetch(`http://localhost:8080/story`)
        .then((res)=>res.json())
        .then((data)=>setShow(data))
        .catch((er)=>console.log(er))
    },[])

// console.log(show);

    return (
        <>
          {/* for filter creating div */}
          <div className={style.filter_main_div}>
          <div className={style.filter_child_div}>

     <h5 className={style.filter_h5}>Filter:</h5>
    <select  onChange={(e)=> setFilterBrand(e.target.value)}  className={style.filter_select} >
       
       <option value="all">All</option>
       <option value="technology">Technology</option>                
       <option value="finance">Finance &amp; Insurance</option>
       <option value="agency">Agency</option>
       <option value="higher-education">Higher Education</option>
       <option value="hospitality">Hospitality &amp; Tourism</option>
       <option value="health-wellness">Health &amp; Wellness</option>
       <option value="b2b">B2B</option>
       <option value="b2c">B2C</option>
   </select>
</div>
          </div>

<hr className={style.filter_hr}/>

            <div className={style.CustomerMaping_main_div}>


                {show 
                           
                           .filter((type)=>{
                            if(filterBrand === ""){
                                return type; 
                            }                        
                            else{
                                return type.type===filterBrand;
                            }
                        })
                .map((item) =>

                    <div className={style.CustomerMaping_grid_div} key={item.id}>

                        <div className={style.CustomerMaping_image}>
                            <img src={item.imageSrc} alt='images' />
                        </div>
                        <div className={style.CustomerMaping_title}>
                            <h3 className={style.Maping_title}>{item.title}</h3>
                          
                        </div>
                        <div className={style.CustomerMaping_read}>
                        <p className={style.Maping_read}>{item.read}</p> 
                        </div>
                    </div>
    )}
          </div>

        </>
    )
}

export default Custo;