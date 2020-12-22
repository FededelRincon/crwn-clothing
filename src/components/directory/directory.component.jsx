import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                },
                // agrego de aca para abjo para tener 3 "elementos" mas, en un esquema 3-2-3, 
                //si lo tengo q quitar, sacar tamb en "menu-item.styles.scss" el width de 280.
                {
                  title: 'watches',
                  imageUrl: 'https://k8q7r7a2.stackpathcdn.com/wp-content/uploads/2018/10/AnOrdain-Model-1-Enamel-Dial-4.jpg',
                  id: 7,
                  linkUrl: 'shop/watches'
                },
                {
                  title: 'glasses',
                  imageUrl: 'https://i.pinimg.com/736x/fa/5d/a2/fa5da216c1e0458f82b8c2ee39698160.jpg',
                  //size: 'large',
                  id: 6,
                  linkUrl: 'shop/glasses'
                },
                {
                  title: 'accesories',
                  imageUrl: 'https://i.pinimg.com/236x/30/4e/21/304e21a0a8ccd7cae5472c9843ace06d.jpg',
                  id: 8,
                  linkUrl: 'shop/accesories'
                }
              ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }

}

export default Directory;