import React from 'react';
import CountDown from '../../../../components/elements/CountDown';

const ModuleDetailCountdown = () => {
    return (
        <div className="ps-product__countdown">
            <figure>
                <figcaption>
                    Não perca o desconto! Promoção termina em
                </figcaption>
                <CountDown
                    timeTillDate="12 31 2020, 6:00 am"
                    timeFormat="MM DD YYYY, h:mm a"
                />
            </figure>
            <figure>
                <figcaption>Itens Vendidos</figcaption>
                <div
                    className="ps-product__progress-bar ps-progress"
                    data-value="13">
                    <div className="ps-progress__value">
                        <span></span>
                    </div>
                    <p>
                        <b>20/85</b> Vendidos
                    </p>
                </div>
            </figure>
        </div>
    );
};

export default ModuleDetailCountdown;
