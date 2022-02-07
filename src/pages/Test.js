import React from 'react';
import slider1 from '../img/slider1.jpeg'
import slider2 from '../img/slider2.jpeg'
import slider3 from '../img/slider3.jpeg'
import offer1 from '../img/offer1.jpeg'
import offer2 from '../img/offer2.jpeg'
import offer3 from '../img/offer3.jpeg'
import logo from '../img/payrasoft logo.png'
import cardImg from '../img/cardImg.png'
import './testimonial.css'
import './mainTwo.css'
import './swiper-bundle.css'
import './style.css'

const Test = () => {
  function myFunction() {
    var x = document.getElementById("top-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



  return (
    <div id="canvas">
      <div id="box_wrapper">

        {/* <!-- template sections --> */}

        {/* <!--topline section visible only on small screens|--> */}

        {/* <!--eof topline--> */}

        <section class="page_topline s-border ls s-borderbottom header-top">
          <div class="container-fluid">
            <div class="row align-items-center">

              <div class="col-lg-12 col-xl-12 text-center">
                <ul>
                  <li>
                    <p>
                      <a class="text-white" href="https://play.google.com/store/apps/details?id=teletalk.teletalkcustomerapp" target="_blank">
                        ডাউনলোড MyTeletalk অ্যাপ
                      </a>
                    </p>
                  </li>

                </ul>
                n

                <span class="cross_button" style={{ float: "right", position: "relative", top: "-38px", cursor: "pointer" }}> x</span>
              </div>

            </div>
          </div>
        </section>

        {/* <!-- header with two Bootstrap columns - left for logo and right for navigation and includes (search, social icons, additional links and buttons etc -->
        <!-- --> */}

        <div class="page_header_wrapper ls affix-wrapper" style={{ height: "98.3906px" }}>
          <header class="page_header ls justify-nav-end affix" id="layout-header">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xl-2  col-lg-2 col-md-3">
                  <ul class="lincludes-top d-md-none d-flex justify-content-center">
                    <li>
                      <a href="#/bn/about">আমাদের সম্পর্কে</a>
                    </li>

                    <li class="call mx-3">
                      <a href="tel:121" style={{ color: "#757678" }}><i class="fa fa-phone" aria-hidden="true"></i> 01866776970</a>
                    </li>
                  </ul>
                  <a href="#/bn" class=" logo">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <div class="col-xl-10 col-lg-10 col-md-9">


                  <div class="row header-two">
                    <div class="col-xl-5 col-lg-5 col-md-5">
                      <ul class="top-line-includes-first  top-includes">
                        <li>
                          <a href="#/bn/about">আমাদের সম্পর্কে</a>
                        </li>

                        <li class="call d-none d-md-inline-block">
                          <a href="tel:121" style={{ color: "#757678" }}><i class="fa fa-phone" aria-hidden="true"></i> 01866776970</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 text-xl-right">
                      <ul class="top-line-includes-first top-includes account-lang topline-account">
                        {/* <li>
                          <a href="#/bn/golden-jubilee-independence-corner" style={{ background: "#660000", padding: "0px 7px", color: "#fff" }}> স্বাধীনতার সুবর্ণ জয়ন্তী কর্নার
                          </a>
                        </li> */}
                        <li>
                          <a href="" id="topline-search-button">
                            <i class="fa fa-search" aria-hidden="true"></i> অনুসন্ধান করুন
                          </a>
                        </li>
                        {/* <!-- <li class="">
                        <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src="https://www.teletalk.com.bd/storage/app/media/mujib_borsho.png" alt="" /> মুজিব বর্ষ  <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </a>
                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(86px, 30px, 0px); top: 0px; left: 0px; will-change: transform;">
                          <a class="" href="https://mujib100.gov.bd/"> বঙ্গবন্ধু কর্নার</a>
                          <a class="" href="http://www.bsccl.com/independence">স্বাধীনতার সুবর্ণ জয়ন্তী কর্নার</a>
                        </div>
                      </li>--> */}
                        <li>
                          <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-user-circle-o" aria-hidden="true"></i> আমার একাউন্ট <i class="fa fa-angle-down" aria-hidden="true"></i>
                          </a>
                          <div class="dropdown-menu">
                            <a class="" href="https://www.teletalk.com.bd/bn/login">লগ ইন</a>
                            <a class="" href="https://www.teletalk.com.bd/bn/signup">সাইন আপ</a>
                          </div>
                        </li>
                        <li>
                          <a href="#/en">English</a>
                        </li>

                      </ul>
                    </div>
                  </div>


                  <div class="nav-wrap">
                    {/* <!-- main_old nav start --> */}
                    <nav class="top-nav">

                      <ul class="nav sf-menu sf-js-enabled sf-arrows" style={{ touchAction: "pan-y" }}>

                        <li class="">
                          <a href="/bn">
                            হোম
                          </a>
                        </li>

                        <li class="" style={{ display: "none" }}>
                          <a href="#/bn/others/online-recharge" class="sf-with-ul">
                            রিচার্জ
                          </a><span class="sf-menu-item-mobile-toggler"></span>
                          <div class="mega-menu" style={{ display: "none", marginTop: "5px", left: "89.5px" }}>
                            <ul class="mega-menu-row">

                              <li class="mega-menu-col">
                                <a href="#/bn/others/online-recharge" class="" style={{ display: "none" }}>
                                  অনলাইন রিচার্জ ও ক্রয়
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li class="">
                          <a href="#/bn/voice"
                          // class="sf-with-ul"
                          >
                            ওয়েবসাইট
                          </a>
                          <span class="sf-menu-item-mobile-toggler"></span>
                          <div class="mega-menu" style={{ display: "none", marginTop: "5px", left: "-239.297px" }}>
                            <ul class="mega-menu-row">

                              <li class="mega-menu-col">
                                <a href="bn/#prepaid" class="">
                                  প্রিপেইড
                                </a>
                                <ul style={{ left: "100%" }}>
                                  <li class="">
                                    <a href="#/bn/voice/prepaid/shotoborsho" class="">
                                      শতবর্ষ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/prepaid" class="">
                                      স্বাগতম
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/prepaid/agami" class="">
                                      আগামী
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/prepaid/bornomala" class="">
                                      বর্ণমালা
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/prepaid" class="">
                                      অপরাজিতা
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/prepaid/mayer-hasi" class="">
                                      মায়ের হাসি
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/prepaid/youth" class="">
                                      ইয়ুথ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/prepaid/shadheen" class="">
                                      স্বাধীন
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/prepaid/projonmo" class="">
                                      প্রজন্ম
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="bn/#post-paid" class="">
                                  পোস্টপেইড
                                </a>
                                <ul style={{ left: "100%" }}>
                                  <li class="">
                                    <a href="#/bn/voice/postpaid/gravity" class="">
                                      গ্র্যাভিটি
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="bn/#corporate" class="" style={{ display: "none" }}>
                                  কর্পোরেট
                                </a>
                                <ul style={{ left: "100%" }}>
                                  <li class="">
                                    <a href="#/bn/voice/corporate/teletalk-corporate" class="" style={{ display: "none" }}>
                                      টেলিটক কর্পোরেট
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/corporate/corporate-sim-pricing" class="" style={{ display: "none" }}>
                                      কর্পোরেট সিম মূল্য
                                    </a>
                                  </li>
                                </ul>
                                <a href="bn/#International-Roaming" class="">
                                  ইন্টারন্যাশনাল রোমিং
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/voice/international-roaming" class="">
                                      ইন্টারন্যাশনাল রোমিং বিস্তারিত
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="/bn/isd-call-rate" class="">
                                      ISD কলরেট
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/international-roaming/roaming-partner-list" class="">
                                      রোমিং পার্টনার তালিকা
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/international-roaming/international-sms" class="">
                                      আন্তর্জাতিক এসএমএস
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="/#" class="">
                                  বান্ডেল এবং বিশেষ অফার
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/scratch-card-bonus" class="">
                                      স্ক্র্যাচ কার্ড বোনাস
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/offer/special-offer/closed-sim-offer-2019" class="">
                                      আকর্ষণীয় বন্ধ সিম অফার
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/offers/special-offer/rate-cutter-offer" class="">
                                      রেট কাটার অফার
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/offer/special-offer/emergency-balance" class="">
                                      ইমার্জেন্সি ব্যালেন্স
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li class="">
                          <a href="/bn/Internet-offers" class="sf-with-ul">
                            সফটওয়্যার
                          </a><span class="sf-menu-item-mobile-toggler"></span>
                          <div class="mega-menu" style={{ display: "none", marginTop: "5px", left: "-372.375px" }}>
                            <ul class="mega-menu-row">

                              <li class="mega-menu-col">
                                <a href="/bn/Internet-offers" class="">
                                  ডাটা প্যাকেজসমূহ
                                </a>
                                <ul style={{ left: "100%" }}>
                                  <li class="">
                                    <a href="/bn/internet/agami-data-packs" class="" style={{ display: "none" }}>
                                      আগামী ডাটা প্যাক
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="/bn/internet/bornomala-data-packs" class="" style={{ display: "none" }}>
                                      বর্ণমালা ডাটা প্যাক
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="/bn/offer/special-offer/data-package" class="" style={{ display: "none" }}>
                                      অপরাজিতা ডাটা প্যাক
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="/bn/internet/regular-data-packs" class="" style={{ display: "none" }}>
                                      রেগুলার ডাটা প্যাক
                                    </a>
                                  </li>
                                </ul>
                                <a href="/bn/coverage-map" class="">
                                  নেটওয়ার্ক বিস্তৃতি
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="/" class="">
                                      গ্রাফিকাল ভিউ
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="/#Modem" class="">
                                  মোডেম
                                </a>
                                <ul style={{ left: "-607.516px" }}>
                                  <li class="">
                                    <a href="#/bn/flash-package-price" class="">
                                      ফ্ল্যাশ প্যাকেজ মূল্য ও বান্ডেল
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/mi-fi-package-price" class="">
                                      মাই-ফাই প্যাকেজ মূল্য
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/pocket-router-details" class="">
                                      পকেট রাউটার বিস্তারিত
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/internet-device" class="">
                                      ইন্টারনেট ডিভাইস
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li class="">
                          <a href="#/bn/vas" class="sf-with-ul">
                            এপস
                          </a><span class="sf-menu-item-mobile-toggler"></span>
                          <div class="mega-menu" style={{ display: "none", marginTop: "5px", left: "-473.172px" }}>
                            <ul class="mega-menu-row">

                              <li class="mega-menu-col active">
                                <a href="https://alljobs.teletalk.com.bd/en/" class="">
                                  নিয়োগ / ফলাফল তথ্য
                                </a>
                                <a href="#/bn/vas/teleflix" class="">
                                  টেলিফ্লিক্স
                                </a>
                                <a href="#/bn/vas/teletalk-fun-zone" class="">
                                  টেলিটক ফান জোন
                                </a>
                                <a href="https://nits.com.bd/teletalk-vts/" class="">
                                  যানবাহন ট্র্যাকিং সিস্টেম
                                </a>
                                <a href="#/bn/vas/hotobakbackground-music" class="">
                                  হতবাক
                                </a>
                                <a href="#Entertainment" class="active">
                                  বিনোদন
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/vas/entertainment-one/content-bazar" class="">
                                      কনটেন্ট বাজার
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/entertainment-one/happy-cell-service" class="">
                                      হ্যাপি সেল সার্ভিস
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/entertainment-one/clubz" class="">
                                      ক্লাব জেড
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/entertainment-one/bdtube" class="">
                                      বিডিটিউব
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/entertainment-one/sweet-talk" class="">
                                      মিষ্টি কথা
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/entertainment-one/love-tips" class="">
                                      ভালোবাসার টিপস
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/entertainment-one/sports" class="">
                                      খেলাধুলা
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/entertainment-one/taroka-news" class="">
                                      তারকা সংবাদ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/entertainment-one/bollywood-gossip" class="">
                                      বলিউড আড্ডা
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/entertainment-one/fashion-lifestyle" class="">
                                      ফ্যাশন ও লাইফস্টাইল
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="#/bn/vas/teletune" class="">
                                  টেলিটিউন
                                </a>
                                <a href="#/bn/vas/missed-call-alert" class="">
                                  মিসড কল অ্যালার্ট
                                </a>
                                <a href="#/bn/vas/teletalk-mobile-tv" class="">
                                  মোবাইল টিভি
                                </a>
                                <a href="bn/#Games" class="">
                                  গেমস
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/vas/games/teletalk-game" class="">
                                      টেলিটক গেম
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/games/ea-game" class="">
                                      ইএ গেমস
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/games/teletalk-games-zone" class="">
                                      টেলিটক গেম জোন
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="bn/#REB-Bill-Payment" class="">
                                  আরইবি বিল পরিশোধ
                                </a>
                                <ul style={{ left: "100%" }}>
                                  <li class="">
                                    <a href="#/bn/vas/reb-bill-payment/reb-bill-pay-sms" class="">
                                      আরইবি বিল পেমেন্ট (এসএমএস)
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/reb-bill-payment/reb-bill-pay-ussd" class="">
                                      আরইবি বিল পেমেন্ট (ইউএসএসডি )
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/reb-bill-payment/reb-bill-pay-procedure" class="">
                                      পল্লীবিদ্যুৎ বিল পরিশোধ প্রক্রিয়া
                                    </a>
                                  </li>
                                </ul>
                                <a href="#/bn/vas/balance-transfer" class="">
                                  ব্যালেন্স ট্রান্সফার
                                </a>
                                <a href="bn/#News-updates" class="">
                                  সর্বশেষ খবর
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/vas/news-updates/etv-news" class="">
                                      ইটিভি সংবাদ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/news-updates/rtv-news" class="">
                                      আরটিভি সংবাদ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/news-updates/maasranga-news" class="">
                                      মাছরাঙ্গা সংবাদ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/news-updates/independent-news" class="">
                                      ইন্ডিপেনডেন্ট সংবাদ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/news-updates/atn-bangla-news" class="">
                                      এটিএন বাংলা সংবাদ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/news-updates/prothom-alo-news" class="">
                                      প্রথম আলো সংবাদ
                                    </a>
                                  </li>
                                </ul>
                                <a href="#/bn/vas/bondhu-shon" class="">
                                  বন্ধু সন্ধান
                                </a>
                              </li>
                              <li class="mega-menu-col">
                                <a href="#/bn/vas/emergency-balance-service" class="">
                                  ইমার্জেন্সি ব্যালেন্স সার্ভিস
                                </a>
                                <a href="bn/#Call-Management-Services" class="">
                                  কল ম্যানেজমেন্ট সেবা
                                </a>
                                <ul style={{ left: "-287.516px" }}>
                                  <li class="">
                                    <a href="#/bn/vas/call-management-services/call-block" class="">
                                      কল ব্লক
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/call-management-services/call-forwardingdiverting" class="">
                                      কল ফরোয়ার্ডিং/ডাইভারট
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/vas/call-management-services/call-waitingholding" class="">
                                      অপেক্ষা / হোল্ডিং কল
                                    </a>
                                  </li>
                                </ul>
                                <a href="#/bn/vas/teletalk-audio-book" class="">
                                  টেলিটক অডিও বুক
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li class="">
                          <a href="/bn/offer">
                            মার্কেটিং
                          </a>
                        </li>

                        <li class="">
                          <a href="#/bn/customer-care" class="sf-with-ul">
                            গ্রাফিক্স
                          </a><span class="sf-menu-item-mobile-toggler"></span>
                          <div class="mega-menu" style={{ display: "none", marginTop: "5px", left: "-650.281px" }}>
                            <ul class="mega-menu-row">

                              <li class="mega-menu-col">
                                <a href="https://teletalk.com.bd/bn/others/contact-us" class="">
                                  যোগাযোগ
                                </a>
                                <a href="#/bn/customer-care-center" class="">
                                  কাস্টমার কেয়ার সেন্টার
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/customer-care-center" class="">
                                      ছক আকারে দেখুন
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="/bn/customer-care-center/maps" class="">
                                      ম্যাপ আকারে দেখুন
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="#/bn/customer-care-point" class="">
                                  গ্রাহক সেবা কেন্দ্র
                                </a>
                                <ul style={{ left: "100%" }}>
                                  <li class="">
                                    <a href="#/bn/customer-care-point" class="">
                                      ছক আকারে দেখুন
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="/bn/customer-care-point/maps" class="">
                                      ম্যাপ আকারে দেখুন
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="#/bn/customer-care-center/call-center" class="">
                                  কল সেন্টার
                                </a>
                              </li>
                              <li class="mega-menu-col">
                                <a href="#" class="">
                                  অন্যান্য
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/customer-care-center/others/teletalk-service-point" class="">
                                      টেলিটক সার্ভিস পয়েন্ট
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="/bn/retailers" class="">
                                      রিটেইল স্টোর সমূহ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/customer-care-center/others/paywell-recharge-point" class="">
                                      পে-ওয়েল রিচার্জ পয়েন্ট
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li class="" style={{ display: "none" }}>
                          <a href="#/bn/explore" class="sf-with-ul">
                            ডেমো
                          </a><span class="sf-menu-item-mobile-toggler"></span>
                          <div class="mega-menu" style={{ display: "none", marginTop: "5px", left: "89.5px" }}>
                            <ul class="mega-menu-row">

                              <li class="mega-menu-col">
                                <a href="bn/#Prepaid" class="">
                                  প্রিপেইড
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/voice/prepaid" class="">
                                      স্বাগতম
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/prepaid/youth" class="">
                                      ইয়ুথ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/prepaid" class="">
                                      অপরাজিতা
                                    </a>
                                  </li>
                                </ul>
                                <a href="#/bn/vas" class="">
                                  ভ্যাস
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="https://alljobs.teletalk.com.bd/en/" class="">
                                      নিয়োগ / ফলাফল তথ্য
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="http://teleflix.com.bd/" class="">
                                      টেলিফ্লিক্স
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="bn/#Postpaid" class="">
                                  পোস্টপেইড
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/voice/postpaid/gravity" class="">
                                      গ্র্যাভিটি
                                    </a>
                                  </li>
                                </ul>
                                <a href="#/bn/customer-care" class="">
                                  গ্রাহক সেবা
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/customer-care-point" class="">
                                      গ্রাহক সেবা কেন্দ্র
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/customer-care-center/call-center" class="">
                                      কল সেন্টার
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="" class="">
                                  ইন্টারনেট
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="" class="">
                                      আগামী ডাটা প্যাক
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="" class="">
                                      বর্ণমালা ডাটা প্যাক
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="" class="">
                                      অপরাজিতা ডাটা প্যাক
                                    </a>
                                  </li>
                                </ul>
                                <a href="/#offer" class="">
                                  অফার
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="" class="">
                                      বন্ধ সিম অফার
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="" class="">
                                      অপরাজিতা
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="" class="">
                                      রেট কাটার অফার
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="bn/#International-Roaming" class="">
                                  ইন্টারন্যাশনাল রোমিং
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/voice/international-roaming" class="">
                                      ইন্টারন্যাশনাল রোমিং বিস্তারিত
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/voice/international-roaming/international-roaming-map" class="">
                                      ইন্টারন্যাশনাল রোমিং ম্যাপ
                                    </a>
                                  </li>
                                </ul>
                                <a href="#/bn/customer-care-center/others" class="">
                                  অন্যান্য
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="/bn/tenders" class="">
                                      দরপত্র
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li class="">
                          <a href="/bn/image-gallery">
                            কোম্পানী
                          </a>
                        </li>

                        <li class="sf-more-li"><a>...</a><ul><li class="">
                          <a href="#/bn/other" class="sf-with-ul">
                            যোগাযোগ
                          </a><span class="sf-menu-item-mobile-toggler"></span>
                          <div class="mega-menu" style={{ display: "none", marginTop: "5px" }}>
                            <ul class="mega-menu-row">

                              <li class="mega-menu-col">
                                <a href="#/bn/others/faq" class="">
                                  প্রায়শই জিজ্ঞাসিত প্রশ্ন
                                </a>
                                <ul style={{ left: "100%" }}>
                                  <li class="">
                                    <a href="#/bn/others/faq/faq-crbt" class="">
                                      সিআরবিটি বিষয়ক এফএকিউ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/others/faq/faq-free-online-class" class="">
                                      ফ্রি অনলাইন ক্লাসের এফএকিউ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/others/act-policy" class="">
                                      আইন ও নীতিমালা
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/others/teletalk-4g" class="">
                                      টেলিটক ৪জি এফএকিউ
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="/bn/others/archives/tbl-circular" class="">
                                  অফিস আদেশ ও অনাপত্তিপত্র
                                </a>
                                <a href="/bn/tenders" class="">
                                  দরপত্র
                                </a>
                                <a href="#/bn/others/letter-teo-regarding-mayer-hashi-sim" class="">
                                  মায়ের হাসি সীম বিতরণের জন্য চিঠি
                                </a>
                                <a href="http://www.acc.org.bd/" class="">
                                  ১০৬ দুদক হটলাইন
                                </a>
                                <a href="#/en/complaint" class="">
                                  অভিযোগ
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                          <li class="" style={{ display: "none" }}>
                            <a href="#/bn/about" class="sf-with-ul">
                              আমাদের কথা
                            </a><span class="sf-menu-item-mobile-toggler"></span>
                            <div class="mega-menu" style={{ display: "none", marginTop: "5px" }}>
                              <ul class="mega-menu-row">

                                <li class="mega-menu-col">
                                  <a href="#/bn/about/corporate-information" class="">
                                    কর্পোরেট তথ্য
                                  </a>
                                  <ul>
                                    <li class="">
                                      <a href="#/bn/about/corporate-information/csr" class="">
                                        কর্পোরেট সামাজিক দায়িত্ব
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#/bn/about/corporate-information/management-information" class="">
                                        ম্যানেজমেন্ট সম্পর্কে
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#/bn/about/corporate-information/board-directors" class="">
                                        বোর্ড অব ডিরেক্টর্স
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#/bn/about/corporate-information/organization-structure" class="">
                                        প্রতিষ্ঠান কাঠামো
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#/bn/about/corporate-information/privacy-policy" class="">
                                        গোপনীয়তা নীতি
                                      </a>
                                    </li>
                                  </ul>
                                  <a href="#/bn/about/career" class="">
                                    চাকরী সম্পর্কিত
                                  </a>
                                  <ul>
                                    <li class="">
                                      <a href="#/bn/about/career/why-join-teletalk" class="">
                                        যে কারণে যোগ দেবেন টেলিটক
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#/bn/about/career/vacant-position" class="">
                                        যেসব পদ খালি আছে
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#/bn/about/career/apply-internship" class="">
                                        ইন্টার্নশিপের আবেদন
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#/bn/about/career/notice" class="">
                                        নোটিস
                                      </a>
                                    </li>
                                  </ul>
                                  <a href="#/bn/about/financial-and-compliance-issues" class="">
                                    অর্থনৈতিক এবং কমপ্লাইন্স বিষয়াবলী
                                  </a>
                                  <ul>
                                    <li class="">
                                      <a href="#/bn/about/financial-and-compliance-issues/annual-report" class="">
                                        বার্ষিক প্রতিবেদন
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#/bn/about/financial-and-compliance-issues/apa" class="">
                                        এপিএ
                                      </a>
                                    </li>
                                    <li class="">
                                      <a href="#/bn/about/financial-and-compliance-issues/nis" class="">
                                        এনআইএস
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </li><li class="">
                            <a href="https://mujib100.gov.bd/">
                              মেইন মেনু
                            </a>
                          </li></ul></li><li class="sf-xl-hidden">
                          <a href="#/bn/other" class="sf-with-ul">
                            অন্যান্য
                          </a><span class="sf-menu-item-mobile-toggler"></span>
                          <div class="mega-menu" style={{ display: "none", marginTop: "5px", left: "-820.703px" }}>
                            <ul class="mega-menu-row">

                              <li class="mega-menu-col">
                                <a href="#/bn/others/faq" class="">
                                  প্রায়শই জিজ্ঞাসিত প্রশ্ন
                                </a>
                                <ul style={{ left: "100%" }}>
                                  <li class="">
                                    <a href="#/bn/others/faq/faq-crbt" class="">
                                      সিআরবিটি বিষয়ক এফএকিউ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/others/faq/faq-free-online-class" class="">
                                      ফ্রি অনলাইন ক্লাসের এফএকিউ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/others/act-policy" class="">
                                      আইন ও নীতিমালা
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/others/teletalk-4g" class="">
                                      টেলিটক ৪জি এফএকিউ
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="/bn/others/archives/tbl-circular" class="">
                                  অফিস আদেশ ও অনাপত্তিপত্র
                                </a>
                                <a href="/bn/tenders" class="">
                                  দরপত্র
                                </a>
                                <a href="#/bn/others/letter-teo-regarding-mayer-hashi-sim" class="">
                                  মায়ের হাসি সীম বিতরণের জন্য চিঠি
                                </a>
                                <a href="http://www.acc.org.bd/" class="">
                                  ১০৬ দুদক হটলাইন
                                </a>
                                <a href="#/en/complaint" class="">
                                  অভিযোগ
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li class="sf-xl-hidden" style={{ display: "none" }}>
                          <a href="#/bn/about" class="sf-with-ul">
                            আমাদের কথা
                          </a><span class="sf-menu-item-mobile-toggler"></span>
                          <div class="mega-menu" style={{ display: "none", marginTop: "5px", left: "89.5px" }}>
                            <ul class="mega-menu-row">

                              <li class="mega-menu-col">
                                <a href="#/bn/about/corporate-information" class="">
                                  কর্পোরেট তথ্য
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/about/corporate-information/csr" class="">
                                      কর্পোরেট সামাজিক দায়িত্ব
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/about/corporate-information/management-information" class="">
                                      ম্যানেজমেন্ট সম্পর্কে
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/about/corporate-information/board-directors" class="">
                                      বোর্ড অব ডিরেক্টর্স
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/about/corporate-information/organization-structure" class="">
                                      প্রতিষ্ঠান কাঠামো
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/about/corporate-information/privacy-policy" class="">
                                      গোপনীয়তা নীতি
                                    </a>
                                  </li>
                                </ul>
                                <a href="#/bn/about/career" class="">
                                  চাকরী সম্পর্কিত
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/about/career/why-join-teletalk" class="">
                                      যে কারণে যোগ দেবেন টেলিটক
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/about/career/vacant-position" class="">
                                      যেসব পদ খালি আছে
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/about/career/apply-internship" class="">
                                      ইন্টার্নশিপের আবেদন
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/about/career/notice" class="">
                                      নোটিস
                                    </a>
                                  </li>
                                </ul>
                                <a href="#/bn/about/financial-and-compliance-issues" class="">
                                  অর্থনৈতিক এবং কমপ্লাইন্স বিষয়াবলী
                                </a>
                                <ul>
                                  <li class="">
                                    <a href="#/bn/about/financial-and-compliance-issues/annual-report" class="">
                                      বার্ষিক প্রতিবেদন
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/about/financial-and-compliance-issues/apa" class="">
                                      এপিএ
                                    </a>
                                  </li>
                                  <li class="">
                                    <a href="#/bn/about/financial-and-compliance-issues/nis" class="">
                                      এনআইএস
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li class="sf-xl-hidden">
                          <a href="https://mujib100.gov.bd/">
                            ব্লগ
                          </a>
                        </li>

                        <li class="sf-xl-hidden">
                          <a href="https://mujib100.gov.bd/">
                            এফিলিয়েট প্রোগ্রাম
                          </a>
                        </li>
                      </ul>
                    </nav>
                    {/* <!-- eof main_old nav --> */}
                    {/* <!--hidding includes on small devices. They are duplicated in topline--> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- header toggler --> */}

            <span class="toggle_menu" onClick={() => myFunction()} ><span></span></span>
          </header>
        </div>

        <section class="page_slider">
          {/* <div class="flexslider">
            <ul class="slides">
              <li class="ds cover-image flex-slide flex-active-slide" style={{ backgroundImage: "url(https://www.teletalk.com.bd/storage/app/uploads/public/617/7c4/fef/6177c4fef228a749105005.png)", width: "100%", float: "left", marginRight: "-100%", position: "relative", opacity: "1", display: "block", zIndex: "2" }} data-thumb-alt="" >
                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/617/7c4/fef/6177c4fef228a749105005.png" alt="Honorable PM" draggable="false" />
              </li>
              <li class="ds cover-image flex-slide" style={{ backgroundImage: "url(https://www.teletalk.com.bd/storage/app/uploads/public/617/7c3/187/6177c318798cb031948213.png)", width: "100%", float: "left", marginRight: "-100%", position: "relative", opacity: "0", display: "block", zIndex: "1" }} data-thumb-alt="" >
                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/617/7c3/187/6177c318798cb031948213.png" alt="TBL program" draggable="false" />
              </li>
              <li class="ds cover-image flex-slide" style={{ backgroundImage: "url(https://www.teletalk.com.bd/storage/app/uploads/public/60c/c6c/0ec/60cc6c0ec66fc611177286.jpg)", width: "100%", float: "left", marginRight: "-100%", position: "relative", opacity: "0", display: "block", zIndex: "1" }} data-thumb-alt="" >
                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/60c/c6c/0ec/60cc6c0ec66fc611177286.jpg" alt="Md sir" draggable="false" />
              </li>
              <li class="ds cover-image flex-slide" style={{ cursor: "pointer", backgroundImage: "url(https://www.teletalk.com.bd/storage/app/uploads/public/5fe/ce5/151/5fece5151d74b849138024.jpg)", width: "100%", float: "left", marginRight: "-100%", position: "relative", opacity: "0", display: "block", zIndex: "1" }} onclick="location.href='https://www.teletalk.com.bd/bn/voice/prepaid/shotoborsho';" data-thumb-alt="" >
                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/5fe/ce5/151/5fece5151d74b849138024.jpg" alt="Slider 1" draggable="false" />
              </li>
              <li class="ds cover-image flex-slide" style={{ cursor: "pointer", backgroundImage: "url(https://www.teletalk.com.bd/storage/app/uploads/public/5fe/cd4/01d/5fecd401dd469394812204.jpg)", width: "100%", float: "left", marginRight: "-100%", position: "relative", opacity: "0", display: "block", zIndex: "1" }} onclick="location.href='https://www.teletalk.com.bd/bn/offer/special-offer/closed-sim-offer-2019';" data-thumb-alt="" >
                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/5fe/cd4/01d/5fecd401dd469394812204.jpg" alt="Slider of one" draggable="false" />
              </li>
              <li class="ds cover-image flex-slide" style={{ cursor: "pointer", backgroundImage: "url(https://www.teletalk.com.bd/storage/app/uploads/public/5fe/ce6/854/5fece685473de948520493.jpg)", width: "100%", float: "left", marginRight: "-100%", position: "relative", opacity: "0", display: "block", zIndex: "1" }} onclick="location.href='https://www.teletalk.com.bd/bn/voice/prepaid/shotoborsho';" data-thumb-alt="" >
                <img src="https://www.teletalk.com.bd/storage/app/uploads/public/5fe/ce6/854/5fece685473de948520493.jpg" alt="Slider 7" draggable="false" />
              </li>
            </ul>
            <ol class="flex-control-nav flex-control-paging"><li><a href="#" class="flex-active">1</a></li><li><a href="#" class="">2</a></li><li><a href="#" class="">3</a></li><li><a href="#" class="">4</a></li><li><a href="#" class="">5</a></li><li><a href="#" class="">6</a></li></ol>
          </div> */}


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

              <div class="col-12">

                <div class="row">
                  <div class="col-lg-3">
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
                  <div class="col-lg-3">
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
                  <div class="col-lg-3">
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
                  <div class="col-lg-3">
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
                  <div class="col-lg-3">
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
                  <div class="col-lg-3">
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
                  <div class="col-lg-3">
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
                  <div class="col-lg-3">
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
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />.com Domain</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />2 GB SSD Hossting</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />Readymade Website</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />Werdpress theme</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

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
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />.com Domain</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />2 GB SSD Hossting</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />Readymade Website</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />Werdpress theme</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

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
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />.com Domain</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />2 GB SSD Hossting</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />Readymade Website</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />Werdpress theme</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

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
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />.com Domain</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />2 GB SSD Hossting</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />Readymade Website</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />Werdpress theme</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

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
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />.com Domain</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />2 GB SSD Hossting</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />Readymade Website</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />Werdpress theme</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

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
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />.com Domain</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />2 GB SSD Hossting</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />Readymade Website</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />Werdpress theme</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
                        <li style={{ background: "rgb(255, 227, 227)", borderRadius: "5px" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>

                        <li style={{ background: "white" }}><input class="form-check-input custom-check" type="checkbox" value="" id="flexCheckDefault" />x</li>
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
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col-md-4 ">
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
                <div class="col-md-4 ">
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
                <div class="col-md-4 ">
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
                <div class="col-md-4 ">
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
                <div class="col-md-4 ">
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
                <div class="col-md-4 ">
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




        <section class="footer">
          <footer class="s-pt-35 s-pb-45">
            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-10">
                  <div class="row">
                    <div class="divider-20 d-none d-xl-block"></div>

                    <div class="col-12 col-sm-6 col-md-3 animate animated fadeInUp" data-animation="fadeInUp">
                      <div class="widget widget_archive">
                        <h5 class="widget-title">ট্যারিফ এবং চার্জসমূহ</h5>
                        <ul class="footer-menu">
                          <li>
                            <a href="#/bn/voice"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              ভয়েজ প্যাকেজ</a>
                          </li>
                          <li>
                            <a href="/bn/Internet-offers?type=regular&amp;count=yes"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              ডেটা প্যাকেজ</a>
                          </li>
                          <li>
                            <a href="https://teletalk.com.bd/bn/vas/teletalk-mobile-tv"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              মোবাইল টিভি</a>
                          </li>

                        </ul>
                      </div>
                      <div class="divider-30 divider-md-0"></div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-3 animate animated fadeInUp" data-animation="fadeInUp">
                      <div class="widget widget_archive">
                        <h5 class="widget-title">দরকারী লিংকসমূহ</h5>
                        <ul class="footer-menu">
                          <li>
                            <a href="https://ptd.gov.bd"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              PTD</a>
                          </li>
                          <li>
                            <a href="http://www.telecomdept.gov.bd/"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              DoT</a>
                          </li>
                          <li>
                            <a href="http://www.btrc.gov.bd/"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              BTRC</a>
                          </li>
                          <li>
                            <a href="http://www.btcl.gov.bd/"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              BTCL</a>
                          </li>
                          <li>
                            <a href="http://www.bsccl.com/"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              BSCCL</a>
                          </li>
                          <li>
                            <a href="https://www.tss.com.bd/"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              TSS</a>
                          </li>
                          <li>
                            <a href="http://bcsl.gov.bd/"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              BCSL</a>
                          </li>
                          <li>
                            <a href="http://www.bscl.gov.bd/"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              BSCL</a>
                          </li>

                        </ul>
                      </div>
                      <div class="divider-30 divider-md-0"></div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-3 animate animated fadeInUp" data-animation="fadeInUp">
                      <div class="widget widget_archive">
                        <h5 class="widget-title">গ্রাহক সেবা</h5>
                        <ul class="footer-menu">
                          <li>
                            <a href="#/bn/customer-care-center"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              কাস্টমার কেয়ার সেন্টার</a>
                          </li>
                          <li>
                            <a href="#/bn/customer-care-point"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              কাস্টমার কেয়ার পয়েন্ট</a>
                          </li>
                          <li>
                            <a href="#/bn/customer-care-center/others/teletalk-service-point"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              টেলিটক সেবা কেন্দ্র</a>
                          </li>

                        </ul>
                      </div>
                      <div class="divider-30 divider-md-0"></div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-3 animate animated fadeInUp" data-animation="fadeInUp">
                      <div class="widget widget_archive">
                        <h5 class="widget-title">অন্যান্য</h5>
                        <ul class="footer-menu">
                          <li>
                            <a href="https:/.bd/bn/others/archives/tbl-circular"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              অফিস আদেশ ও অনাপত্তিপত্র</a>
                          </li>
                          <li>
                            <a href="/bn/tenders"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              দরপত্র</a>
                          </li>
                          <li>
                            <a href="http://www.bsccl.com/essay_compe/"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              অনলাইন প্রবন্ধ প্রতিযোগিতা</a>
                          </li>
                          <li>
                            <a href="/bn/coverage-map"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              নেটওয়ার্ক কভারেজ ম্যাপ</a>
                          </li>
                          <li>
                            <a href="#/bn/about/career"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              চাকরী সম্পর্কিত</a>
                          </li>
                          <li>
                            <a href="#/bn/others/contact-us"><i class="fa fa-angle-right" aria-hidden="true"></i>
                              যোগাযোগ করুন</a>
                          </li>

                        </ul>
                      </div>
                      <div class="divider-30 divider-md-0"></div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-2">
                  <div class="row">
                    <div class="divider-20 d-none d-xl-block"></div>


                    <div class="col-12 col-sm-6 col-md-12 animate animated fadeInUp" data-animation="fadeInUp">
                      <div class="widget widget_mailchimp">
                        <h5 class="widget-title">PayraSoft অ্যাপ</h5>
                        <ul class="footer-menu">
                          <li><a href="app" target="_blank"><img src="https://www.teletalk.com.bd/themes/teletalk/assets/main/images/play.png" /></a></li>
                        </ul>


                      </div>
                      <div class="my-20">
                        <ul class="social-icon-footer">
                          <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f fa-2x"></i></a></li>
                          <li><a href="https://www.linkedin.com/company/" target="_blank"><i class="fab fa-linkedin fa-2x" aria-hidden="true"></i></a>
                          </li>
                          <li><a href="https://www.youtube.com/channel/" target="_blank"><i class="fab fa-youtube fa-2x" aria-hidden="true"></i>
                          </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

        </section>
        <section class="page_copyright ds s-py-35">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-12">
                <ul class="footer-link">
                  <li>স্বত্ব<span class="copyright_year">©</span> PayraSoft</li>
                  <li><a href="#/bn/sitemap">সাইটম্যাপ</a></li>
                  {/* <!-- <li><a href="#/bn/terms-of-use">ব্যবহারের শর্তাবলী</a></li>--> */}
                  <li><a href="#/bn/privacy-policy">গোপনীয়তা নীতিমালা</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- eof #box_wrapper --> */}
    </div>
  );
};

export default Test;