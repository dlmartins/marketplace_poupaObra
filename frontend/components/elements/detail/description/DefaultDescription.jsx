import React from 'react';

import { Tabs } from 'antd';
import PartialDescription from './PartialDescription';
import PartialSpecification from './PartialSpecification';
import PartialVendor from './PartialVendor';
import PartialReview from './PartialReview';
import PartialOffer from './PartialOffer';

const tabItems = [
    { label: 'Descrição', children: <PartialDescription />, key: '1' },
    { label: 'Especificação', children: <PartialSpecification />, key: '2' },
    { label: 'Vendedor', children: <PartialVendor />, key: '3' },
    { label: 'Avaliações (1)', children: <PartialReview />, key: '4' },
    { label: 'Perguntas e Respostas', children: 'Conteudo do tab pane 3', key: '5' },
    { label: 'Mais ofertas', children: <PartialOffer />, key: '6' }
];
const DefaultDescription = () => {

    return (
        <div className="ps-product__content ps-tab-root">
            <Tabs items={tabItems} defaultActiveKey="1" />
        </div>
    );
};

export default DefaultDescription;