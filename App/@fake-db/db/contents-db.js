import mock from './../mock';
import _ from 'lodash';

const contentsDB = {
  contents: [
    {
      "id": "5ec023f4058000fdde07733f",
      "tagName": "Practical",
      "exclusive": true,
      "breaking": false,
      "video": true,
      "title": "excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 20 40",
      "gated":true,
      "body": [
        {key:"title", value:"Mac Miller magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2017-05-20T09:20:32 -01:00"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      ]
    },
    {
      "id": "5ec023f4782cd96a34b80ad9",
      "tagName": "Aphasia",
      "exclusive": true,
      "breaking": false,
      "video": true,
      "title": "commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 19 40",
      "gated":false,
      "body": [
        {key:"title", value:"chance magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 19 40"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"video", value:"https://www.youtube.com/embed/YE7VzlLtp-4"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      ]
    },
    {
      "id": "bbhbhc023f4755c4d20c1aafaee",
      "tagName": "Practical",
      "exclusive": false,
      "breaking": true,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 17 40",
      "gated":true,
      "body": [
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 17 40"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      ]
    },
    {
      "id": "5ec02399999f4755c4d20c1aafaee",
      "tagName": "Practical",
      "exclusive": false,
      "breaking": true,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 17 40",
      "gated":true,
      "body": [
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 17 40"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      ]
    },
    {
      "id": "5ec023f4755hthggt0c1aafaee",
      "tagName": "Practical",
      "exclusive": false,
      "breaking": true,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 17 40",
      "gated":true,
      "body": [
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 17 40"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      ]
    },
    {
      "id": "5ec023f4755c4d20c1aafaswqe",
      "tagName": "Practical",
      "exclusive": false,
      "breaking": true,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 17 40",
      "gated":true,
      "body": [
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 17 40"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      ]
    },
    {
      "id": "kgd3c023f4755c4d20c1aafaee",
      "tagName": "Practical",
      "exclusive": false,
      "breaking": true,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 17 40",
      "gated":true,
      "body": [
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 17 40"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      ]
    },
    {
      "id": "5elklkkk23f4755c4d20c1aafaee",
      "tagName": "Practical",
      "exclusive": false,
      "breaking": true,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 17 40",
      "gated":true,
      "body": [
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 17 40"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      ]
    },
    {
      "id": "5eclp4755c4d20c1aafaee",
      "tagName": "Practical",
      "exclusive": false,
      "breaking": true,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 17 40",
      "gated":true,
      "body": [
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 17 40"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      ]
    },
    {
      "id": "5ec023f4755c4doptr1aafaee",
      "tagName": "Practical",
      "exclusive": false,
      "breaking": true,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 17 40",
      "gated":true,
      "body": [
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 17 40"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      ]
    },
    {
      "id": "5ec023f4755c4d20cuubfaee",
      "tagName": "Practical",
      "exclusive": false,
      "breaking": true,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 17 40",
      "gated":true,
      "body": [
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 17 40"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      ]
    },
    {
      "id": "5ec023f4755c4d20c1aafft",
      "tagName": "Practical",
      "exclusive": false,
      "breaking": true,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 17 40",
      "gated":true,
      "body": [
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 17 40"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      ]
    },
    {
      "id": "5ec023f4058000fde07733f",
      "tagName": "Practical",
      "exclusive": true,
      "breaking": false,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 20 20",
      "gated":false,
      "body": [
        {key:"title", value:"saint magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 20 20"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
      ]
    },
    {
      "id": "5ec023f4782cd9a34b80ad9",
      "tagName": "Aphasia",
      "exclusive": false,
      "breaking": false,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 20 15",
      "gated":false,
      "body": [
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 20 15"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
        {key:"video", value:"https://www.youtube.com/watch?v=RH9kl6XZixo"},
      ]
    },
    {
      "id": "5ec023f4755c4d20c1aafae",
      "tagName": "Practical",
      "exclusive": false,
      "breaking": true,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 20 40",
      "gated":true,
      "body": [
        {key:"title", value:"possible magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 20 40"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      ]
    },
    {
      "id": "5ec023f4058jkj0fdde07733f",
      "tagName": "Practical",
      "exclusive": true,
      "breaking": false,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 20 27",
      "gated":true,
      "body": [
        {key:"title", value:"sscc magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 20 27"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      ]
    },
    {
      "id": "5c023f4782cd96a34b80ad9",
      "tagName": "Aphasia",
      "exclusive": false,
      "breaking": false,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 20 29",
      "gated":false,
      "body": [
        {key:"title", value:"magna essxcepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 20 29"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      ]
    },
    {
      "id": "5ec3f4755c4d20c1aafaee",
      "tagName": "Practical",
      "exclusive": false,
      "breaking": true,
      "video": true,
      "title": "magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum",
      "thumbnail": "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      "posted": "2020 06 03 20 35",
      "gated":true,
      "body": [
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
        {key:"posted", value:"2020 06 03 20 35"},
        {key:"thumbnail", value:"https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg"},
        {key:"text", value:"Consectetur et laboris enim excepteur sit deserunt ex ipsum anim veniam laborum labore duis ad. Anim quis eiusmod cillum eiusmod eiusmod occaecat ad minim enim consectetur excepteur deserunt. Culpa magna do magna consectetur nostrud nulla commodo dolor. Adipisicing ipsum excepteur incididunt pariatur fugiat. Id esse eu veniam est veniam ex pariatur eiusmod occaecat ea. Adipisicing qui cillum consequat nisi exercitation proident exercitation cillum dolor nulla et adipisicing sit est.\r\n"},
        {key:"title", value:"magna excepteur deserunt nostrud commodo amet sunt aute nulla ipsum"},
      ]
    },
  ],
  videos: [
    {
      id: '1',
      title: 'video one',
      thumbnail: "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      uri:"https://www.youtube.com/watch?v=dPhwbZBvW2o",
      video: require("../../assets/videos/jayrock.mp4"),
    },
    {
      id: '2',
      title: 'video two',
      thumbnail: "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      uri:"https://www.youtube.com/embed/YE7VzlLtp-4",
      video: require("../../assets/videos/moana.mp4"),
    },
    {
      id: '3',
      title: 'video three',
      thumbnail: "https://images.complex.com/complex/image/upload/w_680/fl_lossy,q_auto/gjdakxub6ud8zbj4fztp.jpg",
      uri:"https://www.youtube.com/watch?v=ZJM4AQSbZDk",
      video: require("../../assets/videos/jayrock.mp4"),
    }
  ]
};

mock.onGet('/api/contents-app/contents').reply(() => {
    return [200, contentsDB.contents];
});

mock.onGet('/api/contents-app/content').reply((request) => {
    const {contentId} = request.params;
    const response = _.find(contentsDB.contents, {id: contentId});
    return [200, response];
});

mock.onGet('/api/contents-app/videos').reply(() => {
    return [200, contentsDB.videos];
});

mock.onGet('/api/contents-app/video').reply((request) => {
    const {videoId} = request.params;
    const response = _.find(contentsDB.videos, {id: videoId});
    return [200, response];
});
