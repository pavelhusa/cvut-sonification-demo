import portalIn from './assets/portalIn.png';
import portalOut from './assets/portalOut.png';
export default function User (props) {
    return (
        <img src={props.type === 'out' ? portalOut : portalIn} width={'100%'} height={300} alt='portal'/>
    );
}