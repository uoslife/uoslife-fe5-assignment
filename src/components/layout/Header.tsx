import styled from '@emotion/styled';
import githubIcon from '../../assets/github.png';
import instagramIcon from '../../assets/instagram.png';
import pencilIcon from '../../assets/pencil.png';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    height: ${({ theme }) => theme.spacing.xxl}; // 80px
    margin-top: ${({ theme }) => theme.spacing.lg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${({ theme }) => theme.spacing.xxl}; // 4rem
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xxl}; // 3rem
`;

const HeaderLogo = styled.a`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.xl}; // 1.5rem
    font-weight: bold;
    text-decoration: none;
    margin: 0;
    &:hover {
        opacity: 0.8;
    }
`;

const HeaderNav = styled.nav`
    display: flex;
    gap: ${({ theme }) => theme.spacing.xxl};
    a {
        color: ${({ theme }) => theme.colors.text};
        font-size: ${({ theme }) => theme.fontSize.md};
        font-weight: 500;
        text-decoration: none;
        &:hover {
            opacity: 0.8;
        }
    }
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
`;

const HeaderIcon = styled.a`
    width: ${({ theme }) => theme.spacing.lg};
    height: ${({ theme }) => theme.spacing.lg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    &:hover {
        transform: scale(1.1);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }
`;

export default function Header() {
    return (
        <HeaderContainer>
            {/* Header 왼쪽 부분 */}
            <HeaderLeft>
                <HeaderLogo href="/">UOSLIFE FE</HeaderLogo>
                <HeaderNav>
                    <a href="#">홈</a>
                    <a href="#carousel-section">메뉴1</a>
                    <a href="#slider-section">메뉴2</a>
                </HeaderNav>
            </HeaderLeft>

            {/* Header 오른쪽 부분 */}
            <HeaderRight>
                <HeaderIcon href="https://github.com/greengrape777" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                </HeaderIcon>
                <HeaderIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </HeaderIcon>
                <HeaderIcon href="#">
                    <img src={pencilIcon} alt="Pencil" />
                </HeaderIcon>
            </HeaderRight>
        </HeaderContainer>
    );
}
