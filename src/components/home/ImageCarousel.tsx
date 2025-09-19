import styled from "@emotion/styled";

const images = Object.values(
  import.meta.glob("../../assets/images/*.{jpg,JPG}", { eager: true, as: "url" })
);

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Track = styled.div`
  display: flex;
  width: fit-content;
  animation: scroll 20s linear infinite;
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  border-radius: 12px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
    z-index: 2;
  }
`;

const SectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

function ImageCarousel() {
  const loopImages = [...images, ...images];
  return (
    <CarouselWrapper>
      <SectionTitle>무한배너 section</SectionTitle>
      <Track>
        {loopImages.map((src, idx) => (
          <Img src={src} alt={`carousel-img-${idx}`} key={idx} />
        ))}
      </Track>
    </CarouselWrapper>
  );
}

export default ImageCarousel;
