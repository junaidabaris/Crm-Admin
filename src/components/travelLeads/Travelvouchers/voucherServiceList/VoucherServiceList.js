import { Pagination, Popconfirm } from "antd"
import { useEffect, useState } from "react"
import { CiMail } from "react-icons/ci"
import { TiDownload, TiTick } from "react-icons/ti"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"


const VoucherServiceList = () => {
    const [modalShow, setModalShow] = useState(false);

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
        // const clone = { ...filterInitial, count: count, page: input, user_id: window.localStorage.getItem('userIdToken') }
        // try {
        //     const res = await getTRCRM_tr_lead(clone)
        //     setTotalCount(res?.totalCount)
        //     setData(res?.data)
        // } catch (error) {

        // }
        // setLoading(false)
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
            // const res = await deleteTRCRM_tr_lead(id)
            // // console.log(res);
            // if (res?.error == false) {
            //     toastSuccessMessage()
            //     getTransitionReport(0)
            // } else {
            //     alert(res?.message)
            // }
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
            <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                <div className="dt-buttons">
                    <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="banner-tblwrapper" type="button">
                        <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                    </button>
                </div>
                <table id="banner-tblwrapper" className="table dataTable no-footer exppdf" role="grid" aria-describedby="banner-tblwrapper_info">
                    <thead>
                        <tr role="row">
                            <th style={{ width: '50px' }}>S.No</th>
                            <th style={{ width: '150px' }}>Voucher Number</th>
                            <th style={{ width: '150px' }}>Travel Date</th>
                            <th style={{ width: '150px' }}>Adults</th>
                            <th style={{ width: '150px' }}>Child</th>
                            <th style={{ width: '150px' }}>Infant</th>
                            <th style={{ width: '150px' }}>Create Date</th>
                            <th style={{ width: '150px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr role="row" >
                            <td className="text-center" colSpan={7}>No data available in table</td>
                            <td>
                                <div className="d-flex">
                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                        <TiTick style={{ marginBottom: '8px' }} />
                                    </Link>
                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                        <TiDownload style={{ marginBottom: '8px' }} />
                                    </Link>
                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                        <i className="fa fa-pencil" />
                                    </Link>
                                    <Popconfirm
                                        title="Delete cow feed!"
                                        description="Are you sure to delete?"
                                        // onConfirm={() => confirm(item?._id)}
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
                    </tbody>
                </table>

                <div className="dataTables_info" role="status" aria-live="polite">
                    Total 0 entries
                </div>
                <div className="dataTables_paginate paging_simple_numbers">
                    <Pagination
                        defaultCurrent={1}
                    // onChange={onChangeVal}
                    // total={totalCount}
                    />
                </div>
            </div>
        </>
    )
}

export default VoucherServiceList