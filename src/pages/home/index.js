import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100"
            style={{
              backgroundImage: `url(${introdata.your_img_url})`,
            }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div
              className="order-1 order-lg-2 h-100 w-100"
              style={{
                position: 'absolute',
                top: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            ></div>
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2
                  className="intro_title"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  {introdata.title}
                </h2>
                <h3
                  className="intro_subtitle fluidz-48"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  ビジネスエンジニア
                </h3>

                <p
                  className="intro_bg_description"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  氏名：宮本和輝<br />
                  生年月日：2001年6月17日<br />
                  出身地：大阪府<br />
                  大学：完成学院大学<br />
                  学部：国際学部<br />
                  卒業予定年度：2025年度<br />
                </p>
                <p
                  className="intro_r_description"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  ビジネスエンジニアとは、ビジネス × エンジニア としての視点を併せ持ち、抽象化と具体化を繰り返し、言語化してビジネスに従事する人材であると定義づけています。
                  ビジネスエンジニアであることで、ビジネスというモノに対する解像度を高めることをMissionとします。
                </p>
                <div
                  className="intro_btn-container intro_btn-action pb-3"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  <Link to="/usage" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      プロダクト
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/subscription">
                    <div id="button_h" className="ac_btn btn">
                      コンタクト
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
