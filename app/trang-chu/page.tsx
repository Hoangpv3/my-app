import "@/app/local.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function mainPage() {
  return (
    <main>
      <div className="san-pham-banner pr">
        <div className="san-pham-text pa">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span>Trang Chủ</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span
            className="lazy-load-image-background blur lazy-load-image-loaded"
            style={{
              color: "transparent",
              display: "inline-block",
              width: "100%",
            }}
          >
            <Image
              src="/image 21.jpg"
              alt="pic2"
              layout="responsive"
              width={1200}
              height={600}
            />
          </span>
        </div>
      </div>

      <section
        className="main-bg-cyan border-radius-30 py-5"
        id="linh-vuc-hoat-dong"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title text-center text-white">
                LĨNH VỰC HOẠT ĐỘNG
              </h2>
            </div>
          </div>
          <div className="row justify-content-center my-4">
            {[
              "TÍCH HỢP HỆ THỐNG",
              "TRUNG TÂM DỮ LIỆU VÀ ĐIỆN TOÁN ĐÁM MÂY",
              "AN TOÀN THÔNG TIN",
            ].map((title, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="linh-vuc-mod bg-white px-4">
                  <div className="my-3">
                    <h3 className="title2 text-center">{title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center my-4">
            {[
              {
                src: "/g1.jpg",
                alt: "pic3",
              },
              {
                src: "/g2.jpg",
                alt: "pic4",
              },
              {
                src: "/g3.jpg",
                alt: "pic5",
              },
            ].map((image, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="linh-vuc-mod-1 bg-white px-4">
                  <div className="my-3">
                    <span
                      className="lazy-load-image-background blur lazy-load-image-loaded"
                      style={{
                        color: "transparent",
                        display: "flex",
                        height:"250px"
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={360}
                        height={226}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-3" id="doi-tac">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title text-center main-color-cyan">Đối tác</h2>
            </div>
          </div>
          <div className="row justify-content-center my-4">
            {[
              {
                src: "/Frame 1321314079.png",
                alt: "pic6",
              },
              {
                src: "/Frame 1321314080.png",
                alt: "pic7",
              },
              {
                src: "/Frame 1321314081.png",
                alt: "pic8",
              },
              {
                src: "/Frame 1321314082.png",
                alt: "pic9",
              },
            ].map((image, index) => (
              <div key={index} className="col-md-3 col-6 my-3">
                <span
                  className="lazy-load-image-background blur lazy-load-image-loaded"
                  style={{ color: "transparent", display: "inline-block" }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={250}
                    height={250}
                    style={{
                      objectFit: "contain",
                      width: "100% !important",
                      height: "100% !important",
                    }}
                  ></Image>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-3" id="khach-hang">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title text-center main-color-red">Khách hàng</h2>
            </div>
          </div>
          <div className="row justify-content-center my-4">
            {[
              {
                src: "/Frame 1321314079 (1).png",
                alt: "pic10",
              },
              {
                src: "/Frame 1321314080 (1).png",
                alt: "pic11",
              },
              {
                src: "/Frame 1321314081 (1).png",
                alt: "pic12",
              },
              {
                src: "/Frame 1321314082 (1).png",
                alt: "pic13",
              },
            ].map((image, index) => (
              <div key={index} className="col-md-3 col-6 my-3">
                <span
                  className="lazy-load-image-background blur lazy-load-image-loaded"
                  style={{ color: "transparent", display: "inline-block" }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={250}
                    height={250}
                    style={{
                      objectFit: "contain",
                      width: "100% !important",
                      height: "100% !important",
                    }}
                  ></Image>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="main-bg-red text-white" id="tin-tuc">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2
                className="title text-center text-white"
                style={{ padding: "10px 0 40px 0" }}
              >
                Tin tức
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <span
                className="lazy-load-image-background blur lazy-load-image-loaded"
                style={{ color: "transparent", display: "inline-block" }}
              >
                <Image
                  src="/image 19.jpg"
                  alt="pic14"
                  height={500}
                  width={700}
                  quality={100}
                  style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
                />
              </span>
              <p>
                GTEL HƯỚNG VỀ ĐIỆN BIÊN VỚI CHUỖI HOẠT ĐỘNG KỶ NIỆM 70 NĂM CHIẾN
                THẮNG LỊCH SỬ ĐIỆN BIÊN PHỦ (7/5/1954 - 7/5/2024)
              </p>
            </div>
            <div className="col-md-6">
              <span
                className="lazy-load-image-background blur lazy-load-image-loaded"
                style={{ color: "transparent", display: "inline-block" }}
              >
                <Image
                  src="/image 20.png"
                  alt="pic15"
                  height={200}
                  width={700}
                  quality={100}
                  style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
                />
              </span>
              <p>
                CHÀO MỪNG KỶ NIỆM 10 NĂM THÀNH LẬP HỌC VIỆN CHÍNH TRỊ CÔNG AN
                NHÂN DÂN
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="san-pham-banner pr" style={{ paddingTop: "100px" }}>
        <div>
          <span
            className="lazy-load-image-background blur lazy-load-image-loaded"
            style={{
              color: "transparent",
              display: "inline-block",
              width: "100%",
            }}
          >
            <Image
              src="/Section-pricing-1.png"
              alt="pic16"
              height={100}
              width={200}
              quality={100}
              style={{ width: "100%" }}
            />
          </span>
        </div>
      </div>
    </main>
  );
}
