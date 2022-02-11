import React from 'react';
import './Contact.css';
import breadcrumb from '../../img/contact_us_1692_490.jpg';

const Contact = () => {
  return (
    <>
      <div class="main_content">
        {/* <!-- banner-->
        <!-- for the templates other than basic pages-->

        <!-- for basic pages banner only-->


        <!-- for basic pages banner only-->

        <!-- breadcrumb--> */}
        <div id="page-breadcrumb" class="breadcrumb">
          <div class="container">
            <ul>
              <li class=""><a href="/bn">মূল পাতা <span style={{marginLeft:'5px',color:'silver'}}>&get</span></a></li>
              <li class="active">যোগাযোগ করুন</li>
            </ul>
          </div>
        </div>

        {/* <!-- editors for content manager--> */}
        <div class="tabs">
        </div>




        {/* <!-- main content--> */}
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-sm-offset-0 col-md-8 col-md-offset-2">
              {/* <!-- dynamic bootstrap class and offset--> */}
              <div class="region region-content">
                <div id="block-block-180" class="block block-block">


                  <div class="content">
                    <h1 class="centered">যোগাযোগ করুন</h1>
                    <p><img alt="Contact US"
                      src={breadcrumb} />
                    </p>
                  </div>
                </div>
                <div class="generic_contact_us">
                  <div class="contact_select_form_area contact-top-section">
                    <div class="contact_select_form clearfix">
                      <label>যোগাযোগের কারণ নির্বাচন করুন</label>
                      <form id="contact_select_frm" action="/contact-us" method="get">
                        <div class="custom-select">
                          <select name="form_type" id="contact_frm_id">
                            <option value="1037"> ব্যবসায়িক</option>
                            <option value="1217"> STAR</option>
                            <option value="2940"> বিনিয়োগকারী সম্পর্ক</option>
                            <option value="6437" selected=""> সাধারণ</option>
                            <option value="7223"> সোশ্যাল বাজ</option>
                            <option value="8198"> Digital</option>
                          </select>
                          <div class="wt-loader hidden"></div>
                        </div>
                      </form>
                    </div>

                  </div>
                  <div class="contact_select_form_area contact-content-section">
                    <div id="node-6676" class="node node-webform clearfix"
                      about="/bn/webform/general-enquiries" typeof="sioc:Item foaf:Document">


                      <h2><a href="/bn/webform/general-enquiries">General Enquiries</a></h2>
                      <span property="dc:title" content="General Enquiries"
                        class="rdf-meta element-hidden"></span>

                      <div class="content">
                        <div
                          class="field field-name-body field-type-text-with-summary field-label-hidden">
                          <div class="field-items">
                            <div class="field-item even" property="content:encoded">
                              {/* <!--?php
                              global $language;
if($language---> */}
                              <p>কর্পোরেট কমিউনিকেশন ডিপার্টমেন্ট</p>
                              <div class="contact-info">
                                <h4>গ্রামীণফোন</h4>
                                <p>জিপি হাউস<br />
                                  বসুন্ধরা, বারিধারা<br />
                                  ঢাকা-১২২৯</p>
                                <p><strong>ফোন:</strong> +৮৮-০২-২২২২৮২৯৯০,
                                  +৮৮০-১৭৯৯৮৮২৯৯০<br /><strong>ফেক্স:</strong>&nbsp;+৮৮-০২-৮৪১৬০২৬
                                </p>
                                <p><strong>ই-মেইল করুন:</strong> <a
                                  href="mailto:info@grameenphone.com">info@grameenphone.com</a>
                                </p>
                                <p><br />
                                  &nbsp;</p>
                              </div>
                              {/* <!--?php } ?--> */}
                            </div>
                          </div>
                        </div>
                        <form class="webform-client-form webform-client-form-6676"
                          action="/bn/webform/general-enquiries" method="post"
                          id="webform-client-form-6676" accept-charset="UTF-8"
                          novalidate="novalidate">
                          <div>
                            <div class="webform-progressbar">



                            </div>
                            <h3 class="contact_form_title">আমাদের লিখুন
                            </h3>
                            <div
                              class="form-item webform-component webform-component-textfield webform-component--general-nme">
                              <label for="edit-submitted-general-nme">নাম <span
                                class="form-required"
                                title="This field is required.">*</span></label>
                              <input required="required" type="text"
                                id="edit-submitted-general-nme" name="submitted[general_nme]"
                                value="" size="60" maxlength="128" class="form-text required" />
                            </div>
                            <div
                              class="form-item webform-component webform-component-textfield webform-component--general-number">
                              <label for="edit-submitted-general-number">মোবাইল নম্বর <span
                                class="form-required"
                                title="This field is required.">*</span></label>
                              <input required="required" type="text"
                                id="edit-submitted-general-number"
                                name="submitted[general_number]" value="" size="60"
                                maxlength="128" class="form-text required" />
                            </div>
                            <div
                              class="form-item webform-component webform-component-textarea webform-component--message">
                              <label for="edit-submitted-message">বার্তা (অভিযোগ বা প্রশ্নের
                                বিবরণ) <span class="form-required"
                                  title="This field is required.">*</span></label>
                              <div
                                class="form-textarea-wrapper resizable textarea-processed resizable-textarea">
                                <textarea required="required" id="edit-submitted-message"
                                  name="submitted[message]" cols="60" rows="5"
                                  class="form-textarea required"></textarea>
                                <div class="grippie"></div>
                              </div>
                            </div>
                            <div
                              class="form-item webform-component webform-component-email webform-component--general-email">
                              <label for="edit-submitted-general-email">ই-মেইল (যদি থাকে) </label>
                              <input class="email form-text form-email" type="email"
                                id="edit-submitted-general-email"
                                name="submitted[general_email]" size="60" />
                            </div>
                            <input type="hidden" name="details[sid]" /><input type="hidden"
                              name="details[page_num]" value="1" /><input type="hidden"
                                name="details[page_count]" value="1" /><input type="hidden"
                                  name="details[finished]" value="0" /><input type="hidden"
                                    name="form_build_id"
                                    value="form-v6AncfygC8WGxAezcimhIzWB0zce-oIKqeSIYaH4fT8" /><input
                              type="hidden" name="form_id" value="webform_client_form_6676" />
                            <div class="form-actions" /><input
                              class="webform-submit button-primary form-submit" type="submit"
                              name="op" value="সাবমিট" /></div>

                        </form>
                      </div>



                    </div>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="region region-content-bottom">
                <div id="block-block-114" class="block block-block">


                  <div class="content">
                    <p style={{display:'none'}}>grameenphone</p>
                  </div>
                </div>
                <div id="block-block-133" class="block block-block">


                  <div class="content">
                    <div class="bottom-share-blocks clearfix">
                      <h4>এই পেজ টি আপনার বন্ধু ও পরিবারের সাথে শেয়ার করুন</h4>
                      <ul>
                        <li class="share-icon-fc"><a
                          href="https://www.facebook.com/sharer/sharer.php?u=https://www.grameenphone.com/bn/contact-us"
                          target="_blank">
                          <svg fill="none" viewBox="0 0 22 40" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M5.8 40V21.6H0V13.6H5.8V10.4C5.8 5 9.8 0 14.6 0H21V8.2H14.4C13.8 8.2 13 9 13 10.4V13.6H20.8V21.8H13V40H5.8Z"
                              fill="#000"></path>
                          </svg></a></li>
                        <li class="share-icon-in"><a
                          href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.grameenphone.com/bn/contact-us"
                          target="_blank">
                          <svg fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="m32 19.6v12.4h-6.8v-11.6c0-2.8-1-4.8-3.4-4.8-1.8 0-3 1.4-3.6 2.6-0.2 0.4-0.2 1.2-0.2 1.8v12h-7s0.2-19.6 0-21.6h7v3c1-1.4 2.6-3.6 6.2-3.6 4.4 0 7.8 3.2 7.8 9.8zm-28.2-19.6c-2.2 0-3.8 1.6-3.8 3.8 0 2 1.4 3.8 3.8 3.8s3.8-1.6 3.8-3.8-1.4-3.8-3.8-3.8zm-3.4 32h6.8v-21.6h-6.8v21.6z"
                              fill="#000"></path>
                          </svg></a></li>
                        <li class="share-icon-tw"><a
                          href="https://twitter.com?u=https://www.grameenphone.com/bn/contact-us"
                          target="_blank">
                          <svg fill="none" viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="m40 3.5389c-1.4815 0.58982-3.0501 1.0188-4.7059 1.1796 1.6848-0.93834 2.992-2.4129 3.602-4.1823-1.5976 0.85791-3.3405 1.5013-5.2287 1.8499-1.4815-1.4745-3.602-2.3861-5.955-2.3861-4.5316 0-8.2208 3.4048-8.2208 7.5603 0 0.58981 0.0581 1.1796 0.2034 1.7158-6.8264-0.29491-12.869-3.2976-16.906-7.882-0.69717 1.126-1.1038 2.4129-1.1038 3.807 0 2.6274 1.4524 4.9598 3.6601 6.3002-1.3362-0.0536-2.6144-0.3753-3.7182-0.9383v0.1072c0 3.673 2.8177 6.7293 6.594 7.4263-0.69717 0.1609-1.4234 0.2681-2.1496 0.2681-0.52288 0-1.0458-0.0536-1.5396-0.134 1.0458 3.0026 4.0668 5.201 7.6688 5.2547-2.8467 2.0107-6.3907 3.2171-10.254 3.2171-0.66812 0-1.3072-0.0268-1.9463-0.1072 3.6311 2.1447 7.9593 3.4048 12.578 3.4048 15.105 0 23.355-11.555 23.355-21.555l-0.0291-0.99196c1.6268-1.0456 3.0211-2.3861 4.0959-3.9142z"
                              fill="#010002"></path>
                          </svg></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div >

    </>
  );
};

export default Contact;