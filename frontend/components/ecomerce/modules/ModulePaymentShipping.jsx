import React from 'react';
import Link from 'next/link';

const ModulePaymentShipping = () => {
    return (
        <>
            <div className="ps-block__panel">
                <figure>
                    <small>Contato</small>
                    <p>poupaobra.br@gmail.com</p>
                    <Link href="/account/checkout">
                        <a>Alterar</a>
                    </Link>
                </figure>
                <figure>
                    <small>Enviar para</small>
                    <p>Av Londrina, 100</p>
                    <Link href="/account/checkout">
                        <a>Alterar</a>
                    </Link>
                </figure>
            </div>
            <h4>Método de envio</h4>
            <div className="ps-block__panel">
                <figure>
                    <small>Correio</small>
                    <strong>R$ 20.00</strong>
                    <small>Entrega em mãos</small>
                    <strong>R$ 0.00</strong>
                </figure>
            </div>
        </>
    );
};

export default ModulePaymentShipping;
