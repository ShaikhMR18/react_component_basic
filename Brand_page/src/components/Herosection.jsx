import amazon from "../assets/images/amazon.png";
import shoe from "../assets/images/shoe_image.png";
import flipkart from "../assets/images/flipkart.png";
const Herosection = () => {
  return (
    <>
    <div className="left">
    <h1>YOUR FEET DESERVE THE BEST</h1>
    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
    <div className="btn-section">
      <button className="btn">Shop Now</button>
      <button className=" btn-secondary">Category</button>
    </div>
   
    <div className="brand-icon">
    <p>Also Available On</p>
    <img src={amazon} alt="amazon" />
    <img src={flipkart} alt="flipkart" />
    </div>
  </div>
  <div className="right">
   <img src={shoe} alt="" />
  </div>
  </>
  )
}

export default Herosection