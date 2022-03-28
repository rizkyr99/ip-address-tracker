import React from 'react';

const Address = ({ address }) => {
  return (
    <div className='address'>
      <div className='address__item ip-address'>
        <h6 className='address__title'>IP ADDRESS</h6>
        <h3 className='address__data'>{address.ip}</h3>
      </div>
      <div className='address__item ip-address'>
        <h6 className='address__title'>LOCATION</h6>
        <h3 className='address__data'>
          {address.city}, {address.country}
        </h3>
      </div>
      <div className='address__item ip-address'>
        <h6 className='address__title'>TIMEZONE</h6>
        <h3 className='address__data'>{address.timezone}</h3>
      </div>
      <div className='address__item ip-address'>
        <h6 className='address__title'>ISP</h6>
        <h3 className='address__data'>{address.isp}</h3>
      </div>
    </div>
  );
};

export default Address;
