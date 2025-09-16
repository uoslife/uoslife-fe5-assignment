import styled from '@emotion/styled';
import backgroundImage from '../../assets/background3.png';

const BackgroundImage = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center 60%;
    background-repeat: no-repeat;
`;

const OverlayContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 20px;
    bottom: 60px;
    border-radius: 8px;
`;

const OverlayText = styled.p`
    position: absolute;
    bottom: 60px;
    right: 0px;
    color: ${({ theme }) => theme.colors.subText};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-family: ${({ theme }) => theme.fontFamily.sansSerif};
    margin: 0;
`;

const ToolbarContainer = styled.div`
    position: absolute;
    bottom: 20px;
    right: 0px;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    background-color: #242424;
    padding: 5px 30px;
    width: fit-content;
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        background-color: #2a2a2a;
        opacity: 0.9;
    }
    
    &:active {
        background-color: #1a1a1a;
        opacity: 1;
        transform: scale(0.98);
    }
`;

const ToolbarIcon = styled.span`
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
`;

const ToolbarText = styled.span`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-family: ${({ theme }) => theme.fontFamily.sansSerif};
`;

function BackgroundSection() {
    return (
        <BackgroundImage>
            <OverlayContent>
                <OverlayText>시대생 프론트 아자아자🌊</OverlayText>
                <ToolbarContainer>
                    <ToolbarIcon>↗</ToolbarIcon>
                    <ToolbarText>바로가기</ToolbarText>
                </ToolbarContainer>
            </OverlayContent>
        </BackgroundImage>
    );
}

export default BackgroundSection;
