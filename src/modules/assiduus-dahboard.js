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
  const data = [
    { x: 1, value: 10 },
    { x: 2, value: 20 },
    { x: 3, value: 15 },
    { x: 4, value: 30 },
    // Add more data points for subsequent x values as needed
  ];

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
            <button onClick={() => setShow(true)} style={{ backgroundColor: "4fb14f20" }} className='primar-color border-0 rounded-1 py-1 px-3'>
              New sales invoice
            </button>
          </div>
          <hr className='mt-1 horizontal-line w-100' />
          <BarGraph2 />
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
    </div>
  )
}

export default AssiduusDahboard
const customStyles = {
  // Style the dropdown container
  // menu: (provided, state) => ({
  //   ...provided,
  // backgroundColor: '#f0f0f0',
  // border: '1px solid #ccc',
  // }),

  // Style the selected option
  singleValue: (provided, state) => ({
    ...provided,
    color: '#000',
    fontSize: "13px",
    fontWeight: "500"
  }),

  // Style the options in the dropdown
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

  // control: (baseStyles, state) => ({
  //   ...baseStyles,
  //   // borderColor: state.isFocused ? 'green' : 'hsla(0, 0%, 44%, 0.65)',
  //   outline: 'none', // Remove the blue border

  // }),
  control: (base, state) => ({
    ...base,
    background: "#FFFF",
    // match with the menu
    borderRadius: "5px",
    width: "100%",
    // Overwrittes the different states of border
    // borderColor: state.isFocused ? "blue" : "#e6e6e6",
    border: "2px solid #cccccc",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "#a0acc3" : "#e6e6e6",
    },
  }),




};