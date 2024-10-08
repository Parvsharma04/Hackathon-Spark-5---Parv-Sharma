"use client";
import Image from "next/image";
import { useIsMobile } from "../../libs/useIsMobile";
import big_banner from "../../public/images/big_banner.png";
import companies_image from "../../public/images/companies.png";
import featured_mobile_banner from "../../public/images/featured_mobile_banner.png";
import ParallaxText from "../ParallaxImages";
import RevealCover from "../RevealCover";
import { Div, ImageContainer, Inner, ParallaxImages, Wrapper } from "./styles";

const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image
                src={featured_mobile_banner}
                alt="featured_mobile_banner"
                fill
              />
            ) : (
              <Image src={big_banner} alt="big_banner" fill />
            )}
          </Div>
        </ImageContainer>
        <h2>Featuring</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image src={companies_image} alt="comapanies" />
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
