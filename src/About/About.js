import React from 'react';
import career from '../img/career.webp';
import './About.css';
import student from '../img/student.webp';
import teacher from '../img/teacher.webp';
import user from '../img/user.webp';
import content from '../img/content.webp';


const About = () => {
    return (
        <div>
            <div className="container">
                <h5 className='text-center title mt-5'>আমাদের অর্জন</h5>
                <div className="row">
                    <div className="col-4 d-none d-md-block">
                        <img src={career} alt="" />
                    </div>
                    <div className="col-lg-8 col-sm-12">
                        <div className="row">
                            <div className="col-6  col-sm-6 my-5">
                                <div className="box-body d-flex">
                                    <div className="image-box">
                                        <img src={teacher} alt="" />
                                    </div>
                                    <div className="text-box ml-3">
                                        <h3>৪৫০+</h3>
                                        <h6>শিক্ষক</h6>
                                    </div>
                                </div>

                            </div>
                            <div className="col-6 my-5  jj">
                                <div className="box-body d-flex">
                                    <div className="image-box">
                                        <img src={content} alt="" />
                                    </div>
                                    <div className="text-box ml-3">
                                        <h3>১৮ হাজার+</h3>
                                        <h6>ভিডিও</h6>
                                    </div>
                                </div>

                            </div>
                            <div className="col-6 my-5">
                                <div className="box-body d-flex">
                                    <div className="image-box">
                                        <img src={student} alt="" />
                                    </div>
                                    <div className="text-box ml-3">
                                        <h3>৯৩ লক্ষ+</h3>
                                        <h6>শিক্ষার্থী</h6>
                                    </div>
                                </div>

                            </div>
                            <div className="col-6 my-5">
                                <div className="box-body d-flex">
                                    <div className="image-box">
                                        <img src={user} alt="" />
                                    </div>
                                    <div className="text-box ml-3">
                                        <h3>৩২ লক্ষ+</h3>
                                        <h6>অ্যাপ ব্যবহারকারী</h6>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;