'use strict';

(function () {

    const loginModal = document.querySelector('#login-modal')
    const loginModalCloseButton = document.querySelector('#login-modal-close-btn')
    const loginButton = document.querySelector('#login-btn')
    const loginForm = document.querySelector('#login-form')
    const loginSubmit = document.querySelector('#login-submit')

    const showLoginModal = () => {
        loginModal.classList.add('show')
        document.addEventListener('keyup', keyUpHandler)
    }

    const closeLoginModal = () => {
        loginModal.classList.remove('show')
        document.removeEventListener('keyup', keyUpHandler)
    }

    const keyUpHandler = (event) => {
        if (event.key === "Escape") {
            closeLoginModal()
        }
    }

    window.onload = function () {
        loginButton.onclick = function () {
            showLoginModal()
        }
        loginModalCloseButton.addEventListener('click', function () {
            closeLoginModal()
        })

        loginSubmit.addEventListener('click', function(){
            // TODO: implémenter le login (hors examen)
        })
    }
})()
