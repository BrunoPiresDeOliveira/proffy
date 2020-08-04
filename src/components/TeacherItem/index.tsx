import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/59963452?s=460&u=6d431720a8e07e50a34ee438834ed6774dcec971&v=4" alt="Bruno Pires de Oliveira"/>
                <div>
                    <strong>Bruno Pires</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias do mercado.
                <br/><br/>
                Apaixonado por programação do jeito certo dominando uma stack e aproveitando o máximo que ela consegue te oferecer.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem