import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import successToast from "../components/sucess-toast";
import errorToast from "../components/error-toast";
import {
  dashAction,
  dashUpdateAction,
} from "../redux/actions/dashboard-action";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Bar } from "react-chartjs-2";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import LoadingSpinner from "../components/loading-spinner";

const Dashbooard = () => {
  const params = useParams();
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const initialValues = {
    charge: data?.charge_customers ? "yes" : "no",
    category_6: data?.amount?.category_6,
    category_7: data?.amount?.category_7,
    category_8: data?.amount?.category_8,
    category_9: data?.amount?.category_9,
    category_10: data?.amount?.category_10,
  };
  useEffect(() => {
    dispatch(dashAction(params?.id, onSuccess, onError));
  }, [reload]);

  const onSuccess = (data) => {
    setData(data?.data);
    setLoading(false);
    setError(false);
  };
  const onError = (data) => {
    errorToast(data?.ui_err_msg);
    setLoading(false);
    setError(true);
  };
  const onSubmit = (values, { setSubmitting }) => {
    const changedValues = Object.entries(values).reduce(
      (result, [key, value]) => {
        if (initialValues[key] !== value) {
          result[key] = value;
        }
        return result;
      },
      {}
    );
    console.log(changedValues);
    dispatch(
      dashUpdateAction(
        params?.id,
        {
          amount: changedValues,
        },
        onSubmitSuccess,
        onSubmitError
      )
    );
    console.log(values);
  };

  const onSubmitSuccess = (data) => {
    setReload(!reload);
    successToast("Dashboard updated successfully");
  };
  const onSubmitError = (data) => {
    errorToast(data?.ui_err_msg);
  };
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const option = {
    responsive: true,
    plugins: {
      legend: { position: "chartArea", display: false },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        axis: {
          color: "white", // Change the color of the x-axis line to white
        },
        ticks: {
          display: true,
          color: "white",
        },
      },
      y: {
        grid: {
          display: false,
        },
        axis: {
          color: "white",
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div
          style={{ height: "100vh" }}
          className="d-flex justify-content-center "
        >
          <div className="mt-5 main-container" >
            <h1 className="fs_32 fw_600 color_FFFFFF text-center w-100 mb-3 pb-3">
              {data?.name}, {data?.location} on Dhun Jam
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object({
                charge: Yup?.string().required("Required"),
                category_6: Yup.number()
                  .typeError("Custom song request amount must be a number")
                  .test(
                    "is-custom-amount",
                    "Minimum Custom song request amount is 99",
                    function (value) {
                      const chargeValue = this.parent.charge;

                      if (chargeValue === "yes") {
                        console.log(value);
                        return value !== undefined && value >= 99
                          ? true
                          : value === undefined
                          ? this.createError({
                              message:
                                "Custom song request amount is required!",
                            })
                          : false;
                      } else return true;
                    }
                  ),
                category_7: Yup.number()
                  .typeError(" Category 7 request amount must be a number")
                  .test(
                    "is-custom-amount",
                    "Minimum Category 7  request amount is 79",
                    function (value) {
                      const chargeValue = this.parent.charge;

                      if (chargeValue === "yes") {
                        console.log(value);
                        return value !== undefined && value >= 79
                          ? true
                          : value === undefined
                          ? this.createError({
                              message:
                                "Category 7  request amount is required!",
                            })
                          : false;
                      } else return true;
                    }
                  ),
                category_8: Yup.number()
                  .typeError(" Category 8 request amount must be a number")
                  .test(
                    "is-custom-amount",
                    "Minimum Category 8  request amount is 59",
                    function (value) {
                      const chargeValue = this.parent.charge;

                      if (chargeValue === "yes") {
                        console.log(value);
                        return value !== undefined && value >= 59
                          ? true
                          : value === undefined
                          ? this.createError({
                              message:
                                "Category 8  request amount is required!",
                            })
                          : false;
                      } else return true;
                    }
                  ),
                category_9: Yup.number()
                  .typeError(" Category 9 request amount must be a number")
                  .test(
                    "is-custom-amount",
                    "Minimum Category 9 request amount is 39",
                    function (value) {
                      const chargeValue = this.parent.charge;

                      if (chargeValue === "yes") {
                        console.log(value);
                        return value !== undefined && value >= 39
                          ? true
                          : value === undefined
                          ? this.createError({
                              message:
                                "Category 9  request amount is required!",
                            })
                          : false;
                      } else return true;
                    }
                  ),
                category_10: Yup.number()
                  .typeError(" Category 10 request amount must be a number")
                  .test(
                    "is-custom-amount",
                    "Minimum Category 10 request amount is 19",
                    function (value) {
                      const chargeValue = this.parent.charge;

                      if (chargeValue === "yes") {
                        console.log(value);
                        return value !== undefined && value >= 19
                          ? true
                          : value === undefined
                          ? this.createError({
                              message:
                                "Category 10  request amount is required!",
                            })
                          : false;
                      } else return true;
                    }
                  ),
              })}
              onSubmit={onSubmit}
              enableReinitialize={true}
            >
              {({ values, errors, initialValues }) => {
                console.log(values);
                console.log(initialValues);
                console.log(errors);
                const datas = {
                  labels: [
                    "Custom",
                    "Category 7",
                    "Category 8",
                    "Category 9",
                    "Category 10",
                  ],
                  datasets: [
                    {
                      label: "",
                      data: [
                        values?.category_6,
                        values?.category_7,
                        values?.category_8,
                        values?.category_9,
                        values?.category_10,
                      ],
                      backgroundColor: "#f0c3f1",
                      barThickness: 20,
                    },
                  ],
                };
                return (
                  <Form>
                    <div
                      style={{ height: "1rem" }}
                      className="text-danger text-center mb-3"
                    >
                      <ErrorMessage name="category_6" />
                    </div>
                    <div className="row gx-0 align-items-center">
                      <div className="col-6">
                        <p className="color_FFFFFF m-0 p-0">
                          Do you want to charge your customers for requesting
                          songs?
                        </p>
                      </div>
                      <div className="col-6">
                        <div className="d-flex justify-content-center">
                          <div className="color_FFFFFF d-flex align-items-center gap-4">
                            <label className="color_FFFFFF d-flex align-items-center gap-2">
                              <Field type="radio" name="charge" value="yes" />
                              Yes
                            </label>
                            <label className="color_FFFFFF d-flex align-items-center gap-2">
                              <Field type="radio" name="charge" value="no" />
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row gx-0 align-items-center mt-5">
                      <div className="col-6">
                        <p className="color_FFFFFF m-0 p-0">
                          Custom song request amount-
                        </p>
                      </div>
                      <div className="col-6">
                        <div className="d-flex justify-content-center">
                          <Field
                            disabled={values?.charge === "yes" ? false : true}
                            className={`${
                              values?.charge === "no" ? "bg-grey" : "bg_030303"
                            }  border_FFFFFF w-100 rounded-3 py-2 color_FFFFFF input-field ps-2 text-center`}
                            type="number"
                            id="category_6"
                            name="category_6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row gx-0 align-items-center mt-5">
                      <div className="col-6">
                        <p className="color_FFFFFF m-0 p-0 w-75">
                          Regular song request amounts, from high to low-
                        </p>
                      </div>
                      <div className="col-6">
                        <div className="d-flex justify-content-between gap-2">
                          <Field
                            disabled={values?.charge === "yes" ? false : true}
                            className={`${
                              values?.charge === "no" ? "bg-grey" : "bg_030303"
                            }  border_FFFFFF w-100 rounded-3 py-1 color_FFFFFF input-field ps-2 text-center`}
                            type="number"
                            id="category_7"
                            name="category_7"
                          />
                          <Field
                            disabled={values?.charge === "yes" ? false : true}
                            className={`${
                              values?.charge === "no" ? "bg-grey" : "bg_030303"
                            }  border_FFFFFF w-100 rounded-3 py-1 color_FFFFFF input-field ps-2 text-center`}
                            type="number"
                            id="category_8"
                            name="category_8"
                          />
                          <Field
                            disabled={values?.charge === "yes" ? false : true}
                            className={`${
                              values?.charge === "no" ? "bg-grey" : "bg_030303"
                            }  border_FFFFFF w-100 rounded-3 py-1 color_FFFFFF input-field ps-2 text-center`}
                            type="number"
                            id="category_9"
                            name="category_9"
                          />
                          <Field
                            disabled={values?.charge === "yes" ? false : true}
                            className={`${
                              values?.charge === "no" ? "bg-grey" : "bg_030303"
                            }  border_FFFFFF w-100 rounded-3 py-1 color_FFFFFF input-field ps-2 text-center`}
                            type="number"
                            id="category_10"
                            name="category_10"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ height: "1rem" }}
                      className="text-danger text-center my-3"
                    >
                      <ErrorMessage name="category_7" />
                    </div>
                    <div
                      style={{ height: "1rem" }}
                      className="text-danger text-center mb-3"
                    >
                      <ErrorMessage name="category_8" />
                    </div>
                    <div
                      style={{ height: "1rem" }}
                      className="text-danger text-center mb-3"
                    >
                      <ErrorMessage name="category_9" />
                    </div>
                    <div
                      style={{ height: "1rem" }}
                      className="text-danger text-center"
                    >
                      <ErrorMessage name="category_10" />
                    </div>
                    {values?.charge === "yes" && (
                      <div className="w-100 position-relative mt-3">
                        <Bar options={option} data={datas} />
                        <div
                          style={{
                            position: "absolute",
                            left: "0%",
                            top: "20%",
                            fontSize: "30px",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                          }}
                        >
                          ₹
                        </div>
                      </div>
                    )}

                    <button
                      disabled={
                        values?.category_7 >= 79 &&
                        values?.category_8 >= 59 &&
                        values?.category_9 >= 39 &&
                        values?.category_10 >= 19 &&
                        values?.charge === "yes" &&
                        values?.category_6 >= 99
                          ? false
                          : true
                      }
                      className={`w-100 rounded-3 py-2  border-0 fs_16 fw_600 color_FFFFFF mt-5 mb-5 ${
                        values?.category_7 >= 79 &&
                        values?.category_8 >= 59 &&
                        values?.category_9 >= 39 &&
                        values?.category_10 >= 19 &&
                        values?.charge === "yes" &&
                        values?.category_6 >= 99
                          ? "bg_6741D9"
                          : "bg-grey"
                      }`}
                      type="submit"
                    >
                      Save
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashbooard;
