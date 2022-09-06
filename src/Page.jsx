import './Page.css';

function Page() {
    return (
        <div className='page'>
            <h1 className='page-heading'>Fun facts about React</h1>
            <ul className='page-list'>
                <li className='page-item'>Was first released in 2013</li>    
                <li className='page-item'>Was originally created by Jordan Walke</li>    
                <li className='page-item'>Has well over 100K stars on GitHub</li>    
                <li className='page-item'>Is maintained by Facebook</li>    
                <li className='page-item'>Powers thousands of enterprise apps, including mobile apps</li>    
            </ul>    
         </div>
    )
}

export default Page;