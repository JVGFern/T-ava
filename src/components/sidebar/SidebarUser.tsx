import styled from '@emotion/styled';
import React from 'react';
import { Typography } from './Typography';
import { FaRegUser } from "react-icons/fa";


interface SidebarUserProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  rtl: boolean;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

const StyledLogo = styled.div<{ rtl?: boolean }>`
  width: 35px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  background-color: #009fdb;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  ${({ rtl }) =>
    rtl
      ? `
      margin-left: 10px;
      margin-right: 4px;
      `
      : `
      margin-right: 10px;
      margin-left: 4px;
      `}
`;

export const SidebarUser: React.FC<SidebarUserProps> = ({ children, rtl, collapsed, setCollapsed, ...rest }) => {
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <StyledLogo rtl={rtl} onClick={() => setCollapsed(!collapsed)} ><FaRegUser/></StyledLogo>
        <Typography variant="body1" fontWeight={700} color="#0098e5">
            Professor
            <Typography variant="body2" fontWeight={700} color="#0098e5">
                email@email.com
            </Typography>
        </Typography>
      </div>
    </StyledSidebarHeader>
  );
};