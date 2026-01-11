import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import Header from './components/layout/Header';
import HomeBanner from './components/HomeBanner';
import InfiniteBannerSection from './components/InfiniteBannerSection';
import SliderSection from './components/SliderSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HomeBanner />
      <InfiniteBannerSection />
      <SliderSection />
    </ThemeProvider>
  );
}

export default App;
