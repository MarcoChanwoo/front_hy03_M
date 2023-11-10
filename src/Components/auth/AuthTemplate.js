import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from '../../../node_modules/react-router-dom/dist/index';

/**
 * 회원가입/로그인 페이지의 레이아웃을 꾸밈
 */

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${palette.gray[2]};
  // flex 내부로 중앙정렬
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 흰색박스
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

// children의 역할
const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">(주)HY안전상사</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
