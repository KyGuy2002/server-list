export default function ErrorModal(props) {
    return (
        <section className='modal'>
            <section className='error'>

                <span className="red fa-stack">
                    <i class="fa-solid fa-xmark fa-stack-1x"></i>
                    <i class="fa-regular fa-circle fa-stack-2x"></i>
                </span>

                <div className="text">
                    <h1>An Error Has Occurred!</h1>
                    <h2>Please reload this page and try again.  If the issue persists, contact us in our <a href='https://discord.com/'>Discord</a>.</h2>

                    <h3>{props.errorMessage || "We don't know anything else..."}</h3>
                </div>

            </section>
        </section>
    )
}