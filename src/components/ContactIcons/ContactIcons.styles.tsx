import styled from 'styled-components'
import whats from './../layout/assets/whats.png'
import insta from './../layout/assets/insta.png'

export const LinkContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 500;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-right: 20px;
    a:nth-child(1){
        margin-right: 15px;
    }
`

const LinkIcon = styled.a`
    height: 100px;
    width: 100px;
    background-size: contain;
    background-repeat: no-repeat;
`

export const WhatsIcon = styled(LinkIcon)`
    background-image: url(${whats});
`

export const InstaIcon = styled(LinkIcon)`
    background-image: url(${insta});
    
`
