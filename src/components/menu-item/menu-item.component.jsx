import { withRouter } from 'react-router-dom';


import './menu-item.styles.scss';

//podria usar (props), pero uso ({title}) porque lo destructuro
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (  //si tiene el size lo usa, sino no pasa nada
    <div 
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div 
            className='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);