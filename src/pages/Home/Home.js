import React from 'react';
import slider1 from '../../img/slider1.jpeg'
import slider2 from '../../img/slider2.jpeg'
import slider3 from '../../img/slider3.jpeg'
import offer1 from '../../img/offer1.jpeg'
import offer2 from '../../img/offer2.jpeg'
import offer3 from '../../img/offer3.jpeg'
import cardImg from '../../img/cardImg.png'
import About from '../../About/About';

const Home = () => {
    return (
        <>
            <section class="page_slider pt-5">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" style={{ height: '500px' }} src={slider1} alt="First slide" />
                        </div>
                        {/* <div class="carousel-item">
                <img class="d-block w-100" style={{ height: '500px' }} src={slider2} alt="Second slide" />
              </div> */}
                        <div class="carousel-item">
                            <img class="d-block w-100" style={{ height: '500px' }} src={slider3} alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                {/* <!-- eof flexslider --> */}
            </section>
            <section class="silder-bottom"></section>




            <section class="c-mb-20 s-pt-20 s-pb-0 s-pt-xl-20" style={{ backgroundColor: "#fff" }}>
                <div class="container">

                    <div class="row">

                        <div class="col-12 d-flex">

                            <div class="row d-flex">
                                <div class="col-lg-3 col-sm-6 col-xs-6">
                                    <div class="module-box">
                                        <div class="icon-styled round">
                                            {/* <!--<img src="img/mobile.png" />--> */}
                                            <a href="#/bn/voice/payment-recharge/online-recharge-purchase" target="_blank">
                                                {/* <img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/1/bondho-sim.svg" /> */}
                                                <i style={{ padding: "24px 8px", width: "60px", marginRight: "10px", height: "60px", color: "#660000" }} class="fas fa-money-check"></i> নিউজ ওয়েবসাইট
                                            </a>
                                        </div>
                                        {/* <!--<div class="media-body">
                      </div>--> */}
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-xs-6">
                                    <div class="module-box">

                                        <div class="icon-styled round">
                                            <a href="#/bn/offer/special-offer/closed-sim-offer-2019"><i style={{ padding: "24px 8px", width: "60px", marginRight: "10px", height: "60px", color: "#660000" }} class="fas fa-sim-card"></i>কুরিয়ার সফটওয়্যার
                                            </a>
                                        </div>
                                        {/* <!--<div class="media-body">
                        <a href="#"><h6 class="">
                          Bondho Sim Offer
                        </h6></a>
                      </div>--> */}
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-xs-6">
                                    <div class="module-box">
                                        <div class="icon-styled round">
                                            {/* <!--											<img src="img/sim.png" />--> */}
                                            <a href="#/bn/Internet-offers">
                                                <i style={{ padding: "24px 8px", width: "60px", marginRight: "10px", height: "60px", color: "#660000" }} class="fas fa-globe"></i> স্কুল সফটওয়্যার
                                            </a>
                                        </div>
                                        {/* <!--<div class="media-body">
                        <a href="#"><h6 class="">
                          Internet Pack
                        </h6></a>
                      </div>--> */}
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-xs-6">
                                    <div class="module-box">
                                        <div class="icon-styled round">
                                            <a href="#/bn/offer"><i style={{ padding: "24px 8px", width: "60px", marginRight: "10px", height: "60px", color: "#660000" }} class="fas fa-gifts"></i> ই-কমার্স ওয়েবসাইট</a>
                                        </div>
                                        {/* <!--<div class="media-body">
                        <a href="#"><h6 class="">My Offer</h6></a>
                      </div>--> */}
                                    </div>
                                </div>

                                {/* <!---------------New Links---------------> */}
                                <div class="col-lg-3 col-sm-6 col-xs-6">
                                    <div class="module-box">
                                        <div class="icon-styled round">
                                            {/* <!--<a href="#/bn/offer/combo-package"><img--> */}
                                            <a href="#/bn/offer"><i style={{ padding: "24px 8px", width: "60px", marginRight: "10px", height: "60px", color: "#660000" }} class="fas fa-percentage"></i> হোস্টিং প্যাকেজ</a>
                                        </div>
                                        {/* <!--<div class="media-body">
                            <a href="#"><h6 class="">My Offer</h6></a>
                          </div>--> */}
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-xs-6">
                                    <div class="module-box">
                                        <div class="icon-styled round">
                                            {/* <!--<a href="#/bn/offer/minute-bundle-offers/minute-bundle"><img--> */}
                                            <a href="#/bn/offer?type=minute"><i style={{ padding: "24px 8px", width: "60px", marginRight: "10px", height: "60px", color: "#660000" }} class="far fa-clock"></i> হসপিটাল সফটওয়্যার</a>
                                        </div>
                                        {/* <!--<div class="media-body">
                              <a href="#"><h6 class="">My Offer</h6></a>
                            </div>--> */}
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-xs-6">
                                    <div class="module-box">
                                        <div class="icon-styled round">
                                            {/* <!--<a href="#/bn/offer/sms-bundle-offer"><img--> */}
                                            <a href="#/bn/offer?type=sms"><i style={{ padding: "24px 8px", width: "60px", marginRight: "10px", height: "60px", color: "#660000" }} class="fas fa-comments"></i> মার্কেটিং প্যাকেজ</a>
                                        </div>
                                        {/* <!--<div class="media-body">
                                <a href="#"><h6 class="">My Offer</h6></a>
                              </div>--> */}
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-xs-6">
                                    <div class="module-box">
                                        <div class="icon-styled round">
                                            <a href="#/bn/offer/special-offer/emergency-balance"><i style={{ padding: "24px 8px", width: "60px", marginRight: "10px", height: "60px", color: "#660000" }} class="far fa-building"></i> ব্যবসায়িক সল্যুশন</a>
                                        </div>
                                        {/* <!--<div class="media-body">
                              <a href="#"><h6 class="">My Offer</h6></a>
                            </div>--> */}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>


            {/* <!-- mostafiz --> */}


            <section class="latest-offer ls s-pt-60 s-pt-md-80 s-pt-xl-150 s-pb-30 s-pb-md-50 s-pb-xl-120 c-mb-30 service-isotope">
                <div class="col-md-12 text-center">

                    <h4 class="text-center popular-heading" style={{ marginTop: "0px" }}>
                        {/* <!--<img src="images/new.png" alt="" />--> */}
                        <span> নতুন অফার</span>
                    </h4>
                    <div class="divider-30 divider-sm-30"></div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="vertical-item text-center pricing-plan box-shadow color_style1 popular-item">
                                <div class="item-media">
                                    <img src={offer1} alt="১৪ টাকায় ২৩ মিনিট" />
                                    <div class="media-links">
                                        <a class="abs-link" title="" href="#"></a>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <h6 class="service-title">
                                        <a href="#">সাধ্যেরমধ্যে ব্যবসায়িক ওয়েবসাইট</a>
                                    </h6>
                                </div>
                                <div class="plan-button">
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="4" data-target="#offers_model">ক্রয় করুন</a>
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="4" data-target="#offers_model">বিস্তারিত</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="vertical-item text-center pricing-plan box-shadow color_style1 popular-item">
                                <div class="item-media">
                                    <img src={offer2} alt="১৪৩ মিনিট মাত্র ৮৬ টাকায়" />
                                    <div class="media-links">
                                        <a class="abs-link" title="" href="#"></a>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <h6 class="service-title">
                                        <a href="#">স্কুল ম্যানেজমেন্ট সফটওয়্যার</a>
                                    </h6>
                                </div>
                                <div class="plan-button">
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="5" data-target="#offers_model">ক্রয় করুন</a>
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="5" data-target="#offers_model">বিস্তারিত</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="vertical-item text-center pricing-plan box-shadow color_style1 popular-item">
                                <div class="item-media">
                                    <img src={offer3} alt="২৫ মিনিট, ১০ টি এসএমএস,  ১ জিবি ডেটা মাত্র ৩৩ টাকায়" />
                                    <div class="media-links">
                                        <a class="abs-link" title="" href="#"></a>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <h6 class="service-title">
                                        <a href="#">ব্যবসা-প্রতিষ্ঠান ওয়েবসাইট</a>
                                    </h6>
                                </div>
                                <div class="plan-button">
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="6" data-target="#offers_model">ক্রয় করুন</a>
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="6" data-target="#offers_model">বিস্তারিত</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="vertical-item text-center pricing-plan box-shadow color_style1 popular-item">
                                <div class="item-media">
                                    <img src={offer1} alt="১৪ টাকায় ২৩ মিনিট" />
                                    <div class="media-links">
                                        <a class="abs-link" title="" href="#"></a>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <h6 class="service-title">
                                        <a href="#">সাধ্যেরমধ্যে ব্যবসায়িক ওয়েবসাইট</a>
                                    </h6>
                                </div>
                                <div class="plan-button">
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="4" data-target="#offers_model">ক্রয় করুন</a>
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="4" data-target="#offers_model">বিস্তারিত</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="vertical-item text-center pricing-plan box-shadow color_style1 popular-item">
                                <div class="item-media">
                                    <img src={offer2} alt="১৪৩ মিনিট মাত্র ৮৬ টাকায়" />
                                    <div class="media-links">
                                        <a class="abs-link" title="" href="#"></a>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <h6 class="service-title">
                                        <a href="#">স্কুল ম্যানেজমেন্ট সফটওয়্যার</a>
                                    </h6>
                                </div>
                                <div class="plan-button">
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="5" data-target="#offers_model">ক্রয় করুন</a>
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="5" data-target="#offers_model">বিস্তারিত</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="vertical-item text-center pricing-plan box-shadow color_style1 popular-item">
                                <div class="item-media">
                                    <img src={offer3} alt="২৫ মিনিট, ১০ টি এসএমএস,  ১ জিবি ডেটা মাত্র ৩৩ টাকায়" />
                                    <div class="media-links">
                                        <a class="abs-link" title="" href="#"></a>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <h6 class="service-title">
                                        <a href="#">ব্যবসা-প্রতিষ্ঠান ওয়েবসাইট</a>
                                    </h6>
                                </div>
                                <div class="plan-button">
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="6" data-target="#offers_model">ক্রয় করুন</a>
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="6" data-target="#offers_model">বিস্তারিত</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 text-center viewmore-btn">
                    <a class="btn btn-outline-secondary" href="https://www.teletalk.com.bd/bn/offers">আরও অফার দেখুন</a>
                </div>
            </section>

            <section class="pack-popular s-pt-50 s-pt-md-70 s-pt-xl-141 s-pb-60 s-pb-md-80 s-pb-xl-150 ls ms">
                <div class="col-md-12 text-center">
                    <h4 class="text-center popular-heading">
                        {/* <!--<img src="images/new.png" alt="" />--> */}
                        <span> আমাদের প্যাকেজ</span>
                    </h4>
                    <div class="divider-30 divider-sm-30"></div>
                </div>


                <section class="plan">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col-md-4 pt-3">
                                <div class="card custom-card">
                                    <div class="box-one">
                                        <h4>PLAN-01</h4>
                                        <h2>৳ 5,000</h2>
                                        <ul>
                                            <li style={{ fontSize: '15px', background: "rgb(255, 227, 227 " }}>.com Domain</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>2 GB SSD Hossting</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>Readymade Website</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>Werdpress theme</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 pt-3">
                                <div class="card custom-card">
                                    <div class="box-one">
                                        <h4>PLAN-01</h4>
                                        <h2>৳ 5,000</h2>
                                        <ul>
                                            <li style={{ fontSize: '15px', background: "rgb(255, 227, 227 " }}>.com Domain</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>2 GB SSD Hossting</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>Readymade Website</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>Werdpress theme</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 pt-3">
                                <div class="card custom-card">
                                    <div class="box-one">
                                        <h4>PLAN-01</h4>
                                        <h2>৳ 5,000</h2>
                                        <ul>
                                            <li style={{ fontSize: '15px', background: "rgb(255, 227, 227 " }}>.com Domain</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>2 GB SSD Hossting</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>Readymade Website</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>Werdpress theme</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 pt-3">
                                <div class="card custom-card">
                                    <div class="box-one">
                                        <h4>PLAN-01</h4>
                                        <h2>৳ 5,000</h2>
                                        <ul>
                                            <li style={{ fontSize: '15px', background: "rgb(255, 227, 227 " }}>.com Domain</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>2 GB SSD Hossting</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>Readymade Website</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>Werdpress theme</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 pt-3">
                                <div class="card custom-card">
                                    <div class="box-one">
                                        <h4>PLAN-01</h4>
                                        <h2>৳ 5,000</h2>
                                        <ul>
                                            <li style={{ fontSize: '15px', background: "rgb(255, 227, 227 " }}>.com Domain</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>2 GB SSD Hossting</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>Readymade Website</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>Werdpress theme</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 pt-3">
                                <div class="card custom-card">
                                    <div class="box-one">
                                        <h4>PLAN-01</h4>
                                        <h2>৳ 5,000</h2>
                                        <ul>
                                            <li style={{ fontSize: '15px', background: "rgb(255, 227, 227 " }}>.com Domain</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>2 GB SSD Hossting</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>Readymade Website</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>Werdpress theme</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>
                                            <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px", fontSize: '15px' }}>x</li>

                                            <li style={{ background: "white", fontSize: '15px' }}>x</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>


                <div class="col-md-12 text-center viewmore-btn">
                    <a class="btn btn-outline-secondary" href="https://www.teletalk.com.bd/bn/bundles">আরও প্যাকেজ দেখুন</a>
                </div>

                <section class="section-two">


                    <div class="col-md-12 text-center">
                        <h4 class="text-center pt-5 popular-heading">
                            {/* <!--<img src="images/new.png" alt="" />--> */}
                            <span> ব্লগ </span>
                        </h4>
                        <div class="divider-30 divider-sm-30"></div>
                    </div>



                    <div class="container">
                        <div class="row row-cols-1 row-cols-md-3 pb-5 g-4">
                            <div class="col-md-4 my-3">
                                <div class="card custom-card">
                                    <img src={cardImg}
                                        class="card-img-top custom-image" alt="..." />
                                    <div class="card-body custom-text">
                                        <h6 class="card-title">করোনার চলমান</h6>
                                        <h5>করোনার চলমানকরোনার চলমান</h5>
                                        <p class="card-text">মহান ভাষা আন্দোলনের শহীদদের স্মরণে সরকার ১৯৭৬ সাল থেকে প্রতিবছর বিভিন্ন ক্ষেত্রে বিশেষ অবদানের স্বীকৃতি হিসেবে এই</p>
                                        <p>January 31, 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 my-3">
                                <div class="card custom-card">
                                    <img src={cardImg}
                                        class="card-img-top custom-image" alt="..." />
                                    <div class="card-body custom-text">
                                        <h6 class="card-title">করোনার চলমান</h6>
                                        <h5>করোনার চলমানকরোনার চলমান</h5>
                                        <p class="card-text">মহান ভাষা আন্দোলনের শহীদদের স্মরণে সরকার ১৯৭৬ সাল থেকে প্রতিবছর বিভিন্ন ক্ষেত্রে বিশেষ অবদানের স্বীকৃতি হিসেবে এই</p>
                                        <p>January 31, 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 my-3">
                                <div class="card custom-card">
                                    <img src={cardImg}
                                        class="card-img-top custom-image" alt="..." />
                                    <div class="card-body custom-text">
                                        <h6 class="card-title">করোনার চলমান</h6>
                                        <h5>করোনার চলমানকরোনার চলমান</h5>
                                        <p class="card-text">মহান ভাষা আন্দোলনের শহীদদের স্মরণে সরকার ১৯৭৬ সাল থেকে প্রতিবছর বিভিন্ন ক্ষেত্রে বিশেষ অবদানের স্বীকৃতি হিসেবে এই</p>
                                        <p>January 31, 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4  my-3">
                                <div class="card custom-card">
                                    <img src={cardImg}
                                        class="card-img-top custom-image" alt="..." />
                                    <div class="card-body custom-text">
                                        <h6 class="card-title">করোনার চলমান</h6>
                                        <h5>করোনার চলমানকরোনার চলমান</h5>
                                        <p class="card-text">মহান ভাষা আন্দোলনের শহীদদের স্মরণে সরকার ১৯৭৬ সাল থেকে প্রতিবছর বিভিন্ন ক্ষেত্রে বিশেষ অবদানের স্বীকৃতি হিসেবে এই</p>
                                        <p>January 31, 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 my-3">
                                <div class="card custom-card">
                                    <img src={cardImg}
                                        class="card-img-top custom-image" alt="..." />
                                    <div class="card-body custom-text">
                                        <h6 class="card-title">করোনার চলমান</h6>
                                        <h5>করোনার চলমানকরোনার চলমান</h5>
                                        <p class="card-text">মহান ভাষা আন্দোলনের শহীদদের স্মরণে সরকার ১৯৭৬ সাল থেকে প্রতিবছর বিভিন্ন ক্ষেত্রে বিশেষ অবদানের স্বীকৃতি হিসেবে এই</p>
                                        <p>January 31, 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 my-3">
                                <div class="card custom-card">
                                    <img src={cardImg}
                                        class="card-img-top custom-image" alt="..." />
                                    <div class="card-body custom-text">
                                        <h6 class="card-title">করোনার চলমান</h6>
                                        <h5>করোনার চলমানকরোনার চলমান</h5>
                                        <p class="card-text">মহান ভাষা আন্দোলনের শহীদদের স্মরণে সরকার ১৯৭৬ সাল থেকে প্রতিবছর বিভিন্ন ক্ষেত্রে বিশেষ অবদানের স্বীকৃতি হিসেবে এই</p>
                                        <p>January 31, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>



            {/* <!---Digital Service---> */}
            <section class="ls c-gutter-60" style={{ backgroundColor: "#fbfbfb73" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h4 class="text-center popular-heading">ডিজিটাল সেবা</h4>

                            {/* <!-- tabs start --> */}
                            <ul class="nav nav-tabs digital-tab" role="tablist" style={{ justifyContent: "center" }}>
                                <li class="nav-item">
                                    <a class="nav-link active show" id="service1" data-toggle="tab" href="#service01_pane" role="tab" aria-controls="tab01_pane" aria-expanded="true" aria-selected="true"><img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/news-icon.svg" /><br />ডোমেইন ও হোস্টিং</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="service2" data-toggle="tab" href="#service02_pane" role="tab" aria-controls="tab02_pane" aria-selected="false"><img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/job.svg" /><br /> ওয়েব ডেভেলপমেন্ট</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="service3" data-toggle="tab" href="#service03_pane" role="tab" aria-controls="tab03_pane" aria-selected="false"><img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/utility.svg" /><br /> সফটওয়্যার ডেভেলপমেন্ট</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="service4" data-toggle="tab" href="#service04_pane" role="tab" aria-controls="tab04_pane" aria-selected="false"><img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/admission.svg" /><br />
                                        এপস ডেভেলপমেন্ট </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="service5" data-toggle="tab" href="#service05_pane" role="tab" aria-controls="tab5_pane"><img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/1/Results.svg" /><br />ডিজিটাল মার্কেটিং</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="service6" data-toggle="tab" href="#service06_pane" role="tab" aria-controls="tab06_pane"><img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/emergency.svg" /><br />
                                        গ্রাফিক্স ডিজাইন</a>
                                </li>


                            </ul>
                            <div class="tab-content digital-tab-content" style={{ background: "#fbfbfb73" }}>

                                <div class="tab-pane fade in active show" id="service01_pane" role="tabpanel" aria-labelledby="tab01">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-6">

                                            <div class="">
                                                <div class="item-media">
                                                    <img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/news-man.svg" alt="" />
                                                    <h6> খবর<span> প্রতিবেদন</span></h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- .col-* --> */}
                                        <div class="col-md-8 col-sm-6">

                                            <div class="digital-service-content">
                                                <ul class="news-scroll">
                                                    <li>
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/619/f69/9cc/thumb_263_500_0_0_0_auto.jpg" alt="" />
                                                            </div>
                                                            <div class="col-md-10">
                                                                <p>মহানগর ও জেলা পর্যায়ের বেসরকারি মাধ্যমিক বিদ্যালয়ে-২০২২ শিক্ষাবর্ষে ভর্তি বিজ্ঞপ্তি</p>
                                                                <a href="#/bn/news/private-school-admission-2022" class="news-readmore readmore">আরোও পড়ুন</a>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/619/f6c/588/thumb_264_500_0_0_0_auto.jpg" alt="" />
                                                            </div>
                                                            <div class="col-md-10">
                                                                <p>সরকারি মাধ্যমিক বিদ্যালয়সমূহে ২০২২ শিক্ষাবর্ষে ভর্তি বিজ্ঞপ্তি (সংশোধিত)</p>
                                                                <a href="#/bn/news/government-secondary-school-admission-2022" class="news-readmore readmore">আরোও পড়ুন</a>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/5fd/461/6ba/thumb_50_500_0_0_0_auto.jpg" alt="" />
                                                            </div>
                                                            <div class="col-md-10">
                                                                <p>কলেজ ভর্তি ফি নিশ্চিতকরণ ২০২০</p>
                                                                <a href="#/bn/news/college-admission-fee-confirmation" class="news-readmore readmore">আরোও পড়ুন</a>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/5fd/465/fc9/thumb_51_500_0_0_0_auto.jpeg" alt="" />
                                                            </div>
                                                            <div class="col-md-10">
                                                                <p> এসএসসি ফলাফল 2020</p>
                                                                <a href="#/bn/news/ssc-result" class="news-readmore readmore">আরোও পড়ুন</a>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/5ff/169/02c/thumb_159_500_0_0_0_auto.png" alt="" />
                                                            </div>
                                                            <div class="col-md-10">
                                                                <p>টেলিচার্জ করার জন্য খুচরা বিক্রেতাদের তালিকা</p>
                                                                <a href="#/bn/news/retailer-list-telecharge" class="news-readmore readmore">আরোও পড়ুন</a>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/5fd/468/26c/thumb_53_500_0_0_0_auto.jpg" alt="" />
                                                            </div>
                                                            <div class="col-md-10">
                                                                <p>টেলিটক 4G</p>
                                                                <a href="#/bn/news/teletalk" class="news-readmore readmore">আরোও পড়ুন</a>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/5fd/46a/11d/thumb_54_500_0_0_0_auto.jpeg" alt="" />
                                                            </div>
                                                            <div class="col-md-10">
                                                                <p>এইচএসসি পরীক্ষার ফলাফল ও পুন:নিরীক্ষণ</p>
                                                                <a href="#/bn/news/hsc-examination-results-and-re-examination" class="news-readmore readmore">আরোও পড়ুন</a>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/5fd/46b/06d/thumb_55_500_0_0_0_auto.jpg" alt="" />
                                                            </div>
                                                            <div class="col-md-10">
                                                                <p>প্রতারক চক্র থেকে সাবধান</p>
                                                                <a href="#/bn/news/beware-of-fraudulent-cycles" class="news-readmore readmore">আরোও পড়ুন</a>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/5fd/46b/dbe/thumb_56_500_0_0_0_auto.jpg" alt="" />
                                                            </div>
                                                            <div class="col-md-10">
                                                                <p>টেলিচার্জ এখন বিকাশে</p>
                                                                <a href="#/bn/news/telecharge-is-now-on-bKash" class="news-readmore readmore">আরোও পড়ুন</a>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/5fd/492/bde/thumb_62_500_0_0_0_auto.jpg" alt="" />
                                                            </div>
                                                            <div class="col-md-10">
                                                                <p>টেলিটক মাইফাই এবং পকেট রাউটার</p>
                                                                <a href="#/bn/news/teletalk-mifi-pocket-router" class="news-readmore readmore">আরোও পড়ুন</a>
                                                            </div>
                                                        </div>
                                                    </li>


                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- .col-* --> */}
                                    </div>


                                </div>

                                <div class="tab-pane fade" id="service02_pane" role="tabpanel" aria-labelledby="tab02">

                                    <div class="row">
                                        <div class="col-md-4 col-sm-6">

                                            <div class="">
                                                <div class="item-media">
                                                    <img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/job circular.svg" alt="Job Circular - https://www.teletalk.com.bd" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- .col-* --> */}
                                        <div class="col-md-8 col-sm-6">

                                            <div class="digital-service-content">
                                                <h6>চাকুরি <span>নিয়োগ বিজ্ঞপ্তি</span></h6>
                                                <p>
                                                    চাকরির বিজ্ঞপ্তি পেতে<br />
                                                    <a class="readmore" href="https://vas.teletalk.com.bd/client.php" target="_blank">আরও</a> <span style={{ color: "#660000" }}></span>
                                                </p>
                                            </div>
                                        </div>
                                        {/* <!-- .col-* --> */}
                                    </div>

                                </div>
                                <div class="tab-pane fade" id="service03_pane" role="tabpanel" aria-labelledby="tab02">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-6">

                                            <div class="">
                                                <div class="item-media">
                                                    <img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/utility bill.svg" alt="Utility Bill - https://www.teletalk.com.bd" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- .col-* --> */}
                                        <div class="col-md-8 col-sm-6">

                                            <div class="digital-service-content">
                                                <h6>ইউটিলিটি <span>বিল</span></h6>
                                                <p>
                                                    ইউটিলিটি বিল পরিশোধ করতে<br />
                                                    <a class="readmore" href="https://www.teletalk.com.bd/bn/vas/reb-bill-payment/reb-bill-pay-sms">আরও</a><span style={{ color: "#660000" }}></span>
                                                </p>
                                            </div>
                                        </div>
                                        {/* <!-- .col-* --> */}
                                    </div>

                                </div>
                                <div class="tab-pane fade" id="service04_pane" role="tabpanel" aria-labelledby="tab02">

                                    <div class="row">
                                        <div class="col-md-4 col-sm-6">

                                            <div class="">
                                                <div class="item-media">
                                                    <img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/admission fees.svg" alt="Admission - https://www.teletalk.com.bd" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- .col-* --> */}
                                        <div class="col-md-8 col-sm-6">

                                            <div class="digital-service-content">
                                                <h6>এডমিশন</h6>
                                                <p>
                                                    ভর্তি সম্পূর্ণ করতে<br />
                                                    <a class="readmore" href="http://vas.teletalk.com.bd/admission.php" target="_blank">আরও</a> <span style={{ color: "#660000" }}></span>
                                                </p>
                                            </div>
                                        </div>
                                        {/* <!-- .col-* --> */}
                                    </div>

                                </div>
                                <div class="tab-pane fade" id="service05_pane" role="tabpanel" aria-labelledby="tab02">

                                    <div class="row">
                                        <div class="col-md-4 col-sm-6">

                                            <div class="">
                                                <div class="item-media">
                                                    <img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/1/Results.svg" alt="Result Icon - https://www.teletalk.com.bd" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- .col-* --> */}
                                        <div class="col-md-8 col-sm-6">

                                            <div class="digital-service-content">
                                                <h6>ফলাফল <span>দেখুন </span></h6>
                                                <p>
                                                    রেজাল্ট পেতে<br />
                                                    <a class="readmore" href="http://educationboardresults.gov.bd/" target="_blank">আরও</a> <span style={{ color: "#660000" }}></span>
                                                </p>
                                            </div>
                                        </div>
                                        {/* <!-- .col-* --> */}
                                    </div>

                                </div>
                                <div class="tab-pane fade" id="service06_pane" role="tabpanel" aria-labelledby="tab02">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-6">

                                            <div class="">
                                                <div class="item-media">
                                                    <img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/digital-service.png" alt="Digital Service - https://www.teletalk.com.bd" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* {/* <!-- .col-* --> */}
                                        <div class="col-md-8 col-sm-6">

                                            <div class="digital-service-content">
                                                <h6>ইমারেজেন্সি <span>লোন</span></h6>
                                                <p>
                                                    জরুরী লোন পেতে<br />
                                                    ডায়াল <span style={{ color: "#660000" }}>*১১২২#</span>
                                                </p>
                                            </div>
                                        </div>
                                        {/* 
{/* <!-- .col-* --> */}
                                    </div>


                                </div>

                            </div>
                            {/* <!-- tabs end--> */}

                        </div>
                    </div>
                </div>
            </section>
            {/* <!---Digital Service End---> */}


            {/* <!--- Blog---> */}


            <section class="latest-offer ls s-pt-60 s-pt-md-80 s-pt-xl-150 s-pb-30 s-pb-md-50 s-pb-xl-120 c-mb-30 service-isotope">
                <div class="col-md-12 text-center">

                    <h4 class="text-center popular-heading" style={{ marginTop: "0px" }}>
                        {/* <!--<img src="images/new.png" alt="" />--> */}
                        <span>ডেমো</span>
                    </h4>
                    <div class="divider-30 divider-sm-30"></div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="vertical-item text-center pricing-plan box-shadow color_style1 popular-item">
                                <div class="item-media">
                                    <img src={offer1} alt="১৪ টাকায় ২৩ মিনিট" />
                                    <div class="media-links">
                                        <a class="abs-link" title="" href="#"></a>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <h6 class="service-title">
                                        <a href="#">সাধ্যেরমধ্যে ব্যবসায়িক ওয়েবসাইট</a>
                                    </h6>
                                </div>
                                <div class="product-price d-flex justify-content-around">
                                    <a href="#" >রেগুলার প্রাইচ</a>
                                    <a href="#" >অফার প্রাইচ</a>
                                </div>
                                <div class="plan-button">
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="4" data-target="#offers_model">ডেমো দেখুন</a>
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="4" data-target="#offers_model">বিস্তারিত</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="vertical-item text-center pricing-plan box-shadow color_style1 popular-item">
                                <div class="item-media">
                                    <img src={offer2} alt="১৪৩ মিনিট মাত্র ৮৬ টাকায়" />
                                    <div class="media-links">
                                        <a class="abs-link" title="" href="#"></a>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <h6 class="service-title">
                                        <a href="#">স্কুল ম্যানেজমেন্ট সফটওয়্যার</a>
                                    </h6>
                                </div>
                                <div class="product-price d-flex justify-content-around">
                                    <a href="#" >রেগুলার প্রাইচ</a>
                                    <a href="#" >অফার প্রাইচ</a>
                                </div>
                                <div class="plan-button">
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="5" data-target="#offers_model">ডেমো দেখুন</a>
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="5" data-target="#offers_model">বিস্তারিত</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="vertical-item text-center pricing-plan box-shadow color_style1 popular-item">
                                <div class="item-media">
                                    <img src={offer3} alt="২৫ মিনিট, ১০ টি এসএমএস,  ১ জিবি ডেটা মাত্র ৩৩ টাকায়" />
                                    <div class="media-links">
                                        <a class="abs-link" title="" href="#"></a>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <h6 class="service-title">
                                        <a href="#">ব্যবসা-প্রতিষ্ঠান ওয়েবসাইট</a>
                                    </h6>
                                </div>
                                <div class="product-price d-flex justify-content-around">
                                    <a href="#" >রেগুলার প্রাইচ</a>
                                    <a href="#" >অফার প্রাইচ</a>
                                </div>
                                <div class="plan-button">
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="6" data-target="#offers_model">ডেমো দেখুন</a>
                                    <a href="#" class="btn-maincolor offer_details" data-toggle="modal" data-id="6" data-target="#offers_model">বিস্তারিত</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 text-center viewmore-btn">
                    <a class="btn btn-outline-secondary" href="https://www.teletalk.com.bd/bn/offers">আরও অফার দেখুন</a>
                </div>
            </section>


            {/* <!--- Blog---> */}



            {/* <!---helpline---> */}


            {/* <!---------- Testimonial ----------> */}
            <section class="half-color-box">
                <h4 class="text-center popular-heading">গুরুত্বপূর্ণ অভিমত</h4>

                <div class="container spacer por">
                    <div class="swiper-container swiper-testimonial swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                        <div class="swiper-wrapper" style={{ transform: "translate3d(0px, 0px, 0px)" }} id="swiper-wrapper-e1cb4a71b3d48270" aria-live="polite">

                            <div class="swiper-slide swiper-slide-active" style={{ width: "343.333px", marginRight: "50px" }} role="group" aria-label="1 / 5">
                                <div class="review-box">
                                    <p class="read">
                                        আইসিটিই পারে উন্নয়নের বহুমাত্রিক ধারা দ্রুত ও স্বল্প ব্যয়ে তৃণমূল পর্যন্ত পৌঁছে দিতে।

                                    </p>
                                    <div class="media testimonial-slider">
                                        <img class="testimonial-image" src="https://www.teletalk.com.bd/storage/app/uploads/public/610/13b/ceb/61013bceb3ddf006248862.png" alt="শেখ হাসিনা" />

                                        <div class="media-body-testimonial">
                                            <h5 class="testimonial-title">শেখ হাসিনা</h5>
                                            <p class="user-post">মাননীয় প্রধানমন্ত্রী</p>
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <div class="swiper-slide swiper-slide-next" style={{ width: "343.333px", marginRight: "50px" }} role="group" aria-label="2 / 5">
                                <div class="review-box">
                                    <p class="read">
                                        আগামী চতুর্থ শিল্প বিপ্লবে বিশ্বকে নেতৃত্ব দেবে বাংলাদেশ।

                                    </p>
                                    <div class="media testimonial-slider">
                                        <img class="testimonial-image" src="https://www.teletalk.com.bd/storage/app/uploads/public/610/10e/7a7/61010e7a7a555591260437.jpg" alt="সজীব ওয়াজেদ জয়" />

                                        <div class="media-body-testimonial">
                                            <h5 class="testimonial-title">সজীব ওয়াজেদ জয়</h5>
                                            <p class="user-post">মাননীয় প্রধানমন্ত্রীর তথ্য-প্রযুক্তি বিষয়ক উপদেষ্টা</p>
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <div class="swiper-slide" style={{ width: "343.333px", marginRight: "50px" }} role="group" aria-label="3 / 5">
                                <div class="review-box">
                                    <p class="read">
                                        টেলিটককে মানুষের প্রত্যাশার জায়গায় নিয়ে যেতে আমরা কাজ শুরু করেছি এবং সেদিন বেশি দূরে নয়, যে দিন টেলিটক হবে মানুষের প্রথম পছন্দ।

                                    </p>
                                    <div class="media testimonial-slider">
                                        <img class="testimonial-image" src="https://www.teletalk.com.bd/storage/app/uploads/public/610/10f/1be/61010f1be125f711232020.jpg" alt="মোস্তাফা জব্বার" />

                                        <div class="media-body-testimonial">
                                            <h5 class="testimonial-title">মোস্তাফা জব্বার</h5>
                                            <p class="user-post">গণপ্রজাতন্ত্রী বাংলাদেশ এর ডাক ও টেলিযোগাযোগ মন্ত্রী</p>
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <div class="swiper-slide" style={{ width: "343.333px", marginRight: "50px" }} role="group" aria-label="4 / 5">
                                <div class="review-box">
                                    <p class="read">
                                        ডিজিটাল বাংলাদেশ নির্মাণে টেলিটক উল্লেখযোগ্য ভূমিকা পালন করছে।

                                    </p>
                                    <div class="media testimonial-slider">
                                        <img class="testimonial-image" src="https://www.teletalk.com.bd/storage/app/uploads/public/618/3be/dc4/6183bedc4bbde572534798.png" alt="জনাব মোঃ খলিলুর রহমান" />

                                        <div class="media-body-testimonial">
                                            <h5 class="testimonial-title">জনাব মোঃ খলিলুর রহমান</h5>
                                            <p class="user-post">সচিব, ডাক ও টেলিযোগাযোগ বিভাগ</p>
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <div class="swiper-slide" style={{ width: "343.333px", marginRight: "50px" }} role="group" aria-label="5 / 5">
                                <div class="review-box">
                                    <p class="read">
                                        মাননীয় প্রধানমন্ত্রী ঘোষিত রূপকল্প ২০২১ ও রূপকল্প ২০৪১ বাস্তবায়নে নিরলসভাবে কাজ করছে টেলিটক।

                                    </p>
                                    <div class="media testimonial-slider">
                                        <img class="testimonial-image" src="https://www.teletalk.com.bd/storage/app/uploads/public/610/111/09e/61011109e627e062174107.jpg" alt="মোঃ সাহাব উদ্দিন" />

                                        <div class="media-body-testimonial">
                                            <h5 class="testimonial-title">মোঃ সাহাব উদ্দিন</h5>
                                            <p class="user-post">ব্যবস্থাপনা পরিচালক, টেলিটক বাংলাদেশ লিঃ</p>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                        {/* <!-- Add Pagination --> */}
                        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span></div>

                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>
            </section>

            {/* <!-- Modal --> */}
            <div class="modal fade popup" id="offer_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="modal-container__body">
                                <div class="modal-container__body-heading">
                                    <h5 style={{ fontSize: "25px", margin: "0" }} class="modal-container__body-heading-internet"><span class="bundle_volume"></span> <span class="bundle_volume_type"></span> জন্য
                                        <span class="bundle_validity"></span> দিন </h5>
                                    <p class="modal-container__body-heading-validity">মেয়াদ <span class="bundle_validity"></span> দিন</p>
                                    <p style={{ fontSize: "25px" }} class="modal-container__body-heading-price">টাকা <span class="bundle_price"></span></p></div>
                                <div class="modal-container__body-content">
                                    <div class="modal-container__body-content-desc">

                                        <p id="bundle_short_desc"></p>
                                        <p><strong>শর্তাবলী</strong></p>
                                        <ul>
                                            <li>Please click on “Buy now” and follow the instructions to activate the pack online.</li>
                                            <li>Both Prepaid &amp; Postpaid users are eligible for this pack.</li>
                                            <li>Dial *152# for data balance check.</li>
                                            <li>To check data usage type 'U' and send to 111</li>
                                            <li>After completion of pack volume or validity, you will be charged at Pay-per-use rate @ 15KB/ 1 paisa upto 5Tk.</li>
                                            <li>The price is including all taxes.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="modal-container__body-footer mt-10">
                                    <div class="col-sm-12">
                                        <a href="#" id="buynow-btn" class="buynow-btn">ক্রয় করুন</a>
                                    </div>
                                    <div class="col-sm-12" data-dismiss="modal">
                                        <a href="#" class="close-btn">বন্ধ করুন</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade popup" id="offers_model" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="modal-container__body">
                                {/* <!--<div class="modal-container__body-heading">
                        <h5 style={fontSize: "25px", margin: "0"}} class="modal-container__body-heading-internet">
                            <span class="bundle_volume"></span>
                        </h5>
                    </div>--> */}
                                <div class="modal-container__body-content">
                                    <div class="row">
                                        <main class="col-lg-12 col-xl-12">
                                            <div class="product type-product ">

                                                <div class="images" data-columns="4" style={{ marginBottom: "1em" }}>

                                                    <div>
                                                        <span id="offer-image">
                                                            <img id="img-offer" src="http://dev.teletalk.com.bd/storage/app/uploads/public/5fe/d05/5ea/5fed055ea2b92125247147.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div class="summary entry-summary">

                                                    <h1 class="product_title entry-title bundle_volume">Ship Your Idea</h1>

                                                    <div class="color-darkgrey">
                                                        <div class="product_meta">
                                                            <span class="posted_in">প্রকার: <a id="offer_type" href="" rel="tag"></a></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="woocommerce-tabs wc-tabs-wrapper" style={{ margin: "5px auto" }}>

                                                    <div>
                                                        <p id="offer_short_desc">Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                            fames ac
                                                            turpis egestas.
                                                            Vestibulum
                                                            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                                                            eu
                                                            libero sit amet quam
                                                            egestas
                                                            semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                                    </div>

                                                </div>

                                            </div>
                                            {/* <!-- #product-22 --> */}
                                        </main>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-container__body-footer mt-10">
                                <div class="col-sm-12">
                                    <a href="#" id="offer-buy-btn" class="buynow-btn">ক্রয় করুন</a>
                                </div>
                                <div class="col-sm-12" data-dismiss="modal">
                                    <a href="#" class="close-btn">বন্ধ করুন</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade popup" id="shop_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="modal-container__body">
                                <div class="modal-container__body-heading">
                                    <h5 style={{ fontSize: "25px", margin: "0" }} class="modal-container__body-heading-internet">
                                        <span class="shop_titile"></span></h5>
                                    <br />
                                    <p style={{ fontSize: "25px" }} class="modal-container__body-heading-price">টাকা <span class="shop_price"></span></p>
                                    <br />
                                </div>
                                <div class="modal-container__body-content">
                                    <div class="modal-container__body-content-desc">
                                        <p class="shop_short_desc"></p>
                                    </div>
                                </div>
                                <div class="modal-container__body-footer mt-10">
                                    <div class="col-sm-12">
                                        <a id="pager" href="#" class="buynow-btn">ক্রয় করুন</a>
                                    </div>
                                    <div class="col-sm-12" data-dismiss="modal">
                                        <a href="#" class="close-btn">বন্ধ করুন</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About/>
        </>
    );
};

export default Home;