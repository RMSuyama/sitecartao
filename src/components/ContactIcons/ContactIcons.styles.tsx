import styled from 'styled-components'
import whats from '../../assets/whats.png'
import insta from '../../assets/insta.png'

export const LinkContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 500;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3vw;
    margin-right: 3vw;
    a:nth-child(1){
        margin-right: 15px;
    }
`

const LinkIcon = styled.a`
    height: 10vw;
    width: 10vw;
    background-size: contain;
    background-repeat: no-repeat;

`

export const WhatsIcon = styled(LinkIcon)`
    background-image: url(${whats});
    
`

export const InstaIcon = styled(LinkIcon)`
    background-image: url(${insta});
    padding: 0.3vw;
    
`
