'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const MAX_COUNT = 25;
    const MIN_COUNT = 1;
    const STEP_COUNT = 1;

    const select = document.querySelector('.info__select');
    const countNumbers = document.querySelectorAll('.item__count__number');
    const minuses = document.querySelectorAll('.minus');
    const pluses = document.querySelectorAll('.plus');

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

});