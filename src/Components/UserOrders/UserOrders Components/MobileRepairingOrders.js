import React, { useEffect, useState } from 'react'
import "../UserOrders.css";
import styled from "styled-components";
import axios from 'axios';

export default function MobileRepairingOrders() {

    const [data, setData] = useState([])

    useEffect(()=>{
        const auth = 'Bearer ' + localStorage.getItem('token');
        axios.get("https://staging.devicecure.in/api/repairing-orders",
        {
            headers: 
            {
                Authorization : auth
            }
        })
        .then((res)=>{
            console.log(res.data.data);
            setData(res.data.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <>
    <Main>
        <Heading>
            <h2>Mobile Repairing</h2>
        </Heading>
        {
            data.map((data,idx)=>{
                return(
                    <Box>
                        <FirstSection>
                            <p><strong>Booking Id : </strong>{data.booking_id}</p>
                            <p><strong>Status : </strong>{data.status}</p>
                            <p>{data.created_at}</p>
                            {
                            data.status == "PENDING" ? <></> :  <p className='downloadPara'><a href={`https://staging.devicecure.in/order/${data.id}/generate-invoice`} target="_blank"><strong>DOWNLOAD INVOICE</strong></a></p>
                            }
                        </FirstSection>
                        <SecondSection>
                            <p><strong>Technician : </strong>{data.technician}</p>
                            <p><strong>Time Slot : </strong>{data.timeslot.slot}</p>
                            <p><strong>Repair Date : </strong>{data.repair_date}</p>
                            <p><strong>Mobile Brand : </strong>{data.mobile_brand}</p>
                            <p><strong>IMEI No. : </strong></p>
                            <p><strong>Mobile Model : </strong>{data.mobile_model}</p>
                            <p><strong>Coupon Code : </strong>{data.coupon}</p>
                            <p><strong>Mobile Colour : </strong>{data.mobile_color}</p>
                            <p className='invoicePara'><strong>Issue With Phone : </strong>
                            {
                                data.issue_with_mobile.map((data,idx)=>
                                    idx == 0 ? <span>{data}</span> : <span>,&nbsp;{data}</span>
                                )
                            }
                            </p>
                        </SecondSection>
                    </Box>
                )
            })
        }
    </Main>
    </>

  )
}
const Main = styled.div`
width : 80%;
margin : 0 auto;
`
const Heading = styled.div`
width : 100%;
`
const Box = styled.div`
width : 100%;
margin : 20px auto;
border-radius : 20px;
box-shadow : 0 0 5px black;
`
const FirstSection = styled.div`
width : 100%;
margin : 0 auto;
padding : 10px 0;
p{
    display : inline-block;
    width : 50%;
    padding : 5px 10px;
}
.downloadPara{
text-align : center;
a{
    color : #281A60;
}}
border : 1px solid black;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
background-color : rgb(240,240,240);
`
const SecondSection = styled(FirstSection)`
.invoicePara{
    width : 100%;
}
border-top-left-radius: 0;
border-top-right-radius: 0;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
border : 1px solid black;
background-color : white;
`
// #281A60 dark purple
// #561D9C light purple
