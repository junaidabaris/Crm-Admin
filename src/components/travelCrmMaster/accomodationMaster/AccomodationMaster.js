import { Pagination, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import AccomodationMasterFilter from "./accomodationMasterFilter/AccomodationMasterFilter";
import { deleteTRCRMaccomodation, getTRCRMaccomodation } from "../../../api/login/Login";
import { baseUrlImage } from "../../../baseUrl";


const AccomodationMaster = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Master",
        title_2: 'Travel Accomodation Master',
        path_2: ``
    };
    const params = useParams()
    // console.log(params);

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };

    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    // console.log(page);
    const [totalCount, setTotalCount] = useState(null)
    const [data, setData] = useState(null)
    const [allData, setAllData] = useState(null)
    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',
        end_date: getCurrentDate(),
        start_date: getCurrentDate(),
        // sortType: '',
        // sortType: ''
    })

    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const getTransitionReport = async (input) => {
        // console.log('iojijip');
        setLoading(true)
        const clone = { ...filterInitial, count: count, page: input, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await getTRCRMaccomodation(clone)
            setTotalCount(res?.totalCount)
            setData(res?.data)
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        // console.log(e - 1);
        setPage(e - 1)
        getTransitionReport(e - 1)
    };

    const toastSuccessMessage = (message) => {
        toast.success(`Delete Success`, {
            position: "top-right",
        });
    };

    const confirm = (id) => {
        // console.log('setMental');
        deleteData(id)

    }

    const deleteData = async (id) => {
        try {
            const res = await deleteTRCRMaccomodation(id)
            // console.log(res);
            if (res?.error == false) {
                toastSuccessMessage()
                getTransitionReport(0)
            } else {
                alert(res?.message)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        getTransitionReport(0)
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AccomodationMasterFilter filterInitial={filterInitial} handleChange={handleChange} getTransitionReport={getTransitionReport} />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Travel Accomodation Master
                                        </h4>
                                        <Link to='/travel-accomodation-add' className="btn btn-primary">Add Accomodation Master</Link>
                                    </div>
                                    <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="banner-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>
                                        <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>S.No</th>
                                                    <th style={{ width: '150px' }}>Package</th>
                                                    <th style={{ width: '150px' }}>Price Category</th>
                                                    <th style={{ width: '150px' }}>Passenger Type</th>
                                                    <th style={{ width: '150px' }}>Rating</th>

                                                    <th style={{ width: '150px' }}>Room Category</th>
                                                    <th style={{ width: '150px' }}>Base Price</th>
                                                    <th style={{ width: '150px' }}>Tax</th>
                                                    <th style={{ width: '150px' }}>Total</th>
                                                    <th style={{ width: '150px' }}>TCS</th>
                                                    <th style={{ width: '150px' }}>Description</th>
                                                    <th style={{ width: '150px' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data?.map((item, i) => {
                                                    return <tr role="row" key={item?._id}>
                                                        <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.package_id?.package}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.price_category?.name}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.passenger_type}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.rating}</td>


                                                        <td valign="top" className="dataTables_empty" >{item?.room_category?.category_name}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.base_price}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.tax}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.total}</td>

                                                        <td valign="top" className="dataTables_empty" >{item?.tcs}</td>
                                                        <td valign="top" className="dataTables_empty" >
                                                            {item?.description?.map((descItem) => (
                                                                <div key={descItem?._id}>
                                                                    <p>{descItem?.title}</p>
                                                                    {descItem?.images?.map((image, index) => (
                                                                        <span key={index}>
                                                                            <img
                                                                                src={`${baseUrlImage}${image}`}
                                                                                alt={`Image ${index + 1}`}
                                                                                style={{ maxWidth: "100px", margin: "5px" }}
                                                                            />
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            ))}
                                                        </td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link to={`/travel-accomodation-update/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                    <i className="fa fa-pencil" />
                                                                </Link>
                                                                <Popconfirm
                                                                    title="Delete Accomodation List!"
                                                                    description="Are you sure to delete?"
                                                                    onConfirm={() => confirm(item?._id)}
                                                                    // onCancel={cancel}
                                                                    okText="Yes"
                                                                    cancelText="No"
                                                                >
                                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                        <i className="fa fa-trash" />
                                                                    </Link>
                                                                </Popconfirm>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                })}

                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total {totalCount} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Pagination
                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default AccomodationMaster