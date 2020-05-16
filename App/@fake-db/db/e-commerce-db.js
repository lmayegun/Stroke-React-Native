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
    "body": {
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "posted": "2017-05-20T09:20:32 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/tash.png"),
      "summary": "Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"
    }
  },
  {
    "id": "5ec023f4782cd96a34b80ad9",
    "tagName": "Aphasia",
    "exclusive": false,
    "breaking": false,
    "video": true,
    "body": {
      "title": "eu irure id officia sit mollit aute ex incididunt consequat",
      "posted": "2017-09-11T08:18:56 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/1.jpg"),
      "summary": "Amet nostrud aliqua officia quis veniam irure. Aliquip labore Lorem id culpa aliqua veniam est proident eiusmod duis id laborum. Deserunt deserunt in id aute ullamco proident magna exercitation nostrud labore. Mollit id excepteur nisi irure exercitation ex eiusmod nisi officia ut ullamco mollit.\r\n"
    }
  },
  {
    "id": "5ec023f4755c4d20c1aafaee",
    "tagName": "Practical",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "body": {
      "title": "ea nulla elit ex magna do id tempor cillum sint",
      "posted": "2017-01-05T06:51:55 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/1.jpg"),
      "summary": "Tempor nulla cillum aute in ipsum proident ullamco anim nostrud excepteur excepteur. Deserunt labore consequat nisi nostrud nostrud consequat occaecat. Ut mollit aliquip id laborum est ex non cillum do tempor anim deserunt.\r\n"
    }
  },
  {
    "id": "5ec023f4698d43fa6426765f",
    "tagName": "Emotional",
    "exclusive": true,
    "breaking": true,
    "video": true,
    "body": {
      "title": "et proident nisi fugiat excepteur aliquip nulla do velit minim",
      "posted": "2014-01-31T05:48:56 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/1.jpg"),
      "summary": "Nostrud aliquip cupidatat enim pariatur commodo eu sit labore veniam. Cillum do deserunt enim ex pariatur consectetur eiusmod commodo. Et velit proident aute duis esse laborum.\r\n"
    }
  },
  {
    "id": "5ec023f4966b7c99c046afb4",
    "tagName": "Emotional",
    "exclusive": true,
    "breaking": true,
    "video": false,
    "body": {
      "title": "non tempor reprehenderit consequat ea ad ipsum labore voluptate minim",
      "posted": "2015-02-12T11:33:49 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/3.jpg"),
      "summary": "Cupidatat laboris labore aute consectetur magna Lorem nulla esse labore anim enim. Nulla ex consequat labore et ullamco. Labore duis pariatur ex enim.\r\n"
    }
  },
  {
    "id": "5ec023f4d9d6368db373b046",
    "tagName": "Physical",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "body": {
      "title": "adipisicing eu incididunt et excepteur id ea dolor exercitation ullamco",
      "posted": "2014-01-27T09:25:41 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/3.jpg"),
      "summary": "Incididunt commodo reprehenderit ad ad quis esse eu adipisicing labore anim occaecat magna. Ullamco enim laboris tempor nulla Lorem in sint ea ut sint. Eu voluptate ex laborum voluptate nostrud.\r\n"
    }
  },
  {
    "id": "5ec023f4a7f8ff5f0125999e",
    "tagName": "Practical",
    "exclusive": false,
    "breaking": false,
    "video": false,
    "body": {
      "title": "proident nostrud do pariatur amet reprehenderit dolor id amet ullamco",
      "posted": "2019-03-09T04:46:46 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/3.jpg"),
      "summary": "Fugiat minim consectetur enim commodo mollit irure proident ullamco labore dolore fugiat tempor. Excepteur adipisicing duis incididunt adipisicing labore sunt laboris laborum labore ut anim Lorem tempor ea. Esse ea elit ut esse et cillum do cillum. Laborum ut commodo ad enim cupidatat ullamco reprehenderit fugiat consectetur qui laboris quis ex ut. Do veniam enim consectetur est velit.\r\n"
    }
  },
  {
    "id": "5ec023f4151f67831460ea62",
    "tagName": "Emotional",
    "exclusive": true,
    "breaking": true,
    "video": true,
    "body": {
      "title": "commodo commodo amet ut officia enim quis aliqua anim ullamco",
      "posted": "2017-12-31T07:04:29 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/2.jpg"),
      "summary": "Deserunt laborum ea incididunt officia qui proident ad. Sint fugiat do et excepteur do. Veniam velit occaecat qui Lorem laborum elit. Qui labore ea enim qui excepteur anim do magna. Quis sunt culpa id reprehenderit et eiusmod laboris pariatur elit exercitation proident veniam.\r\n"
    }
  },
  {
    "id": "5ec023f4d4b6ead959206f5b",
    "tagName": "Aphasia",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "body": {
      "title": "nulla veniam pariatur Lorem mollit velit enim incididunt sit tempor",
      "posted": "2019-01-26T04:02:05 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/1.jpg"),
      "summary": "Aliqua ex in qui duis culpa. Eu ad culpa eu veniam quis minim fugiat duis voluptate. Adipisicing ad sunt cillum magna elit non dolore adipisicing tempor ut excepteur cupidatat ipsum quis.\r\n"
    }
  },
  {
    "id": "5ec023f47fab51b13bc5ab3b",
    "tagName": "Physical",
    "exclusive": false,
    "breaking": false,
    "video": false,
    "body": {
      "title": "consequat dolore reprehenderit non ad eu anim veniam elit incididunt",
      "posted": "2017-12-30T03:08:17 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/3.jpg"),
      "summary": "Consequat incididunt non deserunt nostrud reprehenderit consequat dolor laborum minim eiusmod ea sunt aliqua incididunt. Non nisi voluptate cillum est ut deserunt tempor nulla eiusmod anim. Incididunt reprehenderit incididunt veniam in laboris. Aute do laborum sunt adipisicing elit enim tempor reprehenderit ad laboris. Culpa fugiat minim sint eiusmod nisi. Amet minim voluptate ad enim. Occaecat elit occaecat nisi labore ullamco eu magna sit aliqua laboris deserunt velit magna.\r\n"
    }
  },
  {
    "id": "5ec023f4384fb99bad48d6b2",
    "tagName": "Physical",
    "exclusive": true,
    "breaking": true,
    "video": false,
    "body": {
      "title": "cupidatat et dolore amet laboris laboris amet magna et et",
      "posted": "2020-04-24T09:47:23 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/1.jpg"),
      "summary": "Aliqua deserunt eu incididunt officia officia minim labore sit proident. Elit veniam dolor aliqua ullamco nisi est ad nisi nostrud. Consequat ad ea magna tempor occaecat est tempor.\r\n"
    }
  },
  {
    "id": "5ec023f4e4c072ab678a9d6b",
    "tagName": "Emotional",
    "exclusive": true,
    "breaking": true,
    "video": false,
    "body": {
      "title": "nostrud aliquip ullamco in aliquip tempor voluptate occaecat laboris sunt",
      "posted": "2014-08-25T06:27:39 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/2.jpg"),
      "summary": "Labore ullamco deserunt minim velit id. Dolor minim deserunt velit labore ex exercitation fugiat reprehenderit Lorem elit enim. Mollit dolor consectetur dolore adipisicing adipisicing fugiat sunt nulla. Nisi voluptate laboris ut qui in elit aliquip excepteur.\r\n"
    }
  },
  {
    "id": "5ec023f4dbe0021f71fc143b",
    "tagName": "Physical",
    "exclusive": false,
    "breaking": false,
    "video": false,
    "body": {
      "title": "sit ipsum aliqua sint velit consectetur anim nostrud velit id",
      "posted": "2014-08-04T09:18:22 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/2.jpg"),
      "summary": "Qui cupidatat ad ea veniam laborum. Labore Lorem aliqua quis sunt. Incididunt pariatur veniam in officia. Cillum eiusmod dolore dolor labore quis ea anim voluptate aute amet ea cupidatat.\r\n"
    }
  },
  {
    "id": "5ec023f4f8ca90405d4b0419",
    "tagName": "Practical",
    "exclusive": true,
    "breaking": true,
    "video": true,
    "body": {
      "title": "nostrud magna tempor elit aliqua nisi labore officia veniam nostrud",
      "posted": "2017-06-12T09:36:40 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/3.jpg"),
      "summary": "Minim cupidatat sit pariatur incididunt eiusmod incididunt consectetur est reprehenderit nisi cupidatat mollit labore. Ut excepteur qui magna incididunt nulla ex. Et exercitation ut incididunt sunt est ad sit tempor mollit.\r\n"
    }
  },
  {
    "id": "5ec023f42d9710a35663e41a",
    "tagName": "Physical",
    "exclusive": false,
    "breaking": false,
    "video": false,
    "body": {
      "title": "eu consectetur non sunt Lorem cillum labore ut Lorem ex",
      "posted": "2014-11-15T05:44:30 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/1.jpg"),
      "summary": "Proident ad est adipisicing eiusmod ea proident veniam eu excepteur eiusmod Lorem nisi. Sunt est cupidatat mollit voluptate est. Esse enim laboris non irure Lorem ipsum.\r\n"
    }
  },
  {
    "id": "5ec023f45bc644f9f71eeb5b",
    "tagName": "Physical",
    "exclusive": true,
    "breaking": false,
    "video": false,
    "body": {
      "title": "occaecat deserunt adipisicing magna sunt voluptate aliqua amet qui consequat",
      "posted": "2020-01-17T04:52:40 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/2.jpg"),
      "summary": "Ea elit enim ex do officia fugiat fugiat cupidatat minim officia fugiat in. Consequat officia elit minim veniam fugiat officia dolore deserunt aliquip aliqua minim incididunt duis. Consequat laborum aute fugiat culpa quis adipisicing et.\r\n"
    }
  },
  {
    "id": "5ec023f4db72a7528d8b10db",
    "tagName": "Emotional",
    "exclusive": false,
    "breaking": false,
    "video": true,
    "body": {
      "title": "consectetur consequat eu quis do sint nisi dolor proident ex",
      "posted": "2014-05-22T01:49:13 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/1.jpg"),
      "summary": "Laborum duis non eu occaecat tempor reprehenderit in amet veniam elit non. Mollit ipsum commodo occaecat non id ea nostrud anim eiusmod. Enim consequat deserunt nulla voluptate eu cupidatat. Reprehenderit quis et sit sunt laborum enim voluptate.\r\n"
    }
  },
  {
    "id": "5ec023f45771de11093ff76f",
    "tagName": "Practical",
    "exclusive": false,
    "breaking": true,
    "video": false,
    "body": {
      "title": "voluptate sit est velit consequat consequat consectetur eiusmod labore reprehenderit",
      "posted": "2016-02-19T08:58:34 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/3.jpg"),
      "summary": "Occaecat id magna fugiat sunt irure minim qui laborum velit ex ea. Cillum exercitation aliqua elit consectetur est. Deserunt duis proident ut mollit labore laborum officia incididunt ea nulla esse. Non nostrud nulla tempor adipisicing reprehenderit ex esse ipsum excepteur mollit laborum enim mollit.\r\n"
    }
  },
  {
    "id": "5ec023f4edeb6bb6ea32d474",
    "tagName": "Physical",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "body": {
      "title": "sunt duis Lorem enim consequat ad est do anim esse",
      "posted": "2018-11-08T04:31:28 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/2.jpg"),
      "summary": "Esse cupidatat minim culpa fugiat. Ad eiusmod laborum magna nostrud aliquip deserunt ipsum do. Et aute consectetur do culpa consequat qui occaecat sunt ullamco nostrud ut aliqua ea.\r\n"
    }
  },
  {
    "id": "5ec023f46f0d57e846925038",
    "tagName": "Aphasia",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "body": {
      "title": "ipsum fugiat magna ut dolor eu id occaecat quis reprehenderit",
      "posted": "2019-07-10T06:56:02 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/1.jpg"),
      "summary": "In exercitation aliqua mollit pariatur id laboris sunt occaecat adipisicing. Ex officia enim aliquip cupidatat sunt proident sunt. Veniam eiusmod dolore ipsum duis eiusmod cupidatat ut esse id eu eu. Mollit dolore veniam culpa mollit eiusmod aute pariatur non sint veniam in dolor laboris eiusmod. Aute ipsum esse consectetur elit et non magna. Ad velit veniam duis labore.\r\n"
    }
  },
  {
    "id": "5ec023f4ffb211eda3920751",
    "tagName": "Physical",
    "exclusive": true,
    "breaking": false,
    "video": false,
    "body": {
      "title": "mollit labore deserunt duis non laborum laboris laboris nisi laborum",
      "posted": "2017-04-11T12:12:43 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/3.jpg"),
      "summary": "Officia fugiat cillum occaecat amet dolor sint elit magna. Non reprehenderit consequat anim sint qui quis. Duis ad enim minim non ex aute incididunt occaecat cupidatat labore nisi ipsum laborum.\r\n"
    }
  },
  {
    "id": "5ec023f4b154b3e85e6767fb",
    "tagName": "Aphasia",
    "exclusive": true,
    "breaking": false,
    "video": false,
    "body": {
      "title": "laborum Lorem et excepteur aliquip nisi laboris fugiat officia elit",
      "posted": "2017-09-19T03:06:42 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/1.jpg"),
      "summary": "Dolore elit incididunt in exercitation eu sint. Magna qui do duis laboris minim. Nisi deserunt eu aliqua anim ea irure consequat consequat. Culpa velit dolore anim commodo irure cillum ipsum elit dolore quis cillum culpa sint. Veniam esse nisi aliquip mollit elit veniam. Consequat pariatur incididunt quis ad reprehenderit exercitation ullamco ipsum. Voluptate incididunt consectetur occaecat velit amet nostrud irure adipisicing aute.\r\n"
    }
  },
  {
    "id": "5ec023f45ba83dc05c859849",
    "tagName": "Aphasia",
    "exclusive": false,
    "breaking": true,
    "video": false,
    "body": {
      "title": "consequat sunt culpa nisi adipisicing dolore velit eiusmod adipisicing culpa",
      "posted": "2019-07-11T05:56:37 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/2.jpg"),
      "summary": "Quis et esse Lorem eiusmod eiusmod esse dolor pariatur dolore. Id anim velit fugiat do dolor ad aute sint cupidatat. Deserunt eu commodo consectetur velit.\r\n"
    }
  },
  {
    "id": "5ec023f4688bb158db7d0498",
    "tagName": "Aphasia",
    "exclusive": true,
    "breaking": false,
    "video": false,
    "body": {
      "title": "ad officia aliqua duis est officia est labore eiusmod magna",
      "posted": "2018-07-03T05:09:15 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/1.jpg"),
      "summary": "Nulla esse ipsum dolor exercitation incididunt. Nostrud officia adipisicing irure magna ullamco amet esse. Dolor non ea tempor deserunt reprehenderit do. Magna ea enim minim exercitation deserunt nisi consequat in officia proident id. Eiusmod id cillum duis Lorem dolor adipisicing sit officia ipsum ex veniam mollit ullamco. Enim velit excepteur ut esse irure proident.\r\n"
    }
  },
  {
    "id": "5ec023f4750c63db1548cff5",
    "tagName": "Practical",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "body": {
      "title": "ea exercitation consequat magna adipisicing dolore quis dolor ullamco enim",
      "posted": "2016-07-27T04:56:17 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/3.jpg"),
      "summary": "Incididunt anim tempor ipsum proident nostrud ex exercitation minim ullamco nostrud elit esse. Qui exercitation amet consequat est deserunt qui non veniam nostrud. In reprehenderit in ex sit aliqua esse incididunt enim minim eu elit nostrud nulla officia. Quis reprehenderit ex eu fugiat qui minim sunt. Sit exercitation adipisicing do do nisi esse ullamco consequat ea qui. Anim consectetur nulla occaecat magna cupidatat nulla. Sunt magna sit voluptate ea ullamco exercitation nulla amet.\r\n"
    }
  },
  {
    "id": "5ec023f48ddb21df66b250ec",
    "tagName": "Practical",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "body": {
      "title": "labore nisi enim aute fugiat commodo ipsum et tempor ullamco",
      "posted": "2015-07-11T06:56:41 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/2.jpg"),
      "summary": "Dolor ipsum fugiat velit consequat nisi fugiat. Aliquip sunt sit est proident cupidatat et consequat mollit commodo ad consequat aliqua. Pariatur reprehenderit labore aute officia cillum anim laborum culpa in tempor labore occaecat sit officia. Do dolore amet cillum dolore ut aliquip sint qui enim aute. Voluptate dolore minim ex do velit excepteur officia fugiat. Nulla sit laboris excepteur consequat Lorem ullamco elit quis ex quis.\r\n"
    }
  },
  {
    "id": "5ec023f4500634bffb1ec65f",
    "tagName": "Practical",
    "exclusive": true,
    "breaking": true,
    "video": false,
    "body": {
      "title": "velit minim esse excepteur ipsum aute qui exercitation ad quis",
      "posted": "2015-01-10T05:09:50 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/1.jpg"),
      "summary": "Ex cupidatat consectetur nostrud commodo magna voluptate. Magna ex in commodo do laborum commodo anim enim pariatur enim. Laboris minim ea nulla elit anim laboris id consequat dolore ipsum ullamco non anim aute. Nisi fugiat occaecat occaecat elit dolore Lorem culpa nulla. Nostrud qui proident ex amet duis irure proident reprehenderit sit qui ex sunt irure non. Eiusmod sit est ex ullamco nostrud cillum nisi velit incididunt reprehenderit magna elit excepteur.\r\n"
    }
  },
  {
    "id": "5ec023f445c54f97400a712d",
    "tagName": "Emotional",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "body": {
      "title": "sint culpa excepteur sunt aliquip eu pariatur ad nisi pariatur",
      "posted": "2019-12-13T11:33:09 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/2.jpg"),
      "summary": "Id dolore fugiat nulla amet labore. Sit pariatur est ea anim do elit. Enim ut ex esse excepteur reprehenderit non. Voluptate et fugiat Lorem dolore sunt incididunt. Proident magna ipsum consequat qui amet ut sit nulla aute cupidatat ipsum. Excepteur ullamco dolore ex incididunt veniam aliquip.\r\n"
    }
  },
  {
    "id": "5ec023f4ba12a2ab8d7ca74a",
    "tagName": "Practical",
    "exclusive": false,
    "breaking": false,
    "video": false,
    "body": {
      "title": "reprehenderit et ipsum minim reprehenderit est sunt eu sit eiusmod",
      "posted": "2016-05-03T06:35:08 -01:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/2.jpg"),
      "summary": "Dolor anim velit nulla in Lorem excepteur culpa. In excepteur incididunt labore ullamco. Veniam officia labore mollit deserunt duis ipsum est magna ipsum. Voluptate exercitation exercitation ipsum consectetur non labore magna ad exercitation non nisi culpa. Aute sint ut voluptate occaecat tempor commodo veniam. Dolore excepteur adipisicing incididunt eiusmod ipsum ex cillum.\r\n"
    }
  },
  {
    "id": "5ec023f48dd0008bd0ba890b",
    "tagName": "Practical",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "body": {
      "title": "deserunt elit qui ullamco excepteur labore laborum qui quis aliqua",
      "posted": "2015-03-02T11:26:53 -00:00",
      "thumbnail": require("../../assets/images/contents/thumbnail/1.jpg"),
      "summary": "Mollit sit eiusmod deserunt excepteur deserunt duis aute deserunt adipisicing minim elit labore est. Cupidatat duis ut sunt ullamco nulla in officia proident proident sit laboris non. Lorem cupidatat ullamco consectetur voluptate ad laboris. Excepteur dolor culpa sint incididunt Lorem ea cillum. Labore voluptate consectetur laboris magna ipsum consectetur. Eu ad consectetur sunt pariatur mollit nisi anim dolor sunt anim laboris minim ea veniam. Duis id deserunt nisi laboris cupidatat.\r\n"
    }
  }
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
