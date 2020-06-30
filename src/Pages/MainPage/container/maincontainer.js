import React,{useState} from 'react';
import Icon1 from '../../../Config/images/icon1.JPG'
import Icon2 from '../../../Config/images/icon2.JPG'
import Icon3 from '../../../Config/images/icon3.JPG'
import Icon4 from '../../../Config/images/icon4.JPG'
import Icon5 from '../../../Config/images/icon5.JPG'
import MainMenuCard from '../component/main'

const MainMenuContainer=(props)=>{
    return(
        <div className="py-5 container-fluid">
            <div className="d-flex flex-row flex-wrap align-items-stretch">
                <MainMenuCard title={"Acbel Chiller Plant UI"} 
                icon={Icon1} loading={"Loading%"} Consumption={"Consumption"} Error={"Error"} 
                loadingValue={"50%"} ConsumptionValue={"150.3Kw"} ErrorValue={"7"}/>

                <MainMenuCard title={"Acbel environmental monitor UI"}
                icon={Icon2} loading={"Loading %"} Consumption={"Consumption"} Error={"Error"}
                loadingValue={"50%"} ConsumptionValue={"150.3Kw"} ErrorValue={"7"}
                />
                
                <MainMenuCard title={"Ndhu Streetlight UI"} 
                    icon={Icon3} loading={"Streetlight"} Consumption={"On"} Error={"Error"}
                    loadingValue={"1024"} ConsumptionValue={"90"} ErrorValue={"5"} 
                />
                
                <MainMenuCard title={"Acbel solar power UI"}
                    icon={Icon4} loading={"Monitored sites"} Consumption={"Power generation"} Error={"Dev off"}
                    loadingValue={"9"} ConsumptionValue={"6651.65MWH"} ErrorValue={"24"}
                />
                
                <MainMenuCard title={"New iotcomui UI"}
                    icon={Icon5} loading={"Loading %"} Consumption={"Consumption"} Error={"Error"}
                    loadingValue={"50%"} ConsumptionValue={"150.3Kw"} ErrorValue={"7"}
                />  
            </div>   
           
        </div>
    )
}
export default MainMenuContainer;