import React from "react";
import heroImg from "../assets/images/L2.png";
import heroImg02 from "../assets/images/L1.jpg";
import heroImg03 from "../assets/images/L6.png";
import icon01 from "../assets/images/L10.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/L11.jpg";
import faqImg from "../assets/images/L4.jpg";
import featureImg from "../assets/images/L11.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../Components/About/About";
import ServiceList from "../Components/Services/ServiceList";
import DoctorList from "../Components/Doctor/DoctorList";
import FaqList from "../Components/Faq/FaqList";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* ========================HERO SECTION============================= */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ======================HERO CONTENT================== */}

            <div>
              <div className="lg:w-[570px]">
                <h2 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Made with real veggies.
                </h2>
                <p className="text_para" style={{marginTop:"20px"}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  laboriosam numquam. Rerum tempora animi iusto, voluptatem vel
                  qui dolore! Deleniti maiores mollitia soluta quia quos!
                  Assumenda quasi deserunt ipsa quae!
                </p>
              </div>

              {/* ===================HERO COUNTER====================== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    20+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                  <p className="text_para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    250+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p className="text_para">Country Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p className="text_para">Customer Satisfaction</p>
                </div>
              </div>
            </div>

            {/* ======================HERO CONTENT======================= */}
            <div className="flex gap-[30px] justify end">
              <div>
                <img
                  className="w-full"
                  src={heroImg}
                  alt=""
                  style={{ borderRadius: "18px" }}
                />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" style={{ borderRadius: "18px" }} />
                <img className="w-full" src={heroImg03} alt="" style={{ borderRadius: "18px", width: "270px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================HERO SECTION END============================= */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best Chips in the World
            </h2>
            <p className="text__para text-center">
              World class chips for everyone. Our Products offers delicious,
              snacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" style={{ borderRadius: "18px" }} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Lay's Dips
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World class Dips for everyone. Our Products offers delicious,
              Dips.
                </p>
                <Link
                  to="/"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World class Dips for everyone. Our Products offers delicious,
              Dips.
                </p>
                <Link
                  to="/"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" style={{ borderRadius: "18px", height:"148px" }} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Recipes
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                LAY’S® Flamin’ Hot® Spicy Chicken Sandwich Recipes
                </p>
                <Link
                  to="/"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================About section Start================================== */}
      {/* ===========================About section Start================================== */}

      <About />
      {/* ==========================Features Section START===================== */}

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ======================FEATURE CONTENT======================== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Recepies <br />
                anytime.
              </h2>

              <ul className="pl-4">
                <li className="text__para">
                  1. 1lb.thinly sliced chicken breast
                </li>
                <li className="text__para">
                  2. 2egges +  2 tbsp water.
                </li>
                <li className="text__para">
                  3. 1 cup flour
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img
                src={featureImg}
                className="w-3/4"
                alt=""
                style={{
                  width: "470px",
                  height: "440px",
                  borderRadius: "18px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* ==========================Features Section END===================== */}

      {/* ==================================DOCTORS SECTION============================== */}
      <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great Products</h2>
            <p className="text__para text-center">
            World class chips for everyone. Our Products offers delicious,
              snacks.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* ==========================Doctors Section END===================== */}

       {/* ==========================FAQ Section===================== */}
       <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt='' style={{height : "400px", borderRadius : "35px"}} />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most questions by our beloved patients</h2>
              <FaqList />
            </div>
          </div>
        </div>

       </section>
        {/* ==========================FAQ Section END===================== */}

        {/* ==========================TESTIMONIAL Section START===================== */}

        {/* ==========================TESTIMONIAL Section END===================== */}
    </>
  );
};

export default Home;
