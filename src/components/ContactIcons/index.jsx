import { LinkContainer, WhatsIcon, InstaIcon } from './ContactIcons.styles.tsx'

export const ContactIcons = () => {
    return (
        <LinkContainer>
            <WhatsIcon
                href="https://api.whatsapp.com/send?phone=5513996267989"
                target="_blank"
                rel="noopener noreferrer"
            />
            <InstaIcon
                className="Instagram"
                href="https://ig.me/m/r.suyama"
                target="_blank"
                rel="noopener noreferrer"
            />
        </LinkContainer>
    )
}