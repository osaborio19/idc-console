import React, { memo } from "react";
import logo from "@intc/dlux-bootstrap/dist/images/logos/unboxed/logo-black-full.svg";

import * as Icon from 'react-bootstrap-icons';


export default memo(function Footer() {
  return (
    <footer className="bg-carbon-tint2 p-2 mt-auto">
      <div className="row m-0">
        <div className="col-md-2 align-self-center">
          <img src={logo} className="footer-md-logo d-none d-md-block img-fluid mx-auto" alt="Intel logo"/>
        </div>

        <div className="col-8 col-offset-3 mt-auto pt-4 ">


          <div className="p-0">
            <a className="footer-link-1 btn me-3 p-0"
               href="https://www.intel.com/content/www/us/en/company-overview/company-overview.html">
               Company Information
            </a>
            <a className="footer-link-1 btn me-3 p-0"
               href="https://www.intel.com/content/www/us/en/support/contact-intel.html">
               Our Commitment
            </a>
            <a className="footer-link-1 btn me-3 p-0"
               href="https://www.intel.com/content/www/us/en/diversity/diversity-at-intel.html">
               Diversity & Inclusion
            </a>
            <a className="footer-link-1 btn me-3 p-0"
               href="https://www.intel.com/content/www/us/en/corporate-responsibility/corporate-responsibility.html">
               Communities
            </a>
            <a className="footer-link-1 btn me-3 p-0"
               href="https://www.intc.com/">
               Investor Relations
            </a>                                  
            <a className="footer-link-1 btn me-3 p-0"
               href="https://jobs.intel.com/">
               Jobs
            </a>
            <a className="footer-link-1 btn me-3 p-0">Newsroom</a>
            <a className="footer-link-1 btn me-3 p-0"
               href="https://www.intel.com/content/www/us/en/support/contact-intel.html">
               Contact Us
            </a>
        </div>
          <div className="mt-3 p-0">
            <a className="me-2 p-0" href="https://www.facebook.com/Intel">

              <Icon.Facebook size={25} color="black" />
            </a>
            <a className="p-0 me-3" href="https://twitter.com/intel">
              <Icon.Twitter size={25} color="black"  />           
            </a>
            <a className="p-0 me-3" href="https://www.linkedin.com/company/intel-corporation">
              <Icon.Linkedin size={25} color="black"/>             
            </a>  
            <a className="p-0 me-3" href="https://www.youtube.com/user/channelintel?sub_confirmation=1">
              <Icon.Youtube size={25} color="black" />   
            </a>  
            <a className="p-0 me-3" href="https://www.instagram.com/intel/">
              <Icon.Instagram size={25} color="black"/>
            </a>
          </div>
          <div className="p-0 mt-3 mb-4">
            <a className="footer-link-2 btn me-2 p-0"
               href="https://www.intel.com/">
               © Intel Corporation
            </a>
            <a className="footer-link-2 btn me-2 p-0"
               href="https://www.intel.com/content/www/us/en/legal/terms-of-use.html">
               Terms of Use
            </a>
            <a className="footer-link-2 btn me-2 p-0"
               href="https://www.intel.com/content/www/us/en/legal/trademarks.html">
               *Trademarks
            </a>
            <a className="footer-link-2 btn me-2 p-0"
               href="https://www.intel.com/content/www/us/en/privacy/intel-cookie-notice.html">
               Cookies
            </a>                                  
            <a className="footer-link-2 btn me-2 p-0"
               href="https://www.intel.com/content/www/us/en/privacy/intel-privacy-notice.html">
               Privacy
            </a>
            <a className="footer-link-2 btn me-2 p-0"
               href="#">
               Supply Chain Transparency
            </a>
            <a className="footer-link-2 btn me-2 p-0"
               href="#">
               Site Map
            </a>
          </div>
          <p className="footer-link-2 p-0">
            Intel technologies may require enabled hardware, software or service activation. // No product or component can be absolutely secure. // Your costs and results may vary. // Performance varies by use, configuration and other factors. // See our complete legal <u><a href="https://edc.intel.com/content/www/us/en/products/performance/benchmarks/overview/#GUID-26B0C71C-25E9-477D-9007-52FCA56EE18C">Notices and Disclaimers</a></u>. // Intel is committed to respecting human rights and avoiding complicity in human rights abuses. See Intel’s <a href="https://www.intel.com/content/www/us/en/policy/policy-human-rights.html"><u>Global Human Rights Principles</u></a>. Intel’s products and software are intended only to be used in applications that do not cause or contribute to a violation of an internationally recognized human right.
          </p>
        </div>
      </div>
    </footer>
  );
});
