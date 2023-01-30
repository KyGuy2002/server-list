import { useContext } from 'react';
import { ErrorModalContext } from '../../index';


export default function ErrorModal(props) {
    const errorModalContext = useContext(ErrorModalContext);
    return (
        <section className='modal' visible={props.showing.toString()}>
            <section className='error'>

                <span className="red fa-stack">
                    <i className="fa-solid fa-xmark fa-stack-1x"></i>
                    <i className="fa-regular fa-circle fa-stack-2x"></i>
                </span>

                <div className="text">
                    <h1>{props.errorMessage?.title || "Unknown Error"}</h1>
                    <h2>{props.errorMessage?.message || "If the issue persists, contact us in our Discord."}</h2>

                    <h3>{props.errorMessage?.details || "We don't know anything else..."}</h3>

                    {(props.errorMessage?.cancel ? <button className='gray' onClick={() => errorModalContext.showErrorModal(false)}>Ok</button> : <h2>Please reload this page and try again.</h2>)}
                </div>

            </section>
        </section>
    )
}