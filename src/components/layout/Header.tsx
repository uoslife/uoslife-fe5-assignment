// import { css } from '@emotion/react';
import Flex from '../common/Flex';
import GithubIcon from '../icon/GithubIcon';
import InstagramIcon from '../icon/InstagramIcon';
import PencilIcon from '../icon/PencilIcon';
import { HeaderWrapper, LinkStyle } from './Header.style';

export default function Header() {
  return (
    <HeaderWrapper>
      <Flex gap="5rem">
        <h2>UOSLIFE FE</h2>
        <Flex>
          <LinkStyle href="/">홈</LinkStyle>
          <LinkStyle href="#infinite-banner">메뉴1</LinkStyle>
          <LinkStyle href="#scrollzone-view">메뉴2</LinkStyle>
        </Flex>
      </Flex>
      <Flex gap="2rem">
        <GithubIcon width="28" height="28" />
        <InstagramIcon width="28" height="28" />
        <PencilIcon width="28" height="28" />
      </Flex>
    </HeaderWrapper>
  );
}
