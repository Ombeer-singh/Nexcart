import p1_img from '../assets/woman1.jpg'
import p2_img from '../assets/man1.jpg'
import p3_img from '../assets/woman2.jpg'
import p4_img from '../assets/man2.jpg'
import p5_img from '../assets/man3.webp'
import p6_img from '../assets/woman3.jpg'
import p7_img from '../assets/man4.webp'
import p8_img from '../assets/man5.webp'
import p9_img from '../assets/woman5.webp'
import p10_img from '../assets/man7.webp'
import p11_img from '../assets/woman7.jpg'
import p12_img from '../assets/man8.webp'
import p13_img from '../assets/woman8.webp'
import p14_img from '../assets/kid1.webp'
import p15_img from '../assets/kid2.jpg'
import p16_img from '../assets/kid3.webp'
import p17_img from '../assets/kid4.webp'
import p18_img from '../assets/kid5.jpg'
import p19_img from '../assets/kid6.webp'
import p20_img from '../assets/kidslower.jpeg'
import p21_img from '../assets/kid8.jpg'
import p22_img from '../assets/kurti.png'
import p23_img from '../assets/kidsjeans.webp'
import p24_img from "../assets/kurta pajama.png"
import p25_img from '../assets/womankurti D.webp'
import p26_img from '../assets/womanlancha D.avif'
import p27_img from '../assets/mancaot D.avif'
import  p28_img from "../assets/manpathani D.webp"
import p29_img from "../assets/kidscaot D.webp"
import p30_img from "../assets/kidslether D.jpg"
import p31_img from '../assets/manhoodies C.jpg'
import p32_img from '../assets/womangown C.webp'
import p33_img from '../assets/manjapaness C.jpg'
import p34_img from '../assets/womanlaggies C.webp'
import p35_img from '../assets/mantshirt C.jpg'
import p36_img from '../assets/womansuit C.jpg'
import p37_img from "../assets/manshirt3d.jpg"
import p38_img from "../assets/manpant3d.jpg"



let all_product = [
    {
        id: 1,
        name: "Kurti",
        category: "Woman",
        image: p1_img,
        new_price: 50.0,
        old_price: 80.5
    },

    { id: 2, name: "Jeans", category: "Man", image:p2_img, new_price: 60.0, old_price: 90.5 },
    { id: 3, name: "Saree", category: "Woman", image:p3_img, new_price: 75.0, old_price: 120.0 },
    { id: 4, name: "Coat pant", category: "Man", image: p4_img, new_price: 90.0, old_price: 140.0 },
    { id: 5, name: "T-Shirt", category: "Man", image: p5_img, new_price: 45.0, old_price: 70.0 },
    { id: 6, name: "Dress", category: "Woman", image: p6_img, new_price: 85.0, old_price: 130.0 },
    { id: 7, name: "Hoodie", category: "Man", image: p7_img, new_price: 95.0, old_price: 150.0 },
    { id: 8, name: "Shirt", category: "Man", image: p8_img, new_price: 70.0, old_price: 110.0 },
    { id: 9, name: "Jumpsuit", category: "Woman", image: p9_img, new_price: 88.0, old_price: 135.0 },
    { id: 10, name: "Shorts", category: "Man", image: p10_img, new_price: 40.0, old_price: 65.0 },
    { id: 11, name: "Top", category: "Woman", image: p11_img, new_price: 52.0, old_price: 85.0 },
    { id: 12, name: "Kurta", category: "Man", image: p12_img, new_price: 78.0, old_price: 115.0 },
    { id: 13, name: "Skirt", category: "Woman", image:p13_img, new_price: 73.0, old_price: 110.0 },
    { id: 14, name: "Denim Shirt", category: "Kids", image: p14_img, new_price: 85.0, old_price: 140.0 },
    { id: 15, name: "Cargo Pants", category: "Kids", image:p15_img , new_price: 88.0, old_price: 130.0 },
    { id: 16, name: "Trousers", category: "Kids", image:p16_img , new_price: 76.0, old_price: 120.0 },
    { id: 17, name: "Tank Top", category: "Kids", image: p17_img, new_price: 49.0, old_price: 80.0 },
    { id: 18, name: "Formal Pants", category: "Kids", image:p18_img, new_price: 98.0, old_price: 160.0 },
    { id: 19, name: "Leather Jacket", category: "Kids", image: p19_img, new_price: 150.0, old_price: 250.0 },
    { id: 20, name: "Lower", category: "Kids", image: p20_img, new_price: 60.0, old_price: 90.0 },
    { id:21, name: "Casual Blazer", category: "Kids", image: p21_img, new_price: 105.0, old_price: 170.0 },
    { id: 22, name: "Kurti", category: "Woman", image:p22_img, new_price: 75.0, old_price: 120.0 },   
    { id: 23, name: "Jeans", category: "Kids", image: p23_img, new_price: 90.0, old_price: 140.0 },
     

    { id: 24,            
      name: "kurta pajama",
      category: "Kids",             
      image: p24_img,
      new_price: 60.0,           
      old_price: 80.5
    },
     { id: 25, name: "Kurti", category: "Waman", image:p25_img, new_price: 60.0, old_price: 90.5 },
            { id: 26, name: "lancha", category: "Woman", image:p26_img, new_price: 75.0, old_price: 120.0 },   
            { id: 27, name: "coat", category: "Man", image: p27_img, new_price: 90.0, old_price: 140.0 },
            {id: 28, name: "pathani", category:"Man", image:p28_img, new_price: 100.0, old_price: 150.0},
            {id: 29, name: "coat", category:"Kids", image:p29_img, new_price: 100.0, old_price: 150.0},
            {id: 30, name: "lether", category:"Kids", image:p30_img, new_price: 100.0, old_price: 150.0},
            { id: 31, name: "Hoodies", category: "Man", image: p31_img, new_price: 45.0, old_price: 70.0 },
                    { id: 32, name: "Gowan", category: "Woman", image: p32_img, new_price: 85.0, old_price: 130.0 },
                    { id: 33, name: "Japaness", category: "Man", image: p33_img, new_price: 95.0, old_price: 150.0 },
                    { id: 34, name: "Laggies", category: "Woman", image: p34_img, new_price: 55.0, old_price: 100.0 },
                { id: 35, name: " T-Shirt", category: "Man", image: p35_img, new_price: 70.0, old_price: 110.0 },
                    { id: 36, name: "suit", category: "Woman", image: p36_img, new_price: 88.0, old_price: 135.0 },
                    { id: 37, name: "shirt", category: "Man", image: p37_img, new_price: 88.0, old_price: 135.0 },
                    { id: 38, name: "Pant", category: "Man", image: p38_img, new_price: 88.0, old_price: 135.0 },

    
]

export default all_product;