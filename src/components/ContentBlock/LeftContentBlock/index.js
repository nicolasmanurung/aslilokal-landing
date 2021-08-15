import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { lazy } from "react";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";

import * as S from "./styles";

const Button = lazy(() => import("../../../common/Button"));

const handleClickBuyer = () => {
  window.open("https://play.google.com/store/apps/details?id=com.aslilokal.buyer");
};

const handleClickSeller = () => {
  window.open("https://play.google.com/store/apps/details?id=com.aslilokal.mitra");
};

const LeftContentBlock = ({ icon, title, content, section, t, id, tipe }) => {
  return (
    <S.LeftContentBlock>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left>
            <SvgIcon
              src={icon}
              className="about-block-image"
              width="400px"
              height="400px"
            />
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              <S.ServiceWrapper>
                <Row type="flex" justify="space-between">
                  {section &&
                    typeof section === "object" &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} span={11}>
                          {item.type === "disableClick" ? (
                            <SvgIcon
                              src={item.icon}
                              width="70px"
                              height="70px"
                            />
                          ) : (
                            <a href="https://play.google.com/store/apps/details?id=com.aslilokal.mitra">
                              <SvgIcon
                                src={item.icon}
                                width="70px"
                                height="70px"
                              />
                            </a>
                          )}
                          <S.MinTitle>{t(item.title)}</S.MinTitle>
                          <S.MinPara>{t(item.content)}</S.MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </S.ServiceWrapper>
              {tipe === "pembeli" ? (
                <S.ButtonWrapper>
                  <Button onClick={handleClickBuyer} color="#FF7676">Pembeli</Button>
                  <Button onClick={handleClickSeller} color="#FFFFFF" textColor="#FF7676">
                    Mitra
                  </Button>
                </S.ButtonWrapper>
              ) : (
                ""
              )}
            </S.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </S.LeftContentBlock>
  );
};

export default withTranslation()(LeftContentBlock);
