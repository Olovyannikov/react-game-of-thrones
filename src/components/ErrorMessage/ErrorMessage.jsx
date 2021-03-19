import './ErrorMessage.css';
import img from './error.png';

const ErrorMessage = () => {
    return (
        <>
            <img width={420} src={img} alt="error"/>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;