import React, { useLayoutEffect, useState } from 'react';
import './NavBar.css';

export default function NavBar() {
  const [number, setNumber] = useState(0);
  function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  function getWidth() {
    const width = useWindowSize();
    return width;
  }

  function onChange(e) {
    return setNumber(e.target.value);
  }

  const MenuListItems = (list) => list.map((item) => (
    <div className="nav-item active" key={item}>
      <a className="nav-link" href="/">
        <span>{item}</span>
      </a>
    </div>
  ));

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="container flex-nowrap justify-content-around">
            <a className="navbar-brand" href="/">
              <img src="https://www.sli.do/build/img/common/slido-logo-c79e792d24c65559914b25296bf8ac3d.svg" alt="Slido logo" />
            </a>
            {getWidth() > 500
              ? (
                <div className="navbar-nav list-group-horizontal">
                  {MenuListItems(['Product', 'Solutions', 'Pricing', 'Resources', 'Enterprise', 'Log In'])}
                </div>
              )
              : (
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
              )}
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="container d-flex justify-content-center">
            <i className="input__icon input__icon--index">
              <img src="/build/img/common/icon/hash-b1a7a6b7adbdda5f78ae72647c9d8475.svg" role="img" alt="" />
            </i>
            <label htmlFor="join-event" className="label-input ">
              <span style={{ color: '#fef8e7' }}>Enter code here</span>
              <input name="search" id="join-event" className="form-control" type="search" inputMode="search" placeholder="Enter code here" autoComplete="off" maxLength="32" onChange={onChange} />
              <a href={`https://app.sli.do/?search=${number}`}>
                <button type="submit" className="btn btn-outline-success button-green">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#39AC37" />
                    <path d="M19.1973 14.9998L7.19727 14.9998" stroke="white" strokeWidth="1.54286" />
                    <path d="M14.0967 21.6001L20.0967 15.0001L14.0967 8.4001" stroke="white" strokeWidth="1.54286" />
                  </svg>
                </button>
              </a>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
