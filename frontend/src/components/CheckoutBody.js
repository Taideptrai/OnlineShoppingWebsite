import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/User';
import '../Styles/BannerV4.css'
import axios from 'axios'
import {
    withRouter
} from 'react-router-dom'

function CheckoutBody(props) {
    const tinh = [
        {
           "id":1,
           "name":"Thành phố Hà Nội",
           "location":"21.0277644-105.8341598",
           "type":"Thành phố Trung ương"
        },
        {
           "id":2,
           "name":"Tỉnh Hà Giang",
           "location":"22.7662056-104.9388853",
           "type":"Tỉnh"
        },
        {
           "id":3,
           "name":"Tỉnh Cao Bằng",
           "location":"22.635689-106.2522143",
           "type":"Tỉnh"
        },
        {
           "id":4,
           "name":"Tỉnh Bắc Kạn",
           "location":"22.3032923-105.876004",
           "type":"Tỉnh"
        },
        {
           "id":5,
           "name":"Tỉnh Tuyên Quang",
           "location":"22.1726708-105.3131185",
           "type":"Tỉnh"
        },
        {
           "id":6,
           "name":"Tỉnh Lào Cai",
           "location":"22.3380865-104.1487055",
           "type":"Tỉnh"
        },
        {
           "id":7,
           "name":"Tỉnh Điện Biên",
           "location":"21.8042309-103.1076525",
           "type":"Tỉnh"
        },
        {
           "id":8,
           "name":"Tỉnh Lai Châu",
           "location":"22.3686613-103.3119085",
           "type":"Tỉnh"
        },
        {
           "id":9,
           "name":"Tỉnh Sơn La",
           "location":"21.1022284-103.7289167",
           "type":"Tỉnh"
        },
        {
           "id":10,
           "name":"Tỉnh Yên Bái",
           "location":"21.6837923-104.4551361",
           "type":"Tỉnh"
        },
        {
           "id":11,
           "name":"Tỉnh Hoà Bình",
           "location":"20.6861265-105.3131185",
           "type":"Tỉnh"
        },
        {
           "id":12,
           "name":"Tỉnh Thái Nguyên",
           "location":"21.5613771-105.876004",
           "type":"Tỉnh"
        },
        {
           "id":13,
           "name":"Tỉnh Lạng Sơn",
           "location":"21.8563705-106.6291304",
           "type":"Tỉnh"
        },
        {
           "id":14,
           "name":"Tỉnh Quảng Ninh",
           "location":"21.006382-107.2925144",
           "type":"Tỉnh"
        },
        {
           "id":15,
           "name":"Tỉnh Bắc Giang",
           "location":"21.3014947-106.6291304",
           "type":"Tỉnh"
        },
        {
           "id":16,
           "name":"Tỉnh Phú Thọ",
           "location":"21.268443-105.2045573",
           "type":"Tỉnh"
        },
        {
           "id":17,
           "name":"Tỉnh Vĩnh Phúc",
           "location":"21.3608805-105.5474373",
           "type":"Tỉnh"
        },
        {
           "id":18,
           "name":"Tỉnh Bắc Ninh",
           "location":"21.121444-106.1110501",
           "type":"Tỉnh"
        },
        {
           "id":19,
           "name":"Tỉnh Hải Dương",
           "location":"20.9385958-106.3206861",
           "type":"Tỉnh"
        },
        {
           "id":20,
           "name":"Thành phố Hải Phòng",
           "location":"20.8449115-106.6880841",
           "type":"Thành phố Trung ương"
        },
        {
           "id":21,
           "name":"Tỉnh Hưng Yên",
           "location":"20.8525711-106.0169971",
           "type":"Tỉnh"
        },
        {
           "id":22,
           "name":"Tỉnh Thái Bình",
           "location":"20.5386936-106.3934777",
           "type":"Tỉnh"
        },
        {
           "id":23,
           "name":"Tỉnh Hà Nam",
           "location":"20.5835196-105.92299",
           "type":"Tỉnh"
        },
        {
           "id":24,
           "name":"Tỉnh Nam Định",
           "location":"20.2791804-106.2051484",
           "type":"Tỉnh"
        },
        {
           "id":25,
           "name":"Tỉnh Ninh Bình",
           "location":"20.2129969-105.92299",
           "type":"Tỉnh"
        },
        {
           "id":26,
           "name":"Tỉnh Thanh Hóa",
           "location":"20.1291279-105.3131185",
           "type":"Tỉnh"
        },
        {
           "id":27,
           "name":"Tỉnh Nghệ An",
           "location":"19.2342489-104.9200365",
           "type":"Tỉnh"
        },
        {
           "id":28,
           "name":"Tỉnh Hà Tĩnh",
           "location":"18.2943776-105.6745247",
           "type":"Tỉnh"
        },
        {
           "id":29,
           "name":"Tỉnh Quảng Bình",
           "location":"17.6102715-106.3487474",
           "type":"Tỉnh"
        },
        {
           "id":30,
           "name":"Tỉnh Quảng Trị",
           "location":"16.7943472-106.963409",
           "type":"Tỉnh"
        },
        {
           "id":31,
           "name":"Tỉnh Thừa Thiên Huế",
           "location":"16.467397-107.5905326",
           "type":"Tỉnh"
        },
        {
           "id":32,
           "name":"Thành phố Đà Nẵng",
           "location":"16.0544068-108.2021667",
           "type":"Thành phố Trung ương"
        },
        {
           "id":33,
           "name":"Tỉnh Quảng Nam",
           "location":"15.5393538-108.019102",
           "type":"Tỉnh"
        },
        {
           "id":34,
           "name":"Tỉnh Quảng Ngãi",
           "location":"15.0759838-108.7125791",
           "type":"Tỉnh"
        },
        {
           "id":35,
           "name":"Tỉnh Bình Định",
           "location":"14.1665324-108.902683",
           "type":"Tỉnh"
        },
        {
           "id":36,
           "name":"Tỉnh Phú Yên",
           "location":"13.0881861-109.0928764",
           "type":"Tỉnh"
        },
        {
           "id":37,
           "name":"Tỉnh Khánh Hòa",
           "location":"12.2585098-109.0526076",
           "type":"Tỉnh"
        },
        {
           "id":38,
           "name":"Tỉnh Ninh Thuận",
           "location":"11.6738767-108.8629572",
           "type":"Tỉnh"
        },
        {
           "id":39,
           "name":"Tỉnh Bình Thuận",
           "location":"11.0903703-108.0720781",
           "type":"Tỉnh"
        },
        {
           "id":40,
           "name":"Tỉnh Kon Tum",
           "location":"14.661167-107.83885",
           "type":"Tỉnh"
        },
        {
           "id":41,
           "name":"Tỉnh Gia Lai",
           "location":"13.8078943-108.109375",
           "type":"Tỉnh"
        },
        {
           "id":42,
           "name":"Tỉnh Đắk Lắk",
           "location":"12.7100116-108.2377519",
           "type":"Tỉnh"
        },
        {
           "id":43,
           "name":"Tỉnh Đắk Nông",
           "location":"12.2646476-107.609806",
           "type":"Tỉnh"
        },
        {
           "id":44,
           "name":"Tỉnh Lâm Đồng",
           "location":"11.5752791-108.1428669",
           "type":"Tỉnh"
        },
        {
           "id":45,
           "name":"Tỉnh Bình Phước",
           "location":"11.7511894-106.7234639",
           "type":"Tỉnh"
        },
        {
           "id":46,
           "name":"Tỉnh Tây Ninh",
           "location":"11.3494766-106.0640179",
           "type":"Tỉnh"
        },
        {
           "id":47,
           "name":"Tỉnh Bình Dương",
           "location":"11.3254024-106.477017",
           "type":"Tỉnh"
        },
        {
           "id":48,
           "name":"Tỉnh Đồng Nai",
           "location":"11.0686305-107.1675976",
           "type":"Tỉnh"
        },
        {
           "id":49,
           "name":"Tỉnh Bà Rịa - Vũng Tàu",
           "location":"10.5417397-107.2429976",
           "type":"Tỉnh"
        },
        {
           "id":50,
           "name":"Thành phố Hồ Chí Minh",
           "location":"10.8230989-106.6296638",
           "type":"Thành phố Trung ương"
        },
        {
           "id":51,
           "name":"Tỉnh Long An",
           "location":"10.695572-106.2431205",
           "type":"Tỉnh"
        },
        {
           "id":52,
           "name":"Tỉnh Tiền Giang",
           "location":"10.4493324-106.3420504",
           "type":"Tỉnh"
        },
        {
           "id":53,
           "name":"Tỉnh Bến Tre",
           "location":"10.1081553-106.4405872",
           "type":"Tỉnh"
        },
        {
           "id":54,
           "name":"Tỉnh Trà Vinh",
           "location":"9.812741-106.2992912",
           "type":"Tỉnh"
        },
        {
           "id":55,
           "name":"Tỉnh Vĩnh Long",
           "location":"10.0861281-106.0169971",
           "type":"Tỉnh"
        },
        {
           "id":56,
           "name":"Tỉnh Đồng Tháp",
           "location":"10.4937989-105.6881788",
           "type":"Tỉnh"
        },
        {
           "id":57,
           "name":"Tỉnh An Giang",
           "location":"10.5215836-105.1258955",
           "type":"Tỉnh"
        },
        {
           "id":58,
           "name":"Tỉnh Kiên Giang",
           "location":"9.8249587-105.1258955",
           "type":"Tỉnh"
        },
        {
           "id":59,
           "name":"Thành phố Cần Thơ",
           "location":"10.0451618-105.7468535",
           "type":"Thành phố Trung ương"
        },
        {
           "id":60,
           "name":"Tỉnh Hậu Giang",
           "location":"9.757898-105.6412527",
           "type":"Tỉnh"
        },
        {
           "id":61,
           "name":"Tỉnh Sóc Trăng",
           "location":"9.6003688-105.9599539",
           "type":"Tỉnh"
        },
        {
           "id":62,
           "name":"Tỉnh Bạc Liêu",
           "location":"9.2515555-105.5136472",
           "type":"Tỉnh"
        },
        {
           "id":63,
           "name":"Tỉnh Cà Mau",
           "location":"8.9624099-105.1258955",
           "type":"Tỉnh"
        }
    ]
    const huyen = [
    {
        "id":1,
        "name":"Quận Ba Đình",
        "location":"21.0337815-105.8140539",
        "type":"Quận",
        "tinh_id":1
    },
    {
        "id":2,
        "name":"Quận Hoàn Kiếm",
        "location":"21.027964-105.8510132",
        "type":"Quận",
        "tinh_id":1
    },
    {
        "id":3,
        "name":"Quận Tây Hồ",
        "location":"21.0811211-105.8180306",
        "type":"Quận",
        "tinh_id":1
    },
    {
        "id":4,
        "name":"Quận Long Biên",
        "location":"21.0548635-105.8884966",
        "type":"Quận",
        "tinh_id":1
    },
    {
        "id":5,
        "name":"Quận Cầu Giấy",
        "location":"21.0362368-105.7905825",
        "type":"Quận",
        "tinh_id":1
    },
    {
        "id":6,
        "name":"Quận Đống Đa",
        "location":"21.0180725-105.8299495",
        "type":"Quận",
        "tinh_id":1
    },
    {
        "id":7,
        "name":"Quận Hai Bà Trưng",
        "location":"21.0090571-105.8607507",
        "type":"Quận",
        "tinh_id":1
    },
    {
        "id":8,
        "name":"Quận Hoàng Mai",
        "location":"20.9836984-105.8636257",
        "type":"Quận",
        "tinh_id":1
    },
    {
        "id":9,
        "name":"Quận Thanh Xuân",
        "location":"20.9959819-105.8097244",
        "type":"Quận",
        "tinh_id":1
    },
    {
        "id":16,
        "name":"Huyện Sóc Sơn",
        "location":"21.2573126-105.8480203",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":17,
        "name":"Huyện Đông Anh",
        "location":"21.1245303-105.8271398",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":18,
        "name":"Huyện Gia Lâm",
        "location":"21.0105208-105.952941",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":19,
        "name":"Quận Nam Từ Liêm",
        "location":"21.0034608-105.7703287",
        "type":"Quận",
        "tinh_id":1
    },
    {
        "id":20,
        "name":"Huyện Thanh Trì",
        "location":"20.9344418-105.8462288",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":21,
        "name":"Quận Bắc Từ Liêm",
        "location":"21.0730201-105.7703287",
        "type":"Quận",
        "tinh_id":1
    },
    {
        "id":24,
        "name":"Thành phố Hà Giang",
        "location":"22.8025588-104.9784494",
        "type":"Thành phố",
        "tinh_id":2
    },
    {
        "id":26,
        "name":"Huyện Đồng Văn",
        "location":"23.2246718-105.2428853",
        "type":"Huyện",
        "tinh_id":2
    },
    {
        "id":27,
        "name":"Huyện Mèo Vạc",
        "location":"23.1341053-105.4536718",
        "type":"Huyện",
        "tinh_id":2
    },
    {
        "id":28,
        "name":"Huyện Yên Minh",
        "location":"23.0434955-105.1960795",
        "type":"Huyện",
        "tinh_id":2
    },
    {
        "id":29,
        "name":"Huyện Quản Bạ",
        "location":"23.087186-104.9856176",
        "type":"Huyện",
        "tinh_id":2
    },
    {
        "id":30,
        "name":"Huyện Vị Xuyên",
        "location":"22.7241336-104.8921668",
        "type":"Huyện",
        "tinh_id":2
    },
    {
        "id":31,
        "name":"Huyện Bắc Mê",
        "location":"22.7811484-105.2662931",
        "type":"Huyện",
        "tinh_id":2
    },
    {
        "id":32,
        "name":"Huyện Hoàng Su Phì",
        "location":"22.7417169-104.705431",
        "type":"Huyện",
        "tinh_id":2
    },
    {
        "id":33,
        "name":"Huyện Xín Mần",
        "location":"22.6659156-104.5189214",
        "type":"Huyện",
        "tinh_id":2
    },
    {
        "id":34,
        "name":"Huyện Bắc Quang",
        "location":"22.4450248-104.8921668",
        "type":"Huyện",
        "tinh_id":2
    },
    {
        "id":35,
        "name":"Thành phố Cao Bằng",
        "location":"22.6655648-106.2606733",
        "type":"Thành phố",
        "tinh_id":3
    },
    {
        "id":36,
        "name":"Huyện Bảo Lâm",
        "location":"22.8378995-105.4948965",
        "type":"Huyện",
        "tinh_id":3
    },
    {
        "id":37,
        "name":"Huyện Bảo Lạc",
        "location":"22.8786248-105.6881788",
        "type":"Huyện",
        "tinh_id":3
    },
    {
        "id":38,
        "name":"Huyện Thông Nông",
        "location":"22.8439088-105.9520986",
        "type":"Huyện",
        "tinh_id":3
    },
    {
        "id":39,
        "name":"Huyện Hà Quảng",
        "location":"22.9025402-106.1345705",
        "type":"Huyện",
        "tinh_id":3
    },
    {
        "id":40,
        "name":"Huyện Trà Lĩnh",
        "location":"22.7903474-106.3228338",
        "type":"Huyện",
        "tinh_id":3
    },
    {
        "id":41,
        "name":"Huyện Trùng Khánh",
        "location":"22.8323826-106.5819789",
        "type":"Huyện",
        "tinh_id":3
    },
    {
        "id":42,
        "name":"Huyện Hạ Lang",
        "location":"22.7042438-106.6998767",
        "type":"Huyện",
        "tinh_id":3
    },
    {
        "id":43,
        "name":"Huyện Quảng Uyên",
        "location":"22.68299-106.4641459",
        "type":"Huyện",
        "tinh_id":3
    },
    {
        "id":44,
        "name":"Huyện Phục Hoà",
        "location":"22.5392684-106.5112712",
        "type":"Huyện",
        "tinh_id":3
    },
    {
        "id":45,
        "name":"Huyện Hoà An",
        "location":"22.7538704-106.22868",
        "type":"Huyện",
        "tinh_id":3
    },
    {
        "id":46,
        "name":"Huyện Nguyên Bình",
        "location":"22.6230856-105.92299",
        "type":"Huyện",
        "tinh_id":3
    },
    {
        "id":46,
        "name":"Huyện Thạch An",
        "location":"22.4663561-106.3228338",
        "type":"Huyện",
        "tinh_id":3
    },
    {
        "id":58,
        "name":"Thành Phố Bắc Kạn",
        "location":"22.1329032-105.8407722",
        "type":"Thành phố",
        "tinh_id":4
    },
    {
        "id":60,
        "name":"Huyện Pác Nặm",
        "location":"22.6126367-105.6703226",
        "type":"Huyện",
        "tinh_id":4
    },
    {
        "id":61,
        "name":"Huyện Ba Bể",
        "location":"22.3636887-105.7351171",
        "type":"Huyện",
        "tinh_id":4
    },
    {
        "id":62,
        "name":"Huyện Ngân Sơn",
        "location":"22.4281787-106.0169971",
        "type":"Huyện",
        "tinh_id":4
    },
    {
        "id":63,
        "name":"Huyện Bạch Thông",
        "location":"22.2360787-105.8525154",
        "type":"Huyện",
        "tinh_id":4
    },
    {
        "id":64,
        "name":"Huyện Chợ Đồn",
        "location":"22.1964994-105.5474373",
        "type":"Huyện",
        "tinh_id":4
    },
    {
        "id":65,
        "name":"Huyện Chợ Mới",
        "location":"21.9833375-105.8290298",
        "type":"Huyện",
        "tinh_id":4
    },
    {
        "id":66,
        "name":"Huyện Na Rì",
        "location":"22.1406595-106.1110501",
        "type":"Huyện",
        "tinh_id":4
    },
    {
        "id":70,
        "name":"Thành phố Tuyên Quang",
        "location":"21.7767246-105.2280196",
        "type":"Thành phố",
        "tinh_id":5
    },
    {
        "id":71,
        "name":"Huyện Lâm Bình",
        "location":"22.4565907-105.2170589",
        "type":"Huyện",
        "tinh_id":5
    },
    {
        "id":72,
        "name":"Huyện Nà Hang",
        "location":"22.4933358-105.3599568",
        "type":"Huyện",
        "tinh_id":5
    },
    {
        "id":73,
        "name":"Huyện Chiêm Hóa",
        "location":"22.1306765-105.2662931",
        "type":"Huyện",
        "tinh_id":5
    },
    {
        "id":74,
        "name":"Huyện Hàm Yên",
        "location":"22.0839452-105.027174",
        "type":"Huyện",
        "tinh_id":5
    },
    {
        "id":75,
        "name":"Huyện Yên Sơn",
        "location":"21.9447986-105.2662931",
        "type":"Huyện",
        "tinh_id":5
    },
    {
        "id":76,
        "name":"Huyện Sơn Dương",
        "location":"21.6571812-105.3599568",
        "type":"Huyện",
        "tinh_id":5
    },
    {
        "id":80,
        "name":"Thành phố Lào Cai",
        "location":"22.4458835-104.0037764",
        "type":"Thành phố",
        "tinh_id":6
    },
    {
        "id":82,
        "name":"Huyện Bát Xát",
        "location":"22.5539336-103.682586",
        "type":"Huyện",
        "tinh_id":6
    },
    {
        "id":83,
        "name":"Huyện Mường Khương",
        "location":"22.6785309-104.1233667",
        "type":"Huyện",
        "tinh_id":6
    },
    {
        "id":84,
        "name":"Huyện Si Ma Cai",
        "location":"22.6659838-104.262851",
        "type":"Huyện",
        "tinh_id":6
    },
    {
        "id":85,
        "name":"Huyện Bắc Hà",
        "location":"22.4965469-104.332644",
        "type":"Huyện",
        "tinh_id":6
    },
    {
        "id":86,
        "name":"Huyện Bảo Thắng",
        "location":"22.3266996-104.1466046",
        "type":"Huyện",
        "tinh_id":6
    },
    {
        "id":87,
        "name":"Huyện Bảo Yên",
        "location":"22.2763301-104.4490398",
        "type":"Huyện",
        "tinh_id":6
    },
    {
        "id":88,
        "name":"Huyện Sa Pa",
        "location":"22.2497168-103.9608091",
        "type":"Huyện",
        "tinh_id":6
    },
    {
        "id":89,
        "name":"Huyện Văn Bàn",
        "location":"22.0894109-104.1930918",
        "type":"Huyện",
        "tinh_id":6
    },
    {
        "id":94,
        "name":"Thành phố Điện Biên Phủ",
        "location":"21.4094269-103.0355852",
        "type":"Thành phố",
        "tinh_id":7
    },
    {
        "id":95,
        "name":"Thị Xã Mường Lay",
        "location":"22.0498734-103.1634988",
        "type":"Thị xã",
        "tinh_id":7
    },
    {
        "id":96,
        "name":"Huyện Mường Nhé",
        "location":"22.0832638-102.5757028",
        "type":"Huyện",
        "tinh_id":7
    },
    {
        "id":97,
        "name":"Huyện Mường Chà",
        "location":"21.8596604-103.035694",
        "type":"Huyện",
        "tinh_id":7
    },
    {
        "id":98,
        "name":"Huyện Tủa Chùa",
        "location":"21.9232005-103.4049445",
        "type":"Huyện",
        "tinh_id":7
    },
    {
        "id":99,
        "name":"Huyện Tuần Giáo",
        "location":"21.6427019-103.4049445",
        "type":"Huyện",
        "tinh_id":7
    },
    {
        "id":100,
        "name":"Huyện Điện Biên",
        "location":"21.2044768-103.035694",
        "type":"Huyện",
        "tinh_id":7
    },
    {
        "id":101,
        "name":"Huyện Điện Biên Đông",
        "location":"21.2835093-103.2201828",
        "type":"Huyện",
        "tinh_id":7
    },
    {
        "id":102,
        "name":"Huyện Mường Ảng",
        "location":"21.5641438-103.2201828",
        "type":"Huyện",
        "tinh_id":7
    },
    {
        "id":103,
        "name":"Huyện Nậm Pồ",
        "location":"22.1910984-102.4614607",
        "type":"Huyện",
        "tinh_id":7
    },
    {
        "id":105,
        "name":"Thành phố Lai Châu",
        "location":"22.3997565-103.4477219",
        "type":"Thành phố",
        "tinh_id":8
    },
    {
        "id":106,
        "name":"Huyện Tam Đường",
        "location":"22.3497051-103.6131203",
        "type":"Huyện",
        "tinh_id":8
    },
    {
        "id":107,
        "name":"Huyện Mường Tè",
        "location":"22.400379-102.7135121",
        "type":"Huyện",
        "tinh_id":8
    },
    {
        "id":108,
        "name":"Huyện Sìn Hồ",
        "location":"22.3048884-103.3125299",
        "type":"Huyện",
        "tinh_id":8
    },
    {
        "id":109,
        "name":"Huyện Phong Thổ",
        "location":"22.5776336-103.4049445",
        "type":"Huyện",
        "tinh_id":8
    },
    {
        "id":110,
        "name":"Huyện Than Uyên",
        "location":"21.8922107-103.7752634",
        "type":"Huyện",
        "tinh_id":8
    },
    {
        "id":111,
        "name":"Huyện Tân Uyên",
        "location":"22.0868845-103.682586",
        "type":"Huyện",
        "tinh_id":8
    },
    {
        "id":112,
        "name":"Huyện Nậm Nhùn",
        "location":"22.1559988-103.0059081",
        "type":"Huyện",
        "tinh_id":8
    },
    {
        "id":116,
        "name":"Thành phố Sơn La",
        "location":"21.3270341-103.9141288",
        "type":"Thành phố",
        "tinh_id":9
    },
    {
        "id":118,
        "name":"Huyện Quỳnh Nhai",
        "location":"21.7132038-103.682586",
        "type":"Huyện",
        "tinh_id":9
    },
    {
        "id":119,
        "name":"Huyện Thuận Châu",
        "location":"21.3900652-103.6362715",
        "type":"Huyện",
        "tinh_id":9
    },
    {
        "id":120,
        "name":"Huyện Mường La",
        "location":"21.495112-104.053676",
        "type":"Huyện",
        "tinh_id":9
    },
    {
        "id":121,
        "name":"Huyện Bắc Yên",
        "location":"21.2765545-104.4257533",
        "type":"Huyện",
        "tinh_id":9
    },
    {
        "id":122,
        "name":"Huyện Phù Yên",
        "location":"21.2623608-104.6441102",
        "type":"Huyện",
        "tinh_id":9
    },
    {
        "id":123,
        "name":"Huyện Mộc Châu",
        "location":"20.9220823-104.7520939",
        "type":"Huyện",
        "tinh_id":9
    },
    {
        "id":124,
        "name":"Huyện Yên Châu",
        "location":"21.0050006-104.332644",
        "type":"Huyện",
        "tinh_id":9
    },
    {
        "id":125,
        "name":"Huyện Mai Sơn",
        "location":"21.1219095-104.053676",
        "type":"Huyện",
        "tinh_id":9
    },
    {
        "id":126,
        "name":"Huyện Sông Mã",
        "location":"21.0593251-103.682586",
        "type":"Huyện",
        "tinh_id":9
    },
    {
        "id":127,
        "name":"Huyện Sốp Cộp",
        "location":"20.8874516-103.4974258",
        "type":"Huyện",
        "tinh_id":9
    },
    {
        "id":128,
        "name":"Huyện Vân Hồ",
        "location":"20.7931051-104.7637619",
        "type":"Huyện",
        "tinh_id":9
    },
    {
        "id":132,
        "name":"Thành phố Yên Bái",
        "location":"21.7167689-104.8985878",
        "type":"Thành phố",
        "tinh_id":10
    },
    {
        "id":133,
        "name":"Thị xã Nghĩa Lộ",
        "location":"21.6018769-104.5062651",
        "type":"Thị xã",
        "tinh_id":10
    },
    {
        "id":135,
        "name":"Huyện Lục Yên",
        "location":"22.0900049-104.705431",
        "type":"Huyện",
        "tinh_id":10
    },
    {
        "id":136,
        "name":"Huyện Văn Yên",
        "location":"21.8698428-104.5655273",
        "type":"Huyện",
        "tinh_id":10
    },
    {
        "id":137,
        "name":"Huyện Mù Căng Chải",
        "location":"21.7670046-104.1466046",
        "type":"Huyện",
        "tinh_id":10
    },
    {
        "id":138,
        "name":"Huyện Trấn Yên",
        "location":"21.6160083-104.798771",
        "type":"Huyện",
        "tinh_id":10
    },
    {
        "id":139,
        "name":"Huyện Trạm Tấu",
        "location":"21.4629385-104.4257533",
        "type":"Huyện",
        "tinh_id":10
    },
    {
        "id":140,
        "name":"Huyện Văn Chấn",
        "location":"21.4298431-104.798771",
        "type":"Huyện",
        "tinh_id":10
    },
    {
        "id":141,
        "name":"Huyện Yên Bình",
        "location":"21.7850519-104.9856176",
        "type":"Huyện",
        "tinh_id":10
    },
    {
        "id":148,
        "name":"Thành phố Hòa Bình",
        "location":"20.828578-105.3380302",
        "type":"Thành phố",
        "tinh_id":11
    },
    {
        "id":150,
        "name":"Huyện Đà Bắc",
        "location":"20.8381545-105.1726816",
        "type":"Huyện",
        "tinh_id":11
    },
    {
        "id":151,
        "name":"Huyện Kỳ Sơn",
        "location":"20.9030231-105.3932378",
        "type":"Huyện",
        "tinh_id":11
    },
    {
        "id":152,
        "name":"Huyện Lương Sơn",
        "location":"20.871913-105.5040269",
        "type":"Huyện",
        "tinh_id":11
    },
    {
        "id":153,
        "name":"Huyện Kim Bôi",
        "location":"20.6901132-105.5239912",
        "type":"Huyện",
        "tinh_id":11
    },
    {
        "id":154,
        "name":"Huyện Cao Phong",
        "location":"20.7072205-105.336536",
        "type":"Huyện",
        "tinh_id":11
    },
    {
        "id":155,
        "name":"Huyện Tân Lạc",
        "location":"20.6228033-105.2428853",
        "type":"Huyện",
        "tinh_id":11
    },
    {
        "id":156,
        "name":"Huyện Mai Châu",
        "location":"20.6901339-105.0089888",
        "type":"Huyện",
        "tinh_id":11
    },
    {
        "id":157,
        "name":"Huyện Lạc Sơn",
        "location":"20.4413353-105.4536718",
        "type":"Huyện",
        "tinh_id":11
    },
    {
        "id":158,
        "name":"Huyện Yên Thủy",
        "location":"20.4032247-105.6177942",
        "type":"Huyện",
        "tinh_id":11
    },
    {
        "id":159,
        "name":"Huyện Lạc Thủy",
        "location":"20.5136724-105.7333455",
        "type":"Huyện",
        "tinh_id":11
    },
    {
        "id":164,
        "name":"Thành phố Thái Nguyên",
        "location":"21.5671559-105.8252038",
        "type":"Thành phố",
        "tinh_id":12
    },
    {
        "id":165,
        "name":"Thành phố Sông Công",
        "location":"21.4757637-105.8234766",
        "type":"Thành phố",
        "tinh_id":12
    },
    {
        "id":167,
        "name":"Huyện Định Hóa",
        "location":"21.8879551-105.6177942",
        "type":"Huyện",
        "tinh_id":12
    },
    {
        "id":168,
        "name":"Huyện Phú Lương",
        "location":"21.786057-105.7116464",
        "type":"Huyện",
        "tinh_id":12
    },
    {
        "id":169,
        "name":"Huyện Đồng Hỷ",
        "location":"21.6286393-105.8994956",
        "type":"Huyện",
        "tinh_id":12
    },
    {
        "id":170,
        "name":"Huyện Võ Nhai",
        "location":"21.7793409-106.0169971",
        "type":"Huyện",
        "tinh_id":12
    },
    {
        "id":171,
        "name":"Huyện Đại Từ",
        "location":"21.6304358-105.6412527",
        "type":"Huyện",
        "tinh_id":12
    },
    {
        "id":172,
        "name":"Thị xã Phổ Yên",
        "location":"21.415762-105.872995",
        "type":"Thị xã",
        "tinh_id":12
    },
    {
        "id":173,
        "name":"Huyện Phú Bình",
        "location":"21.4849768-105.9464874",
        "type":"Huyện",
        "tinh_id":12
    },
    {
        "id":178,
        "name":"Thành phố Lạng Sơn",
        "location":"21.853708-106.761519",
        "type":"Thành phố",
        "tinh_id":13
    },
    {
        "id":180,
        "name":"Huyện Tràng Định",
        "location":"22.2872995-106.4877072",
        "type":"Huyện",
        "tinh_id":13
    },
    {
        "id":181,
        "name":"Huyện Bình Gia",
        "location":"22.0639906-106.3340858",
        "type":"Huyện",
        "tinh_id":13
    },
    {
        "id":182,
        "name":"Huyện Văn Lãng",
        "location":"22.0924829-106.5819789",
        "type":"Huyện",
        "tinh_id":13
    },
    {
        "id":183,
        "name":"Huyện Cao Lộc",
        "location":"21.9036302-106.8414374",
        "type":"Huyện",
        "tinh_id":13
    },
    {
        "id":184,
        "name":"Huyện Văn Quan",
        "location":"21.8453587-106.5112712",
        "type":"Huyện",
        "tinh_id":13
    },
    {
        "id":185,
        "name":"Huyện Bắc Sơn",
        "location":"21.8437729-106.2992912",
        "type":"Huyện",
        "tinh_id":13
    },
    {
        "id":186,
        "name":"Huyện Hữu Lũng",
        "location":"21.5659824-106.2992912",
        "type":"Huyện",
        "tinh_id":13
    },
    {
        "id":187,
        "name":"Huyện Chi Lăng",
        "location":"21.6506944-106.6055534",
        "type":"Huyện",
        "tinh_id":13
    },
    {
        "id":188,
        "name":"Huyện Lộc Bình",
        "location":"21.7757592-106.9594723",
        "type":"Huyện",
        "tinh_id":13
    },
    {
        "id":189,
        "name":"Huyện Đình Lập",
        "location":"21.5711978-107.1484521",
        "type":"Huyện",
        "tinh_id":13
    },
    {
        "id":193,
        "name":"Thành phố Hạ Long",
        "location":"20.9711977-107.0448069",
        "type":"Thành phố",
        "tinh_id":14
    },
    {
        "id":194,
        "name":"Thành phố Móng Cái",
        "location":"21.5419456-107.8794943",
        "type":"Thành phố",
        "tinh_id":14
    },
    {
        "id":195,
        "name":"Thành phố Cẩm Phả",
        "location":"21.0694762-107.3139304",
        "type":"Thành phố",
        "tinh_id":14
    },
    {
        "id":196,
        "name":"Thành phố Uông Bí",
        "location":"21.081585-106.7470536",
        "type":"Thành phố",
        "tinh_id":14
    },
    {
        "id":198,
        "name":"Huyện Bình Liêu",
        "location":"21.5410162-107.4321959",
        "type":"Huyện",
        "tinh_id":14
    },
    {
        "id":199,
        "name":"Huyện Tiên Yên",
        "location":"21.3666878-107.3375791",
        "type":"Huyện",
        "tinh_id":14
    },
    {
        "id":200,
        "name":"Huyện Đầm Hà",
        "location":"21.3619435-107.5978577",
        "type":"Huyện",
        "tinh_id":14
    },
    {
        "id":201,
        "name":"Huyện Hải Hà",
        "location":"21.4182232-107.71625",
        "type":"Huyện",
        "tinh_id":14
    },
    {
        "id":202,
        "name":"Huyện Ba Chẽ",
        "location":"21.294325-107.1484521",
        "type":"Huyện",
        "tinh_id":14
    },
    {
        "id":203,
        "name":"Huyện Vân Đồn",
        "location":"21.0693983-107.4202262",
        "type":"Huyện",
        "tinh_id":14
    },
    {
        "id":204,
        "name":"Huyện Hoành Bồ",
        "location":"21.0551849-107.0405167",
        "type":"Huyện",
        "tinh_id":14
    },
    {
        "id":205,
        "name":"Thị xã Đông Triều",
        "location":"21.0958153-106.6055534",
        "type":"Thị xã",
        "tinh_id":14
    },
    {
        "id":206,
        "name":"Thị xã Quảng Yên",
        "location":"20.9334638-106.8414374",
        "type":"Thị xã",
        "tinh_id":14
    },
    {
        "id":207,
        "name":"Huyện Cô Tô",
        "location":"21.1062206-107.8346924",
        "type":"Huyện",
        "tinh_id":14
    },
    {
        "id":213,
        "name":"Thành phố Bắc Giang",
        "location":"21.2909028-106.1867027",
        "type":"Thành phố",
        "tinh_id":15
    },
    {
        "id":215,
        "name":"Huyện Yên Thế",
        "location":"21.5128774-106.1345705",
        "type":"Huyện",
        "tinh_id":15
    },
    {
        "id":216,
        "name":"Huyện Tân Yên",
        "location":"21.3785203-106.0875326",
        "type":"Huyện",
        "tinh_id":15
    },
    {
        "id":217,
        "name":"Huyện Lạng Giang",
        "location":"21.3646422-106.22868",
        "type":"Huyện",
        "tinh_id":15
    },
    {
        "id":218,
        "name":"Huyện Lục Nam",
        "location":"21.2996631-106.4170311",
        "type":"Huyện",
        "tinh_id":15
    },
    {
        "id":219,
        "name":"Huyện Lục Ngạn",
        "location":"21.4354043-106.676292",
        "type":"Huyện",
        "tinh_id":15
    },
    {
        "id":220,
        "name":"Huyện Sơn Động",
        "location":"21.3520004-106.8849897",
        "type":"Huyện",
        "tinh_id":15
    },
    {
        "id":221,
        "name":"Huyện Yên Dũng",
        "location":"21.2257315-106.22868",
        "type":"Huyện",
        "tinh_id":15
    },
    {
        "id":222,
        "name":"Huyện Việt Yên",
        "location":"21.2858633-106.0875326",
        "type":"Huyện",
        "tinh_id":15
    },
    {
        "id":223,
        "name":"Huyện Hiệp Hòa",
        "location":"21.3552222-105.9790377",
        "type":"Huyện",
        "tinh_id":15
    },
    {
        "id":227,
        "name":"Thành phố Việt Trì",
        "location":"21.3425399-105.3716684",
        "type":"Thành phố",
        "tinh_id":16
    },
    {
        "id":228,
        "name":"Thị xã Phú Thọ",
        "location":"21.4252786-105.2311827",
        "type":"Thị xã",
        "tinh_id":16
    },
    {
        "id":230,
        "name":"Huyện Đoan Hùng",
        "location":"21.6071636-105.1492869",
        "type":"Huyện",
        "tinh_id":16
    },
    {
        "id":231,
        "name":"Huyện Hạ Hoà",
        "location":"21.5735989-105.0089888",
        "type":"Huyện",
        "tinh_id":16
    },
    {
        "id":232,
        "name":"Huyện Thanh Ba",
        "location":"21.4677045-105.1492869",
        "type":"Huyện",
        "tinh_id":16
    },
    {
        "id":233,
        "name":"Huyện Phù Ninh",
        "location":"21.4753257-105.2844608",
        "type":"Huyện",
        "tinh_id":16
    },
    {
        "id":234,
        "name":"Huyện Yên Lập",
        "location":"21.3410625-105.0089888",
        "type":"Huyện",
        "tinh_id":16
    },
    {
        "id":235,
        "name":"Huyện Cẩm Khê",
        "location":"21.4298041-105.0557415",
        "type":"Huyện",
        "tinh_id":16
    },
    {
        "id":236,
        "name":"Huyện Tam Nông",
        "location":"21.2858685-105.2311827",
        "type":"Huyện",
        "tinh_id":16
    },
    {
        "id":237,
        "name":"Huyện Lâm Thao",
        "location":"21.3026143-105.3014109",
        "type":"Huyện",
        "tinh_id":16
    },
    {
        "id":238,
        "name":"Huyện Thanh Sơn",
        "location":"21.0240198-105.1726816",
        "type":"Huyện",
        "tinh_id":16
    },
    {
        "id":239,
        "name":"Huyện Thanh Thuỷ",
        "location":"21.1141818-105.2807163",
        "type":"Huyện",
        "tinh_id":16
    },
    {
        "id":240,
        "name":"Huyện Tân Sơn",
        "location":"21.1665519-104.9894851",
        "type":"Huyện",
        "tinh_id":16
    },
    {
        "id":243,
        "name":"Thành phố Vĩnh Yên",
        "location":"21.2973262-105.6060661",
        "type":"Thành phố",
        "tinh_id":17
    },
    {
        "id":244,
        "name":"Thị xã Phúc Yên",
        "location":"21.3325846-105.7233814",
        "type":"Thị xã",
        "tinh_id":17
    },
    {
        "id":246,
        "name":"Huyện Lập Thạch",
        "location":"21.4371499-105.4771084",
        "type":"Huyện",
        "tinh_id":17
    },
    {
        "id":247,
        "name":"Huyện Tam Dương",
        "location":"21.3713778-105.5591615",
        "type":"Huyện",
        "tinh_id":17
    },
    {
        "id":248,
        "name":"Huyện Tam Đảo",
        "location":"21.4747064-105.5708865",
        "type":"Huyện",
        "tinh_id":17
    },
    {
        "id":249,
        "name":"Huyện Bình Xuyên",
        "location":"21.313857-105.6764461",
        "type":"Huyện",
        "tinh_id":17
    },
    {
        "id":250,
        "name":"Huyện Mê Linh",
        "location":"21.1753431-105.7308045",
        "type":"Huyện",
        "tinh_id":17
    },
    {
        "id":251,
        "name":"Huyện Yên Lạc",
        "location":"21.1962199-105.5708865",
        "type":"Huyện",
        "tinh_id":17
    },
    {
        "id":252,
        "name":"Huyện Vĩnh Tường",
        "location":"21.2537742-105.4899167",
        "type":"Huyện",
        "tinh_id":17
    },
    {
        "id":253,
        "name":"Huyện Sông Lô",
        "location":"21.4564665-105.3950939",
        "type":"Huyện",
        "tinh_id":17
    },
    {
        "id":256,
        "name":"Thành phố Bắc Ninh",
        "location":"21.1766814-106.0621591",
        "type":"Thành phố",
        "tinh_id":18
    },
    {
        "id":258,
        "name":"Huyện Yên Phong",
        "location":"21.202957-105.9581624",
        "type":"Huyện",
        "tinh_id":18
    },
    {
        "id":259,
        "name":"Huyện Quế Võ",
        "location":"21.1377307-106.1816196",
        "type":"Huyện",
        "tinh_id":18
    },
    {
        "id":260,
        "name":"Huyện Tiên Du",
        "location":"21.1178311-106.0287512",
        "type":"Huyện",
        "tinh_id":18
    },
    {
        "id":261,
        "name":"Thị xã Từ Sơn",
        "location":"21.1196529-105.9623161",
        "type":"Thị xã",
        "tinh_id":18
    },
    {
        "id":262,
        "name":"Huyện Thuận Thành",
        "location":"21.0357781-106.0792574",
        "type":"Huyện",
        "tinh_id":18
    },
    {
        "id":263,
        "name":"Huyện Gia Bình",
        "location":"21.0764073-106.2169139",
        "type":"Huyện",
        "tinh_id":18
    },
    {
        "id":264,
        "name":"Huyện Lương Tài",
        "location":"21.0278149-106.2404468",
        "type":"Huyện",
        "tinh_id":18
    },
    {
        "id":268,
        "name":"Quận Hà Đông",
        "location":"20.955835-105.7563658",
        "type":"Quận",
        "tinh_id":1
    },
    {
        "id":269,
        "name":"Thị xã Sơn Tây",
        "location":"21.1032279-105.4969964",
        "type":"Thị xã",
        "tinh_id":1
    },
    {
        "id":271,
        "name":"Huyện Ba Vì",
        "location":"21.1992298-105.4232116",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":272,
        "name":"Huyện Phúc Thọ",
        "location":"21.1241396-105.5939066",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":273,
        "name":"Huyện Đan Phượng",
        "location":"21.084855-105.6690963",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":274,
        "name":"Huyện Hoài Đức",
        "location":"21.0243168-105.6988892",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":275,
        "name":"Huyện Quốc Oai",
        "location":"20.9924634-105.6404254",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":276,
        "name":"Huyện Thạch Thất",
        "location":"20.9905234-105.5251894",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":277,
        "name":"Huyện Chương Mỹ",
        "location":"20.8746466-105.6712465",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":278,
        "name":"Huyện Thanh Oai",
        "location":"20.8532165-105.7688513",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":279,
        "name":"Huyện Thường Tín",
        "location":"20.8055441-105.8838579",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":280,
        "name":"Huyện Phú Xuyên",
        "location":"20.7280728-105.9029374",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":281,
        "name":"Huyện Ứng Hòa",
        "location":"20.729614-105.7782061",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":282,
        "name":"Huyện Mỹ Đức",
        "location":"20.725768-105.7157513",
        "type":"Huyện",
        "tinh_id":1
    },
    {
        "id":288,
        "name":"Thành phố Hải Dương",
        "location":"20.9373413-106.3145542",
        "type":"Thành phố",
        "tinh_id":19
    },
    {
        "id":290,
        "name":"Thị xã Chí Linh",
        "location":"21.1608547-106.4170311",
        "type":"Thị xã",
        "tinh_id":19
    },
    {
        "id":291,
        "name":"Huyện Nam Sách",
        "location":"20.995464-106.3346061",
        "type":"Huyện",
        "tinh_id":19
    },
    {
        "id":292,
        "name":"Huyện Kinh Môn",
        "location":"21.0110318-106.5273651",
        "type":"Huyện",
        "tinh_id":19
    },
    {
        "id":293,
        "name":"Huyện Kim Thành",
        "location":"20.8984531-106.5141873",
        "type":"Huyện",
        "tinh_id":19
    },
    {
        "id":294,
        "name":"Huyện Thanh Hà",
        "location":"20.908358-106.4276087",
        "type":"Huyện",
        "tinh_id":19
    },
    {
        "id":295,
        "name":"Huyện Cẩm Giàng",
        "location":"20.9479485-106.22868",
        "type":"Huyện",
        "tinh_id":19
    },
    {
        "id":296,
        "name":"Huyện Bình Giang",
        "location":"20.870356-106.1933837",
        "type":"Huyện",
        "tinh_id":19
    },
    {
        "id":297,
        "name":"Huyện Gia Lộc",
        "location":"20.8612295-106.287521",
        "type":"Huyện",
        "tinh_id":19
    },
    {
        "id":298,
        "name":"Huyện Tứ Kỳ",
        "location":"20.8168182-106.4112446",
        "type":"Huyện",
        "tinh_id":19
    },
    {
        "id":299,
        "name":"Huyện Ninh Giang",
        "location":"20.7491091-106.3699271",
        "type":"Huyện",
        "tinh_id":19
    },
    {
        "id":300,
        "name":"Huyện Thanh Miện",
        "location":"20.7821204-106.2203815",
        "type":"Huyện",
        "tinh_id":19
    },
    {
        "id":303,
        "name":"Quận Hồng Bàng",
        "location":"20.8595313-106.666993",
        "type":"Quận",
        "tinh_id":20
    },
    {
        "id":304,
        "name":"Quận Ngô Quyền",
        "location":"20.8566653-106.6994903",
        "type":"Quận",
        "tinh_id":20
    },
    {
        "id":305,
        "name":"Quận Lê Chân",
        "location":"20.8345046-106.6831336",
        "type":"Quận",
        "tinh_id":20
    },
    {
        "id":306,
        "name":"Quận Hải An",
        "location":"20.8449115-106.6880841",
        "type":"Quận",
        "tinh_id":20
    },
    {
        "id":307,
        "name":"Quận Kiến An",
        "location":"20.8013772-106.6263194",
        "type":"Quận",
        "tinh_id":20
    },
    {
        "id":308,
        "name":"Quận Đồ Sơn",
        "location":"20.7247533-106.7742534",
        "type":"Quận",
        "tinh_id":20
    },
    {
        "id":309,
        "name":"Quận Dương Kinh",
        "location":"20.7733918-106.7213703",
        "type":"Quận",
        "tinh_id":20
    },
    {
        "id":311,
        "name":"Huyện Thuỷ Nguyên",
        "location":"20.9451331-106.6715543",
        "type":"Huyện",
        "tinh_id":20
    },
    {
        "id":312,
        "name":"Huyện An Dương",
        "location":"20.8449115-106.6880841",
        "type":"Huyện",
        "tinh_id":20
    },
    {
        "id":313,
        "name":"Huyện An Lão",
        "location":"20.8214217-106.5565478",
        "type":"Huyện",
        "tinh_id":20
    },
    {
        "id":314,
        "name":"Huyện Kiến Thuỵ",
        "location":"20.7515698-106.6701329",
        "type":"Huyện",
        "tinh_id":20
    },
    {
        "id":315,
        "name":"Huyện Tiên Lãng",
        "location":"20.72404-106.5535966",
        "type":"Huyện",
        "tinh_id":20
    },
    {
        "id":316,
        "name":"Huyện Vĩnh Bảo",
        "location":"20.688914-106.4814255",
        "type":"Huyện",
        "tinh_id":20
    },
    {
        "id":317,
        "name":"Huyện Cát Hải",
        "location":"20.8041045-106.9302268",
        "type":"Huyện",
        "tinh_id":20
    },
    {
        "id":318,
        "name":"Huyện Bạch Long Vĩ",
        "location":"20.1345592-107.7302087",
        "type":"Huyện",
        "tinh_id":20
    },
    {
        "id":323,
        "name":"Thành phố Hưng Yên",
        "location":"20.6523683-106.0522616",
        "type":"Thành phố",
        "tinh_id":21
    },
    {
        "id":325,
        "name":"Huyện Văn Lâm",
        "location":"20.9854595-106.0463746",
        "type":"Huyện",
        "tinh_id":21
    },
    {
        "id":326,
        "name":"Huyện Văn Giang",
        "location":"20.9414842-105.9569025",
        "type":"Huyện",
        "tinh_id":21
    },
    {
        "id":327,
        "name":"Huyện Yên Mỹ",
        "location":"20.8861904-106.0287512",
        "type":"Huyện",
        "tinh_id":21
    },
    {
        "id":328,
        "name":"Huyện Mỹ Hào",
        "location":"20.9257379-106.099291",
        "type":"Huyện",
        "tinh_id":21
    },
    {
        "id":329,
        "name":"Huyện Ân Thi",
        "location":"20.8099609-106.099291",
        "type":"Huyện",
        "tinh_id":21
    },
    {
        "id":330,
        "name":"Huyện Khoái Châu",
        "location":"20.8415456-105.9804247",
        "type":"Huyện",
        "tinh_id":21
    },
    {
        "id":331,
        "name":"Huyện Kim Động",
        "location":"20.7325036-106.0563755",
        "type":"Huyện",
        "tinh_id":21
    },
    {
        "id":332,
        "name":"Huyện Tiên Lữ",
        "location":"20.6919516-106.1228099",
        "type":"Huyện",
        "tinh_id":21
    },
    {
        "id":333,
        "name":"Huyện Phù Cừ",
        "location":"20.7083369-106.1933837",
        "type":"Huyện",
        "tinh_id":21
    },
    {
        "id":336,
        "name":"Thành phố Thái Bình",
        "location":"20.4463471-106.3365828",
        "type":"Thành phố",
        "tinh_id":22
    },
    {
        "id":338,
        "name":"Huyện Quỳnh Phụ",
        "location":"20.6608254-106.3276864",
        "type":"Huyện",
        "tinh_id":22
    },
    {
        "id":339,
        "name":"Huyện Hưng Hà",
        "location":"20.5903748-106.2169139",
        "type":"Huyện",
        "tinh_id":22
    },
    {
        "id":340,
        "name":"Huyện Đông Hưng",
        "location":"20.5640924-106.3699271",
        "type":"Huyện",
        "tinh_id":22
    },
    {
        "id":341,
        "name":"Huyện Thái Thụy",
        "location":"20.5655791-106.5648803",
        "type":"Huyện",
        "tinh_id":22
    },
    {
        "id":342,
        "name":"Huyện Tiền Hải",
        "location":"20.3609414-106.5584071",
        "type":"Huyện",
        "tinh_id":22
    },
    {
        "id":343,
        "name":"Huyện Kiến Xương",
        "location":"20.4208256-106.4170311",
        "type":"Huyện",
        "tinh_id":22
    },
    {
        "id":344,
        "name":"Huyện Vũ Thư",
        "location":"20.4343787-106.2757514",
        "type":"Huyện",
        "tinh_id":22
    },
    {
        "id":347,
        "name":"Thành phố Phủ Lý",
        "location":"20.5476734-105.9347384",
        "type":"Thành phố",
        "tinh_id":23
    },
    {
        "id":349,
        "name":"Huyện Duy Tiên",
        "location":"20.626842-105.951554",
        "type":"Huyện",
        "tinh_id":23
    },
    {
        "id":350,
        "name":"Huyện Kim Bảng",
        "location":"20.5633623-105.8562473",
        "type":"Huyện",
        "tinh_id":23
    },
    {
        "id":351,
        "name":"Huyện Thanh Liêm",
        "location":"20.4699057-105.8994956",
        "type":"Huyện",
        "tinh_id":23
    },
    {
        "id":352,
        "name":"Huyện Bình Lục",
        "location":"20.5029885-106.040506",
        "type":"Huyện",
        "tinh_id":23
    },
    {
        "id":353,
        "name":"Huyện Lý Nhân",
        "location":"20.5553005-106.099291",
        "type":"Huyện",
        "tinh_id":23
    },
    {
        "id":356,
        "name":"Thành phố Nam Định",
        "location":"20.4388225-106.1621053",
        "type":"Thành phố",
        "tinh_id":24
    },
    {
        "id":358,
        "name":"Huyện Mỹ Lộc",
        "location":"20.4604906-106.1228099",
        "type":"Huyện",
        "tinh_id":24
    },
    {
        "id":359,
        "name":"Huyện Vụ Bản",
        "location":"20.370142-106.099291",
        "type":"Huyện",
        "tinh_id":24
    },
    {
        "id":360,
        "name":"Huyện Ý Yên",
        "location":"20.3684984-105.993491",
        "type":"Huyện",
        "tinh_id":24
    },
    {
        "id":361,
        "name":"Huyện Nghĩa Hưng",
        "location":"20.0732479-106.1816196",
        "type":"Huyện",
        "tinh_id":24
    },
    {
        "id":362,
        "name":"Huyện Nam Trực",
        "location":"20.3358927-106.2169139",
        "type":"Huyện",
        "tinh_id":24
    },
    {
        "id":363,
        "name":"Huyện Trực Ninh",
        "location":"20.243376-106.2169139",
        "type":"Huyện",
        "tinh_id":24
    },
    {
        "id":364,
        "name":"Huyện Xuân Trường",
        "location":"20.2993311-106.3581527",
        "type":"Huyện",
        "tinh_id":24
    },
    {
        "id":365,
        "name":"Huyện Giao Thủy",
        "location":"20.2314086-106.4641459",
        "type":"Huyện",
        "tinh_id":24
    },
    {
        "id":366,
        "name":"Huyện Hải Hậu",
        "location":"20.1568875-106.2757514",
        "type":"Huyện",
        "tinh_id":24
    },
    {
        "id":369,
        "name":"Thành phố Ninh Bình",
        "location":"20.2506149-105.9744536",
        "type":"Thành phố",
        "tinh_id":25
    },
    {
        "id":370,
        "name":"Thành phố Tam Điệp",
        "location":"20.1564917-105.8736936",
        "type":"Thành phố",
        "tinh_id":25
    },
    {
        "id":372,
        "name":"Huyện Nho Quan",
        "location":"20.2976274-105.7585908",
        "type":"Huyện",
        "tinh_id":25
    },
    {
        "id":373,
        "name":"Huyện Gia Viễn",
        "location":"20.3353002-105.8525154",
        "type":"Huyện",
        "tinh_id":25
    },
    {
        "id":374,
        "name":"Huyện Hoa Lư",
        "location":"20.248813-105.9112424",
        "type":"Huyện",
        "tinh_id":25
    },
    {
        "id":375,
        "name":"Huyện Yên Khánh",
        "location":"20.187228-106.0757749",
        "type":"Huyện",
        "tinh_id":25
    },
    {
        "id":376,
        "name":"Huyện Kim Sơn",
        "location":"20.0462334-106.099291",
        "type":"Huyện",
        "tinh_id":25
    },
    {
        "id":377,
        "name":"Huyện Yên Mô",
        "location":"20.1370289-105.993491",
        "type":"Huyện",
        "tinh_id":25
    },
    {
        "id":380,
        "name":"Thành phố Thanh Hóa",
        "location":"19.806692-105.7851816",
        "type":"Thành phố",
        "tinh_id":26
    },
    {
        "id":381,
        "name":"Thị xã Bỉm Sơn",
        "location":"20.0889153-105.8877494",
        "type":"Thị xã",
        "tinh_id":26
    },
    {
        "id":382,
        "name":"Thành phố Sầm Sơn",
        "location":"19.7575271-105.9053689",
        "type":"Thành phố",
        "tinh_id":26
    },
    {
        "id":384,
        "name":"Huyện Mường Lát",
        "location":"20.4941326-104.5888356",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":385,
        "name":"Huyện Quan Hóa",
        "location":"20.4830433-104.9856176",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":386,
        "name":"Huyện Bá Thước",
        "location":"20.3653356-105.2662931",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":387,
        "name":"Huyện Quan Sơn",
        "location":"14.058324-108.277199",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":388,
        "name":"Huyện Lang Chánh",
        "location":"20.166759-105.1492869",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":389,
        "name":"Huyện Ngọc Lặc",
        "location":"20.0785891-105.3599568",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":390,
        "name":"Huyện Cẩm Thủy",
        "location":"20.184101-105.4771084",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":391,
        "name":"Huyện Thạch Thành",
        "location":"20.2177814-105.6177942",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":392,
        "name":"Huyện Hà Trung",
        "location":"20.0617086-105.8055471",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":393,
        "name":"Huyện Vĩnh Lộc",
        "location":"20.0408049-105.652983",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":394,
        "name":"Huyện Yên Định",
        "location":"19.9860515-105.6177942",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":395,
        "name":"Huyện Thọ Xuân",
        "location":"19.9059121-105.4771084",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":396,
        "name":"Huyện Thường Xuân",
        "location":"19.9012787-105.2662931",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":397,
        "name":"Huyện Triệu Sơn",
        "location":"19.8512387-105.5708865",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":398,
        "name":"Huyện Thiệu Hóa",
        "location":"19.889182-105.6647142",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":399,
        "name":"Huyện Hoằng Hóa",
        "location":"19.8216851-105.8994956",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":400,
        "name":"Huyện Hậu Lộc",
        "location":"19.9268879-105.8877494",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":401,
        "name":"Huyện Nga Sơn",
        "location":"19.9981878-105.993491",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":402,
        "name":"Huyện Như Xuân",
        "location":"19.6149135-105.3599568",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":403,
        "name":"Huyện Như Thanh",
        "location":"19.5733122-105.5708865",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":404,
        "name":"Huyện Nông Cống",
        "location":"19.6113284-105.6647142",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":405,
        "name":"Huyện Đông Sơn",
        "location":"19.8049755-105.6999122",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":406,
        "name":"Huyện Quảng Xương",
        "location":"19.6913377-105.8055471",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":407,
        "name":"Huyện Tĩnh Gia",
        "location":"19.43838-105.7745131",
        "type":"Huyện",
        "tinh_id":26
    },
    {
        "id":412,
        "name":"Thành phố Vinh",
        "location":"18.6795848-105.6813333",
        "type":"Thành phố",
        "tinh_id":27
    },
    {
        "id":413,
        "name":"Thị xã Cửa Lò",
        "location":"18.7916127-105.7175138",
        "type":"Thị xã",
        "tinh_id":27
    },
    {
        "id":414,
        "name":"Thị xã Thái Hoà",
        "location":"19.2931124-105.4653897",
        "type":"Thị xã",
        "tinh_id":27
    },
    {
        "id":415,
        "name":"Huyện Quế Phong",
        "location":"19.6862686-104.9563176",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":416,
        "name":"Huyện Quỳ Châu",
        "location":"19.5463056-105.0791228",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":417,
        "name":"Huyện Kỳ Sơn",
        "location":"19.38547-104.1827912",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":418,
        "name":"Huyện Tương Dương",
        "location":"19.2640131-104.5655273",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":419,
        "name":"Huyện Nghĩa Đàn",
        "location":"19.4003352-105.4302383",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":420,
        "name":"Huyện Quỳ Hợp",
        "location":"19.3528917-105.1726816",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":421,
        "name":"Huyện Quỳnh Lưu",
        "location":"19.2200256-105.6412527",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":422,
        "name":"Huyện Con Cuông",
        "location":"19.0130593-104.798771",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":423,
        "name":"Huyện Tân Kỳ",
        "location":"19.0748796-105.1726816",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":424,
        "name":"Huyện Anh Sơn",
        "location":"18.9688054-105.0557415",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":425,
        "name":"Huyện Diễn Châu",
        "location":"19.0179688-105.5708865",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":426,
        "name":"Huyện Yên Thành",
        "location":"19.0511285-105.4536718",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":427,
        "name":"Huyện Đô Lương",
        "location":"18.8990982-105.336536",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":428,
        "name":"Huyện Thanh Chương",
        "location":"18.6967739-105.2662931",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":429,
        "name":"Huyện Nghi Lộc",
        "location":"18.8142042-105.5835663",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":430,
        "name":"Huyện Nam Đàn",
        "location":"18.6983445-105.5239912",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":431,
        "name":"Huyện Hưng Nguyên",
        "location":"18.6316742-105.629523",
        "type":"Huyện",
        "tinh_id":27
    },
    {
        "id":432,
        "name":"Thị xã Hoàng Mai",
        "location":"19.2370094-105.7116464",
        "type":"Thị xã",
        "tinh_id":27
    },
    {
        "id":436,
        "name":"Thành phố Hà Tĩnh",
        "location":"18.3559537-105.8877494",
        "type":"Thành phố",
        "tinh_id":28
    },
    {
        "id":437,
        "name":"Thị xã Hồng Lĩnh",
        "location":"18.5301567-105.7064569",
        "type":"Thị xã",
        "tinh_id":28
    },
    {
        "id":439,
        "name":"Huyện Hương Sơn",
        "location":"18.5118006-105.2662931",
        "type":"Huyện",
        "tinh_id":28
    },
    {
        "id":440,
        "name":"Huyện Đức Thọ",
        "location":"18.5056718-105.6177942",
        "type":"Huyện",
        "tinh_id":28
    },
    {
        "id":441,
        "name":"Huyện Vũ Quang",
        "location":"18.3365936-105.4302383",
        "type":"Huyện",
        "tinh_id":28
    },
    {
        "id":442,
        "name":"Huyện Nghi Xuân",
        "location":"18.6282217-105.8055471",
        "type":"Huyện",
        "tinh_id":28
    },
    {
        "id":443,
        "name":"Huyện Can Lộc",
        "location":"18.4516009-105.7116464",
        "type":"Huyện",
        "tinh_id":28
    },
    {
        "id":444,
        "name":"Huyện Hương Khê",
        "location":"18.2037562-105.6412527",
        "type":"Huyện",
        "tinh_id":28
    },
    {
        "id":445,
        "name":"Huyện Thạch Hà",
        "location":"18.301316-105.8525154",
        "type":"Huyện",
        "tinh_id":28
    },
    {
        "id":446,
        "name":"Huyện Cẩm Xuyên",
        "location":"18.1721653-106.0169971",
        "type":"Huyện",
        "tinh_id":28
    },
    {
        "id":447,
        "name":"Huyện Kỳ Anh",
        "location":"18.0559583-106.2992912",
        "type":"Huyện",
        "tinh_id":28
    },
    {
        "id":448,
        "name":"Huyện Lộc Hà",
        "location":"18.4817584-105.8994956",
        "type":"Huyện",
        "tinh_id":28
    },
    {
        "id":449,
        "name":"Thị xã Kỳ Anh",
        "location":"18.0648343-106.2963486",
        "type":"Thị xã",
        "tinh_id":28
    },
    {
        "id":450,
        "name":"Thành Phố Đồng Hới",
        "location":"17.4659391-106.5983958",
        "type":"Thành phố",
        "tinh_id":29
    },
    {
        "id":452,
        "name":"Huyện Minh Hóa",
        "location":"17.719816-105.92299",
        "type":"Huyện",
        "tinh_id":29
    },
    {
        "id":453,
        "name":"Huyện Tuyên Hóa",
        "location":"17.9319039-105.9722814",
        "type":"Huyện",
        "tinh_id":29
    },
    {
        "id":454,
        "name":"Huyện Quảng Trạch",
        "location":"17.8640126-106.3934777",
        "type":"Thị xã",
        "tinh_id":29
    },
    {
        "id":455,
        "name":"Huyện Bố Trạch",
        "location":"17.5047078-106.2992912",
        "type":"Huyện",
        "tinh_id":29
    },
    {
        "id":456,
        "name":"Huyện Quảng Ninh",
        "location":"17.2394584-106.4616246",
        "type":"Huyện",
        "tinh_id":29
    },
    {
        "id":457,
        "name":"Huyện Lệ Thủy",
        "location":"17.1064913-106.676292",
        "type":"Huyện",
        "tinh_id":29
    },
    {
        "id":458,
        "name":"Thị xã Ba Đồn",
        "location":"17.7530355-106.4235285",
        "type":"Huyện",
        "tinh_id":29
    },
    {
        "id":461,
        "name":"Thành phố Đông Hà",
        "location":"16.8088928-107.0893798",
        "type":"Thành phố",
        "tinh_id":30
    },
    {
        "id":462,
        "name":"Thị xã Quảng Trị",
        "location":"16.750563-107.1857063",
        "type":"Thị xã",
        "tinh_id":30
    },
    {
        "id":464,
        "name":"Huyện Vĩnh Linh",
        "location":"17.0743311-107.0539434",
        "type":"Huyện",
        "tinh_id":30
    },
    {
        "id":465,
        "name":"Huyện Hướng Hóa",
        "location":"16.6495512-106.676292",
        "type":"Huyện",
        "tinh_id":30
    },
    {
        "id":466,
        "name":"Huyện Gio Linh",
        "location":"16.9165711-107.0303221",
        "type":"Huyện",
        "tinh_id":30
    },
    {
        "id":467,
        "name":"Huyện Đa Krông",
        "location":"16.5349165-106.9594723",
        "type":"Huyện",
        "tinh_id":30
    },
    {
        "id":468,
        "name":"Huyện Cam Lộ",
        "location":"16.783695-106.9830865",
        "type":"Huyện",
        "tinh_id":30
    },
    {
        "id":469,
        "name":"Huyện Triệu Phong",
        "location":"16.809184-107.2193578",
        "type":"Huyện",
        "tinh_id":30
    },
    {
        "id":470,
        "name":"Huyện Hải Lăng",
        "location":"16.714002-107.2666396",
        "type":"Huyện",
        "tinh_id":30
    },
    {
        "id":471,
        "name":"Huyện Cồn Cỏ",
        "location":"17.1606501-107.3405354",
        "type":"Huyện",
        "tinh_id":30
    },
    {
        "id":474,
        "name":"Thành phố Huế",
        "location":"16.4498-107.5623501",
        "type":"Thành phố",
        "tinh_id":31
    },
    {
        "id":476,
        "name":"Huyện Phong Điền",
        "location":"16.503112-107.3375791",
        "type":"Huyện",
        "tinh_id":31
    },
    {
        "id":477,
        "name":"Huyện Quảng Điền",
        "location":"16.5902415-107.5150139",
        "type":"Huyện",
        "tinh_id":31
    },
    {
        "id":478,
        "name":"Huyện Phú Vang",
        "location":"16.491213-107.7399345",
        "type":"Huyện",
        "tinh_id":31
    },
    {
        "id":479,
        "name":"Thị xã Hương Thủy",
        "location":"16.4198395-107.6464295",
        "type":"Thị xã",
        "tinh_id":31
    },
    {
        "id":480,
        "name":"Thị xã Hương Trà",
        "location":"16.420796-107.5031811",
        "type":"Thị xã",
        "tinh_id":31
    },
    {
        "id":481,
        "name":"Huyện A Lưới",
        "location":"16.2303741-107.3375791",
        "type":"Huyện",
        "tinh_id":31
    },
    {
        "id":482,
        "name":"Huyện Phú Lộc",
        "location":"16.2725431-107.9394761",
        "type":"Huyện",
        "tinh_id":31
    },
    {
        "id":483,
        "name":"Huyện Nam Đông",
        "location":"16.1249688-107.6707417",
        "type":"Huyện",
        "tinh_id":31
    },
    {
        "id":490,
        "name":"Quận Liên Chiểu",
        "location":"16.0717704-108.1503823",
        "type":"Quận",
        "tinh_id":32
    },
    {
        "id":491,
        "name":"Quận Thanh Khê",
        "location":"16.0641802-108.1873407",
        "type":"Quận",
        "tinh_id":32
    },
    {
        "id":492,
        "name":"Quận Hải Châu",
        "location":"16.0472002-108.2199588",
        "type":"Quận",
        "tinh_id":32
    },
    {
        "id":493,
        "name":"Quận Sơn Trà",
        "location":"16.1069981-108.2521815",
        "type":"Quận",
        "tinh_id":32
    },
    {
        "id":494,
        "name":"Quận Ngũ Hành Sơn",
        "location":"15.9955056-108.2588049",
        "type":"Quận",
        "tinh_id":32
    },
    {
        "id":495,
        "name":"Quận Cẩm Lệ",
        "location":"16.0153669-108.1962362",
        "type":"Quận",
        "tinh_id":32
    },
    {
        "id":497,
        "name":"Huyện Hòa Vang",
        "location":"15.999988-108.1457994",
        "type":"Huyện",
        "tinh_id":32
    },
    {
        "id":498,
        "name":"Huyện Hoàng Sa",
        "location":"16.064571-108.222148",
        "type":"Huyện",
        "tinh_id":32
    },
    {
        "id":502,
        "name":"Thành phố Tam Kỳ",
        "location":"15.5638825-108.4786313",
        "type":"Thành phố",
        "tinh_id":33
    },
    {
        "id":503,
        "name":"Thành phố Hội An",
        "location":"15.8800584-108.3380469",
        "type":"Thành phố",
        "tinh_id":33
    },
    {
        "id":504,
        "name":"Huyện Tây Giang",
        "location":"15.8852628-107.4890302",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":505,
        "name":"Huyện Đông Giang",
        "location":"15.9660249-107.7831632",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":506,
        "name":"Huyện Đại Lộc",
        "location":"15.8497875-108.0668661",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":507,
        "name":"Thị xã Điện Bàn",
        "location":"15.9072569-108.224595",
        "type":"Thị xã",
        "tinh_id":33
    },
    {
        "id":508,
        "name":"Huyện Duy Xuyên",
        "location":"15.77511-108.1665855",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":509,
        "name":"Huyện Quế Sơn",
        "location":"15.6848385-108.1665855",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":510,
        "name":"Huyện Nam Giang",
        "location":"15.6628546-107.6215321",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":511,
        "name":"Huyện Phước Sơn",
        "location":"15.3762517-107.811",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":512,
        "name":"Huyện Hiệp Đức",
        "location":"15.5590682-108.0805694",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":513,
        "name":"Huyện Thăng Bình",
        "location":"15.6890346-108.3801314",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":514,
        "name":"Huyện Tiên Phước",
        "location":"15.4964006-108.2614775",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":515,
        "name":"Huyện Bắc Trà My",
        "location":"15.3202715-108.214028",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":516,
        "name":"Huyện Nam Trà My",
        "location":"15.0826614-108.0954351",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":517,
        "name":"Huyện Núi Thành",
        "location":"15.4229422-108.5938124",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":518,
        "name":"Huyện Phú Ninh",
        "location":"15.5743256-108.4038672",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":519,
        "name":"Huyện Nông Sơn",
        "location":"15.6557978-107.9768875",
        "type":"Huyện",
        "tinh_id":33
    },
    {
        "id":522,
        "name":"Thành phố Quảng Ngãi",
        "location":"15.1213873-108.8044145",
        "type":"Thành phố",
        "tinh_id":34
    },
    {
        "id":524,
        "name":"Huyện Bình Sơn",
        "location":"15.3166491-108.7838572",
        "type":"Huyện",
        "tinh_id":34
    },
    {
        "id":525,
        "name":"Huyện Trà Bồng",
        "location":"15.2512645-108.4988269",
        "type":"Huyện",
        "tinh_id":34
    },
    {
        "id":526,
        "name":"Huyện Tây Trà",
        "location":"15.1734012-108.3563972",
        "type":"Huyện",
        "tinh_id":34
    },
    {
        "id":527,
        "name":"Huyện Sơn Tịnh",
        "location":"15.1860945-108.736337",
        "type":"Huyện",
        "tinh_id":34
    },
    {
        "id":528,
        "name":"Huyện Tư Nghĩa",
        "location":"15.1065785-108.7482165",
        "type":"Huyện",
        "tinh_id":34
    },
    {
        "id":529,
        "name":"Huyện Sơn Hà",
        "location":"15.0431944-108.5700636",
        "type":"Huyện",
        "tinh_id":34
    },
    {
        "id":530,
        "name":"Huyện Sơn Tây",
        "location":"14.9488528-108.3563972",
        "type":"Huyện",
        "tinh_id":34
    },
    {
        "id":531,
        "name":"Huyện Minh Long",
        "location":"14.9659262-108.6888227",
        "type":"Huyện",
        "tinh_id":34
    },
    {
        "id":532,
        "name":"Huyện Nghĩa Hành",
        "location":"15.0026852-108.7838572",
        "type":"Huyện",
        "tinh_id":34
    },
    {
        "id":533,
        "name":"Huyện Mộ Đức",
        "location":"14.9498041-108.878915",
        "type":"Huyện",
        "tinh_id":34
    },
    {
        "id":534,
        "name":"Huyện Đức Phổ",
        "location":"14.762796-108.9739954",
        "type":"Huyện",
        "tinh_id":34
    },
    {
        "id":535,
        "name":"Huyện Ba Tơ",
        "location":"14.7663789-108.6650678",
        "type":"Huyện",
        "tinh_id":34
    },
    {
        "id":536,
        "name":"Huyện Lý Sơn",
        "location":"15.383361-109.1107114",
        "type":"Huyện",
        "tinh_id":34
    },
    {
        "id":540,
        "name":"Thành phố Qui Nhơn",
        "location":"13.7829673-109.2196634",
        "type":"Thành phố",
        "tinh_id":35
    },
    {
        "id":542,
        "name":"Huyện An Lão",
        "location":"14.5717294-108.8551484",
        "type":"Huyện",
        "tinh_id":35
    },
    {
        "id":543,
        "name":"Huyện Hoài Nhơn",
        "location":"14.4666386-109.04532",
        "type":"Huyện",
        "tinh_id":35
    },
    {
        "id":544,
        "name":"Huyện Hoài Ân",
        "location":"14.3040385-108.8551484",
        "type":"Huyện",
        "tinh_id":35
    },
    {
        "id":545,
        "name":"Huyện Phù Mỹ",
        "location":"14.2157645-109.1166566",
        "type":"Huyện",
        "tinh_id":35
    },
    {
        "id":546,
        "name":"Huyện Vĩnh Thạnh",
        "location":"14.2468401-108.736337",
        "type":"Huyện",
        "tinh_id":35
    },
    {
        "id":547,
        "name":"Huyện Tây Sơn",
        "location":"13.9479428-108.8551484",
        "type":"Huyện",
        "tinh_id":35
    },
    {
        "id":548,
        "name":"Huyện Phù Cát",
        "location":"14.0134002-109.0547476",
        "type":"Huyện",
        "tinh_id":35
    },
    {
        "id":549,
        "name":"Thị xã An Nhơn",
        "location":"13.8641717-109.0690976",
        "type":"Thị xã",
        "tinh_id":35
    },
    {
        "id":550,
        "name":"Huyện Tuy Phước",
        "location":"13.8565034-109.1642208",
        "type":"Huyện",
        "tinh_id":35
    },
    {
        "id":551,
        "name":"Huyện Vân Canh",
        "location":"13.674033-108.9502232",
        "type":"Huyện",
        "tinh_id":35
    },
    {
        "id":555,
        "name":"Thành phố Tuy Hoà",
        "location":"13.1057062-109.295048",
        "type":"Thành phố",
        "tinh_id":36
    },
    {
        "id":557,
        "name":"Thị xã Sông Cầu",
        "location":"13.4744193-109.2355764",
        "type":"Thị xã",
        "tinh_id":36
    },
    {
        "id":558,
        "name":"Huyện Đồng Xuân",
        "location":"13.4083074-108.9502232",
        "type":"Huyện",
        "tinh_id":36
    },
    {
        "id":559,
        "name":"Huyện Tuy An",
        "location":"13.297735-109.2355764",
        "type":"Huyện",
        "tinh_id":36
    },
    {
        "id":560,
        "name":"Huyện Sơn Hòa",
        "location":"13.1431691-108.9502232",
        "type":"Huyện",
        "tinh_id":36
    },
    {
        "id":561,
        "name":"Huyện Sông Hinh",
        "location":"12.8786353-108.9502232",
        "type":"Huyện",
        "tinh_id":36
    },
    {
        "id":562,
        "name":"Huyện Tây Hoà",
        "location":"12.9285815-109.1642208",
        "type":"Huyện",
        "tinh_id":36
    },
    {
        "id":563,
        "name":"Huyện Phú Hoà",
        "location":"13.0606953-109.1642208",
        "type":"Huyện",
        "tinh_id":36
    },
    {
        "id":564,
        "name":"Huyện Đông Hòa",
        "location":"12.9580642-109.354527",
        "type":"Huyện",
        "tinh_id":36
    },
    {
        "id":568,
        "name":"Thành phố Nha Trang",
        "location":"12.2387911-109.1967488",
        "type":"Thành phố",
        "tinh_id":37
    },
    {
        "id":569,
        "name":"Thành phố Cam Ranh",
        "location":"11.9008657-109.140438",
        "type":"Thành phố",
        "tinh_id":37
    },
    {
        "id":570,
        "name":"Huyện Cam Lâm",
        "location":"12.07539-109.140438",
        "type":"Huyện",
        "tinh_id":37
    },
    {
        "id":571,
        "name":"Huyện Vạn Ninh",
        "location":"12.7243439-109.2626992",
        "type":"Huyện",
        "tinh_id":37
    },
    {
        "id":572,
        "name":"Thị xã Ninh Hòa",
        "location":"12.512997-109.140438",
        "type":"Thị xã",
        "tinh_id":37
    },
    {
        "id":573,
        "name":"Huyện Khánh Vĩnh",
        "location":"12.2705951-108.8551484",
        "type":"Huyện",
        "tinh_id":37
    },
    {
        "id":574,
        "name":"Huyện Diên Khánh",
        "location":"12.2570417-109.04532",
        "type":"Huyện",
        "tinh_id":37
    },
    {
        "id":575,
        "name":"Huyện Khánh Sơn",
        "location":"12.0249415-108.9264524",
        "type":"Huyện",
        "tinh_id":37
    },
    {
        "id":576,
        "name":"Huyện Trường Sa",
        "location":"11.9144477-109.1340369",
        "type":"Huyện",
        "tinh_id":37
    },
    {
        "id":582,
        "name":"Thành phố Phan Rang-Tháp Chàm",
        "location":"11.5825677-108.9912066",
        "type":"Thành phố",
        "tinh_id":38
    },
    {
        "id":584,
        "name":"Huyện Bác Ái",
        "location":"11.8334154-108.8551484",
        "type":"Huyện",
        "tinh_id":38
    },
    {
        "id":585,
        "name":"Huyện Ninh Sơn",
        "location":"11.6888699-108.736337",
        "type":"Huyện",
        "tinh_id":38
    },
    {
        "id":586,
        "name":"Huyện Ninh Hải",
        "location":"11.7032481-109.1642208",
        "type":"Huyện",
        "tinh_id":38
    },
    {
        "id":587,
        "name":"Huyện Ninh Phước",
        "location":"11.4850435-108.8551484",
        "type":"Huyện",
        "tinh_id":38
    },
    {
        "id":588,
        "name":"Huyện Thuận Bắc",
        "location":"11.7533327-109.0690976",
        "type":"Huyện",
        "tinh_id":38
    },
    {
        "id":589,
        "name":"Huyện Thuận Nam",
        "location":"11.5226322-108.9262696",
        "type":"Huyện",
        "tinh_id":38
    },
    {
        "id":593,
        "name":"Thành phố Phan Thiết",
        "location":"10.9804603-108.2614775",
        "type":"Thành phố",
        "tinh_id":39
    },
    {
        "id":594,
        "name":"Thị xã La Gi",
        "location":"10.71574-107.7991545",
        "type":"Thị xã",
        "tinh_id":39
    },
    {
        "id":595,
        "name":"Huyện Tuy Phong",
        "location":"11.3178827-108.6579603",
        "type":"Huyện",
        "tinh_id":39
    },
    {
        "id":596,
        "name":"Huyện Bắc Bình",
        "location":"11.2551834-108.3801314",
        "type":"Huyện",
        "tinh_id":39
    },
    {
        "id":597,
        "name":"Huyện Hàm Thuận Bắc",
        "location":"11.1116858-108.1319634",
        "type":"Huyện",
        "tinh_id":39
    },
    {
        "id":598,
        "name":"Huyện Hàm Thuận Nam",
        "location":"10.8502937-107.9057813",
        "type":"Huyện",
        "tinh_id":39
    },
    {
        "id":599,
        "name":"Huyện Tánh Linh",
        "location":"11.0980639-107.678501",
        "type":"Huyện",
        "tinh_id":39
    },
    {
        "id":600,
        "name":"Huyện Đức Linh",
        "location":"11.1977289-107.5505152",
        "type":"Huyện",
        "tinh_id":39
    },
    {
        "id":601,
        "name":"Huyện Hàm Tân",
        "location":"10.6935927-107.6215321",
        "type":"Huyện",
        "tinh_id":39
    },
    {
        "id":602,
        "name":"Huyện Phú Quí",
        "location":"10.5335281-108.9442804",
        "type":"Huyện",
        "tinh_id":39
    },
    {
        "id":608,
        "name":"Thành phố Kon Tum",
        "location":"14.3497403-108.0004606",
        "type":"Thành phố",
        "tinh_id":40
    },
    {
        "id":610,
        "name":"Huyện Đắk Glei",
        "location":"15.113472-107.71625",
        "type":"Huyện",
        "tinh_id":40
    },
    {
        "id":611,
        "name":"Huyện Ngọc Hồi",
        "location":"14.6710249-107.6215321",
        "type":"Huyện",
        "tinh_id":40
    },
    {
        "id":612,
        "name":"Huyện Đắk Tô",
        "location":"14.6562021-107.811",
        "type":"Huyện",
        "tinh_id":40
    },
    {
        "id":613,
        "name":"Huyện Kon Plông",
        "location":"14.7976892-108.2852049",
        "type":"Huyện",
        "tinh_id":40
    },
    {
        "id":614,
        "name":"Huyện Kon Rẫy",
        "location":"14.5607568-108.1665855",
        "type":"Huyện",
        "tinh_id":40
    },
    {
        "id":615,
        "name":"Huyện Đắk Hà",
        "location":"14.641214-108.0005933",
        "type":"Huyện",
        "tinh_id":40
    },
    {
        "id":616,
        "name":"Huyện Sa Thầy",
        "location":"14.4355779-107.763621",
        "type":"Huyện",
        "tinh_id":40
    },
    {
        "id":617,
        "name":"Huyện Tu Mơ Rông",
        "location":"14.9105786-108.0005933",
        "type":"Huyện",
        "tinh_id":40
    },
    {
        "id":618,
        "name":"Huyện Ia H' Drai",
        "location":"14.0189165-107.4477032",
        "type":"Huyện",
        "tinh_id":40
    },
    {
        "id":622,
        "name":"Thành phố Pleiku",
        "location":"13.9718356-108.0150796",
        "type":"Thành phố",
        "tinh_id":41
    },
    {
        "id":623,
        "name":"Thị xã An Khê",
        "location":"14.0279256-108.6888227",
        "type":"Thị xã",
        "tinh_id":41
    },
    {
        "id":624,
        "name":"Thị xã Ayun Pa",
        "location":"13.3743393-108.3989809",
        "type":"Thị xã",
        "tinh_id":41
    },
    {
        "id":625,
        "name":"Huyện KBang",
        "location":"14.3348056-108.4750846",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":626,
        "name":"Huyện Đăk Đoa",
        "location":"14.1135412-108.1665855",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":627,
        "name":"Huyện Chư Păh",
        "location":"14.1765309-107.9294815",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":628,
        "name":"Huyện Ia Grai",
        "location":"13.9539099-107.6215321",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":629,
        "name":"Huyện Mang Yang",
        "location":"13.9928022-108.2852049",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":630,
        "name":"Huyện Kông Chro",
        "location":"13.7037218-108.5700636",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":631,
        "name":"Huyện Đức Cơ",
        "location":"13.7752327-107.6215321",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":632,
        "name":"Huyện Chư Prông",
        "location":"13.541918-107.763621",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":633,
        "name":"Huyện Chư Sê",
        "location":"13.7399629-108.0954351",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":634,
        "name":"Huyện Đăk Pơ",
        "location":"13.946425-108.5938124",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":635,
        "name":"Huyện Ia Pa",
        "location":"13.5261514-108.5700636",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":637,
        "name":"Huyện Krông Pa",
        "location":"13.2160038-108.6726891",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":638,
        "name":"Huyện Phú Thiện",
        "location":"13.4589308-108.2852049",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":639,
        "name":"Huyện Chư Pưh",
        "location":"13.4730527-108.0954351",
        "type":"Huyện",
        "tinh_id":41
    },
    {
        "id":643,
        "name":"Thành phố Buôn Ma Thuột",
        "location":"12.6661944-108.0382475",
        "type":"Thành phố",
        "tinh_id":42
    },
    {
        "id":644,
        "name":"Thị Xã Buôn Hồ",
        "location":"12.8628297-108.2614775",
        "type":"Thị xã",
        "tinh_id":42
    },
    {
        "id":645,
        "name":"Huyện Ea H'leo",
        "location":"13.1998141-108.1903059",
        "type":"Huyện",
        "tinh_id":42
    },
    {
        "id":646,
        "name":"Huyện Ea Súp",
        "location":"13.1862227-107.763621",
        "type":"Huyện",
        "tinh_id":42
    },
    {
        "id":647,
        "name":"Huyện Buôn Đôn",
        "location":"12.8791607-107.71625",
        "type":"Huyện",
        "tinh_id":42
    },
    {
        "id":648,
        "name":"Huyện Cư M'gar",
        "location":"12.8525649-108.0954351",
        "type":"Huyện",
        "tinh_id":42
    },
    {
        "id":649,
        "name":"Huyện Krông Búk",
        "location":"13.0226831-108.1903059",
        "type":"Huyện",
        "tinh_id":42
    },
    {
        "id":650,
        "name":"Huyện Krông Năng",
        "location":"13.0089192-108.3801314",
        "type":"Huyện",
        "tinh_id":42
    },
    {
        "id":651,
        "name":"Huyện Ea Kar",
        "location":"12.7981778-108.5463165",
        "type":"Huyện",
        "tinh_id":42
    },
    {
        "id":652,
        "name":"Huyện M'Đrắk",
        "location":"12.7165586-108.7600963",
        "type":"Huyện",
        "tinh_id":42
    },
    {
        "id":653,
        "name":"Huyện Krông Bông",
        "location":"12.473032-108.4750846",
        "type":"Huyện",
        "tinh_id":42
    },
    {
        "id":654,
        "name":"Huyện Krông Pắc",
        "location":"12.7439968-108.3801314",
        "type":"Huyện",
        "tinh_id":42
    },
    {
        "id":655,
        "name":"Huyện Krông A Na",
        "location":"12.4823793-108.024301",
        "type":"Huyện",
        "tinh_id":42
    },
    {
        "id":656,
        "name":"Huyện Lắk",
        "location":"12.3169361-108.1903059",
        "type":"Huyện",
        "tinh_id":42
    },
    {
        "id":657,
        "name":"Huyện Cư Kuin",
        "location":"12.5810594-108.1903059",
        "type":"Huyện",
        "tinh_id":42
    },
    {
        "id":660,
        "name":"Thị xã Gia Nghĩa",
        "location":"12.0036455-107.6876481",
        "type":"Thị xã",
        "tinh_id":43
    },
    {
        "id":661,
        "name":"Huyện Đăk Glong",
        "location":"12.1013642-107.8023543",
        "type":"Huyện",
        "tinh_id":43
    },
    {
        "id":662,
        "name":"Huyện Cư Jút",
        "location":"12.657282-107.8656124",
        "type":"Huyện",
        "tinh_id":43
    },
    {
        "id":663,
        "name":"Huyện Đắk Mil",
        "location":"12.5049537-107.6925674",
        "type":"Huyện",
        "tinh_id":43
    },
    {
        "id":664,
        "name":"Huyện Krông Nô",
        "location":"12.3426475-107.811",
        "type":"Huyện",
        "tinh_id":43
    },
    {
        "id":665,
        "name":"Huyện Đắk Song",
        "location":"12.2328311-107.6216789",
        "type":"Huyện",
        "tinh_id":43
    },
    {
        "id":666,
        "name":"Huyện Đắk R'Lấp",
        "location":"11.9213338-107.5268471",
        "type":"Huyện",
        "tinh_id":43
    },
    {
        "id":667,
        "name":"Huyện Tuy Đức",
        "location":"12.1576117-107.4342313",
        "type":"Huyện",
        "tinh_id":43
    },
    {
        "id":672,
        "name":"Thành phố Đà Lạt",
        "location":"11.9404192-108.4583132",
        "type":"Thành phố",
        "tinh_id":44
    },
    {
        "id":673,
        "name":"Thành phố Bảo Lộc",
        "location":"11.5731051-107.8346924",
        "type":"Thành phố",
        "tinh_id":44
    },
    {
        "id":674,
        "name":"Huyện Đam Rông",
        "location":"12.0598218-108.0954351",
        "type":"Huyện",
        "tinh_id":44
    },
    {
        "id":675,
        "name":"Huyện Lạc Dương",
        "location":"12.1218309-108.4750846",
        "type":"Huyện",
        "tinh_id":44
    },
    {
        "id":676,
        "name":"Huyện Lâm Hà",
        "location":"11.7906825-108.1903059",
        "type":"Huyện",
        "tinh_id":44
    },
    {
        "id":677,
        "name":"Huyện Đơn Dương",
        "location":"11.7452329-108.5463165",
        "type":"Huyện",
        "tinh_id":44
    },
    {
        "id":678,
        "name":"Huyện Đức Trọng",
        "location":"11.641927-108.3102916",
        "type":"Huyện",
        "tinh_id":44
    },
    {
        "id":679,
        "name":"Huyện Di Linh",
        "location":"11.5346745-108.0954351",
        "type":"Huyện",
        "tinh_id":44
    },
    {
        "id":680,
        "name":"Huyện Bảo Lâm",
        "location":"11.7337863-107.71625",
        "type":"Huyện",
        "tinh_id":44
    },
    {
        "id":681,
        "name":"Huyện Đạ Huoai",
        "location":"11.4101516-107.6452085",
        "type":"Huyện",
        "tinh_id":44
    },
    {
        "id":682,
        "name":"Huyện Đạ Tẻh",
        "location":"11.5238408-107.485433",
        "type":"Huyện",
        "tinh_id":44
    },
    {
        "id":683,
        "name":"Huyện Cát Tiên",
        "location":"11.6903361-107.36123",
        "type":"Huyện",
        "tinh_id":44
    },
    {
        "id":688,
        "name":"Thị xã Phước Long",
        "location":"11.8337331-106.9948945",
        "type":"Thị xã",
        "tinh_id":45
    },
    {
        "id":689,
        "name":"Thị xã Đồng Xoài",
        "location":"11.536023-106.8908253",
        "type":"Thị xã",
        "tinh_id":45
    },
    {
        "id":690,
        "name":"Thị xã Bình Long",
        "location":"11.6922032-106.6055534",
        "type":"Thị xã",
        "tinh_id":45
    },
    {
        "id":691,
        "name":"Huyện Bù Gia Mập",
        "location":"12.0392238-107.0539434",
        "type":"Huyện",
        "tinh_id":45
    },
    {
        "id":692,
        "name":"Huyện Lộc Ninh",
        "location":"11.803677-106.5819789",
        "type":"Huyện",
        "tinh_id":45
    },
    {
        "id":693,
        "name":"Huyện Bù Đốp",
        "location":"11.9891869-106.7942405",
        "type":"Huyện",
        "tinh_id":45
    },
    {
        "id":694,
        "name":"Huyện Hớn Quản",
        "location":"11.6014622-106.6527099",
        "type":"Huyện",
        "tinh_id":45
    },
    {
        "id":695,
        "name":"Huyện Đồng Phú",
        "location":"11.5123355-106.9905473",
        "type":"Huyện",
        "tinh_id":45
    },
    {
        "id":696,
        "name":"Huyện Bù Đăng",
        "location":"11.7693374-107.1484521",
        "type":"Huyện",
        "tinh_id":45
    },
    {
        "id":697,
        "name":"Huyện Chơn Thành",
        "location":"11.4696902-106.6527099",
        "type":"Huyện",
        "tinh_id":45
    },
    {
        "id":698,
        "name":"Huyện Phú Riềng",
        "location":"11.6827356-106.9459494",
        "type":"Huyện",
        "tinh_id":45
    },
    {
        "id":703,
        "name":"Thành phố Tây Ninh",
        "location":"11.3675415-106.1192802",
        "type":"Thành phố",
        "tinh_id":46
    },
    {
        "id":705,
        "name":"Huyện Tân Biên",
        "location":"11.572115-106.0169971",
        "type":"Huyện",
        "tinh_id":46
    },
    {
        "id":706,
        "name":"Huyện Tân Châu",
        "location":"11.5614393-106.2051484",
        "type":"Huyện",
        "tinh_id":46
    },
    {
        "id":707,
        "name":"Huyện Dương Minh Châu",
        "location":"11.3595908-106.2757514",
        "type":"Huyện",
        "tinh_id":46
    },
    {
        "id":708,
        "name":"Huyện Châu Thành",
        "location":"11.3081393-106.0169971",
        "type":"Huyện",
        "tinh_id":46
    },
    {
        "id":709,
        "name":"Huyện Hòa Thành",
        "location":"11.2680459-106.1463317",
        "type":"Huyện",
        "tinh_id":46
    },
    {
        "id":710,
        "name":"Huyện Gò Dầu",
        "location":"11.1402783-106.2757514",
        "type":"Huyện",
        "tinh_id":46
    },
    {
        "id":711,
        "name":"Huyện Bến Cầu",
        "location":"11.1506368-106.0875326",
        "type":"Huyện",
        "tinh_id":46
    },
    {
        "id":712,
        "name":"Huyện Trảng Bàng",
        "location":"11.0328111-106.3645677",
        "type":"Huyện",
        "tinh_id":46
    },
    {
        "id":718,
        "name":"Thành phố Thủ Dầu Một",
        "location":"10.9929842-106.6557073",
        "type":"Thành phố",
        "tinh_id":47
    },
    {
        "id":719,
        "name":"Huyện Bàu Bàng",
        "location":"11.2443985-106.6331774",
        "type":"Huyện",
        "tinh_id":47
    },
    {
        "id":720,
        "name":"Huyện Dầu Tiếng",
        "location":"11.348909-106.4641459",
        "type":"Huyện",
        "tinh_id":47
    },
    {
        "id":721,
        "name":"Thị xã Bến Cát",
        "location":"11.101302-106.5819789",
        "type":"Thị xã",
        "tinh_id":47
    },
    {
        "id":722,
        "name":"Huyện Phú Giáo",
        "location":"11.2655822-106.7706458",
        "type":"Huyện",
        "tinh_id":47
    },
    {
        "id":723,
        "name":"Thị xã Tân Uyên",
        "location":"11.0715863-106.6943524",
        "type":"Thị xã",
        "tinh_id":47
    },
    {
        "id":724,
        "name":"Thị xã Dĩ An",
        "location":"10.9155965-106.7692013",
        "type":"Thị xã",
        "tinh_id":47
    },
    {
        "id":725,
        "name":"Thị xã Thuận An",
        "location":"10.9302095-106.71167",
        "type":"Thị xã",
        "tinh_id":47
    },
    {
        "id":726,
        "name":"Huyện Bắc Tân Uyên",
        "location":"11.1498901-106.8440007",
        "type":"Huyện",
        "tinh_id":47
    },
    {
        "id":731,
        "name":"Thành phố Biên Hòa",
        "location":"10.9574128-106.8426871",
        "type":"Thành phố",
        "tinh_id":48
    },
    {
        "id":732,
        "name":"Thị xã Long Khánh",
        "location":"10.9442612-107.2311774",
        "type":"Thị xã",
        "tinh_id":48
    },
    {
        "id":734,
        "name":"Huyện Tân Phú",
        "location":"11.4275308-107.36123",
        "type":"Huyện",
        "tinh_id":48
    },
    {
        "id":735,
        "name":"Huyện Vĩnh Cửu",
        "location":"11.3049005-107.0605278",
        "type":"Huyện",
        "tinh_id":48
    },
    {
        "id":736,
        "name":"Huyện Định Quán",
        "location":"11.1576779-107.2740528",
        "type":"Huyện",
        "tinh_id":48
    },
    {
        "id":737,
        "name":"Huyện Trảng Bom",
        "location":"10.9667039-107.0303221",
        "type":"Huyện",
        "tinh_id":48
    },
    {
        "id":738,
        "name":"Huyện Thống Nhất",
        "location":"10.994359-107.1547158",
        "type":"Huyện",
        "tinh_id":48
    },
    {
        "id":739,
        "name":"Huyện Cẩm Mỹ",
        "location":"10.8225699-107.2666396",
        "type":"Huyện",
        "tinh_id":48
    },
    {
        "id":740,
        "name":"Huyện Long Thành",
        "location":"10.7932946-107.0135297",
        "type":"Huyện",
        "tinh_id":48
    },
    {
        "id":741,
        "name":"Huyện Xuân Lộc",
        "location":"10.9652026-107.4321959",
        "type":"Huyện",
        "tinh_id":48
    },
    {
        "id":742,
        "name":"Huyện Nhơn Trạch",
        "location":"10.6968843-106.8907696",
        "type":"Huyện",
        "tinh_id":48
    },
    {
        "id":747,
        "name":"Thành phố Vũng Tàu",
        "location":"10.4113797-107.136224",
        "type":"Thành phố",
        "tinh_id":49
    },
    {
        "id":748,
        "name":"Thành phố Bà Rịa",
        "location":"10.508928-107.1816257",
        "type":"Thành phố",
        "tinh_id":49
    },
    {
        "id":750,
        "name":"Huyện Châu Đức",
        "location":"10.6284702-107.2429976",
        "type":"Huyện",
        "tinh_id":49
    },
    {
        "id":751,
        "name":"Huyện Xuyên Mộc",
        "location":"10.6177683-107.4321959",
        "type":"Huyện",
        "tinh_id":49
    },
    {
        "id":752,
        "name":"Huyện Long Điền",
        "location":"10.4449241-107.2311774",
        "type":"Huyện",
        "tinh_id":49
    },
    {
        "id":753,
        "name":"Huyện Đất Đỏ",
        "location":"10.4728035-107.3139304",
        "type":"Huyện",
        "tinh_id":49
    },
    {
        "id":754,
        "name":"Huyện Tân Thành",
        "location":"10.5640726-107.0595233",
        "type":"Huyện",
        "tinh_id":49
    },
    {
        "id":755,
        "name":"Huyện Côn Đảo",
        "location":"8.7009282-106.6114474",
        "type":"Huyện",
        "tinh_id":49
    },
    {
        "id":760,
        "name":"Quận 1",
        "location":"10.7756587-106.7004238",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":761,
        "name":"Quận 12",
        "location":"10.8671531-106.6413322",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":762,
        "name":"Quận Thủ Đức",
        "location":"10.8494094-106.7537055",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":763,
        "name":"Quận 9",
        "location":"10.8428402-106.8286851",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":764,
        "name":"Quận Gò Vấp",
        "location":"10.8386779-106.6652904",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":765,
        "name":"Quận Bình Thạnh",
        "location":"10.8105831-106.7091422",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":766,
        "name":"Quận Tân Bình",
        "location":"10.8014659-106.6525974",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":767,
        "name":"Quận Tân Phú",
        "location":"10.7900517-106.6281901",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":768,
        "name":"Quận Phú Nhuận",
        "location":"10.7991944-106.6802639",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":769,
        "name":"Quận 2",
        "location":"10.7872729-106.7498105",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":770,
        "name":"Quận 3",
        "location":"10.7843695-106.6844089",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":771,
        "name":"Quận 10",
        "location":"10.7745965-106.6679542",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":772,
        "name":"Quận 11",
        "location":"10.7629739-106.650084",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":773,
        "name":"Quận 4",
        "location":"10.7578263-106.7012968",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":774,
        "name":"Quận 5",
        "location":"10.7540279-106.6633746",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":775,
        "name":"Quận 6",
        "location":"10.7480929-106.6352362",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":776,
        "name":"Quận 8",
        "location":"10.7240878-106.6286259",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":777,
        "name":"Quận Bình Tân",
        "location":"10.7652581-106.6038535",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":778,
        "name":"Quận 7",
        "location":"10.7340344-106.7215787",
        "type":"Quận",
        "tinh_id":50
    },
    {
        "id":783,
        "name":"Huyện Củ Chi",
        "location":"11.0066683-106.5131967",
        "type":"Huyện",
        "tinh_id":50
    },
    {
        "id":784,
        "name":"Huyện Hóc Môn",
        "location":"10.8839675-106.5870611",
        "type":"Huyện",
        "tinh_id":50
    },
    {
        "id":785,
        "name":"Huyện Bình Chánh",
        "location":"10.687392-106.5938538",
        "type":"Huyện",
        "tinh_id":50
    },
    {
        "id":786,
        "name":"Huyện Nhà Bè",
        "location":"10.6952642-106.704874",
        "type":"Huyện",
        "tinh_id":50
    },
    {
        "id":787,
        "name":"Huyện Cần Giờ",
        "location":"10.5083266-106.8635004",
        "type":"Huyện",
        "tinh_id":50
    },
    {
        "id":794,
        "name":"Thành phố Tân An",
        "location":"10.5330098-106.4052541",
        "type":"Thành phố",
        "tinh_id":51
    },
    {
        "id":795,
        "name":"Thị xã Kiến Tường",
        "location":"10.7667086-105.8994956",
        "type":"Thị xã",
        "tinh_id":51
    },
    {
        "id":796,
        "name":"Huyện Tân Hưng",
        "location":"10.8226522-105.6647142",
        "type":"Huyện",
        "tinh_id":51
    },
    {
        "id":797,
        "name":"Huyện Vĩnh Hưng",
        "location":"10.9028612-105.8055471",
        "type":"Huyện",
        "tinh_id":51
    },
    {
        "id":798,
        "name":"Huyện Mộc Hóa",
        "location":"10.7642485-105.9464874",
        "type":"Huyện",
        "tinh_id":51
    },
    {
        "id":799,
        "name":"Huyện Tân Thạnh",
        "location":"10.6078027-106.0169971",
        "type":"Huyện",
        "tinh_id":51
    },
    {
        "id":800,
        "name":"Huyện Thạnh Hóa",
        "location":"10.664587-106.1816196",
        "type":"Huyện",
        "tinh_id":51
    },
    {
        "id":801,
        "name":"Huyện Đức Huệ",
        "location":"10.8777796-106.2757514",
        "type":"Huyện",
        "tinh_id":51
    },
    {
        "id":802,
        "name":"Huyện Đức Hòa",
        "location":"10.9023378-106.418534",
        "type":"Huyện",
        "tinh_id":51
    },
    {
        "id":803,
        "name":"Huyện Bến Lức",
        "location":"10.641162-106.4856006",
        "type":"Huyện",
        "tinh_id":51
    },
    {
        "id":804,
        "name":"Huyện Thủ Thừa",
        "location":"10.7006857-106.3228338",
        "type":"Huyện",
        "tinh_id":51
    },
    {
        "id":805,
        "name":"Huyện Tân Trụ",
        "location":"10.5280095-106.4994889",
        "type":"Huyện",
        "tinh_id":51
    },
    {
        "id":806,
        "name":"Huyện Cần Đước",
        "location":"10.5549448-106.6055534",
        "type":"Huyện",
        "tinh_id":51
    },
    {
        "id":807,
        "name":"Huyện Cần Giuộc",
        "location":"10.6009679-106.6650358",
        "type":"Huyện",
        "tinh_id":51
    },
    {
        "id":808,
        "name":"Huyện Châu Thành",
        "location":"10.4640645-106.4759262",
        "type":"Huyện",
        "tinh_id":51
    },
    {
        "id":815,
        "name":"Thành phố Mỹ Tho",
        "location":"10.3765284-106.3438891",
        "type":"Thành phố",
        "tinh_id":52
    },
    {
        "id":816,
        "name":"Thị xã Gò Công",
        "location":"10.4106494-106.6645007",
        "type":"Thị xã",
        "tinh_id":52
    },
    {
        "id":817,
        "name":"Thị xã Cai Lậy",
        "location":"10.4050639-106.1186715",
        "type":"Huyện",
        "tinh_id":52
    },
    {
        "id":818,
        "name":"Huyện Tân Phước",
        "location":"10.5314211-106.22868",
        "type":"Huyện",
        "tinh_id":52
    },
    {
        "id":819,
        "name":"Huyện Cái Bè",
        "location":"10.3718873-105.9464874",
        "type":"Huyện",
        "tinh_id":52
    },
    {
        "id":820,
        "name":"Huyện Cai Lậy",
        "location":"10.4287401-106.1110501",
        "type":"Thị xã",
        "tinh_id":52
    },
    {
        "id":821,
        "name":"Huyện Châu Thành",
        "location":"10.4009358-106.22868",
        "type":"Huyện",
        "tinh_id":52
    },
    {
        "id":822,
        "name":"Huyện Chợ Gạo",
        "location":"10.3793903-106.4541903",
        "type":"Huyện",
        "tinh_id":52
    },
    {
        "id":823,
        "name":"Huyện Gò Công Tây",
        "location":"10.3378629-106.6055534",
        "type":"Huyện",
        "tinh_id":52
    },
    {
        "id":824,
        "name":"Huyện Gò Công Đông",
        "location":"10.3737254-106.7470536",
        "type":"Huyện",
        "tinh_id":52
    },
    {
        "id":825,
        "name":"Huyện Tân Phú Đông",
        "location":"10.2462427-106.6998767",
        "type":"Huyện",
        "tinh_id":52
    },
    {
        "id":829,
        "name":"Thành phố Bến Tre",
        "location":"10.241361-106.3762601",
        "type":"Thành phố",
        "tinh_id":53
    },
    {
        "id":831,
        "name":"Huyện Châu Thành",
        "location":"10.3067813-106.3699271",
        "type":"Huyện",
        "tinh_id":53
    },
    {
        "id":832,
        "name":"Huyện Chợ Lách",
        "location":"10.241094-106.1698563",
        "type":"Huyện",
        "tinh_id":53
    },
    {
        "id":833,
        "name":"Huyện Mỏ Cày Nam",
        "location":"10.0468396-106.3699271",
        "type":"Huyện",
        "tinh_id":53
    },
    {
        "id":834,
        "name":"Huyện Giồng Trôm",
        "location":"10.1718844-106.4641459",
        "type":"Huyện",
        "tinh_id":53
    },
    {
        "id":835,
        "name":"Huyện Bình Đại",
        "location":"10.1596899-106.6998767",
        "type":"Huyện",
        "tinh_id":53
    },
    {
        "id":836,
        "name":"Huyện Ba Tri",
        "location":"10.0417849-106.5936741",
        "type":"Huyện",
        "tinh_id":53
    },
    {
        "id":837,
        "name":"Huyện Thạnh Phú",
        "location":"9.9077234-106.5584071",
        "type":"Huyện",
        "tinh_id":53
    },
    {
        "id":838,
        "name":"Huyện Mỏ Cày Bắc",
        "location":"10.1700758-106.287521",
        "type":"Huyện",
        "tinh_id":53
    },
    {
        "id":842,
        "name":"Thành phố Trà Vinh",
        "location":"9.9513316-106.3346061",
        "type":"Thành phố",
        "tinh_id":54
    },
    {
        "id":844,
        "name":"Huyện Càng Long",
        "location":"9.9674087-106.22868",
        "type":"Huyện",
        "tinh_id":54
    },
    {
        "id":845,
        "name":"Huyện Cầu Kè",
        "location":"9.8878863-106.0875326",
        "type":"Huyện",
        "tinh_id":54
    },
    {
        "id":846,
        "name":"Huyện Tiểu Cần",
        "location":"9.7969156-106.1816196",
        "type":"Huyện",
        "tinh_id":54
    },
    {
        "id":847,
        "name":"Huyện Châu Thành",
        "location":"9.8331585-106.3228338",
        "type":"Huyện",
        "tinh_id":54
    },
    {
        "id":848,
        "name":"Huyện Cầu Ngang",
        "location":"9.7830517-106.4641459",
        "type":"Huyện",
        "tinh_id":54
    },
    {
        "id":849,
        "name":"Huyện Trà Cú",
        "location":"9.7060851-106.2757514",
        "type":"Huyện",
        "tinh_id":54
    },
    {
        "id":850,
        "name":"Huyện Duyên Hải",
        "location":"9.6311842-106.4877072",
        "type":"Huyện",
        "tinh_id":54
    },
    {
        "id":851,
        "name":"Thị xã Duyên Hải",
        "location":"9.6311842-106.4877072",
        "type":"Thị xã",
        "tinh_id":54
    },
    {
        "id":855,
        "name":"Thành phố Vĩnh Long",
        "location":"10.2448442-105.958865",
        "type":"Thành phố",
        "tinh_id":55
    },
    {
        "id":857,
        "name":"Huyện Long Hồ",
        "location":"10.1980682-105.9464874",
        "type":"Huyện",
        "tinh_id":55
    },
    {
        "id":858,
        "name":"Huyện Mang Thít",
        "location":"10.18076-106.0757749",
        "type":"Huyện",
        "tinh_id":55
    },
    {
        "id":859,
        "name":"Huyện  Vũng Liêm",
        "location":"10.058632-106.1345705",
        "type":"Huyện",
        "tinh_id":55
    },
    {
        "id":860,
        "name":"Huyện Tam Bình",
        "location":"10.0679356-105.9464874",
        "type":"Huyện",
        "tinh_id":55
    },
    {
        "id":861,
        "name":"Thị xã Bình Minh",
        "location":"10.029192-105.8525154",
        "type":"Thị xã",
        "tinh_id":55
    },
    {
        "id":862,
        "name":"Huyện Trà Ôn",
        "location":"9.9789961-105.993491",
        "type":"Huyện",
        "tinh_id":55
    },
    {
        "id":863,
        "name":"Huyện Bình Tân",
        "location":"10.1218894-105.7728863",
        "type":"Huyện",
        "tinh_id":55
    },
    {
        "id":866,
        "name":"Thành phố Cao Lãnh",
        "location":"10.4549723-105.6340352",
        "type":"Thành phố",
        "tinh_id":56
    },
    {
        "id":867,
        "name":"Thành phố Sa Đéc",
        "location":"10.3057678-105.7468535",
        "type":"Thành phố",
        "tinh_id":56
    },
    {
        "id":868,
        "name":"Thị xã Hồng Ngự",
        "location":"10.8255238-105.3950939",
        "type":"Thị xã",
        "tinh_id":56
    },
    {
        "id":869,
        "name":"Huyện Tân Hồng",
        "location":"10.876115-105.4771084",
        "type":"Huyện",
        "tinh_id":56
    },
    {
        "id":870,
        "name":"Huyện Hồng Ngự",
        "location":"10.7979866-105.2897042",
        "type":"Huyện",
        "tinh_id":56
    },
    {
        "id":871,
        "name":"Huyện Tam Nông",
        "location":"10.7192793-105.5474373",
        "type":"Huyện",
        "tinh_id":56
    },
    {
        "id":872,
        "name":"Huyện Tháp Mười",
        "location":"10.5302706-105.8290298",
        "type":"Huyện",
        "tinh_id":56
    },
    {
        "id":873,
        "name":"Huyện Cao Lãnh",
        "location":"10.4659577-105.7059785",
        "type":"Huyện",
        "tinh_id":56
    },
    {
        "id":874,
        "name":"Huyện Thanh Bình",
        "location":"10.6135294-105.4771084",
        "type":"Huyện",
        "tinh_id":56
    },
    {
        "id":875,
        "name":"Huyện Lấp Vò",
        "location":"10.3578054-105.6308159",
        "type":"Huyện",
        "tinh_id":56
    },
    {
        "id":876,
        "name":"Huyện Lai Vung",
        "location":"10.255455-105.6647142",
        "type":"Huyện",
        "tinh_id":56
    },
    {
        "id":877,
        "name":"Huyện Châu Thành",
        "location":"10.2050554-105.8055471",
        "type":"Huyện",
        "tinh_id":56
    },
    {
        "id":883,
        "name":"Thành phố Long Xuyên",
        "location":"10.3759416-105.4185406",
        "type":"Thành phố",
        "tinh_id":57
    },
    {
        "id":884,
        "name":"Thành phố Châu Đốc",
        "location":"10.6820814-105.0823967",
        "type":"Thành phố",
        "tinh_id":57
    },
    {
        "id":886,
        "name":"Huyện An Phú",
        "location":"10.8512167-105.1025075",
        "type":"Huyện",
        "tinh_id":57
    },
    {
        "id":887,
        "name":"Thị xã Tân Châu",
        "location":"10.8026827-105.1960795",
        "type":"Thị xã",
        "tinh_id":57
    },
    {
        "id":888,
        "name":"Huyện Phú Tân",
        "location":"10.5942654-105.3528491",
        "type":"Huyện",
        "tinh_id":57
    },
    {
        "id":889,
        "name":"Huyện Châu Phú",
        "location":"10.5630265-105.1726816",
        "type":"Huyện",
        "tinh_id":57
    },
    {
        "id":890,
        "name":"Huyện Tịnh Biên",
        "location":"10.549107-105.0089888",
        "type":"Huyện",
        "tinh_id":57
    },
    {
        "id":891,
        "name":"Huyện Tri Tôn",
        "location":"10.3972321-104.9856176",
        "type":"Huyện",
        "tinh_id":57
    },
    {
        "id":892,
        "name":"Huyện Châu Thành",
        "location":"10.4377694-105.3892372",
        "type":"Huyện",
        "tinh_id":57
    },
    {
        "id":893,
        "name":"Huyện Chợ Mới",
        "location":"10.4825247-105.4771084",
        "type":"Huyện",
        "tinh_id":57
    },
    {
        "id":894,
        "name":"Huyện Thoại Sơn",
        "location":"10.2595103-105.2608002",
        "type":"Huyện",
        "tinh_id":57
    },
    {
        "id":899,
        "name":"Thành phố Rạch Giá",
        "location":"10.021507-105.0910974",
        "type":"Thành phố",
        "tinh_id":58
    },
    {
        "id":900,
        "name":"Thị xã Hà Tiên",
        "location":"10.381909-104.4901728",
        "type":"Thị xã",
        "tinh_id":58
    },
    {
        "id":902,
        "name":"Huyện Kiên Lương",
        "location":"10.3043903-104.6354631",
        "type":"Huyện",
        "tinh_id":58
    },
    {
        "id":903,
        "name":"Huyện Hòn Đất",
        "location":"10.2227003-104.9856176",
        "type":"Huyện",
        "tinh_id":58
    },
    {
        "id":904,
        "name":"Huyện Tân Hiệp",
        "location":"10.1154358-105.2834404",
        "type":"Huyện",
        "tinh_id":58
    },
    {
        "id":905,
        "name":"Huyện Châu Thành",
        "location":"9.8889535-105.1492869",
        "type":"Huyện",
        "tinh_id":58
    },
    {
        "id":906,
        "name":"Huyện Giồng Riềng",
        "location":"9.9238222-105.3728845",
        "type":"Huyện",
        "tinh_id":58
    },
    {
        "id":907,
        "name":"Huyện Gò Quao",
        "location":"9.7525077-105.2897042",
        "type":"Huyện",
        "tinh_id":58
    },
    {
        "id":908,
        "name":"Huyện An Biên",
        "location":"9.8064559-105.0557415",
        "type":"Huyện",
        "tinh_id":58
    },
    {
        "id":909,
        "name":"Huyện An Minh",
        "location":"9.6647183-104.9495651",
        "type":"Huyện",
        "tinh_id":58
    },
    {
        "id":910,
        "name":"Huyện Vĩnh Thuận",
        "location":"9.5384134-105.2428853",
        "type":"Huyện",
        "tinh_id":58
    },
    {
        "id":911,
        "name":"Huyện Phú Quốc",
        "location":"10.1586245-103.98402",
        "type":"Huyện",
        "tinh_id":58
    },
    {
        "id":912,
        "name":"Huyện Kiên Hải",
        "location":"9.8091362-104.6296338",
        "type":"Huyện",
        "tinh_id":58
    },
    {
        "id":913,
        "name":"Huyện U Minh Thượng",
        "location":"9.6311125-105.1025075",
        "type":"Huyện",
        "tinh_id":58
    },
    {
        "id":914,
        "name":"Huyện Giang Thành",
        "location":"10.4771358-104.6821048",
        "type":"Huyện",
        "tinh_id":58
    },
    {
        "id":916,
        "name":"Quận Ninh Kiều",
        "location":"10.0272537-105.7698039",
        "type":"Quận",
        "tinh_id":59
    },
    {
        "id":917,
        "name":"Quận Ô Môn",
        "location":"10.1164943-105.6326457",
        "type":"Quận",
        "tinh_id":59
    },
    {
        "id":918,
        "name":"Quận Bình Thuỷ",
        "location":"10.0622567-105.7381017",
        "type":"Quận",
        "tinh_id":59
    },
    {
        "id":919,
        "name":"Quận Cái Răng",
        "location":"9.9992392-105.8043572",
        "type":"Quận",
        "tinh_id":59
    },
    {
        "id":923,
        "name":"Quận Thốt Nốt",
        "location":"10.2405338-105.5336815",
        "type":"Quận",
        "tinh_id":59
    },
    {
        "id":924,
        "name":"Huyện Vĩnh Thạnh",
        "location":"10.2322696-105.3987034",
        "type":"Huyện",
        "tinh_id":59
    },
    {
        "id":925,
        "name":"Huyện Cờ Đỏ",
        "location":"10.0972302-105.4304423",
        "type":"Huyện",
        "tinh_id":59
    },
    {
        "id":926,
        "name":"Huyện Phong Điền",
        "location":"9.9967657-105.6686611",
        "type":"Huyện",
        "tinh_id":59
    },
    {
        "id":927,
        "name":"Huyện Thới Lai",
        "location":"10.0681881-105.5599728",
        "type":"Huyện",
        "tinh_id":59
    },
    {
        "id":930,
        "name":"Thành phố Vị Thanh",
        "location":"9.7731921-105.4537082",
        "type":"Thành phố",
        "tinh_id":60
    },
    {
        "id":931,
        "name":"Thị xã Ngã Bảy",
        "location":"9.8252566-105.8172881",
        "type":"Thị xã",
        "tinh_id":60
    },
    {
        "id":932,
        "name":"Huyện Châu Thành A",
        "location":"9.926726-105.6315594",
        "type":"Huyện",
        "tinh_id":60
    },
    {
        "id":933,
        "name":"Huyện Châu Thành",
        "location":"9.9216255-105.8073554",
        "type":"Huyện",
        "tinh_id":60
    },
    {
        "id":934,
        "name":"Huyện Phụng Hiệp",
        "location":"9.7762126-105.7116464",
        "type":"Huyện",
        "tinh_id":60
    },
    {
        "id":935,
        "name":"Huyện Vị Thuỷ",
        "location":"9.8260824-105.5708865",
        "type":"Huyện",
        "tinh_id":60
    },
    {
        "id":936,
        "name":"Huyện Long Mỹ",
        "location":"9.6552847-105.5239912",
        "type":"Huyện",
        "tinh_id":60
    },
    {
        "id":937,
        "name":"Thị xã Long Mỹ",
        "location":"9.669597-105.5650239",
        "type":"Thị xã",
        "tinh_id":60
    },
    {
        "id":941,
        "name":"Thành phố Sóc Trăng",
        "location":"9.602521-105.9739049",
        "type":"Thành phố",
        "tinh_id":61
    },
    {
        "id":942,
        "name":"Huyện Châu Thành",
        "location":"9.6809726-105.8994956",
        "type":"Huyện",
        "tinh_id":61
    },
    {
        "id":943,
        "name":"Huyện Kế Sách",
        "location":"9.8310108-105.92299",
        "type":"Huyện",
        "tinh_id":61
    },
    {
        "id":944,
        "name":"Huyện Mỹ Tú",
        "location":"9.599104-105.8055471",
        "type":"Huyện",
        "tinh_id":61
    },
    {
        "id":945,
        "name":"Huyện Cù Lao Dung",
        "location":"9.5791522-106.22868",
        "type":"Huyện",
        "tinh_id":61
    },
    {
        "id":946,
        "name":"Huyện Long Phú",
        "location":"9.6289421-106.0875326",
        "type":"Huyện",
        "tinh_id":61
    },
    {
        "id":947,
        "name":"Huyện Mỹ Xuyên",
        "location":"9.4655111-105.8994956",
        "type":"Huyện",
        "tinh_id":61
    },
    {
        "id":948,
        "name":"Thị xã Ngã Năm",
        "location":"9.5215171-105.6177942",
        "type":"Thị xã",
        "tinh_id":61
    },
    {
        "id":949,
        "name":"Huyện Thạnh Trị",
        "location":"9.4741407-105.7116464",
        "type":"Huyện",
        "tinh_id":61
    },
    {
        "id":950,
        "name":"Thị xã Vĩnh Châu",
        "location":"9.3249582-105.9804542",
        "type":"Thị xã",
        "tinh_id":61
    },
    {
        "id":951,
        "name":"Huyện Trần Đề",
        "location":"9.49978-106.0875326",
        "type":"Huyện",
        "tinh_id":61
    },
    {
        "id":954,
        "name":"Thành phố Bạc Liêu",
        "location":"9.2573324-105.7557791",
        "type":"Thành phố",
        "tinh_id":62
    },
    {
        "id":956,
        "name":"Huyện Hồng Dân",
        "location":"9.5539029-105.45205",
        "type":"Huyện",
        "tinh_id":62
    },
    {
        "id":957,
        "name":"Huyện Phước Long",
        "location":"9.4006715-105.4302383",
        "type":"Huyện",
        "tinh_id":62
    },
    {
        "id":958,
        "name":"Huyện Vĩnh Lợi",
        "location":"9.3450296-105.7116464",
        "type":"Huyện",
        "tinh_id":62
    },
    {
        "id":959,
        "name":"Thị xã Giá Rai",
        "location":"9.260136-105.3753129",
        "type":"Thị xã",
        "tinh_id":62
    },
    {
        "id":960,
        "name":"Huyện Đông Hải",
        "location":"9.1630642-105.4536718",
        "type":"Huyện",
        "tinh_id":62
    },
    {
        "id":961,
        "name":"Huyện Hoà Bình",
        "location":"9.2704595-105.5897386",
        "type":"Huyện",
        "tinh_id":62
    },
    {
        "id":964,
        "name":"Thành phố Cà Mau",
        "location":"9.1526728-105.1960795",
        "type":"Thành phố",
        "tinh_id":63
    },
    {
        "id":966,
        "name":"Huyện U Minh",
        "location":"9.3554435-104.9856176",
        "type":"Huyện",
        "tinh_id":63
    },
    {
        "id":967,
        "name":"Huyện Thới Bình",
        "location":"9.3473628-105.1726816",
        "type":"Huyện",
        "tinh_id":63
    },
    {
        "id":968,
        "name":"Huyện Trần Văn Thời",
        "location":"9.1009716-104.8921668",
        "type":"Huyện",
        "tinh_id":63
    },
    {
        "id":969,
        "name":"Huyện Cái Nước",
        "location":"8.9867763-105.0557415",
        "type":"Huyện",
        "tinh_id":63
    },
    {
        "id":970,
        "name":"Huyện Đầm Dơi",
        "location":"8.9994186-105.2662931",
        "type":"Huyện",
        "tinh_id":63
    },
    {
        "id":971,
        "name":"Huyện Năm Căn",
        "location":"8.8153071-105.0557415",
        "type":"Huyện",
        "tinh_id":63
    },
    {
        "id":972,
        "name":"Huyện Phú Tân",
        "location":"8.9291357-104.8921668",
        "type":"Huyện",
        "tinh_id":63
    },
    {
        "id":973,
        "name":"Huyện Ngọc Hiển",
        "location":"8.6677256-105.0032366",
        "type":"Huyện",
        "tinh_id":63
    }
    ]
    const { 
        userInfo
    } = useContext(UserContext);

    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")
    const [provinceId, setProvinceId] = useState("")
    const [userTinh, setUserTinh] = useState(null)
    const [userHuyen, setUserHuyen] = useState(null)
    const [addressInput, setAddressInput] = useState(null)
    const [cartList, setCartList] = useState([])
    const subTotal = localStorage.getItem('total')
    const [shipping, setShipping] = useState(0)
    const total = Number(subTotal) + Number(shipping)

    useEffect(()=>{
        setNameInput(userInfo.userName)
        setEmailInput(userInfo.userEmail)
        setPhoneInput(userInfo.userPhone)
        setAddressInput(userInfo.userAddress)
        if (userInfo.userTinh !== "") {
              tinh.filter((item)=>{
                 if (userInfo.userTinh === item.name) {
                    setProvinceId(item.id)
                 }
              })
              setUserTinh(userInfo.userTinh)
        }
        if (userInfo.userHuyen !== "") {
              setUserHuyen(userInfo.userHuyen)
        }
        setCartList((JSON.parse(localStorage.getItem('cart'))))
    },[userInfo])

    const [methodPayment, setMethodPayMent] = useState(0)

    const checkedPayMent = (event) => {
        setMethodPayMent(Number(event.target.id))
    }

    const placeAnOrder = () => {
        var orderPaymentMethod = "";
        if (methodPayment === 1) {
            orderPaymentMethod = "cash on delivery"
        } else if (methodPayment === 2) {
            orderPaymentMethod = "direct back transfer"
        } else if (methodPayment === 3) {
            orderPaymentMethod = "paypal"
        } else {
            orderPaymentMethod = ""
        }
        var cartId = []
        for (let i in cartList) {
            cartId.push(
                {
                    id: cartList[i]._id,
                    amount: cartList[i].count 
                }
            )
        }
        if (orderPaymentMethod === "") {
            alert("Fill in all infomation please")
        } else {
            axios.post('http://localhost:4000/order', {
                orderName: nameInput,
                orderEmail: emailInput,
                orderPhone: phoneInput,
                orderAddress: addressInput,
                orderTinh: userTinh,
                orderHuyen: userHuyen,
                orderList: cartId,
                orderTotal: total,
                orderPaymentMethod: orderPaymentMethod,
                orderDate: new Date()
            })
            localStorage.removeItem('total')
            localStorage.removeItem('cart')
            props.history.push(`/men`);
            window.location.reload(false);
        }
    }

    return(
        <div className="CheckoutBody">
            <div className="billing-detail">
                <div className="billing-detail-title">Billing Details</div>
                <form className="billing-detail-form"> 
                    <table className="billing-detail-table"> 
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input 
                                        type="text"
                                        className="input"
                                        name="name" 
                                        value={nameInput}
                                        onChange={(event)=>{
                                            setNameInput(event.target.value)
                                        }}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Phone number</td>
                                <td>
                                    <input 
                                        type="text"
                                        className="input"
                                        name="phone" 
                                        value={phoneInput}
                                        onChange={(event)=>{
                                            setPhoneInput(event.target.value)
                                        }}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input 
                                        type="text"
                                        className="input"
                                        name="phone" 
                                        value={emailInput}
                                        onChange={(event)=>{
                                            setEmailInput(event.target.value)
                                        }}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Province</td>
                                <td>
                                    <select 
                                        className="input"
                                        value={userTinh}
                                        onChange={(event)=>{
                                            setProvinceId(event.target.selectedIndex)
                                            setUserTinh(event.target.value)
                                        }}
                                    >
                                        <option disabled selected value>select a province</option>
                                        {tinh.map((item, index) => {
                                            return (
                                                <option 
                                                    key={index}
                                                    value={item.name}
                                                >{item.name}</option>
                                            )
                                        })}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Distric</td>
                                <td>
                                    <select 
                                        className="input"
                                        value={userHuyen}
                                        onChange={(event)=>{
                                            setUserHuyen(event.target.value)
                                        }}
                                    >
                                        <option disabled selected value>select a district</option>
                                        {huyen.map((item, index) => {
                                            if (item.tinh_id === provinceId) {
                                                return (
                                                    <option
                                                        key={index}
                                                        value={item.name}
                                                        >{item.name}</option>
                                                )
                                            }
                                        })}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>
                                    <input 
                                        type="text"
                                        className="input"
                                        name="address" 
                                        value={addressInput}
                                        onChange={(event)=>{
                                            setAddressInput(event.target.value)
                                        }}
                                    ></input>
                                </td>
                            </tr>
                            
                                
                        </tbody>
                    </table>
                </form>
            </div>
            <div className="billing-detail">
                <div className="billing-detail-title">Your order</div>
                <div className="billing-detail-form"> 
                    <div className="billing-detail-list">
                        {
                            cartList.map((item, index)=>{
                                return (
                                    <div 
                                        key={index}
                                        className="billing-detail-item"
                                    >
                                        <img src={item.productImg[0]} alt="" width="60px" height="60px"></img>
                                        <div className="billing-detail-name">{item.productName}</div>
                                        <div className="billing-detail-count">
                                            <p>x</p>
                                            {item.count}
                                        </div>
                                        <div className="billing-detail-price">{item.productPrice * item.count} đ</div>
                                    </div>
                                )
                            }) 
                        }
                        <div className="billing-detail-item flex">
                            <div style={{width:'60px', height: '60px', lineHeight: '60px', fontSize: '18px'}}>SUBTOTAL</div>
                            <div className="billing-detail-name"></div>
                            <div className="billing-detail-count" style={{color: '#111'}}></div>
                            <div className="billing-detail-price">{subTotal} đ</div>
                        </div>
                        <div className="billing-detail-item flex">
                            <div style={{width:'60px', height: '60px', lineHeight: '60px', fontSize: '18px'}}>SHIPPING</div>
                            <div className="billing-detail-name"></div>
                            <div className="billing-detail-count" style={{color: '#111'}}></div>
                            <div className="billing-detail-shipping">
                                <select onChange={(event)=>{
                                    setShipping(event.target.value)
                                }}>
                                    <option value="0">FREESHIP - 0đ</option>
                                    <option value="30000">FAST SHIPPING - 30000đ</option>
                                </select>
                            </div>
                        </div>
                        <div className="billing-detail-item flex">
                            <div style={{width:'60px', height: '60px', lineHeight: '60px', fontSize: '18px'}}>TOTAL</div>
                            <div className="billing-detail-name"></div>
                            <div className="billing-detail-count" style={{color: '#111'}}></div>
                            <div className="billing-detail-price">{Number(subTotal) + Number(shipping)} đ</div>
                        </div>
                        <div className="billing-detail-payment">
                            <div style={{fontSize: '18px'}}>PAYMENT METHOD</div>
                            <div className="payment-method-list">
                                <div 
                                    id="1"
                                    className="flex payment-method-item" 
                                    onClick={checkedPayMent}>
                                    <div 
                                        id="1"
                                        className={methodPayment === 1 ? "size-check isChecked2" : "size-check"}
                                        ></div>
                                        <p
                                            id="1"
                                            >CASH ON DELIVERY</p>
                                    </div>
                                <div 
                                    id="2"
                                    className="flex payment-method-item"
                                    onClick={checkedPayMent}>
                                    <div 
                                        id="2"
                                        className={methodPayment === 2 ? "size-check isChecked2" : "size-check"} ></div>
                                    <p
                                        id="2">
                                        DIRECT BANK TRANSFER
                                    </p>
                                </div>
                                <div 
                                    id="3"
                                    className="flex payment-method-item"
                                    onClick={checkedPayMent}>
                                    <div 
                                        id="3"
                                        className={methodPayment === 3 ? "size-check isChecked2" : "size-check"} ></div>
                                    <p
                                        id="3"
                                        >PAYPAL</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-btn btn" onClick={placeAnOrder}>
                            PLACE AN ORDER
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CheckoutBody)