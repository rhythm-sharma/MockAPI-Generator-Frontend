import React, { useState } from 'react';
import { Menu } from 'antd';
import Logo from '../../../assets/images/logo512.png';
import { map } from 'lodash';
import './Navbar.css';
import { Link } from 'react-router-dom';

interface IMenuItem {
    icon: JSX.Element | string;
    lable: JSX.Element | string;
    className: string;
}

interface IinitialValue {
    menu: Array<IMenuItem>;
}

const Navbar: React.FC = () => {
    const initialValue: IinitialValue = {
        menu: [
            {
                icon: <img style={{ height: '30px', width: '30px' }} src={Logo} />,
                lable: <Link to="/dashboard">Mock API</Link>,
                className: '',
            },
            {
                icon: '',
                lable: <Link to="/login">Login</Link>,
                className: 'menu-item-login',
            },
        ],
    };
    const [state, setState] = useState(initialValue);

    return (
        <Menu mode="horizontal">
            {map(state.menu, (item, index) => (
                <Menu.Item key={index} className={item.className} icon={item.icon}>
                    {item.lable}
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default Navbar;
