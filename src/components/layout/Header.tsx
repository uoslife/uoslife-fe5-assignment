import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

interface HeaderProps {
    children?: React.ReactNode;
}

const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.header};
    height: ${({ theme }) => theme.spacing.bar};
    padding: 0 ${({ theme }) => theme.spacing.xxxl};
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const Title = styled.a`
    margin-right: ${({ theme }) => theme.spacing.xxxl};
    margin-left: ${({ theme }) => theme.spacing.xxxl};
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.lg};
`;

const NavItem = styled(NavLink)`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.lg};

    &.active {
        background-color: ${({ theme }) => theme.colors.button};
    }
`
const ChildrenWrapper = styled.div`
    gap: ${({ theme }) => theme.spacing.xl};
    margin-left: auto;
    display: flex;
    align-items: center;
`;

export default function Header({ children }: HeaderProps) {
    return(
        <Container>
            <Title>1 to 50</Title>
            <NavBar>
                <NavItem to="">게임🎰</NavItem>
                <NavItem to="/rank">랭킹🏆</NavItem>
            </NavBar>
            <ChildrenWrapper>{children}</ChildrenWrapper>
        </Container>
    )
}