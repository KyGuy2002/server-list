import '../../scss/global/walkthrough.scss';


export default function ErrorModal(props) {
    return (
        <section className='modal'>
            <section className='walkthrough'>

                <page id="1">
                    <h1>Server Creator</h1>
                    <h2>Ready to add your server to our list?  Lets get started!</h2>

                    <div className='buttons'>
                        <button className='gray'>Cancel</button>
                        <button className='blue'>Get Started <i className="fa-solid fa-chevron-right"></i></button>
                    </div> 
                </page>

                <page id="2">
                    <h1>Lets Get Some Things Straight...</h1>
                    <h2>Start the the basics.  Fill in your server details below.</h2>

                    <form>
                        <label for="name">Server Name</label>
                        <input type="text" id="name"></input>
                        
                    </form>

                    <div className='buttons'>
                        <button className='gray'>Cancel</button>
                        <button className='blue'>Get Started <i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                </page>

            </section>
        </section>
    )
}