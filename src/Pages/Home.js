import {StyledHome, Container, Card, Img} from "../Styles/Home.styled";
import {Button, SuccessButton, WarningButton} from "../Styles/Button.styled";

export function Home(){

    return(
        <StyledHome>
            <Container>
                <Card>
                    <Img src='./images/tree.png' alt=''/>
                    <Button>Button</Button>
                </Card>
                <Card>
                    <Img src='./images/sunrise.png' alt=''/>
                    <SuccessButton>OK</SuccessButton>
                </Card>
                <Card>
                    <Img src='./images/sea.png' alt=''/>
                    <WarningButton>Nej</WarningButton>
                </Card>
            </Container>
        </StyledHome>
    )

}