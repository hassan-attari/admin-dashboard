import { Outlet } from "react-router-dom";
import usFlag from "@assets/images/us.png";
import faFlag from "@assets/images/fa.png";

const IdentityLayout = () => {
  return (
    <>
      <div className="main d-flex justify-content-center w-100">
        <nav className="navbar shadow-sm">
          <div className="dropdown">
            <a
              className="nav-flag dropdown-toggle"
            >
              <img src={usFlag} alt="English" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-end  show"
            >
              <a className="dropdown-item fw-bolder" style={{textAlign: 'right'}}>
                <img
                  src={faFlag}
                  width="20"
                  className="ms-2"
                />
                <span className="align-middle ">فارسی</span>
              </a>
              <a className="dropdown-item fw-bolder" style={{textAlign: 'right'}}>
                <img
                  src={usFlag}
                  width="20"
                  className="ms-2"
                />
                <span className="align-middle">English</span>
              </a>
            </div>
          </div>
        </nav>
        <main className="content d-flex p-0">
          <div
            className="container d-flex flex-column"
            style={{ direction: "rtl" }}
          >
            <div className="row h-100">
              <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div className="d-table-cell align-middle">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default IdentityLayout;
