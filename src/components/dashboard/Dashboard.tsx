import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import { Layout, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const DashBoardPage = styled.div`
    .heading {
        text-align: center;
    }
`;

const DashBoard: React.FC = () => {
    return (
        <DashBoardPage>
            <Layout>
                <Header className="header">
                    <Navbar />
                </Header>
                <Content className="content">
                    <Typography>
                        <Title className="heading">DashBorad</Title>
                    </Typography>
                </Content>
                {/* <Footer className="footer">Footer</Footer> */}
            </Layout>
        </DashBoardPage>
    );
};

export default DashBoard;
