import React, { useState } from 'react'
import Select from 'react-select';
import { allmonths, chaeckingAccountOptions, monthOptions } from '../components/data';
import LineGraph from '../components/graphs/linegraph';
import BarGraph from '../components/graphs/bargraph';
import BarGraph2 from '../components/graphs/invoiceGraph';
import 'bootstrap/dist/css/bootstrap.min.css';
import InvoiceModal from '../components/modals/invoice-modal';



const AssiduusDahboard = () => {
  const [selectedOption, setSelectedOption] = useState({
    "label": "Manage",
    "value": "manage"
  });
  const [selectedMonth, setSelectedMonth] = useState({ value: 'january', label: 'January' },
  );
  const [show, setShow] = useState(false)
  return (
    <div className='row'>
      <InvoiceModal show={show} handleClose={() => setShow(false)} />
      <div className='col-lg-6'>
        <div className='first-card w-100 bg-fff rounded-3'>
          <div className='d-flex flex-sm-row flex-column gap-sm-0 gap-2 justify-content-between align-items-center px-3 py-2'>
            <span className='fw_500 fs_15'>
              Checking Account
            </span>
            <div className='d-flex gap-2'>
              <Select
                className='react-select'
                styles={customStyles}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={chaeckingAccountOptions}
              />
              <Select
                className='react-select'
                styles={customStyles}
                defaultValue={selectedMonth}
                onChange={setSelectedMonth}
                options={monthOptions}
              />
            </div>
          </div>
          <hr className='mt-1 horizontal-line w-100' />
          <div
            className='p-3'
          >
            <LineGraph selectedMonth={allmonths?.find((item) => item?.month === selectedMonth?.value)} />
          </div>
        </div>
        <div className='first-card w-100 bg-fff rounded-3 mt-4'>
          <div className='d-flex flex-sm-row flex-column gap-sm-0 gap-2 justify-content-between align-items-center p-3'>
            <span className='fw_500 fs_15'>Total cash flow </span>
            <div className='d-flex gap-4'>
              <div className='d-flex gap-2 align-items-center'>
                <span className='bg-primar1 rounded-1' style={{ height: "15px", width: "15px" }}>
                </span>
                <span className='fw_400 fs_18 color-000'>
                  In
                </span>
              </div>
              <div className='d-flex gap-2 align-items-center'>
                <span className='bg-primar rounded-1' style={{ height: "15px", width: "15px" }}>
                </span>
                <span className='fw_400 fs_18 color-000 '>
                  Out
                </span>
              </div>
            </div>
          </div>
          <hr className='mt-1 horizontal-line w-100' />
          <BarGraph />
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='first-card w-100 bg-fff rounded-3 mt-lg-0 mt-4'>
          <div className='d-flex flex-sm-row flex-column gap-sm-0 gap-2 justify-content-between align-items-center p-3'>
            <span className='fw_500 fs_15'>Invoices owed to you </span>
            <button onClick={() => setShow(true)} style={{ backgroundColor: "4fb14f20" }} className='primar-color border-0 rounded-1  px-3'>
              New sales invoice
            </button>
          </div>
          <hr className='mt-1 horizontal-line w-100' />
          <BarGraph2 />
        </div>
        <div className='first-card w-100 bg-fff rounded-3 mt-4'>
          <div className='d-flex flex-sm-row flex-column gap-sm-0 gap-2 justify-content-between align-items-center p-3'>
            <span className='fw_500 fs_15'>Account watchlist </span>
          </div>
          <hr className='mt-1 horizontal-line w-100' />
          <div className='d-flex justify-content-between px-4'>
            <div>
              <p className='fw_500 color_grey'>Account</p>
              <p className='color-000 fw_500 mt-4'>Sales</p>
              <p className='color-000 fw_500 mt-4'>Advertising</p>
              <p className='color-000 fw_500 mt-4'>Inventory</p>
              <p className='color-000 fw_500 mt-4'>Entertainment</p>
              <p className='color-000 fw_500 mt-4'>Product</p>
            </div>
            <div className='d-flex gap-5'>
              <div>
                <p className='fw_500 color_grey'>This Month</p>
                <p className='color-000 fw_500 mt-4'>1,194,58</p>
                <p className='color-000 fw_500 mt-4'>6,879.02</p>
                <p className='color-000 fw_500 mt-4'>4,692.46</p>
                <p className='color-000 fw_500 mt-4'>0.00</p>
                <p className='color-000 fw_500 mt-4'>4,652.10</p>
              </div>
              <div>
                <p className='fw_500 color_grey'>YTD</p>
                <p className='color-000 fw_500 mt-4'>11,418.29</p>
                <p className='color-000 fw_500 mt-4'>9,271.36</p>
                <p className='color-000 fw_500 mt-4'>9,768.09</p>
                <p className='color-000 fw_500 mt-4'>0.00</p>
                <p className='color-000 fw_500 mt-4'>2,529.90</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssiduusDahboard
const customStyles = {
  singleValue: (provided, state) => ({
    ...provided,
    color: '#000',
    fontSize: "13px",
    fontWeight: "500"
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: "13px",
    fontWeight: "500",
    ':hover': {
      backgroundColor: '#4fb14f',
      color: "#fff"
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none', // Remove the separator
  }),
  control: (base, state) => ({
    ...base,
    background: "#FFFF",
    borderRadius: "5px",
    width: "100%",
    border: "2px solid #cccccc",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "#a0acc3" : "#e6e6e6",
    },
  }),
};