function login(evt) {
    evt.preventDefault()

    const $username = document.querySelector('[name="username"]')
    const $password = document.querySelector('[name="password"]')
    
    const usernameVal = $username.value.trim()
    const passwordVal = $password.value.trim()
    
    if (usernameVal === '') {
        $username.focus()
        return
    }
    if (passwordVal === '') {
        $password.focus()
        return
    }

    alert('并没有后端程序，登陆不了...')

    // XMR 操作...
}

function signup(evt) {
    evt.preventDefault()

    const $phoneNum = document.querySelector('[name="phone_num"]')
    const $password = document.querySelector('[name="password"]')
    const $passwordCheck = document.querySelector('[name="password_check"]')
    const $verifySMS = document.querySelector('[name="verify_sms"]')

    const phoneNum = $phoneNum.value.trim()
    const password = $password.value.trim()
    const passwordCheck = $passwordCheck.value.trim()
    const verifySMS = $verifySMS.value.trim()

    if (phoneNum === '') {
        $phoneNum.focus()
        return
    }
    if (password === '') {
        $password.focus()
        return
    }
    if (passwordCheck === '') {
        $passwordCheck.focus()
        return
    }
    if (verifySMS === '') {
        $verifySMS.focus()
        return
    }

    if (!/^[0-9]+$/.test(phoneNum)) {
        alert('手机号不合法')
        return
    }
    if (password !== passwordCheck) {
        alert('二次输入密码不匹配')
        return
    }

    // XMR 操作...
}