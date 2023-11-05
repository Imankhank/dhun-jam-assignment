import React, { useState } from 'react'
import Select from 'react-select';
import { allmonths, chaeckingAccountOptions, monthOptions } from '../components/data';
import LineGraph from '../components/graphs/linegraph';
import SineWaveGraph from '../components/graphs/linegraph';
import RandomSineWave from '../components/graphs/linegraph';
import RandomSineWaveD3 from '../components/graphs/linegraph';
import KernelDensityEstimation from '../components/graphs/linegraph';


const AssiduusDahboard = () => {
  const [selectedOption, setSelectedOption] = useState({
    "label": "Manage",
    "value": "manage"
  });
  const [selectedMonth, setSelectedMonth] = useState({ value: 'january', label: 'January' },
  );

  const data = [
    { x: 1, value: 10 },
    { x: 2, value: 20 },
    { x: 3, value: 15 },
    { x: 4, value: 30 },
    // Add more data points for subsequent x values as needed
  ];

  return (
    <div className='row'>
      <div className='col-lg-6'>
        <div className='first-card w-100 bg-fff rounded-2'>
          <div className='d-flex flex-sm-row flex-column gap-sm-0 gap-2 justify-content-between align-items-center p-2'>
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
      </div>
      <div className='col-lg-6'>

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