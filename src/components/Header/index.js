import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, HeartOutlined, RocketOutlined } from '@ant-design/icons';
import { Menu } from 'antd'

export default function Header() {
    return (
        <>
            <Menu mode='horizontal'>
                <Menu.Item >
                    <Link to='/' >
                        <HomeOutlined />
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/favs'>
                        <HeartOutlined />
                        Favourites Movies
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/now-playing'>
                        <RocketOutlined />
                        Now Playing
                    </Link>
                </Menu.Item>
            </Menu>
        </>
    )
}