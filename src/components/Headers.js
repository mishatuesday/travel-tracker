import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

const Headers = () => {
    return (
        <div>
            <Header as='h1'>
                <Icon name='plane' />
                <Header.Content>
                Travel Tracker
                <Header.Subheader>choose your own destiny</Header.Subheader>
                </Header.Content>
            </Header>
        </div>
    )
}

export default Headers;