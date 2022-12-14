import {StyledView, Container, Card} from "../Styles/View.styled";
import {Button, SuccessButton, WarningButton} from "../Styles/Button.styled";

export function View(){

    return(
        <StyledView>
            <Container>
                <Card>
                    <Button>Button</Button>
                </Card>
                <Card>
                    <SuccessButton>OK</SuccessButton>
                </Card>
                <Card>
                    <WarningButton>Nej</WarningButton>
                </Card>
            </Container>
        </StyledView>
    )

}