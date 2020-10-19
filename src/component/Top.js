import React from 'react';
import { Container, Grid, Flag, Icon, Input, Image, Divider } from 'semantic-ui-react';

function Top() {
    return (
        <Container style={{ marginTop: '3em' }}>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={1}><Flag name='id' /></Grid.Column>
                    <Grid.Column width={1}><Icon name='angle left' size='large' /></Grid.Column>
                    <Grid.Column width={1}><Icon name='angle right' size='large' /></Grid.Column>
                    <Grid.Column width={11}><Input icon='star' placeholder='Search...' fluid /></Grid.Column>
                    <Grid.Column width={2}><Image src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' avatar size='mini' /><span>&nbsp;<b>Patrick</b></span></Grid.Column>
                </Grid.Row>
            </Grid >
            <Divider horizontal>SELAMAT DATANG !!!</Divider>
        </Container >
    )
}


export default Top;