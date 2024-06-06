import { Container } from "./styles";
import { IoIosArrowBack } from "react-icons/io";


export function ButtonText({icon: Icon, title, ...rest}) {
    return(
        <Container type="button" {...rest}>
            <IoIosArrowBack/>
            {title}
        </Container>
    )
}