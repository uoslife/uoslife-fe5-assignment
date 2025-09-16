import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import BackgroundSection from './components/layout/BackgroundSection'
import ImageCarousel from './components/home/ImageCarousel'
import ImageSlider from './components/home/ImageSlider'
import styled from '@emotion/styled';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const ContentSection = styled.section`
    flex: 1;
    padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const CarouselSection = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SliderSection = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <PageContainer>
                <Header/>
                <BackgroundSection/>
                <ContentSection>
                    <CarouselSection>
                        <ImageCarousel/>
                    </CarouselSection>
                    <SliderSection>
                        <ImageSlider/>
                    </SliderSection>
                </ContentSection>
                <Footer/>
            </PageContainer>
        </ThemeProvider>
    )
}

export default App;
