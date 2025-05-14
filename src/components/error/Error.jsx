import {Message} from "primereact/message";
import './error.css'

const Error = ({error}) => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <Message severity="error" text={error}/>
            </div>
        </>
    );
};

export default Error;