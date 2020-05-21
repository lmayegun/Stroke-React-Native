import mock from './../mock';
import _ from 'lodash';

const eCommerceDB = {
    products: [
  {
    "id": "5ec023f4058000fdde07733f",
    "tagName": "Practical",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
    "thumbnail": require("../../assets/images/contents/thumbnail/tash.png"),
    "posted": "2017-05-20T09:20:32 -01:00",
    "body": [
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      {"posted": "2017-05-20T09:20:32 -01:00"},
      {"thumbnail": require("../../assets/images/contents/thumbnail/tash.png")},
      {"summary": "Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
    ]
  },
  {
    "id": "5ec023f4782cd96a34b80ad9",
    "tagName": "Aphasia",
    "exclusive": false,
    "breaking": false,
    "video": true,
    "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
    "thumbnail": require("../../assets/images/contents/thumbnail/tash.png"),
    "posted": "2017-05-20T09:20:32 -01:00",
    "body": [
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      {"posted": "2017-05-20T09:20:32 -01:00"},
      {"thumbnail": require("../../assets/images/contents/thumbnail/tash.png")},
      {"summary": "Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
    ]
  },
  {
    "id": "5ec023f4755c4d20c1aafaee",
    "tagName": "Practical",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
    "thumbnail": require("../../assets/images/contents/thumbnail/tash.png"),
    "posted": "2017-05-20T09:20:32 -01:00",
    "body": [
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      {"posted": "2017-05-20T09:20:32 -01:00"},
      {"thumbnail": require("../../assets/images/contents/thumbnail/tash.png")},
      {"summary": "Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
    ]
  },
  {
    "id": "5ec023f4058000fde07733f",
    "tagName": "Practical",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
    "thumbnail": require("../../assets/images/contents/thumbnail/tash.png"),
    "posted": "2017-05-20T09:20:32 -01:00",
    "body": [
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      {"posted": "2017-05-20T09:20:32 -01:00"},
      {"thumbnail": require("../../assets/images/contents/thumbnail/tash.png")},
      {"summary": "Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
    ]
  },
  {
    "id": "5ec023f4782cd9a34b80ad9",
    "tagName": "Aphasia",
    "exclusive": false,
    "breaking": false,
    "video": true,
    "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
    "thumbnail": require("../../assets/images/contents/thumbnail/tash.png"),
    "posted": "2017-05-20T09:20:32 -01:00",
    "body": [
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      {"posted": "2017-05-20T09:20:32 -01:00"},
      {"thumbnail": require("../../assets/images/contents/thumbnail/tash.png")},
      {"summary": "Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      {"thumbnail": require("../../assets/images/contents/thumbnail/tash.png")},
    ]
  },
  {
    "id": "5ec023f4755c4d20c1aafae",
    "tagName": "Practical",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
    "thumbnail": require("../../assets/images/contents/thumbnail/tash.png"),
    "posted": "2017-05-20T09:20:32 -01:00",
    "body": [
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      {"posted": "2017-05-20T09:20:32 -01:00"},
      {"thumbnail": require("../../assets/images/contents/thumbnail/tash.png")},
      {"summary": "Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
    ]
  },
  {
    "id": "5ec023f4058jkj0fdde07733f",
    "tagName": "Practical",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
    "thumbnail": require("../../assets/images/contents/thumbnail/tash.png"),
    "posted": "2017-05-20T09:20:32 -01:00",
    "body": [
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      {"posted": "2017-05-20T09:20:32 -01:00"},
      {"thumbnail": require("../../assets/images/contents/thumbnail/tash.png")},
      {"summary": "Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
    ]
  },
  {
    "id": "5c023f4782cd96a34b80ad9",
    "tagName": "Aphasia",
    "exclusive": false,
    "breaking": false,
    "video": true,
    "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
    "thumbnail": require("../../assets/images/contents/thumbnail/tash.png"),
    "posted": "2017-05-20T09:20:32 -01:00",
    "body": [
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      {"posted": "2017-05-20T09:20:32 -01:00"},
      {"thumbnail": require("../../assets/images/contents/thumbnail/tash.png")},
      {"summary": "Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
    ]
  },
  {
    "id": "5ec3f4755c4d20c1aafaee",
    "tagName": "Practical",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
    "thumbnail": require("../../assets/images/contents/thumbnail/tash.png"),
    "posted": "2017-05-20T09:20:32 -01:00",
    "body": [
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      {"posted": "2017-05-20T09:20:32 -01:00"},
      {"thumbnail": require("../../assets/images/contents/thumbnail/tash.png")},
      {"summary": "Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      {"title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
    ]
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
