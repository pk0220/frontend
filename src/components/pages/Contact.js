// import "./Aboutus.css"
const Contact = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle aboutusback py-5">
            <h1 className="my-5 py-5">Contact</h1>
            <div className=" container bg-white py-5 back ">

                <div class="row my-5 py-3">
                    <div class="col">
                        <strong className="fs-4">Name:</strong><br/>
                        <strong>Bank E-Auction</strong>
                    </div>
                    <div class="col">
                        <strong className="fs-4">Email:</strong><br/>
                        <strong>bankauction97@gmail.com</strong>
                    </div>
                </div>
                <div class="row my-5 py-3">
                    <div class="col">
                        <strong className="fs-4">Phone:</strong><br/>
                        <strong>+91 5522800000</strong>
                    </div>
                    <div class="col">
                        <strong className="fs-4">Linkdin:</strong><br/>
                        <strong>dailyNeeds</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;
