import React from 'react';

const Laptop = () => {
  return (
    <div className="window z-50">
      <div className="laptop">
        <div className="base">
          <div className="side top"></div>
          <div className="side bottom"></div>
          <div className="side right"></div>
          <div className="side left"></div>
          <div className="side front"></div>
          <div className="side back"></div>
        </div>
        <div className="lid">
          <div className="side top"></div>
          <div className="side bottom">
            <div className="screen"></div>
          </div>
          <div className="side right"></div>
          <div className="side left"></div>
          <div className="side front"></div>
          <div className="side back"></div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
