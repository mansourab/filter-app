
import './styles/app.css';

import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

import Filter from './modules/Filter';


new Filter(document.querySelector('.js-filter'));

const slider = document.getElementById('price-slider');


if (slider) {

    const min = document.getElementById('min');
    const max = document.getElementById('max');

    const minValue = parseInt(slider.dataset.min, 10);
    const maxValue = parseInt(slider.dataset.max, 10);

    const range = noUiSlider.create(slider, {
        start: [min.value || minValue, max.value || maxValue],
        connect: true,
        step: 10, 
        range: {
            'min': minValue,
            'max': maxValue
        }
    });

    range.on('slide', function(values, handle) {
        if (handle === 0) {
            min.value = Math.round(values[0]);
        }
        if (handle === 1) {
            max.value = Math.round(values[1]);
        }
    });

    range.on('end', function(values, handle){
        min.dispatchEvent(new Event('change'))
    })
}

