import InputTextClass from '@/styles/InputText.module.css'
import Form from 'react-bootstrap/Form';
 
interface InputTextProps{
    label?: string;
    inputValue?: string;
    inputName: string;
    placeholder?: string;
    value?: string;
    id?: string;
}
 
// props: parametro da função,
// que recebe todas as propriedade do componente (através de um objeto)
export function InputText(props: InputTextProps){
 
    //const label = props.label
    const {label, inputName, placeholder, inputValue, id} = props;
 
 
    return (
        <>
            <Form.Label htmlFor='id' className={InputTextClass.label}>{label}</Form.Label>
        &nbsp;
       
            <Form.Control id={id} className='pl-1' type="text" placeholder={placeholder} value={inputValue}></Form.Control>
            <input type="text" name={inputName} />
           
        </>
    );
}