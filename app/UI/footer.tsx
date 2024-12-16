import "@/app/local.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <section className="main-bg-cyan text-white py-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-6 col-6">
              <h3 className="title text-white title-gach">Trang chủ</h3>
              <div>
                <a
                  className="text-white"
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Giới thiệu về GTSC
                </a>
              </div>
              <div>
                <a
                  className="text-white"
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Sản phẩm
                </a>
              </div>
              <div>
                <a
                  className="text-white"
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Tin tức
                </a>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <h3 className="title text-white title-gach">Liên hệ</h3>
              <div>Hotline: 0243 993 1919</div>
              <div>Mail: contact@gtsc.vn</div>
              <div>&nbsp;</div>
            </div>
          </div>
          <div className="row justify-content-center my-4">
            <div className="col-md-5 py-3">
              <div className="mb-3">
                <b>Văn phòng Hà Nội:</b> 103-105 Nguyễn Tuân, Thanh Xuân Trung,
                Thanh Xuân, Hà Nội
              </div>
              <div className="mb-3">
                <b>Văn phòng TP. Hồ Chí Minh:</b> 385C đường Nguyễn Trãi, phường
                Nguyễn Cư Chinh, Quận 1, TP. Hồ Chí Minh
              </div>
            </div>
            <div className="col-md-7">
              <div>
                <iframe
                  src="/image 22.png"
                  width="100%"
                  height="380"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}