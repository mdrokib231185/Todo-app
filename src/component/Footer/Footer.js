import React from 'react';

const Footer = () => {
      return (
        <div className='mt-5'>
          <footer class="footer p-10 bg-blue-700 text-neutral-content">
            <div>
              <p className="col-sm">
                &copy;{new Date().getFullYear()} TO DO APP | All rights reserved
                | Terms Of Service | Privacy
              </p>
            </div>

            <div className="mx-auto">
              <span class="footer-title">Social</span>
              <div class="grid grid-flow-col gap-4 all-icon">
                <a className="">
                  <i class="ri-facebook-circle-fill"></i>
                </a>
                <a>
                  <i class="ri-linkedin-box-fill"></i>
                </a>
                <a>
                  <i class="ri-github-fill"></i>
                </a>
              </div>
            </div>
          </footer>
        </div>
      );
};

export default Footer;