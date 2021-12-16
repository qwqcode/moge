document.addEventListener('DOMContentLoaded', () => {
    const $navbar = document.querySelector('.navbar')
    const $logo = document.querySelector('.navbar .logo')
    $navbar.onmouseover = () => {
        $logo.style.backgroundImage = `url('./assets/img/logo-motion.gif')`
    }

    $navbar.onmouseleave = () => {
        $logo.style.backgroundImage = ''
    }
})