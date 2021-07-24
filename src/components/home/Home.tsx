import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import { Layout, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const HomePage = styled.div`
    .heading {
        text-align: center;
    }
`;

const Home: React.FC = () => {
    return (
        <HomePage>
            <Layout>
                <Header className="header">
                    <Navbar />
                </Header>
                <Content className="content">
                    <Typography>
                        <Title className="heading">Mock API</Title>
                    </Typography>
                </Content>
                {/* <Footer className="footer">Footer</Footer> */}
            </Layout>
        </HomePage>
    );
};

export default Home;
