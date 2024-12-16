import "@/app/local.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function aboutMain() {
  return (
    <main>
      <div className="san-pham-banner pr">
        <div className="san-pham-text pa">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span>Giới thiệu</span>
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

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="title main-color-red">GIỚI THIỆU VỀ GTSC</h1>
              <div className="py-3">
                <p>
                  <strong>Tên công ty:</strong> Công ty cổ phần Thương mại và
                  Dịch vụ Công nghệ GTSC Việt Nam
                </p>
                <p>
                  <strong>Tên giao dịch quốc tế:</strong> GTSC VIETNAM
                  TECHNOLOGY SERVICES AND COMMERCIAL JOINT STOCK COMPANY
                </p>
                <p>
                  <strong>Tên viết tắt:</strong> GTSC VINA., JSC
                </p>
                <p>
                  <strong>Được thành lập ngày:</strong> 05/6/2008 là đơn vị
                  thành viên Tổng công ty Công nghệ - Viễn thông Toàn cầu
                  (Gtel), trực thuộc Cục An ninh mạng và phòng chống tội phạm
                  công nghệ cao, Bộ Công an (A05).
                </p>
                <p>
                  <strong>Mã số thuế:</strong> 0102773601
                </p>
                <p>
                  <strong>Trụ sở chính:</strong> Số 103-105 Nguyễn Tuân, Phường
                  Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam.
                </p>
                <p>
                  <strong>Văn phòng TP. Hồ Chí Minh:</strong> 385C đường Nguyễn
                  Trãi, phường Nguyễn Cư Trinh, Quận 1, TP. Hồ Chí Minh, Việt
                  Nam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="py-3">
                <p>
                  Công ty cổ phần Thương mại và Dịch vụ Công nghệ GTSC Việt Nam
                  (”GTSC”) được thành lập năm 2008, là một đơn vị thành viên
                  thuộc Tổng công ty Công nghệ - Viễn thông Toàn cầu, doanh
                  nghiệp Nhà nước do Bộ Công an làm Chủ sở hữu 100% vốn.
                </p>
                <p>
                  Giai đoạn từ năm 2008 đến năm 2013, GTSC là một trong những
                  nhà thầu chính cung cấp thiết bị và dịch vụ phục vụ xây dựng
                  hạ tầng kỹ thuật mạng lưới mạng viễn thông di động Beeline.
                </p>

                <p>
                  Từ năm 2014 đến nay, GTSC được định hướng trở thành doanh
                  nghiệp công nghệ, tập trung trong lĩnh vực tích hợp hệ thống,
                  cung cấp các sản phẩm, dịch vụ và giải pháp trọn gói về CNTT
                  và viễn thông cho các đơn vị trong lực lượng Công an nhân dân,
                  các cơ quan Chính phủ và các tổ chức, doanh nghiệp khác.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <span
                className="lazy-load-image-background blur lazy-load-image-loaded"
                style={{ color: "transparent", display: "inline-block" }}
              >
                <img
                  src="/MAN09373 1.jpg"
                  alt="pic2"
                  style={{ width: "100%", height: "100%" }}
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="title main-color-red" style={{ textAlign: "end" }}>
                Giá trị cốt lõi
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <span
                className="lazy-load-image-background blur lazy-load-image-loaded"
                style={{ color: "transparent", display: "inline-block" }}
              >
                <img
                  src="/MAN09237 1.jpg"
                  alt="pic3"
                  style={{ width: "100%", height: "100%" }}
                />
              </span>
            </div>
            <div className="col-md-6">
              <div>
                <p>
                  GTSC xây dựng và duy trì môi trường làm việc chuyên nghiệp,
                  đoàn kết và trách nhiệm. Các thành viên của Công ty được quan
                  tâm, hỗ trợ để phát huy tối đa năng lực, phẩm chất cá nhân, từ
                  đó mang lại nhiều hơn giá trị gia tăng và hiệu quả cho Khách
                  hàng, mang lại cuộc sống hạnh phúc cho các thành viên Công ty
                  và gia đình, góp phần xây dựng đất nước giàu mạnh.
                </p>
              </div>
              <div className="main-bg-red border-radius-8 sp-title">
                <h2 className="title text-center text-white py-3">TẦM NHÌN</h2>
              </div>
              <div>
                <p>
                  Trở thành doanh nghiệp hàng đầu Việt Nam trong lĩnh vực cung
                  cấp các sản phẩm, dịch vụ và giải pháp công nghệ thông tin,
                  viễn thông, tích hợp hệ thống và an ninh mạng.
                </p>
              </div>
              <div className="col-12" style={{ placeItems: "end" }}>
                <div className="main-bg-red border-radius-8 sp-title">
                  <h2 className="title text-center text-white py-3">SỨ MỆNH</h2>
                </div>
              </div>
              <div>
                <p>
                  GTSC là đối tác chân thành và tin cậy, ứng dụng tri thức và
                  công nghệ để giải quyết các bài toán nhằm phục vụ hiệu quả
                  công tác của các đơn vị trong lực lượng Công an nhân dân, các
                  cơ quan nhà nước, các tổ chức xã hội và doanh nghiệp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="title main-color-red">Tổ chức nhân sự</h1>
              <p>
                GTSC sở hữu đội ngũ CBNV có trình độ cao từ cử nhân, kỹ sư, thạc
                sĩ... và nhiều chuyên gia hàng đầu trong lĩnh vực công nghệ
                thông tin, viễn thông... với kinh nghiệm chuyên môn cao, tinh
                thần làm việc chuyên nghiệp. Tổng số cán bộ nhân viên hiện tại
                là 102 người.
              </p>
              <span
                className="lazy-load-image-background blur lazy-load-image-loaded"
                style={{ color: "transparent", display: "inline-block" }}
              >
                <img
                  src="/N30 1.png"
                  alt="pic4"
                  style={{ width: "100%", height: "100%" }}
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main-bg-blue border-radius-30 py-5">
                <div>
                  <h2 className="title text-center text-white mt-3">
                    TẠI SAO NÊN CHỌN CHÚNG TÔI?
                  </h2>
                </div>
                <div className="my-4 pt-5">
                  <div className="row justify-content-center">
                    <div className="col-auto">
                      <div className="tai-sao-mod text-center bg-white border-radius-10 p-3 mb-3">
                        <div>
                          <span
                            className="lazy-load-image-background blur lazy-load-image-loaded"
                            style={{
                              color: "transparent",
                              display: "inline-block",
                            }}
                          >
                            <img
                              src="/feedback 1.png"
                              alt="pic5"
                              style={{ width: "115px", height: "110px" }}
                            />
                          </span>
                        </div>
                        <div className="pt-3 fw-bold">
                          KINH NGHIỆM
                          <br />
                          DÀY DẶN
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="tai-sao-mod text-center bg-white border-radius-10 p-3 mb-3">
                        <div>
                          <span
                            className="lazy-load-image-background blur lazy-load-image-loaded"
                            style={{
                              color: "transparent",
                              display: "inline-block",
                            }}
                          >
                            <img
                              src="/icon (2).png"
                              alt="pic6"
                              style={{ width: "115px", height: "110px" }}
                            />
                          </span>
                        </div>
                        <div className="pt-3 fw-bold">
                          GIẢI PHÁP
                          <br />
                          TOÀN DIỆN
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="tai-sao-mod text-center bg-white border-radius-10 p-3 mb-3">
                        <div>
                          <span
                            className="lazy-load-image-background blur lazy-load-image-loaded"
                            style={{
                              color: "transparent",
                              display: "inline-block",
                            }}
                          >
                            <img
                              src="/icon (1).png"
                              alt="pic7"
                              style={{ width: "115px", height: "110px" }}
                            />
                          </span>
                        </div>
                        <div className="pt-3 fw-bold">
                          DỊCH VỤ
                          <br />
                          CHẤT LƯỢNG
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="tai-sao-mod text-center bg-white border-radius-10 p-3 mb-3">
                        <div>
                          <span
                            className="lazy-load-image-background blur lazy-load-image-loaded"
                            style={{
                              color: "transparent",
                              display: "inline-block",
                            }}
                          >
                            <img
                              src="/icon.png"
                              alt="pic8"
                              style={{ width: "115px", height: "110px" }}
                            />
                          </span>
                        </div>
                        <div className="pt-3 fw-bold">
                          UY TÍN VÀ
                          <br />
                          THƯƠNG HIỆU
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="main-bg-blue border-radius-30 py-3"
                style={{
                  paddingLeft: "1rem !important",
                  paddingRight: "1rem !important",
                }}
              >
                <div className="bg-white border-radius-30 py-3">
                  <div className="row">
                    <div
                      className="col-md-4"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div>
                        <h2 className="title text-center text-red mt-3">
                          DỰ ÁN TIÊU BIỂU
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div>
                        <span
                          className="lazy-load-image-background blur lazy-load-image-loaded"
                          style={{
                            color: "transparent",
                            display: "inline-block",
                          }}
                        >
                          <img
                            src="/Group 1321314251.png"
                            alt="pic9"
                            style={{ padding: "3rem 0" }}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 fw-bold">
                      <div>
                        <p className="pbt">
                          Lĩnh vực công nghệ thông tin và viễn thông
                        </p>
                        <br />
                        <p className="pbt">Lĩnh vực kiểm soát an ninh</p>
                        <br />
                        <p className="pbt">Lĩnh vực an toàn thông tin</p>
                        <br />
                        <p className="bpt">Thiết bị chuyên dụng khác</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      <section className="py-3" id="doi-tac">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title text-center main-color-blue">Đối tác</h2>
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
    </main>
  );
}
