import React from 'react';


const MainMenuCard=(props)=>{
    const {title,icon,loading,Consumption,Error,loadingValue,ConsumptionValue,ErrorValue}=props
    
    return(
            <div className="col-lg-3 col-md-6 col-12 p-3">
                <div className="card shadow-sm rounded-lg" style={{minWidth: '220px', minHeight: '380px', maxWidth: '330px', maxHeight:'230px',}} >
                    <div className="p-3">
                        <img src={icon} style={{width:'60px', height:'50px'}} alt="icon"/>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title font-weight-bold">{title}</h6>
                        <p className="card-subtitle mb-2 text-muted" style={{fontSize: '14px'}}>http://61.65.0.222/acbel</p>
                        <p className="py-2 card-text" style={{fontSize: '14px'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincid</p>
                        <div className="row d-flex flex-nowrap text-center w-100" style={{fontSize: '12px'}}>
                            <div className="col-4">
                                <p className="card-text" >{loading}</p><p className="card-text" style={{color: '#12a339'}}>{loadingValue}</p>
                            </div>
                            <div className="col-5">
                                <p className="card-text">{Consumption}</p><p className="card-text" style={{color: '#12a339'}}>{ConsumptionValue}</p>
                            </div>
                            <div className="col-3">
                                <p className="card-text" >{Error}</p><p className="card-text" style={{color: '#a31219'}}>{ErrorValue}</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div> 
    )
}
export default MainMenuCard;