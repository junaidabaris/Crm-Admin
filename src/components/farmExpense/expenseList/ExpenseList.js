import { Pagination } from "antd"
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import { Link, useParams } from "react-router-dom"


function ExpenseList({ style }) {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Farm Expense",
        title_2: 'Expense List',
        path_2: ""
    };
    const params = useParams()
    return (
        <>
            {style && <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />}
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    Expense List
                                </h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to={`/customer-view/${params.id}/expense-add`} role="button" aria-controls="offcanvasExample">+ Add New</Link>
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                <div className="dt-buttons">
                                    <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                        <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                    </button>
                                </div>
                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '150px' }}>#</th>
                                            <th style={{ width: '150px' }}>Date</th>
                                            <th style={{ width: '150px' }}>Purpose Name</th>
                                            <th style={{ width: '150px' }}>Details</th>
                                            <th style={{ width: '150px' }}>Total Amount</th>
                                            <th style={{ width: '150px' }}>Added By</th>
                                            <th style={{ width: '150px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr role="row" className="odd" >
                                            <td>1	</td>
                                            <td>Jul 26, 2024</td>

                                            <td>	Paper</td>
                                            <td>tea</td>
                                            <td>Rs.200.00</td>
                                            <td>Artur (Super Admin)</td>


                                            <td>
                                                <div className="d-flex">
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <i className="fa fa-pencil" />
                                                    </Link>
                                                    {/* <Link to={`/sale-invoice-cow`} className="btn btn-primary shadow btn-xs sharp me-1" >
                                                        <FcViewDetails />
                                                    </Link>
                                                    <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => setModalShow(true)}>
                                                        <IoEyeSharp />
                                                    </Link> */}
                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                        <i className="fa fa-trash" />
                                                    </Link>
                                                    {/* <Popconfirm
                                                        title="Delete Blog Category"
                                                        description="Are you sure to delete?"
                                                        onConfirm={() => confirm(item?.blog_id)}
                                                        onCancel={cancel}
                                                        okText="Yes"
                                                        cancelText="No"
                                                    >
                                                        <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                            <i className="fa fa-trash" />
                                                        </Link>
                                                    </Popconfirm> */}
                                                </div>
                                            </td>

                                            {/* <td>{item?.description}</td>
                                                    <td>
                                                        <img style={{ width: "100px" }} src={`${baseUrlImage}${item?.attachment}`} alt="Meta" />
                                                    </td>
                                                    <td>
                                                        <img style={{ width: "100px" }} src={`${baseUrlImage}${item?.meta_image}`} alt="Meta" />
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`/edit-blog/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                <i className="fa fa-pencil" />
                                                            </Link>
                                                            <Popconfirm
                                                                title="Delete Blog Category"
                                                                description="Are you sure to delete?"
                                                                onConfirm={() => confirm(item?.blog_id)}
                                                                onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                    <i className="fa fa-trash" />
                                                                </Link>
                                                            </Popconfirm>
                                                        </div>
                                                    </td> */}
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    Total 0 entries
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                        defaultCurrent={1}
                                    // onChange={onChangeVal}
                                    // total={data?.totalCount}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <SaleListView
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
        </>
    )
}
export default ExpenseList