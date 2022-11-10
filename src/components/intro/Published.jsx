import {
    Link
} from 'react-router-dom';

function Published () {
    return (
        <>
            <div className="Published Section">
                <div className="Published-wrapper Wrapper">
                    <div className="Published-grid">
                        <div className="Published-item Published-item--right">
                            <p className="Published-p">
                                ¿Estás listo para ser parte de esto?
                            </p>
                            <Link className="Published-button" to="/">
                                Saber más
                                <svg className="Published-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="Published-item Published-item--left">
                            <img className="Published-img" src="https://images.unsplash.com/photo-1632687380457-05a1271e873b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="/" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Published;