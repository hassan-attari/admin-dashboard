import { Outlet } from "react-router-dom";
import logo from "@assets/images/logo.svg";
import ChangeTheme from "../components/change-theme";
import ChangeLanguage from "../components/change-language";
import avatar from '@assets/images/avatar.jpg';
import { useAppContext } from "../contexts/app/app-context";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MainLayout = () => {
  const {language} = useAppContext();
  const [collapseSidebar, setCollapseSidebar] = useState(false);
  const {t} = useTranslation();
  return (
    <div className="wrapper" style={{ minHeight: "100vh" }}>
      <nav className={`sidebar ${collapseSidebar ? 'collapsed' : ''}`}>
        <div className="sidebar-content">
          <a className="sidebar-brand d-flex flex-column align-items-center pt-0 mb-0">
            <img src={logo} style={{ height: "80px" }} />
            <p className="mb-0" style={{fontSize: '90%'}}>{t('mainLayout.sidebar.subtitle')}</p>
          </a>

          <ul className="sidebar-nav pe-0">
            <li className="sidebar-header fw-bolder fs-lg">{t('mainLayout.sidebar.courseManagement')}</li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-video align-middle me-2"
                >
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>

                <span className="align-middle me-2">{t('mainLayout.sidebar.allCourses')}</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-video align-middle me-2"
                >
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>

                <span className="align-middle me-2">{t('mainLayout.sidebar.coursesCategory')}</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-percent align-middle me-2"
                >
                  <line x1="19" y1="5" x2="5" y2="19"></line>
                  <circle cx="6.5" cy="6.5" r="2.5"></circle>
                  <circle cx="17.5" cy="17.5" r="2.5"></circle>
                </svg>

                <span className="align-middle me-2">{t('mainLayout.sidebar.courseDiscount')}</span>
              </a>
            </li>
            <li className="sidebar-header fw-bolder fs-lg">{t('mainLayout.sidebar.userManagement')}</li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-user align-middle me-2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>

                <span className="align-middle me-2">{t('mainLayout.sidebar.teacherManagement')}</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-users align-middle me-2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>

                <span className="align-middle me-2">{t('mainLayout.sidebar.studentManagement')}</span>
              </a>
            </li>
            <li className="sidebar-header fw-bolder fs-lg">{t('mainLayout.sidebar.blogManagement')}</li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-tag align-middle me-2"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>

                <span className="align-middle me-2">{t('mainLayout.sidebar.tagManagement')}</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-file-text align-middle me-2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>

                <span className="align-middle me-2">{t('mainLayout.sidebar.postManagement')}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main">
        <nav className="navbar navbar-expand navbar-light navbar-bg">
          <a className="sidebar-toggle" onClick={() => setCollapseSidebar(!collapseSidebar)}>
            <i className="hamburger align-self-center"></i>
          </a>
          <div className="d-flex align-items-center gap-3">
          <ChangeLanguage />
          <ChangeTheme />
          </div>
          <img src={avatar} className={`avatar img-fluid rounded-circle ${language === 'fa' ? 'me-auto' : 'ms-auto'}`}/>
        </nav>
        <main className="content">
          <div className="container-fluid p-0">
            <Outlet />
          </div>
        </main>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <p className="mb-0">
                  © 2023 -{" "}
                  <a href="index.html" className="text-muted">
                    {t('classbon')}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
