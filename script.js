const check_email_validation = () => { 
    let main_condition = /\S+@\S+\.\S+/.test(document.getElementById('AddressInput').value);
    if(!main_condition) { document.getElementById('tooltip').innerText = "L'addresse e-mail n'est pas correcte !" }
    return main_condition;
}

const check_password_validation = () => { 
    let main_condition = ( 4 > document.getElementById('PasswordInput').value.length < 6 );
    console.log(main_condition)
    if(!main_condition) { document.getElementById('tooltip').innerText = "Le mot de passe ne respecte pas les rêgles !" }
    return main_condition;
}

const check_confirm_password_validation = () => { 
    let main_condition = ( document.getElementById('ConfirmPasswordInput').value == document.getElementById('PasswordInput').value )
    if(!main_condition) { document.getElementById('tooltip').innerText = "Veuillez bien confirmer le mot de passe !" }
    return main_condition;
}

const check_accept_rules_validation = () => { 
    let main_condition = document.getElementById('AcceptRules').checked
    if(!main_condition) { document.getElementById('tooltip').innerText = "Veuillez accepter les rêgles générales !" }
    return main_condition;
}

const check_validation = () => {
    if(!check_email_validation()) return false
    if(!check_password_validation()) return false
    if(!check_confirm_password_validation()) return false
    if(!check_accept_rules_validation()) return false
    return true
}   

document.getElementById('formCta').addEventListener('click', (event) => {
    if (!check_validation()) {
        document.getElementById('tooltip').style.visibility = 'visible';
        Popper.createPopper(document.getElementById('formCta'), document.getElementById('tooltip'), { 
            modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
        }) 
    } 
}) 
document.getElementById('formCta').addEventListener('blur', (event) => { document.getElementById('tooltip').style.visibility = 'hidden' } ) 

for (let index = 0 ; index < document.getElementsByClassName('form-input').length ; index++) { 
    document.getElementsByClassName('form-input')[index].children[0].addEventListener('input', (event) => {
        let selected_input = document.getElementsByClassName('form-input')[index];
        selected_input.children[1].style.visibility = (selected_input.children[0].value != "") ? 'hidden' : 'visible'; 
    } ) 
}