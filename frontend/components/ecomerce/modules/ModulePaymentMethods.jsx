import React, { useState } from 'react';
import { Radio } from 'antd';
import { useRouter } from 'next/router';

const ModulePaymentMethods = () => {
    const Router = useRouter();
    const [method, setMethod] = useState(1);

    function handleChangeMethod(e) {
        setMethod(e.target.value); //e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault();
        Router.push('/account/payment-success');
    }

    return (
        <>
            <h4>Métodos de pagamento</h4>
            <div className="ps-block--payment-method">
                <div className="ps-block__header">
                    <Radio.Group
                        onChange={(e) => handleChangeMethod(e)}
                        value={method}>
                        <Radio value={1}>Visa / Master Card</Radio>
                        <Radio value={2}>PIX</Radio>
                    </Radio.Group>
                </div>
                <div className="ps-block__content">
                    {method === 1 ? (
                        <div className="ps-block__tab">
                            <div className="form-group">
                                <label>Número do Cartão</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Nome no Cartão</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-4">
                                    <div className="form-group">
                                        <label>Data de Expiração (MM/AA)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="01/21"
                                        />
                                    </div>
                                </div>
                                <div className=" col-sm-4 col-4">
                                    <div className="form-group">
                                        <label>CVV</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button
                                    className="ps-btn ps-btn--fullwidth"
                                    onClick={(e) => handleSubmit(e)}>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="ps-block__tab">
                            <a
                                className="ps-btn"
                                href="https://www.paypal.com/"
                                target="_blank">
                                Processando PIX
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ModulePaymentMethods;
