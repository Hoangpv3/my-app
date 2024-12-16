'use client';

import "@/app/local.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import menu from "@/public/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
import React, {useState} from "react";

export default function TopNav(){
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () =>{
    setIsCollapsed(!isCollapsed);
  }
    return(
        <nav className="navbar navbar-expand-lg" id="menu">
        <div className="container">
          <Link
            href="/trang-chu"
            className="navbar-brand col-lg-3 me-0"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <span
              className="lazy-load-image-background blur lazy-load-image-loaded"
              style={{
                color: "transparent",
                display: "inline-block",
                height: "50px",
              }}
            >
              <Image
                className="custom-img "
                src={logo}
                alt="pic1"
                width={0}
                height={0}
                style={{
                  objectFit: "contain",
                  width: "100% !important",
                  height: "100% !important",
                }}
              />
            </span>
          </Link>

          <button
            //className="navbar-toggler collapsed"
            className={`navbar-toggler ${isCollapsed ? 'collapsed' : ''}`}
            type="button"
            data-toggle="collapse"
            onClick={toggleCollapse}
            data-target="#navbarsExample11"
            aria-controls="navbarsExample11"
            //aria-expanded="false"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined">
            <Image
                className="custom-img "
                src={menu}
                alt="pic2"
                width={0}
                height={0}
                style={{
                  objectFit: "contain",
                  width: "100% !important",
                  height: "100% !important",
                }}
              />
            </span>
          </button>

          <div
            //className="navbar-collapse d-lg-flex collapse"
            className={`navbar-collapse d-lg-flex ${isCollapsed ? 'collapse' : ''}`} 
            id="navbarsExample11"
          >
            <ul className="navbar-nav justify-content-lg-center">
              {[
                { href: "/trang-chu", text: "Trang chủ" },
                { href: "/trang-chu/gioi-thieu", text: "Về GTSC" },
                { href: "/products", text: "Sản phẩm" },
                { href: "/news", text: "Tin tức" },
                { href: "/career", text: "Tuyển dụng" },
              ].map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                    href={item.href}
                    className="nav-link main-color"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="d-lg-flex col-lg-3 justify-content-lg-end ms-4">
              <Link
                href="/contact"
                className="btn btn-main text-white"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}