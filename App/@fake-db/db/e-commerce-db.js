import mock from './../mock';
import _ from 'lodash';

const eCommerceDB = {
    products: [
  {
    "id": "5ebec803bde3d2c387ef5f5c",
    "posted": "2018-06-01T08:19:06 -01:00",
    "title": "veniam cupidatat irure sit voluptate dolor enim magna et adipisicing",
    "summary": "Commodo irure ea Lorem sit est. Pariatur qui aliqua in ipsum commodo. Consequat proident proident officia culpa do Lorem. Duis elit exercitation laboris voluptate do eiusmod fugiat magna occaecat tempor consectetur. Eu dolore et voluptate esse quis eiusmod qui sint deserunt cillum anim.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Physical",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "body": {
      "title": "icia ullamco minim exercitation id magna consectetur nulla irure aliquip",
      "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
      "summary": "Excepteur excepteur aliqua elit do consequat ad eu ipsum reprehenderit pariatur voluptate id. Excepteur ad cupidatat excepteur Lorem eu consequat deserunt ea laborum. Est sunt nulla ipsum duis irure dolore mollit anim cupidatat reprehenderit consectetur aute enim. Ipsum occaecat id nisi do pariatur. Cupidatat tempor fugiat esse ut id Lorem ea aliquip dolore. Nisi id irure qui aute aliquip nisi tempor eiusmod. Do commodo reprehenderit adipisicing velit deserunt pariatur nostrud nulla id elit consectetur esse voluptate.\r\n",
      "tagName": "Physical",
    }
  },
  {
    "id": "5ebec803e881fe1d59d564f3",
    "posted": "2017-09-15T02:37:36 -01:00",
    "title": "excepteur sit eu irure duis consequat Lorem veniam quis officia",
    "summary": "Quis labore eu reprehenderit ad veniam in Lorem enim irure eiusmod commodo sunt mollit. Aliqua incididunt nostrud Lorem exercitation exercitation et nostrud sit cupidatat proident. Occaecat officia duis elit velit eiusmod nisi labore dolore ullamco est.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
    "tagName": "Aphasia",
    "exclusive": false,
    "breaking": true,
    "video": false,
    "body": {
      "title": "23officia ullamco minim exercitation id magna consectetur nulla irure aliquip",
      "updateTime": "23officia ullamco minim exercitation id magna consectetur nulla irure aliquip",
      "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
      "summary": "Excepteur excepteur aliqua elit do consequat ad eu ipsum reprehenderit pariatur voluptate id. Excepteur ad cupidatat excepteur Lorem eu consequat deserunt ea laborum. Est sunt nulla ipsum duis irure dolore mollit anim cupidatat reprehenderit consectetur aute enim. Ipsum occaecat id nisi do pariatur. Cupidatat tempor fugiat esse ut id Lorem ea aliquip dolore. Nisi id irure qui aute aliquip nisi tempor eiusmod. Do commodo reprehenderit adipisicing velit deserunt pariatur nostrud nulla id elit consectetur esse voluptate.\r\n",
      "tagName": "Physical",
    }
  },
  {
    "id": "5ebec8039fd62b210137702b",
    "posted": "2015-03-30T12:04:56 -01:00",
    "title": "officia -- ullamco minim exercitation id magna consectetur nulla irure aliquip",
    "summary": "Excepteur excepteur aliqua elit do consequat ad eu ipsum reprehenderit pariatur voluptate id. Excepteur ad cupidatat excepteur Lorem eu consequat deserunt ea laborum. Est sunt nulla ipsum duis irure dolore mollit anim cupidatat reprehenderit consectetur aute enim. Ipsum occaecat id nisi do pariatur. Cupidatat tempor fugiat esse ut id Lorem ea aliquip dolore. Nisi id irure qui aute aliquip nisi tempor eiusmod. Do commodo reprehenderit adipisicing velit deserunt pariatur nostrud nulla id elit consectetur esse voluptate.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
    "tagName": "Physical",
    "exclusive": false,
    "breaking": true,
    "video": false,
    "body": {
      "title": "officia - ullamco minim exercitation id magna consectetur nulla irure aliquip",
      "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
      "title": "officia ullamco minim exercitation id magna consectetur nulla irure aliquip",
      "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
      "summary": "Excepteur excepteur aliqua elit do consequat ad eu ipsum reprehenderit pariatur voluptate id. Excepteur ad cupidatat excepteur Lorem eu consequat deserunt ea laborum. Est sunt nulla ipsum duis irure dolore mollit anim cupidatat reprehenderit consectetur aute enim. Ipsum occaecat id nisi do pariatur. Cupidatat tempor fugiat esse ut id Lorem ea aliquip dolore. Nisi id irure qui aute aliquip nisi tempor eiusmod. Do commodo reprehenderit adipisicing velit deserunt pariatur nostrud nulla id elit consectetur esse voluptate.\r\n",
      "tagName": "Physical",
    }
  },
]
};

mock.onGet('/api/e-commerce-app/products').reply(() => {
    return [200, eCommerceDB.products];
});

mock.onGet('/api/e-commerce-app/product').reply((request) => {
    const {productId} = request.params;
    const response = _.find(eCommerceDB.products, {id: productId});
    return [200, response];
});

mock.onPost('/api/e-commerce-app/product/save').reply((request) => {
    const data = JSON.parse(request.data);
    let product = null;

    eCommerceDB.products = eCommerceDB.products.map(_product => {
        if ( _product.id === data.id )
        {
            product = data;
            return product
        }
        return _product;
    });

    if ( !product )
    {
        product = data;
        eCommerceDB.products = [
            ...eCommerceDB.products,
            product
        ]
    }

    return [200, product];
});

mock.onGet('/api/e-commerce-app/orders').reply(() => {
    return [200, eCommerceDB.orders];
});

mock.onGet('/api/e-commerce-app/order').reply((request) => {
    const {orderId} = request.params;
    const response = _.find(eCommerceDB.orders, {'id': orderId});
    return [200, response];
});
