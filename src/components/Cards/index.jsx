// import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";


import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { Container } from "./styles";
import { Button } from "../Button"
import imageFood from "../../assets/Mask group-2.png"
// import { Tag } from "../../components/Tag"

export function Cards({ data, ...rest }) {

    const navigate = useNavigate()

    function handleDetails() {
        navigate(`/details/${data.id}`);
      }


 return (
    <Container data = {data}
    onClick={handleDetails} {...rest}>
            <FiHeart />
            <img src={imageFood} alt="" />
            
            <div className="dishName">
                <p> {data?.title} </p> 
            </div>

            <p> {data?.description} </p> 

            


           
            
             
             {/* { data.tags.map((tag) => (
                <Tag 
                key={tag.id}
                title={tag.name} 
                />
              ))
              } */}

              {/* S */}

          


                <h2> {data?.price} </h2>

            <div className="moreLess"> 
            <FiMinus /> 01 <FiPlus /> <Button title="incluir"/> 
            </div>
        
    </Container>
 )
} 
















// import { useNavigate } from "react-router-dom";
// import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
// import { Container } from "./styles";
// import { Button } from "../Button";
// import imageFood from "../../assets/Mask group-2.png";
// import { Tag } from "../../components/Tag";

// export function Cards({ data, ...rest }) {
//     const navigate = useNavigate();

//     function handleDetails() {
//         navigate("/details");
//     }

//     return (
//         <Container onClick={handleDetails} {...rest}>
//             <FiHeart />
//             <img src={imageFood} alt="Food" />
            
//             {data && (
//                 <>
//                     <div className="dishName">
//                         <p>{data.title}</p>
//                     </div>

//                     {data.tags && data.tags.map(tag => (
//                         <Tag key={tag.id} title={tag.name} />
//                     ))}

//                     <h2>{data.price}</h2>

//                     <div className="moreLess">
//                         <FiMinus /> 01 <FiPlus /> <Button title="incluir" />
//                     </div>
//                 </>
//             )}
//         </Container>
//     );
// }