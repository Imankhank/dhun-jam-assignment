import React, { useState } from 'react'
import "./layout.css"
import AccountIcon from '../../assets/sidebar-icon/account-icon'
import DashboardIcon from '../../assets/sidebar-icon/dashboard-icon'
import DollarIcon from '../../assets/sidebar-icon/dollar-icon'
import ReportIcon from '../../assets/sidebar-icon/report-icon'
import AdvisorIcon from '../../assets/sidebar-icon/advisor-icon'
import ContactIcon from '../../assets/sidebar-icon/contacts-icon'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const [activeTab, setActiveTab] = useState("Dashboard")

    const navigate = useNavigate()



    const sidebarData = [
        {
            name: "Dashboard",
            image: (<DashboardIcon fill={activeTab === "Dashboard" ? "#fff" : "#000"} width={15} height={15} />),
        },
        {
            name: "Accounts",
            image: (<AccountIcon fill={activeTab === "Accounts" ? "#fff" : "#000"} width={15} height={15} />)
        },

        {
            name: "Payroll",
            image: (<DollarIcon fill={activeTab === "Payroll" ? "#fff" : "#000"} width={15} height={15} />)
        },
        {
            name: "Reports",
            image: (<ReportIcon fill={activeTab === "Reports" ? "#fff" : "#000"} width={15} height={15} />)
        },
        {
            name: "Advisor",
            image: (<AdvisorIcon fill={activeTab === "Advisor" ? "#fff" : "#000"} width={15} height={15} />)
        },
        {
            name: "Contacts",
            image: (<ContactIcon fill={activeTab === "Contacts" ? "#fff" : "#000"} width={15} height={15} />)
        },

    ]




    return (
        <div className='sidebar'>
            <div className='pt-lg-5 pt-2'>
                {
                    sidebarData.map((item) =>
                        <div
                        style={{cursor: "pointer"}}
                            className={`${activeTab === item?.name ? "bg-primar" : ""} `}
                            onClick={() => { setActiveTab(item?.name); navigate("/") }}
                        >
                            <div className={`ps-5 py-3 d-flex align-items-center ${activeTab === item?.name ? "color-fff" : "color-000"} `}>
                                {item?.image}<span className='ms-3 fw_500'>{item?.name}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar