
import { useEffect, useMemo, useRef, useState } from "react";

import JoditEditor from "jodit-react";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { useParams } from "react-router-dom";
import { addTravelRoomType, getAirlLine, getByIdTRCRM_tr_lead, getTravelAllCountry, getTRCRM_hotel_type_master, TTRCRM_tr_travellerGet } from "../../../../../api/login/Login";
import { toast } from "react-toastify";

const AddServiceVoucher = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel Leads",
        title_2: 'Create Service Voucher',
        path_2: ``
    };

    const params = useParams()

    const editor = useRef(null);
    const [content, setContent] = useState('');

    const [initialData, setInitialData] = useState({
        lead_id: '',
        traveller_name: '',
        country: '',
        voucher_number: '',
        co_passanger: [],
        adult: '',
        child: '',
        infant: '',
        travel_date: '',
        travel_end_date: '',
        book_confirm_date: '',
        vehicle_type: '',
        vehicle_number: '',
        hotel_confirmation: '',
        driver_number: '',
        type_Of_Service: '',
        from_City: '',
        to_City: '',
        arrival_flight: '',
        departure_flight: '',
        emergency_contact: '',
        remarks: '',
        services: '',
        hotel: '',
        itinerary: '',
        terms_condition: '',
        others: '',
    })

    const changeHandle = (e) => {
        const { name, value, type, checked } = e.target;
        setInitialData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    const handleSelectChange = (value, field) => {
        setInitialData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleEditorChange = (field, value) => {
        setInitialData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };



    const [leadIdData, setLeadIdData] = useState(null)
    // console.log(leadIdData);
    const leadIdGet = async () => {
        try {
            const res = await getByIdTRCRM_tr_lead(params?.id)
            // console.log(res);
            setLeadIdData(res?.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        leadIdGet()
    }, [params?.id])

    const [countryData, setCountryData] = useState([])
    const [coPassanger, setCoPassanger] = useState([])
    const [roomType, setroomType] = useState([])
    const [hotelData, setHotelData] = useState([])
    // console.log(coPassanger);

    const getAllCountryListData = async () => {
        try {
            const res = await getTravelAllCountry();
            setCountryData(res?.data)
            const res2 = await TTRCRM_tr_travellerGet()
            setCoPassanger(res2?.data)
            const res3 = await addTravelRoomType()
            setroomType(res3?.data)
            const res4 = await getTRCRM_hotel_type_master()
            setHotelData(res4?.data)
        } catch (error) {

        }
    };
    const [locations, setLocations] = useState([]);
    const searchAirlLine = async () => {
        try {
            const res = await getAirlLine()
            setLocations(res?.data);
        } catch (error) {

        }
    }


    // const config = useMemo(() => ({
    //     readonly: false, // All settings to be defined here
    //     placeholder: 'Start typing...'
    // }), []);

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? `${message}` : `${message}`}`, {
            position: "top-right",
        });
    };

    const toastErroeMessage = (message) => {
        toast.error(`${message}`, {
            position: "top-right",
        });
    };


    const submitData = async () => {
        const clone = { ...initialData, lead_id: params?.id }
        // console.log(clone);
        try {
            // const res = await 
        } catch (error) {

        }
    }


    // useEffect(() => {
    //     const getIdData = async () => {
    //         try {
    //             const res = await getIdTRCRM_tr_quotation_master(editData._id)
    //             console.log(res);
    //             // setInitialState(res?.data)
    //             setInitialData(res?.data)
    //             setRows(res?.data?.cities)
    //             setRowsHotelInfo(res?.data?.options)
    //             setRowsItinerary(res?.data?.days)
    //             setImage(res.data?.attach_file)
    //         } catch (error) {

    //         }
    //     }
    //     if (editData && editData._id) {
    //         getIdData();
    //     }
    // }, [editData])

    useEffect(() => {
        getAllCountryListData()
        searchAirlLine()
    }, [])

    useEffect(() => {
        if (leadIdData) {
            const fullName = [leadIdData.first_name, leadIdData.last_name]
                .filter(Boolean)
                .join(' ');
            setInitialData((prevData) => ({
                ...prevData,
                traveller_name: fullName,
            }));
        }
    }, [leadIdData]);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Create Service Voucher</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                                        <p>{leadIdData?.first_name} {leadIdData?.last_name}</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                                        <p>{leadIdData?.mobile_number}</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Assigned User</label>
                                        <p>{leadIdData?.assigned_to?.name}</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Present User</label>
                                        <p>{leadIdData?.first_name}</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Traveller Name</label>
                                        <input type="text" className="form-control" disabled value={initialData.traveller_name} />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Voucher Number</label>
                                        <input type="text" className="form-control" placeholder="Enter Voucher Number" name="voucher_number" value={initialData?.voucher_number} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Adults</label>
                                        <input type="number" className="form-control" placeholder="Enter Adults" name="adult" value={initialData?.adult} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Child </label>
                                        <input type="text" className="form-control" placeholder="Enter Child " name="child" value={initialData?.child} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Infant</label>
                                        <input type="text" className="form-control" placeholder="Enter Infant" name="infant" value={initialData?.infant} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Co Passanger</label>
                                        <input type="text" className="form-control" placeholder="Enter Co Passanger" name="co_passanger" value={initialData?.co_passanger} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Travel Date </label>
                                        <input type="date" className="form-control" name="travel_date" value={initialData?.travel_date} onChange={changeHandle} />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">End Date</label>
                                        <input type="text" className="form-control" placeholder="Enter Co Passanger" name="end_date" value={initialData?.end_date} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Booking Confirmed Date</label>
                                        <input type="date" className="form-control" placeholder="Enter Booking Confirmed By" name="book_confirm_date" value={initialData?.book_confirm_date} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Vehicle Type</label>
                                        <input type="text" className="form-control" placeholder="Enter Vehicle Type" name="vehicle_type" value={initialData?.vehicle_type} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Vehicle Number</label>
                                        <input type="number" className="form-control" placeholder="Enter Vehicle Number" name="vehicle_number" value={initialData?.vehicle_number} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Hotal Confirmation</label>
                                        <input type="text" className="form-control" placeholder="Enter Hotal Confirmation" name="hotal_Confirmation" value={initialData?.hotal_Confirmation} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Driver Number</label>
                                        <input type="text" className="form-control" placeholder="Enter Driver Number" name="driver_number" value={initialData?.driver_number} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Type Of Service</label>
                                        <input type="text" className="form-control" placeholder="Enter Type Of Service" name="type_Of_Service" value={initialData?.type_Of_Service} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">From City</label>
                                        <input type="text" className="form-control" placeholder="Enter From City" name="from_City" value={initialData?.from_City} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">To City</label>
                                        <input type="text" className="form-control" placeholder="Enter To City" name="to_City" value={initialData?.to_City} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Arrival Flight</label>
                                        <input type="text" className="form-control" placeholder="Enter Arrival Flight" name="arrival_Flight" value={initialData?.arrival_Flight} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Departure Flight</label>
                                        <input type="text" className="form-control" placeholder="Enter Departure Flight" name="departure_Flight" value={initialData?.departure_Flight} onChange={changeHandle} />
                                    </div>

                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Emergency Contact</label>
                                        <input type="text" className="form-control" placeholder="Enter Extra Bed" name="emergency_Contact" value={initialData?.emergency_Contact} onChange={changeHandle} />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Remarks</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" name="remarks" value={initialData?.remarks} onChange={changeHandle}></textarea>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Services</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={initialData.services}
                                            config={{ readonly: false }}
                                            tabIndex={1}
                                            onBlur={(newContent) => handleEditorChange('services', newContent)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Hotel</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={initialData.hotel}
                                            config={{ readonly: false }}
                                            tabIndex={1}
                                            onBlur={(newContent) => handleEditorChange('hotel', newContent)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Itinerary</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={initialData.itinerary}
                                            config={{ readonly: false }}
                                            tabIndex={1}
                                            onBlur={(newContent) => handleEditorChange('itinerary', newContent)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Terms And Condition</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={initialData.terms_condition}
                                            config={{ readonly: false }}
                                            tabIndex={1}
                                            onBlur={(newContent) => handleEditorChange('terms_condition', newContent)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Other</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={initialData.others}
                                            config={{ readonly: false }}
                                            tabIndex={1}
                                            onBlur={(newContent) => handleEditorChange('others', newContent)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary" onClick={submitData}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddServiceVoucher