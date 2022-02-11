import React from 'react';
import logo from '../../img/payrasoft logo.png';

const Header = () => {
    return (
        <>
         <div class="page_header_wrapper ls affix-wrapper" style={{ height: "98.3906px" }}>
          <header class="page_header ls justify-nav-end affix" id="layout-header">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xl-2  col-lg-2 col-md-3">
                  <ul class="lincludes-top d-md-none d-flex justify-content-between">
                    <li class="mx-1 d-flex  d-inline-block">
                      <a href="#/bn/about">আমাদের সম্পর্কে</a>
                      <a class="mx-2" href="#/en">English</a>
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
                          <a href="" id="topline-search-button ">
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
                        <li class="phone-device-view">
                          <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-user-circle-o d-none" aria-hidden="true"></i> আমার একাউন্ট <i class="fa fa-angle-down" aria-hidden="true"></i>
                          </a>
                          <div class="dropdown-menu">
                            <a class="" href="https://www.teletalk.com.bd/bn/login">লগ ইন</a>
                            <a class="" href="https://www.teletalk.com.bd/bn/signup">সাইন আপ</a>
                          </div>
                        </li>
                        <li>
                          <a  class="phone-view" href="#/en">English</a>
                        </li>

                      </ul>
                    </div>
                  </div>


                  <div class="nav-wrap">
                    {/* <!-- main_old nav start --> */}
                    <nav class="top-nav" id="myNav">

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
          </header>
        </div>   
        </>
    );
};

export default Header;