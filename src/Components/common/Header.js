import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from '../../../node_modules/react-router-dom/dist/index';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.8rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .right_guest {
    margin-left: 3px;
  }
`;

/**
 * 헤더가 fixed이므로 페이지의 메인 콘텐츠가 4rem 아래에 나타나도록 조절
 */
const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            (주)HY안전상사
          </Link>
          <div className="right">
            <Button to="/login">로그인</Button>
            <Button className="right_guest" to="/guest">
              둘러보기
            </Button>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
