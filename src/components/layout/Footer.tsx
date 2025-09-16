import styled from '@emotion/styled';

const FooterContainer = styled.footer`
    height: ${({ theme }) => theme.spacing.bar};
    display: flex;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.footerBackground};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.md};
`;

const FooterText = styled.p`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.md};
    margin-top: ${({ theme }) => theme.spacing.md}
    margin: 0;
    opacity: 0.8;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterText>
                Blog : 블로그입니다💬 | Github : 깃헙입니다
            </FooterText>
        </FooterContainer>
    );
}