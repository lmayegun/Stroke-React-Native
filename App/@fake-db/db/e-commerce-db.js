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
    "body": ""
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
    "body": ""
  },
  {
    "id": "5ebec8039fd62b210137702b",
    "posted": "2015-03-30T12:04:56 -01:00",
    "title": "officia ullamco minim exercitation id magna consectetur nulla irure aliquip",
    "summary": "Excepteur excepteur aliqua elit do consequat ad eu ipsum reprehenderit pariatur voluptate id. Excepteur ad cupidatat excepteur Lorem eu consequat deserunt ea laborum. Est sunt nulla ipsum duis irure dolore mollit anim cupidatat reprehenderit consectetur aute enim. Ipsum occaecat id nisi do pariatur. Cupidatat tempor fugiat esse ut id Lorem ea aliquip dolore. Nisi id irure qui aute aliquip nisi tempor eiusmod. Do commodo reprehenderit adipisicing velit deserunt pariatur nostrud nulla id elit consectetur esse voluptate.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
    "tagName": "Physical",
    "exclusive": false,
    "breaking": true,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec8030a1685778da881c2",
    "posted": "2016-06-20T03:35:15 -01:00",
    "title": "occaecat ea sit non minim ipsum id pariatur eu exercitation",
    "summary": "Enim consequat sit sit laborum consectetur ullamco Lorem voluptate cupidatat excepteur. Occaecat anim elit excepteur eu anim est. Commodo aute elit enim cupidatat non consectetur culpa.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Aphasia",
    "exclusive": true,
    "breaking": true,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec80326071963ba6d366d",
    "posted": "2019-02-01T12:29:34 -00:00",
    "title": "minim esse magna reprehenderit qui amet consectetur eiusmod ex nulla",
    "summary": "Consectetur dolore proident dolore minim deserunt culpa eiusmod ullamco commodo adipisicing proident aliquip culpa. Nisi commodo ut ad tempor. Nisi excepteur laboris eu sit in sunt labore Lorem et est cillum officia. Voluptate minim sint labore esse. Enim tempor minim nulla in laborum pariatur irure consequat laborum id occaecat irure. Aute veniam amet commodo culpa cillum in sit Lorem in consequat id proident velit officia. Aute voluptate cillum reprehenderit id exercitation irure aute duis cupidatat ad elit veniam.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Aphasia",
    "exclusive": false,
    "breaking": true,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec80301013f9c796dbab9",
    "posted": "2015-05-11T07:20:43 -01:00",
    "title": "amet pariatur enim esse est consequat mollit incididunt et eiusmod",
    "summary": "Sit eu laborum nulla do adipisicing laborum tempor ex in dolore culpa aute labore. Eu laboris est ullamco ea eu mollit tempor veniam anim in incididunt. Enim aliquip tempor irure reprehenderit ut voluptate. Occaecat sint consectetur ex nulla qui veniam magna fugiat ad fugiat quis do. Sint ullamco irure aute ea eiusmod tempor deserunt pariatur dolore cillum officia ea esse culpa. Dolore laboris enim esse tempor dolor aliquip occaecat nostrud excepteur.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
    "tagName": "Physical",
    "exclusive": false,
    "breaking": false,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec803963304ed58763114",
    "posted": "2014-07-30T03:15:10 -01:00",
    "title": "tempor deserunt eiusmod nostrud ad excepteur Lorem exercitation dolor incididunt",
    "summary": "Dolore dolor mollit eu reprehenderit aliquip reprehenderit ipsum dolore dolor ea. Magna amet laboris laboris deserunt veniam Lorem reprehenderit exercitation elit sint mollit eiusmod dolor nisi. Mollit consequat cillum proident cupidatat veniam laboris in.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Aphasia",
    "exclusive": false,
    "breaking": false,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec803fb6625b4c191ecec",
    "posted": "2015-07-30T06:37:52 -01:00",
    "title": "adipisicing est cupidatat dolor do nulla ea pariatur est proident",
    "summary": "Sint non do amet nisi occaecat laboris nisi. Magna adipisicing culpa tempor reprehenderit cupidatat nisi duis aliquip reprehenderit nulla. Veniam sint nulla qui minim id nulla eu est irure sunt dolore. Proident exercitation magna commodo dolor tempor deserunt magna enim nostrud commodo non cupidatat officia occaecat.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Aphasia",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec8034d0185b9cec07459",
    "posted": "2020-01-18T09:38:48 -00:00",
    "title": "laborum ex eu reprehenderit ut pariatur labore pariatur fugiat ea",
    "summary": "Eu fugiat fugiat elit id aliqua. Ex id consequat amet quis in voluptate enim quis cupidatat. Incididunt adipisicing ea in culpa aute esse do eu labore.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
    "tagName": "Emotional",
    "exclusive": true,
    "breaking": true,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec803acd0d0d36f8d71c7",
    "posted": "2019-01-11T09:41:41 -00:00",
    "title": "anim laboris excepteur nulla sunt velit sint officia fugiat non",
    "summary": "Minim eiusmod laboris incididunt velit nulla pariatur aliqua cillum dolor ullamco. Nulla occaecat nulla laborum amet elit. Nisi cupidatat aliqua consectetur irure irure ea nulla occaecat enim.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Practical",
    "exclusive": false,
    "breaking": false,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec8033fd4f2a93f839994",
    "posted": "2019-11-11T11:35:02 -00:00",
    "title": "excepteur irure id adipisicing duis veniam sint tempor deserunt mollit",
    "summary": "Dolor deserunt nostrud laboris culpa do fugiat incididunt excepteur in ullamco elit voluptate qui. Proident do sit veniam ut. Consectetur irure in consectetur consectetur esse do. Cillum nostrud excepteur velit minim magna culpa.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Aphasia",
    "exclusive": true,
    "breaking": false,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec80396b1a6e32c0c91d2",
    "posted": "2015-04-24T12:43:32 -01:00",
    "title": "ea et cillum nulla nisi officia elit deserunt excepteur adipisicing",
    "summary": "Do et id ullamco officia dolore fugiat culpa do qui. Officia dolor excepteur proident pariatur enim. Aliquip magna excepteur mollit labore pariatur irure anim. Nostrud officia excepteur anim enim sit. Exercitation proident officia eu et cupidatat dolore labore nostrud mollit laborum commodo.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
    "tagName": "Emotional",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec803594532155408b6ad",
    "posted": "2018-11-04T05:25:20 -00:00",
    "title": "tempor fugiat aute velit labore cupidatat fugiat deserunt amet officia",
    "summary": "Magna et ut laboris cupidatat ipsum exercitation. Anim dolore laboris aute cupidatat laboris ipsum aliquip sit ipsum eiusmod nostrud et quis. Irure sunt reprehenderit excepteur nisi id laboris irure. Ullamco fugiat non aute ea aliqua. Quis in adipisicing ex aute elit veniam voluptate magna sit nulla aliquip amet aliqua laboris. Duis consectetur exercitation non dolore fugiat nulla culpa aliquip laborum.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
    "tagName": "Practical",
    "exclusive": true,
    "breaking": false,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec803f53e70b8f808fbf9",
    "posted": "2014-09-08T05:40:21 -01:00",
    "title": "laborum quis ex nisi magna occaecat consequat non minim deserunt",
    "summary": "Laborum commodo et eu nisi ea consectetur. Laboris quis velit occaecat duis aliquip magna proident ullamco. Sint nisi tempor ea proident quis ipsum consectetur sint id consectetur mollit et reprehenderit anim.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
    "tagName": "Aphasia",
    "exclusive": true,
    "breaking": true,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec803947ca47700e88ca5",
    "posted": "2014-04-15T12:47:58 -01:00",
    "title": "sint ad exercitation reprehenderit excepteur officia amet quis laborum est",
    "summary": "Qui pariatur sunt esse amet proident fugiat laborum elit quis. Culpa et enim pariatur culpa sunt laboris velit aute Lorem labore. Consequat duis tempor dolor nulla cillum nisi sit. Fugiat incididunt consequat est exercitation sint dolor mollit eiusmod reprehenderit duis eiusmod.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
    "tagName": "Practical",
    "exclusive": false,
    "breaking": false,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec803dfb6492135a2b692",
    "posted": "2016-01-06T05:39:57 -00:00",
    "title": "incididunt in ullamco eu exercitation incididunt duis aliqua ut esse",
    "summary": "Velit quis in excepteur exercitation irure et magna non officia eiusmod laborum. Consectetur do in et occaecat anim minim incididunt Lorem consequat. Commodo labore sit officia exercitation in cupidatat. Adipisicing fugiat nostrud qui aute mollit quis duis.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
    "tagName": "Practical",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec8037af08f74ca0b6ed1",
    "posted": "2017-07-22T07:45:03 -01:00",
    "title": "dolor pariatur irure et qui excepteur occaecat aliqua pariatur ad",
    "summary": "Velit Lorem fugiat occaecat quis est fugiat mollit enim fugiat consectetur minim ullamco cillum irure. Laboris dolore cillum est tempor reprehenderit consequat dolor ipsum occaecat minim duis mollit ea commodo. Dolor eiusmod sint Lorem deserunt ullamco magna et reprehenderit culpa. Ullamco ullamco anim ex dolor do non commodo reprehenderit mollit dolore ipsum tempor enim.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
    "tagName": "Practical",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec80343f2f0cb8bc74ced",
    "posted": "2016-05-03T12:57:48 -01:00",
    "title": "ullamco nostrud magna Lorem sint culpa dolor Lorem cillum aliquip",
    "summary": "Ad ullamco anim et ipsum esse eiusmod sunt incididunt sit nulla laborum. Veniam consectetur labore ex sunt. Aliqua amet consectetur Lorem nulla id esse velit qui voluptate ad. Lorem id officia amet aute reprehenderit aute consectetur cupidatat non et enim. Aliqua consequat minim cupidatat occaecat deserunt. Laborum nisi nulla tempor incididunt do non aute consequat.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
    "tagName": "Physical",
    "exclusive": false,
    "breaking": true,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec803d65895ab08c428fd",
    "posted": "2014-02-12T02:56:51 -00:00",
    "title": "Lorem non cupidatat ullamco est officia cillum non incididunt laboris",
    "summary": "Ipsum veniam occaecat veniam nisi nostrud. Nisi sint et velit cupidatat pariatur culpa non voluptate. Adipisicing eu ipsum eiusmod laboris adipisicing. Reprehenderit voluptate consequat incididunt incididunt irure duis irure cillum proident. Commodo eu cupidatat anim deserunt aliquip non cupidatat duis consequat cupidatat elit incididunt ex eiusmod.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Emotional",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec803755c27f88de0a8b5",
    "posted": "2015-12-04T02:14:28 -00:00",
    "title": "dolor minim minim pariatur anim proident elit culpa voluptate non",
    "summary": "Id magna ipsum sit quis. Do velit in cupidatat aliqua elit amet. Ullamco anim magna tempor velit occaecat Lorem. Veniam dolor anim ipsum reprehenderit ullamco nostrud magna nulla amet. Nulla id ea do enim duis anim exercitation minim. Reprehenderit ad id irure duis ad tempor incididunt voluptate minim dolor eu in laborum. Irure officia reprehenderit excepteur incididunt.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
    "tagName": "Practical",
    "exclusive": false,
    "breaking": false,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec803bf99603b70214d4c",
    "posted": "2014-12-09T08:24:45 -00:00",
    "title": "consequat cupidatat dolore duis adipisicing eu laborum duis dolor consectetur",
    "summary": "Nisi dolor non quis aliquip eiusmod sit nulla velit ad ea qui deserunt. Culpa Lorem pariatur elit eu tempor ad ad sint pariatur id. Dolore magna consequat duis anim anim. Aliquip minim reprehenderit ullamco pariatur consequat minim. Fugiat non sint labore veniam id. Ad elit qui magna nisi sunt consectetur esse proident ad.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Physical",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec8034fe31e69b03a3118",
    "posted": "2017-10-15T03:20:14 -01:00",
    "title": "non duis Lorem occaecat id veniam eiusmod est consectetur magna",
    "summary": "Veniam ut reprehenderit ex ea et. Culpa reprehenderit elit labore cupidatat ad. Ut veniam dolore ex elit esse elit aliquip sint non. In ad cupidatat velit culpa non officia cillum nostrud veniam velit cillum voluptate laborum. Ea aliqua mollit culpa amet consequat commodo velit aute nostrud sint fugiat.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Physical",
    "exclusive": false,
    "breaking": false,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec80337895c293d15e0d2",
    "posted": "2016-03-06T05:49:28 -00:00",
    "title": "dolore labore mollit irure consequat minim ullamco excepteur ullamco adipisicing",
    "summary": "Ea do anim proident labore. Sit esse consequat sunt laborum officia adipisicing id cillum ea incididunt duis consectetur. Occaecat officia minim irure laboris commodo pariatur veniam ea culpa.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
    "tagName": "Physical",
    "exclusive": true,
    "breaking": true,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec803f91090134ba555a9",
    "posted": "2020-05-07T12:40:40 -01:00",
    "title": "nostrud nostrud Lorem irure exercitation elit ipsum tempor anim anim",
    "summary": "Aliqua laborum eiusmod non pariatur pariatur amet elit minim nulla. Culpa veniam sit amet aliqua reprehenderit minim veniam eiusmod duis elit amet amet elit. Culpa et deserunt dolor proident aliquip in pariatur ad occaecat enim amet consequat minim. Nostrud commodo tempor incididunt officia veniam nulla velit. Id esse qui culpa laboris mollit deserunt ipsum laborum ullamco cillum irure. Consequat deserunt Lorem dolore pariatur cillum.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
    "tagName": "Physical",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec80359905d9e9a4f5293",
    "posted": "2015-11-07T03:09:14 -00:00",
    "title": "irure esse exercitation quis voluptate ad do ipsum do ipsum",
    "summary": "Dolor cupidatat commodo laborum dolore. Eu eiusmod nulla ad duis proident est. Enim laborum enim esse magna commodo adipisicing tempor irure qui et ipsum. Reprehenderit nostrud dolor voluptate nisi excepteur tempor ipsum nulla aliqua officia id occaecat laborum et. Aliquip consequat mollit laboris in velit ea Lorem veniam. Mollit laboris magna laboris ea.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
    "tagName": "Emotional",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec803107c895c2556adaa",
    "posted": "2015-06-20T09:29:55 -01:00",
    "title": "tempor amet eu enim elit magna consectetur velit ipsum id",
    "summary": "Excepteur ad dolore esse dolor ipsum ipsum enim qui eu tempor nulla aliquip ipsum. In nostrud qui tempor Lorem occaecat non sit aute ea ea esse laboris aliqua pariatur. Nulla nisi culpa labore excepteur voluptate cupidatat minim sit veniam aute et nostrud sunt. Labore consequat commodo id do commodo enim cupidatat. Minim amet magna nulla laborum aliquip ipsum. Cillum aliquip laboris id eiusmod elit labore laborum est aute ullamco ut. Amet consequat Lorem proident elit esse ea.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
    "tagName": "Aphasia",
    "exclusive": true,
    "breaking": true,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec8034d65eb8b138c09aa",
    "posted": "2018-07-22T11:15:05 -01:00",
    "title": "qui veniam anim aute ea ex cillum excepteur ut enim",
    "summary": "Do sint ad pariatur mollit eu sint consequat do sit. Aliquip consectetur quis consectetur amet pariatur laborum cillum duis proident dolor ipsum aliqua ullamco. Sit culpa exercitation magna aliqua do amet aliqua officia in occaecat ut consequat ipsum. Adipisicing ullamco dolore ullamco nostrud consequat in eu ea culpa nisi Lorem.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
    "tagName": "Emotional",
    "exclusive": false,
    "breaking": true,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec803242e054c79608639",
    "posted": "2014-08-10T11:00:12 -01:00",
    "title": "sint laborum sunt dolor do dolore elit minim do dolor",
    "summary": "Nostrud elit consectetur irure ea culpa proident sint ex anim est incididunt. Commodo cillum sunt ea eu cupidatat sunt laboris Lorem sint in. Quis occaecat anim ullamco mollit et velit aute cillum reprehenderit excepteur pariatur occaecat. Veniam excepteur aute eiusmod fugiat minim consequat mollit duis aute ipsum quis exercitation tempor. Et aliqua amet eiusmod ipsum sit officia consequat et nostrud adipisicing deserunt dolor sunt aliquip.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Practical",
    "exclusive": true,
    "breaking": false,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec8032fb016557a6d2053",
    "posted": "2019-01-17T09:15:43 -00:00",
    "title": "consequat est cupidatat laboris aliquip ea ex deserunt quis duis",
    "summary": "Mollit qui proident veniam veniam. Deserunt ea ut labore sunt enim commodo nostrud velit. Consequat consectetur aliqua sunt nisi irure eu aliqua velit non enim consectetur aute cillum. Do fugiat ullamco do anim consectetur exercitation esse ut culpa laborum minim ex amet irure. Amet voluptate sunt irure tempor sit laborum excepteur adipisicing ut id irure. Enim commodo culpa ipsum nulla mollit sit voluptate adipisicing in.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Practical",
    "exclusive": false,
    "breaking": true,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec803a8111d62a43f4d98",
    "posted": "2016-01-28T03:50:15 -00:00",
    "title": "ullamco do irure laborum ullamco nulla aliqua cupidatat sunt reprehenderit",
    "summary": "Ipsum ex aliqua commodo proident. Proident consectetur laborum anim duis. In nisi culpa excepteur sint cupidatat elit. Dolore qui laboris fugiat et laboris aliquip minim quis ut ex aute consectetur.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
    "tagName": "Emotional",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec80377baedf07c0c6d41",
    "posted": "2017-11-11T12:47:23 -00:00",
    "title": "labore exercitation eu ad duis reprehenderit fugiat commodo ut laborum",
    "summary": "Eiusmod aliqua eiusmod esse amet voluptate do incididunt quis. Id officia do mollit et sit. Officia dolor elit veniam nostrud veniam incididunt officia veniam consectetur.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
    "tagName": "Physical",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec80329e771c2061f386a",
    "posted": "2018-11-29T10:03:55 -00:00",
    "title": "Lorem quis aute duis in eu excepteur laborum veniam exercitation",
    "summary": "Exercitation consequat nostrud cillum tempor sint commodo incididunt et dolore deserunt cillum sunt consectetur et. Minim ullamco aute mollit eu nulla dolore id. Pariatur sint occaecat sint labore ut. Culpa ex Lorem cupidatat nostrud aliqua nisi reprehenderit laboris velit ullamco est.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Physical",
    "exclusive": false,
    "breaking": false,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec8038525efb33f6763a9",
    "posted": "2018-12-10T03:56:18 -00:00",
    "title": "ea pariatur ut mollit voluptate consequat cupidatat aute eiusmod minim",
    "summary": "Lorem laborum esse do excepteur elit consequat pariatur sint ullamco labore est cupidatat. Aute et ullamco duis pariatur. Culpa non cupidatat consectetur veniam consequat id Lorem occaecat et dolor. Elit qui cupidatat culpa enim sunt elit velit sint incididunt. Occaecat aute dolore sint labore in ea.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
    "tagName": "Emotional",
    "exclusive": true,
    "breaking": true,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec803a2cc57af40403422",
    "posted": "2014-12-13T05:44:29 -00:00",
    "title": "consectetur ipsum ut magna dolore ipsum excepteur amet irure sint",
    "summary": "Aliqua in ea Lorem tempor fugiat minim. Ex quis veniam qui labore ut nulla ullamco sit aliquip adipisicing exercitation. Et Lorem ipsum commodo adipisicing minim qui nulla eiusmod ullamco enim commodo aliqua labore magna. Est ipsum fugiat mollit consequat magna id. Qui dolor eu id in commodo ea do laborum cillum irure in deserunt amet. Proident cupidatat ex consequat laboris eiusmod. Consectetur elit nisi nulla ea non eu ea aute fugiat commodo tempor adipisicing.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
    "tagName": "Aphasia",
    "exclusive": false,
    "breaking": true,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec80305f4e5bb57201cf3",
    "posted": "2018-01-22T01:42:13 -00:00",
    "title": "esse sint irure Lorem velit fugiat et nulla Lorem nisi",
    "summary": "Commodo Lorem sit velit cupidatat eu pariatur eiusmod aute in Lorem dolor sunt. Minim incididunt eiusmod ullamco irure ullamco minim proident ullamco ad enim aute. Ut adipisicing ea nulla irure ipsum veniam non. Eiusmod sint nisi tempor est sint duis dolor id pariatur occaecat.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
    "tagName": "Practical",
    "exclusive": false,
    "breaking": false,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec803d53e347fcfa5d1b7",
    "posted": "2014-09-21T01:41:29 -01:00",
    "title": "cupidatat sunt cillum proident cillum reprehenderit excepteur sit elit laboris",
    "summary": "Minim occaecat et nisi cillum aliqua commodo. Anim magna exercitation non ea eiusmod fugiat ut occaecat in. Culpa incididunt quis sit do amet do elit velit.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/2.jpg'),
    "tagName": "Emotional",
    "exclusive": false,
    "breaking": false,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec803965a95443be6aff9",
    "posted": "2014-04-24T12:12:37 -01:00",
    "title": "non elit eu commodo magna sit labore duis elit in",
    "summary": "Aliquip anim ea proident eiusmod. Consequat ex nisi consequat laboris. Deserunt esse in fugiat officia voluptate tempor magna tempor eiusmod nostrud fugiat. Qui minim cupidatat elit eiusmod excepteur ut esse adipisicing elit sint. Duis proident voluptate officia duis est enim excepteur duis.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Aphasia",
    "exclusive": false,
    "breaking": false,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec803a4fd9a8c6e69b663",
    "posted": "2014-05-22T01:52:20 -01:00",
    "title": "consequat officia aliquip eu ut esse occaecat est dolore exercitation",
    "summary": "Anim eiusmod enim ea excepteur est reprehenderit adipisicing dolore mollit irure aliqua irure culpa. Mollit nulla ut anim nostrud tempor nostrud sit aute commodo. Eiusmod velit amet adipisicing consectetur commodo proident laboris laboris. Ea fugiat est sit irure reprehenderit dolor ipsum officia veniam eiusmod. Consequat duis incididunt excepteur officia. Ad magna est Lorem consectetur irure ipsum ad ex aliqua nostrud voluptate tempor. Qui anim non occaecat aliqua.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Emotional",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec803320404b3a1103b3a",
    "posted": "2020-05-14T09:25:30 -01:00",
    "title": "nisi mollit sunt officia duis culpa culpa non qui nulla",
    "summary": "Duis aute voluptate proident nostrud sint irure do eiusmod. Dolore esse ipsum laborum commodo mollit exercitation dolore amet eiusmod duis elit eiusmod. Esse minim excepteur exercitation eiusmod duis amet irure ex officia anim do amet laborum. Ut non tempor ex sit sit eiusmod laborum enim qui eu proident duis laborum. Ad labore incididunt occaecat ea id mollit officia.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Practical",
    "exclusive": false,
    "breaking": false,
    "video": false,
    "body": ""
  },
  {
    "id": "5ebec8036abf2e5fb21159f0",
    "posted": "2015-12-19T12:59:36 -00:00",
    "title": "laborum qui mollit nisi adipisicing amet consectetur ullamco fugiat sint",
    "summary": "Adipisicing aliqua sit adipisicing ex consectetur magna minim id ipsum occaecat. Pariatur duis ex elit cupidatat occaecat anim cillum laboris officia. Quis nostrud excepteur anim eu voluptate sit. Ullamco laborum excepteur ipsum laboris in elit exercitation. Ex pariatur qui incididunt incididunt elit reprehenderit velit incididunt officia. Nostrud do non eu laboris sunt mollit ullamco commodo cupidatat mollit veniam qui nisi. Exercitation labore nisi sunt veniam est Lorem.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/1.jpg'),
    "tagName": "Physical",
    "exclusive": true,
    "breaking": true,
    "video": true,
    "body": ""
  },
  {
    "id": "5ebec803758c8b7e1cbef26b",
    "posted": "2017-01-20T10:56:50 -00:00",
    "title": "duis fugiat irure fugiat sint cupidatat voluptate voluptate laborum mollit",
    "summary": "Occaecat occaecat aute deserunt qui ad dolor laborum labore exercitation enim. Pariatur enim pariatur nostrud labore cillum elit sit qui nisi. Nostrud minim occaecat velit adipisicing minim fugiat in reprehenderit aliquip duis. Incididunt adipisicing fugiat tempor minim culpa occaecat deserunt anim culpa tempor excepteur. Cupidatat duis do velit duis id est fugiat sunt ex. Occaecat sint anim consequat aliquip.\r\n",
    "thumbnail": require('../../assets/images/contents/thumbnail/3.jpg'),
    "tagName": "Physical",
    "exclusive": true,
    "breaking": false,
    "video": true,
    "body": ""
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
