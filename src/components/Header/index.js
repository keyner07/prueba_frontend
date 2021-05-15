import React from 'react';
import { HomeOutlined, HeartOutlined, RocketOutlined } from '@ant-design/icons';
import { Menu } from 'antd'

export default function Header() {
    return (
        <>
            <Menu mode='horizontal'>
                <Menu.Item >
                    <h2 >
                    <HomeOutlined /> Home
                    </h2>
                </Menu.Item>
                <Menu.Item>
                    <h2>
                    <HeartOutlined /> Popular
                    </h2>
                </Menu.Item>
                <Menu.Item>
                    <h2>
                    <RocketOutlined /> Now Playing
                    </h2>
                </Menu.Item>
            </Menu>
        </>
    )
}