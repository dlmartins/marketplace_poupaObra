import React from 'react';
import { Rate } from 'antd';
import Rating from '../../../elements/Rating';

const PartialReview = () => (
    <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ">
            <div className="ps-block--average-rating">
                <div className="ps-block__header">
                    <h3>4.00</h3>
                    <Rating />

                    <span>1 Avaliação</span>
                </div>
                <div className="ps-block__star">
                    <span>5 Estrelas</span>
                    <div className="ps-progress" data-value="100">
                        <span></span>
                    </div>
                    <span>100%</span>
                </div>
                <div className="ps-block__star">
                    <span>4 Estrelas</span>
                    <div className="ps-progress" data-value="0">
                        <span></span>
                    </div>
                    <span>0</span>
                </div>
                <div className="ps-block__star">
                    <span>3 Estrelas</span>
                    <div className="ps-progress" data-value="0">
                        <span></span>
                    </div>
                    <span>0</span>
                </div>
                <div className="ps-block__star">
                    <span>2 Estrelas</span>
                    <div className="ps-progress" data-value="0">
                        <span></span>
                    </div>
                    <span>0</span>
                </div>
                <div className="ps-block__star">
                    <span>1 Estrela</span>
                    <div className="ps-progress" data-value="0">
                        <span></span>
                    </div>
                    <span>0</span>
                </div>
            </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ">
            <form className="ps-form--review" action="/" method="get">
                <h4>Deixe a sua avaliação</h4>
                <p>
                    O seu endereço não sera publicado. Os campos obrigatórios estarão marcados com
                    <sup>*</sup>
                </p>
                <div className="form-group form-group__rating">
                    <label>Sua avaliação destre produto</label>
                    <Rate defaultValue={1} />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        rows="6"
                        placeholder="Escreva sua experiência aqui"></textarea>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Nome"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group submit">
                    <button className="ps-btn">Enviar Avaliação</button>
                </div>
            </form>
        </div>
    </div>
);

export default PartialReview;
