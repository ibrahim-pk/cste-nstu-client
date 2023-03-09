import React from 'react';

const Faq = () => {
    return (
      <div className='max-w-screen-lg mx-auto '>

        <div
          tabIndex={0}
          className="my-3 collapse collapse-plus border border-base-300 bg-base-100  rounded-box"
        >
          <div className="collapse-title  bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content text-xl font-medium">
            How can I pay registration fee in the online?
          </div>
          <div className="collapse-content  bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>Sure.You can pay.Go to the navbar and click payment menu.Then Select registration option and fill up the form and pay the fixed amount.<a className='text-blue-700' href='https://cste-dept.web.app/registrationform'>Click Here</a></p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="my-3 collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title  bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content text-xl font-medium">
            Blood Support
          </div>
          <div className="collapse-content collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>
                Go to the faculty option from the navbar.Then select student option.You can see student details with blood group and contact number.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="my-3 collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title  bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content text-xl font-medium">
            How can I make cover page ?
          </div>
          <div className="collapse-content collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            <p>It's make very easy.Click Cover page from the academic option.Then fillup details and make cover page.</p>
          </div>
        </div>
      </div>
    );
};

export default Faq;