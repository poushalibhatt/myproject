import React,{ useState } from 'react';
import Gallery from './Gallery';
import Favourite from './Favourite';
import Saved from './Saved';
import './dashboard.css';

const Dashboard = () => {

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {name: "Gallery", component: Gallery},
        {name: "Favourite", component: Favourite},
        {name: "Saved", component: Saved}
    ]
   const handleStickyNote = () => {

   }

   const ActiveComponent = tabs[activeTab].component
   
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-9'>
            <div>Hello Worldss</div>
                {tabs.map((tab, index) => (
                    <span 
                        key={tab.name}
                        onClick={()=> setActiveTab(index)}
                        className={activeTab === index ? 'active':'dashboardtabs'}
                    >
                        {tab.name}
                    </span>
                ))}
                <ActiveComponent />
            </div>
            <div className='col-lg-3'>
                <div className='toolbar'>
                    <button className='toolbar-button'>

                    </button>
                </div>
                <textarea 
                    onChange={handleStickyNote}
                    style={{backgroundColor : "#FCF0DB"}}
                    className='sticky-notes'
                    placeholder='All your notes are noted here'
                    // value={}
                />
            </div>
        </div>
    </div>
  )
}

export default Dashboard