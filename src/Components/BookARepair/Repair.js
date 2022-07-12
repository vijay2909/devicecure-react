import React, {useEffect, useState } from 'react';
import './index.css';
import FirstPage from "./BookARepairFiles/FirstPage";
import SecondPage from './BookARepairFiles/SecondPage';
import ThirdPage from './BookARepairFiles/ThirdPage';
import FourthPage from './BookARepairFiles/FourthPage';
import UpdateAddressSection from './BookARepairFiles/UpdateAddressSection';
import AddNewAddressSection from './BookARepairFiles/AddNewAddressSection';
import EditReviewSection from './BookARepairFiles/EditReviewSection';

function Repair() {

  const[totalDetailsData, setTotalDetailsData] = useState({});
  const [addId, setAddId] = useState();
  const [pageNum, setPageNum] = useState(1);

    switch(pageNum){
        case 1: return(
            <FirstPage totalDetailsData={totalDetailsData} setTotalDetailsData={setTotalDetailsData}
            pageNum={pageNum} setPageNum={setPageNum} />
        )
        case 2: return(
            <SecondPage totalDetailsData={totalDetailsData} setTotalDetailsData={setTotalDetailsData}
            addId={addId} setAddId={setAddId}
            pageNum={pageNum} setPageNum={setPageNum} />
        )
        case 3: return(
            <ThirdPage totalDetailsData={totalDetailsData} setTotalDetailsData={setTotalDetailsData}
            pageNum={pageNum} setPageNum={setPageNum} />
        )
        case 4: return(
            <FourthPage />
        )
        case 5: return(
            <UpdateAddressSection addId={addId} setAddId={setAddId}
            pageNum={pageNum} setPageNum={setPageNum} />
        )
        case 6: return(
            <AddNewAddressSection pageNum={pageNum} setPageNum={setPageNum} />
        )
        case 7: return(
            <EditReviewSection 
            totalDetailsData={totalDetailsData} setTotalDetailsData={setTotalDetailsData}
            addId={addId} setAddId={setAddId}
            pageNum={pageNum} setPageNum={setPageNum} />
        )
        
      }
    // },[pageNum])
}

export default Repair