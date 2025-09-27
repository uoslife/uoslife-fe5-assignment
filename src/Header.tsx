/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledHeader = styled.head`
  padding-top: 50px;
  padding-right: 0px;
  position:fixed;
  top:0;
  font-size: 30px;
  color: white;
  width: 100%;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
  `
  const Leftmenu = styled.ul`
    padding-left: 100px;
    list-style: none;
    gap:100px;
    display: flex;
    align-items: center; 
    margin:0;
  `
  const Rightmenu = styled.ul`
    padding-right: 50px;
    list-style: none;
    gap:30px;
    font-size: 20px;
    display: flex;
    margin:0;
  `

  const Title = styled.p`
      margin:0;
    font-weight: 800;
`;

const LButton = styled.a`
  font-weight: 500;
  color: #ffffff;
`

const Iimage = styled.img` 
  width:50px;
  height:50px;
`

function Header() {
  const leftMenu = [
    { label: 'UOSLIFE FE', href: '/', isTitle: true },
    { label: '메뉴1', href: '/menu1' },
    { label: '메뉴2', href: '/menu2' },
    { label: '메뉴3', href: '/menu3' },
  ];

  // 1. 변하는 데이터만 간단한 배열로 만듭니다.
  const services = ['github', 'instagram', 'google'];

  // 2. map을 사용해 배열의 각 항목을 원하는 객체 형태로 변환합니다.
  const rightMenu = services.map(service => ({
    image: <Iimage src={`${service}.png`} alt ={service} />,
    href: `https://www.${service}.com/`,
  }));

  return (
    <StyledHeader>
      <Leftmenu>
        {leftMenu.map((item, index) => (
          <li key={index}>
            <LButton href={item.href}>
              {item.isTitle ? <Title>{item.label}</Title> : item.label}
            </LButton>
          </li>
        ))}
      </Leftmenu>
      <Rightmenu>
        {rightMenu.map((item, index) => (
          <li key={index}>
            <a href={item.href}>
              {item.image}
            </a>
          </li>
        ))}
      </Rightmenu>
    </StyledHeader>
  )
}
export default Header