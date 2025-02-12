import { FaGlobe, FaMapMarkerAlt } from "react-icons/fa"


const SightseeingRateListFilter = ({ filterInitial, handleChange, getTransitionReport }) => {
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">Filter Sightseeing Rates</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-md-3">
                                    <p><FaGlobe color="red" /> <strong>Title</strong></p>
                                    <p>Visit</p>
                                </div>
                                <div className="col-md-3">
                                    <p><FaMapMarkerAlt color="red" /> <strong>City</strong></p>
                                    <p>Delhi</p>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3"></div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Form Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={filterInitial?.start_date}
                                        name="start_date"
                                        onChange={handleChange}

                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">To Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={filterInitial?.end_date}
                                        name="start_date"
                                        onChange={handleChange}

                                    />
                                </div>
                                <div className="col-xl-12 text-center">
                                    <button type="button" className="btn btn-primary" onClick={() => getTransitionReport(0)}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SightseeingRateListFilter