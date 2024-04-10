import styled from "styled-components";
import img from "../../assets/Rectangle1.png";
import logoG from "../../assets/Google.png";
import logoF from "../../assets/Facebook.png";
import logoT from "../../assets/Twitter.png";
import logoI from "../../assets/Instagram.png";

export const BackgroundContentRight = styled.img`
  height: 100vh;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 3em;
  font-family: Inter;
`;

export const DescLogin = styled.p`
  color: #818181;
  font-size: 1em;
`;

export const Account = styled.a`
  color: #7754f6;
  text-decoration: none;
  &:hover {
    color: #7754f6;
    opacity: 0.8;
  }
`;

export const LinkAccount = styled.p`
  color: #818181;
  display: inline;
`;
export const WithOutLogin = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  cursor: pointer;
`;
export const Logo1 = styled.div`
  height: 65px;
  width: 100%;
  padding: 0 5px;
  background: url(${logoG}) no-repeat;
`;
export const Logo2 = styled.div`
  height: 65px;
  width: 100%;
  padding: 0 5px;

  background: url(${logoF}) no-repeat;
`;
export const Logo3 = styled.div`
  height: 65px;
  width: 100%;
  padding: 0 5px;

  background: url(${logoI}) no-repeat;
`;
export const Logo4 = styled.div`
  height: 65px;
  width: 100%;
  padding: 0 5px;

  background: url(${logoT}) no-repeat;
`;

export const LoginWithOut = styled.h6`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #818181;
  line-height: 0.1em;
  margin: 10px 0 20px;
  color: #818181;
  span {
    background: #fff;
    padding: 0 10px;
  }
`;
