import React from 'react';
import logo from '../images/logo.png';
import nojd from '../images/nojdkund.png';
import maleri from '../images/maleriforetagen.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';


class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className='footer-item'>
                <img src={logo} alt='Målaressets logga'/>
                   <p>Målaresset är företaget ni anlitar när jobbet måste bli bra.</p>
                </div>
               <div className='footer-item'>
                    <h4>Kontakt info</h4>
                    <p>
                    <ul>
                        <li>Telefon: <span>0704-43 94 62</span></li>
                        <li>Mail <span><a href='mailto:patrik@malaresset.se'>patrik@malaresset.se</a></span></li>
                        <li>Målaresset Göteborg</li>
                        <li>Ekebygatan 19</li>
                        <li>422 54 Göteborg</li>
                    </ul>
                    </p>
                    
                </div>
                <div className='footer-item'>
                <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                
              <Form.Control type="text" placeholder="Namn.." />
              
              <Form.Control type="email" placeholder="Email.." />
              <Form.Text className="text-muted">
                Vi kommer inte dela ut din personliga information.
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              
              <Form.Control as="textarea" rows={3} placeholder='Ditt meddelande..'/>
              <Button className="mb-2" variant='success'>
                Skicka
              </Button>
            </Form.Group>
          </Form>
                </div>
                <div className='social footer-item'>
                    <h4>Följ oss på sociala medier</h4>
                    <a href='https://facebook.com/error404officialteam/' rel="noreferrer" target='_blank' className='facebook'><FontAwesomeIcon icon={["fab", "facebook"]} size='3x'/></a>
                    <a href='https://instagram.com/malaresset' rel="noreferrer" target='_blank' className='instagram'><FontAwesomeIcon icon={["fab", "instagram"]} size='3x'/></a>
                    <h4>100% Nöjd Kund Garanti</h4>
                    <img src={nojd} alt='nöjd kund logga'/>
                    <img src={maleri} alt="Måleriföretagen logga"/>
                </div> 
            </footer>
        );
    }
}
export default Footer;