'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const MAX_COUNT = 25;
    const MIN_COUNT = 1;
    const STEP_COUNT = 1;

    const select = document.querySelector('.info__select');
    const countNumbers = document.querySelectorAll('.item__count__number');
    const minuses = document.querySelectorAll('.minus');
    const pluses = document.querySelectorAll('.plus');

    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const fullName = document.querySelector('#full_name');
    const city = document.querySelector('#city');

    const decreaseCount = (e) => {
        let minus = e.target;
        let countInput = minus.nextElementSibling;
        let plus = minus.nextElementSibling.nextElementSibling;

        if (Number(countInput.value) >= MIN_COUNT) {
            countInput.value = Number(countInput.value) - STEP_COUNT;
            if (plus.disabled) plus.disabled = false;
        }

        if (Number(countInput.value) < MIN_COUNT) {
            e.target.disabled = true;
        }
    };

    const increaseCount = (e) => {
        let plus = e.target;
        let countInput = plus.previousElementSibling;
        let minus = plus.previousElementSibling.previousElementSibling;

        if (Number(countInput.value) < MAX_COUNT) {
            countInput.value = Number(countInput.value) + STEP_COUNT;
            if (minus.disabled) minus.disabled = false;
        }

        if (Number(countInput.value) === MAX_COUNT) {
            plus.disabled = true;
        }
    };

    const countKeydown = (e) => {
        let regex = /\d/;
        if (!regex.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
            e.preventDefault();
        };
        if (Number(e.target.value + e.key) > 25) {
            alert('Please enter a number less than or equal to 25');
            e.preventDefault();
        };
    }

    minuses.forEach(minus => minus.addEventListener('click', e => decreaseCount(e)));

    pluses.forEach(plus => plus.addEventListener('click', e => increaseCount(e)));

    countNumbers.forEach(number => number.addEventListener('keydown', e => countKeydown(e)));

    select.addEventListener('change', (e) => {
        e.target.classList.add('js-input--color');
    });

    const inputArr = [email, phone, fullName, city];

    const inputs = {
        email: {
            regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'e-mail'
        },
        phone: {
            regex: /\d-\d{3}-\d{4}-\d{3}/,
            message: 'phone (format X-XXX-XXXX-XXX")'
        },
        fullName: {
            regex: /(^[A-Za-z]{3,16})([ ]?)([A-Za-z]{3,16})?([ ]?)?([A-Za-z]{3,16})?([ ]?)?([A-Za-z]{3,16})/,
            message: 'full name'

        },
        city: {
            regex: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
            message: 'city'
        }
    };


    const customValidity = (e, regex, message) => {
        const elem = e.target;
        if (!regex.test(elem.value)) {
            elem.setCustomValidity(`Please enter your ${message} correctly`);
        } else {
            elem.setCustomValidity("");
        }
    }

    inputArr.forEach(inp => inp.addEventListener('input', function (e) {
            customValidity(e, inputs[inp.name]['regex'], inputs[inp.name]['message']);
        })
    )

    const form = document.querySelector('.info');
    form.addEventListener('submit', e => {
        alert('Success');
    });
});