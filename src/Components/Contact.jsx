import ContactForm from "./ContactForm";

function Contact () {
    
    return (<div className ='App'>
        <br/>
        
        <p className="back">Контакты</p>
        <h3 className="headTwo">Остались вопросы?</h3>
        <p className="about"> С нами можно связаться по электронной почте contact@christmas-shop@gmail.com или просто заполните форму ниже. Мы делаем все возможное, чтобы ответить в течение 24 часов.</p>
        <p className="about">Вы можете позвонить нам напрямую с понедельника по пятницу с 10:00 до 17:00 по телефону <br/> +7-498-495-55-35.</p>

        <br/> 
        <h3 className='headTwo'>Связаться с нами</h3>
        <ContactForm/>
        <br/> <br/>
        </div>
        
    )
}

export default Contact;