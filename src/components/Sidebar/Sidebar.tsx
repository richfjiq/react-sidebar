import { useContext, useRef, useState } from 'react';
import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from 'react-icons/ai';
import { MdLogout, MdOutlineAnalytics } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';

import { logoSVG } from '../../assets';
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from './styles';
import { ThemeContext, ThemeContextType } from '../../App';
import { useLocation } from 'react-router-dom';

const linksArray = [
  {
    label: 'Home',
    icon: <AiOutlineHome />,
    to: '/',
    notification: 0,
  },
  {
    label: 'Statistics',
    icon: <MdOutlineAnalytics />,
    to: '/statistics',
    notification: 3,
  },
  {
    label: 'Customers',
    icon: <BsPeople />,
    to: '/customers',
    notification: 0,
  },
  {
    label: 'Diagrams',
    icon: <AiOutlineApartment />,
    to: '/diagrams',
    notification: 1,
  },
];

const secondaryLinksArray = [
  {
    label: 'Settings',
    icon: <AiOutlineSetting />,
  },
  {
    label: 'Logout',
    icon: <MdLogout />,
  },
];

const Sidebar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!searchRef.current) return;
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
    }
  };

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: 'fit-content' } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
      <SDivider />

      {linksArray.map(({ icon, label, notification, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: 'fit-content' } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondaryLinksArray.map(({ icon, label }) => (
        <SLinkContainer key={label}>
          <SLink to={'/'} style={!sidebarOpen ? { width: 'fit-content' } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === 'dark'}
          onClick={() =>
            setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
          }
        >
          <SToggleThumb style={theme === 'dark' ? { right: '1px' } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

export default Sidebar;
