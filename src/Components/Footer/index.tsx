import React from "react";

import styles from "./Footer.module.css"

const Footer: React.FC = () => {
    return(
        <footer className={ styles.containerFooter }>
            <div className={ styles.itensFooter }>
                <p>Copyright © 2022 CM DEV - Todos os direitos reservados</p>
                <div className={ styles.socialList }>
                    <a href="https://www.instagram.com/caiomutley/" target="_blank">Instagram</a>
                    <a href="https://www.linkedin.com/in/caio-moraes-8026a6158/" target="_blank">Linkedin</a>
                    <a href="https://github.com/caioDesenvMoraes" target="_blank">Github</a>
                </div>
            </div>
        </footer>    
    )
}

export default Footer