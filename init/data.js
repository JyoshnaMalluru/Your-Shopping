const sampleDressCards = [
        {
            title : "Plain Shirt",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0IidssgGNXDzMDOMJXL3qq-MQdpCZpZLnw&s",
            },
            category : "men",
            price : 600,
            like : false
        },
        {
            title: "Floral Maxi Dress",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2HZeRfbGqcup_bsH0w8iReL6Fe65VlAGow&s",
            }, 
            category: "women",
            price: 1200,
            like : false
        },
        {
            title: "Casual Blazer",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnA58NHSNkPfxGrXzVZwSK_BwWUMQzY-5JA&s",
            }, 
            category: "men",
            price: 1500,
            like : false
        },
        {
            title: "A-Line Dress",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-eS9YPKbmmp5fxIHyA0Welo6ctp_mtkJTg&s",
            }, 
            category: "women",
            price: 900,
            like : false
        },
        {
            title: "Denim Jacket",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpgo76S1B6HPWeFHzocLINOSKE2vaEpDFg&s",
            }, 
            category: "boy",
            price: 800,
            like : false
        },
        {
            title: "Embroidered Kurti",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxX99qtukFQjDIYzRJDtodssYJywTmqjKkw&s",
            }, 
            category: "women",
            price: 700,
            like : false
        },
        {
            title: "Checked Shirt",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKtSv-QVZIL2isUdZvecKmPtfSec7h88sKg&s",
            }, 
            category: "men",
            price: 1100,
            like : false
        },
        {
            title: "Party Gown",
            image : {
                filename : "dresscardimage",
                url :  "https://s.alicdn.com/@sc04/kf/H3dfb69721fdc40b3b558d34b1c1e779bR.jpg_300x300.jpg",
            }, 
            category: "girl",
            price: 1800,
            like : false
        },
        {
            title: "Tuxedo Suit",
            image : {
                filename : "dresscardimage",
                url :   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2hn3A0jow-UzKdp9VRdtb9KCz2Hb3MOYVg&s",
            },
            category: "boy",
            price: 2200,
            like : false
        },
        {
            title: "Anarkali Dress",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2l56uofOAGGAaLYV5_yu6vJRHihrCx9gYuQ&s",
            }, 
            category: "women",
            price: 1300,
            like : false
        },
        {
            title: "Sweatshirt",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFEafE95kHhjU3kexB8F7Xfu4plxKoVRNOg&s",
            }, 
            category: "boy",
            price: 850,
            like : false
        },
        {
            title: "Printed Sundress",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDKenu3rUrgQqGD4a8G3xgqXjoN5AIv0lTQ&s",
            },
            category: "women",
            price: 1150,
            like : false
        },
        {
            title: "Leather Jacket",
            image : {
                filename : "dresscardimage",
                url :  "https://www.jeanswholesaler.in/2632-large_default/royal-spider-brown-pure-leather-jacket-for-men-rs-l004.jpg",
            },
            category: "men",
            price: 3500,
            like : false
        },
        {
            title: "Polka Dot Dress",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEzqKhKIccPkHphnWKKte4N47nh-IRyhT0w&s",
            }, 
            category: "girl",
            price: 900,
            like : false
        },
        {
            title: "Hooded Sweatshirt",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdH_iVWRMSO-qRM-pdPeWAKYc9wPBrPUQ1g&s",
            }, 
            category: "boy",
            price: 600,
            like : false
        },
        {
            title: "Pleated Midi Skirt",
            image : {
                filename : "dresscardimage",
                url :  "https://cdn.mandco.com/Images/ProductImages/Big/dfb8f57b-6919-4c_550233_A.jpg",
            }, 
            category: "women",
            price: 1200,
            like : false
        },
        {
            title: "Linen Shirt",
            image : {
                filename : "dresscardimage",
                url :  "https://i.ebayimg.com/images/g/lYQAAOSw4T9mq1w9/s-l1200.jpg",
            }, 
            category: "men",
            price: 1300,
            like : false
        },
        {
            title: "Ruffle Sleeve Dress",
            image : {
                filename : "dresscardimage",
                url :  "https://softsensbaby.com/cdn/shop/files/1_a6af9a33-b847-40d7-a8c6-476651aa13ab_300x300.jpg?v=1717499568",
            },
            category: "girl",
            price: 1050,
            like : false
        },
        {
            title: "Bomber Jacket",
            image : {
                filename : "dresscardimage",
                url :   "https://assets.ajio.com/medias/sys_master/root/20231106/Xhel/65490bc4ddf77915197246df/-473Wx593H-441769597-rust-MODEL.jpg",
            },
            category: "boy",
            price: 2200,
            like : false
        },
        {
            title: "Silk Saree",
            image : {
                filename : "dresscardimage",
                url :  "https://utsarees.in/cdn/shop/files/Heavy_Mysore_Crape_Silk_Saree_with_Brocade_Blouse.22.jpg?v=1724747560&width=1445",
            },
            category: "women",
            price: 2500,
            like : false
        },
        {
            title: "V-Neck T-Shirt",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLVCvdlxVa5V1lmv3Yho9AwBf711Yja1ROA&s",
            },
            category: "men",
            price: 600,
            like : false
        },
        {
            title: "Princess Ball Gown",
            image : {
                filename : "dresscardimage",
                url :   "https://image.made-in-china.com/202f0j00vCybnoKBNNcV/Baby-Girl-Birthday-Party-Princess-Dress-Kids-Formal-Pageant-Ball-Gown.jpg",
            },
            category: "girl",
            price: 2400,
            like : false
        },
        {
            title: "Plaid Shirt",
            image : {
                filename : "dresscardimage",
                url :  "https://m.media-amazon.com/images/I/81g88cW94cL._AC_UY1100_.jpg",
            },
            category: "boy",
            price: 950,
            like : false
        },
        {
            title: "Off-Shoulder Top",
            image : {
                filename : "dresscardimage",
                url :   "https://5.imimg.com/data5/SF/TQ/FA/SELLER-91278754/designer-tops.jpg",
            },
            category: "women",
            price: 700,
            like : false
        },
        {
            title: "Chino Pants",
            image : {
                filename : "dresscardimage",
                url :  "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1386707_lifestyle?$rl_4x5_pdp$",
            }, 
            category: "men",
            price: 1400,
            like : false
        },
        {
            title: "Denim Overalls",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBLkbfnZb7KHGJ2IChpksjiVOetFpNEszNA&s",
            },
            category: "girl",
            price: 1100,
            like : false
        },
        {
            title: "Tracksuit",
            image : {
                filename : "dresscardimage",
                url :  "https://assets.ajio.com/medias/sys_master/root/20230707/YIBv/64a839e6eebac147fc5d6775/-473Wx593H-410353062-mediumgreyheather-MODEL.jpg",
            }, 
            category: "boy",
            price: 1200,
            like : false
        },
        {
            title: "Tunic Dress",
            image : {
                filename : "dresscardimage",
                url :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MvaFMfKabGIqbYkKp-C43tqlEhS8Z7uQpw&s",
            }, 
            category: "women",
            price: 800,
            like : false
        },
        {
            title: "Polo Shirt",
            image : {
                filename : "dresscardimage",
                url :  "https://m.media-amazon.com/images/I/71-9wxDGjZL._AC_UY1100_.jpg",
            },
            category: "men",
            price: 900,
            like : false
        },
        {
            title: "Sequin Party Dress",
            image : {
                filename : "dresscardimage",
                url : "https://ae01.alicdn.com/kf/Sed944b1f8a0f4532b76b4e4dd04e222bR/Princess-Evening-Luxurious-Party-Dress-for-Girls-Kids-Outfit-Sequin-Short-Sleeve-Ball-Gown-Children-Infant.jpg",
            },
            category: "girl",
            price: 1600,
            like : false
        },
        {
            title: "Graphic T-Shirt",
            image : {
                filename : "dresscardimage",
                url :  "https://adimanav.com/cdn/shop/products/chote-karyakarte.jpg?v=1703577117",
            },
            category: "boy",
            price: 500,
            like : false
        }
]

module.exports = {data : sampleDressCards};