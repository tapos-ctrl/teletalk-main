import React from 'react';
import './Footer.css';
import logo from '../../img/payrasoft logo.png';
import facebook from '../../img/facebook.webp';
import instagram from '../../img/instagram.webp';
import linkedin from '../../img/linkedin.webp';
import youtube from '../../img/youtube.webp';
import tiktok from '../../img/tiktok-sm.webp'


const Footer = () => {
    return (
        <div>
            <footer class="">
                <div class="">
                    <div class="10ms-logo">
                    </div>
                </div>
                <div class="container pt-5 d-flex justify-content-between">
                    <div class="d-flex all-box">
                        <div class="widget col-md-4 col-sm-12 mb-5 ">
                            <div class="">
                                <div class="footer-logo">
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                            <h3 class="widget-title text-left">আমাদের মোবাইল অ্যাপ
                                <a rel="noreferrer" target="_blank" class="tt-text-green-700 hover:tt-underline" href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool"><span style={{ color: "green" }}>ডাউনলোড করুন</span></a></h3>
                            <div class="tt-mb-5 tt-flex tt-justify-center md:tt-justify-start">
                            </div>
                        </div>
                        <div class="widget col-md-2 col-sm-6 box-two">
                            <h3 class="widget-title foote-title my-2"> কোম্পানি </h3>
                            <ul class="px-0 mx-0" >
                                <li><a href="/careers"> ক্যারিয়ার </a></li>
                                <li ><a href="/privacy-policy"> প্রাইভেসি পলিসি </a></li>
                                <li ><a href="/refund-policy"> রিফান্ড পলিসি </a></li>
                            </ul>
                        </div>
                        <div class="widget col-md-2 col-sm-6 box-three">
                            <h3 class="widget-title my-2"> অন্যান্য </h3>
                            <ul class="px-0 mx-0"  >
                                <li ><a target="_blank" href=""> ব্লগ </a></li>
                                <li ><a target="_blank" href=""> অ্যাফিলিয়েট হতে চাইলে </a></li>
                                <li ><a href=""> ক্র্যাশ কোর্স </a></li>
                            </ul>
                        </div>
                        <div class="widget col-md-4 col-sm-12 box-for">
                            <h3 class="widget-title my-2"> সামাজিক যোগাযোগ মাধ্যমে আমরা </h3>
                            <ul class="mx-0 px-0">
                                <li ><strong >Contact: </strong><a href="" class=""><span style={{color:"green"}} >0961-200-1010</span>  </a></li>
                                <li ><strong >SMS: </strong><span >SMS - 10MSHelp to 26969 (24X7)</span></li>
                                <li ><strong >Email: </strong><a href="" class=""> <span style={{color:"green"}}>support@10minuteschool.com </span></a></li>
                            </ul>
                            <div >
                                <div class="footer-icon d-flex">
                                    <a href="" target="_blank"><img src={facebook} alt="facebook" class="image-loaded" /></a>
                                    <a href="" target="_blank"><img src={instagram} alt="instagram" class="image-loaded ml-4" /></a>
                                    <a href="" rel="noreferrer" target="_blank"><img src={linkedin} alt="linkedin" class="image-loaded ml-4" /></a>
                                    <a href="" rel="noreferrer" target="_blank"><img src={youtube} alt="youtube" class="image-loaded ml-4" /></a>
                                    <a href="" rel="noreferrer" target="_blank"><img src={tiktok} alt="tiktok" class="image-loaded ml-4" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tt-my-5 tt-border-t tt-border-gray-400 md:tt-hidden">
                </div>
                <hr/>
                <div class="phone-view-icon d-flex mt-5 justify-content-center">
 
                    <div class="d-lg-none d-md-none">
                        <a  href="https://www.facebook.com/10minuteschool/" rel="noreferrer" target="_blank"><img  src={facebook} alt="facebook" class="image-loaded "/></a> 
                        <a  href="https://www.instagram.com/10ms_insta/" rel="noreferrer" target="_blank"><img  src={instagram} alt="instagram" class="image-loaded ml-3"/></a>
                        <a  href="https://www.linkedin.com/company/10ms/" rel="noreferrer" target="_blank"><img  src={linkedin} alt="linkedin" class="image-loaded ml-3"/></a>
                        <a  href="https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw" rel="noreferrer" target="_blank"><img  src={youtube} alt="youtube" class="image-loaded ml-3"/></a>
                        <a  href="https://www.tiktok.com/@10minuteschool?lang=en" rel="noreferrer" target="_blank"><img  src={tiktok} alt="tiktok" class="image-loaded ml-3"/></a> 
                    </div>
                </div>
                <div class="py-4 text-center copy-right-text"> স্বত্ব © ২০১৫-২০২১ টেন মিনিট স্কুল কতৃক সর্বস্বত্ব সংরক্ষিত </div>
            </footer>
        </div>
    );
};

export default Footer;