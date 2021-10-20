import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const SocialLink = ({ text, href, src }) => {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        key={src}
        aria-label={src}
        style={{
          fontSize: "16px",
          color: `rgba(2, 7, 62, 0.8)`,
          textAlign: "left",
          cursor: "pointer",
          display: "block",
        }}>
        <SvgIcon src={src} width='25px' height='25px' />
        {text}
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Extra>
          <Container border='true'>
            <Row type='flex' justify='space-between'>
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.NavLink to='/'>
                  <S.LogoContainer>
                    <SvgIcon
                      src='aslilokaltext.svg'
                      aria-label='homepage'
                      width='101px'
                      height='64px'
                    />
                  </S.LogoContainer>
                </S.NavLink>
                <S.Para>
                  {t(
                    `Aslilokal adalah aplikasi multiservice yang akan membantu pihak UMKM untuk menuju digitalisasi dan mempermudah pembeli mencari produk karya UMKM sekitar.`
                  )}
                </S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Hubungi Kami")}</S.Title>
                <SocialLink
                  href='https://web.facebook.com/aslilokal/'
                  src='facebook.svg'
                  text='  aslilokal'
                />
                <SocialLink
                  href='https://www.linkedin.com/company/aslilokal/'
                  src='linkedin.svg'
                  text='  aslilokal'
                />
                <SocialLink
                  href='https://instagram.com/aslilokaldotcom/'
                  src='instagram.svg'
                  text='  @aslilokal'
                />
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Title>{t("Hubungi Kami")}</S.Title>
                <a
                  href='mailto:bantuan@aslilokal.com'
                  target='_blank'
                  style={{
                    fontSize: "16px",
                    color: `rgba(2, 7, 62, 0.8)`,
                    textAlign: "left",
                    cursor: "pointer",
                    display: "block",
                  }}>
                  bantuan@aslilokal.com
                </a>
                <a
                  href='https://wa.me/+62895612385237'
                  target='_blank'
                  style={{
                    fontSize: "16px",
                    color: `rgba(2, 7, 62, 0.8)`,
                    textAlign: "left",
                    cursor: "pointer",
                    display: "block",
                  }}>
                  Whatsapp Kami
                </a>
              </Col>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
