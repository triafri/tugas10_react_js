import React from 'react';
import { Button, Container, Grid, Label, Icon } from 'semantic-ui-react';

function Content() {
    return (
        <Container style={{ marginTop: '3em' }} >
            <Grid>
                <Grid.Row columns={9}>
                    <Grid.Column floated='right'>
                        <Label as='a' color='teal' tag >
                            Sport
                        </Label>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row textAlign='center'>
                    <Grid.Column>
                        <p>Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen aerodinamis.
                        Andai gugatan para rivalnya diterima, akankah Ducati akan melanjutkan ke CAS (Pengadilan Arbitrase Olahraga)?
                        Suzuki, Honda, KTM dan Aprilia memprotes penggunaan komponen aero di motor Desmosedici Andrea Dovisiozo dan Danilo Petrucci
                        dalam balapan pertama MotoGP di Qatar karena dianggap illegal. Pada prossnya, Dovisiozo tampil sebagai pemenang usai mengalahkan
                        Marc Marquez. Keempat tim meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan downforce, yang membantu motor melesat
                        di trek. Sementara Ducati bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah disetujui Technical Director sebelum balapan.
                        Pada awalnya, protes keempat tim itu ditolak oleh steward MotoGP sehingga dibawa ke pengadilan banding FIM. Sidang itu sendiri akan dilakukan
                        sebelum seri kedua di Argentina digelar ppada 29-31 Maret endatang. Manajer umum Ducati Gigi Dall'lagna berkukuh tidak ada yang ilegal dengan
                        komponen itu. Namun,seandainya pengadilan mengabulkan gugatan tersebut, Ducati akan mempertimbangkan melanjutkan kasus ini ke CAS. "Di dalam federasi,
                        derajatnya berakhir di Pengadilan Banding FIM. Anda harus pergi ke cAS, yang adalah pengadilan olahraga tapi di dalam kasus ini Anda keluar dari perimeter FIM,"
                        Dall'lagna mengungkapkan kepada MotoGP.com, "Saya bahkan tidak ingin memikirkan sampai titik ini. Kami sangat yakin bahwa kami tidak melanggar regulasi
                        kok, dan kami yakin kami tidak melihat adanya alasan mengapa pengadilan banding bisa memutuskan secara berbeda."
                    </p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column textAlign='center'>
                        <Button icon labelPosition='left' size='mini' color='teal'><Icon name='plus' />Tambah Tautan Ke List</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid >
        </Container >
    )
}


export default Content;