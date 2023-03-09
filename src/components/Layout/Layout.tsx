import { FC, ReactNode } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import { SLayout, SMain } from './styles';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <SLayout>
      <Sidebar />
      <SMain>{children}</SMain>
    </SLayout>
  );
};

export default Layout;
