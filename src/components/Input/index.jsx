import { Container } from "./styles";

export function Input({icon: Icon, placeholder, ...rest}){
    return(
      <Container>
        {Icon && <Icon size={24}/>}
        <input className="input"
        placeholder={placeholder}
        {...rest}/>
      </Container>
    )
}