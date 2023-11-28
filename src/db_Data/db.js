const foods =  [
    {
        "name":"Veg Manchurian Hakka Noodles Bowl",
        "actual_price":299,
        "offer_price":175,
        "type":"veg",
        "category":"Vegan",
        "calories":975,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/CHT27/primary/2_1.jpg",
        "id":1
    
    },
    {
        "name":"Veg Manchurian Schezwan Noodles Bowl",
        "actual_price":335,
        "offer_price":234,
        "type":"veg",
        "category":"Vegan",
        "calories":1059,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/CHT27/primary/2_1.jpg",
        "id":2
    
    },
    {
        "name":"Butter Paneer, Dal Makhani, Paratha Thali",
        "actual_price":293,
        "offer_price":175,
        "type":"veg",
        "category":"Indian Thali",
        "calories":772,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6215/primary/5_1.jpg",
        "id":3
    
    },
    {
        "name":"Kadhai Paneer, Yellow Dal Tadka, Paratha Thali",
        "actual_price":313,
        "offer_price":219,
        "type":"veg",
        "category":"Indian Thali",
        "calories":777,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/PBS45/primary/2_1.jpg",
        "id":4
    
    },
    {
        "name":"Kadhai Paneer Deluxe Thali",
        "actual_price":419,
        "offer_price":293,
        "type":"veg",
        "category":"Indian Thali",
        "calories":1393,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6856/primary/6_1.jpg",
        "id":5
    
    },
    {
        "name":"Yellow Dal Tadka, Kaddu ki Sabzi, Paratha Thali",
        "actual_price":209,
        "offer_price":175,
        "type":"veg",
        "category":"Indian Thali",
        "calories":599,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6930/primary/2_1.jpg",
        "id":6
    
    },
    {
        "name":"Chole, Kaddu ki Sabzi, Paratha Thali",
        "actual_price":251,
        "offer_price":175,
        "type":"veg",
        "category":"Indian Thali",
        "calories":529,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6932/primary/3_1.jpg",
        "id":7
    
    },
    {
        "name":"Rajma with Paratha",
        "actual_price":251,
        "offer_price":175,
        "type":"veg",
        "category":"Indian Thali",
        "calories":492,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HPS287/primary/1_1.jpg",
        "id":8
    
    },
    {
        "name":"Dal Makhani with Paratha",
        "actual_price":261,
        "offer_price":175,
        "type":"veg",
        "category":"Indian Thali",
        "calories":559,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HPS289/primary/1_1.jpg",
        "id":9
    
    },
    {
        "name":"Paneer Masala with Steamed Rice",
        "actual_price":262,
        "offer_price":171,
        "type":"veg",
        "category":"Indian Thali",
        "calories":892,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HPS85/primary/4_1.jpg",
        "id":10
    
    },
    {
        "name":"Veg Keema, Yellow Dal Tadka, Paratha Thali",
        "actual_price":268,
        "offer_price":190,
        "type":"veg",
        "category":"Indian Thali",
        "calories":975,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6443/primary/3_1.jpg",
        "id":11
    
    },

    {
        "name":"Palak Paneer, Dal Tadka & Steamed Rice",
        "actual_price":300,
        "offer_price":180,
        "type":"veg",
        "category":"Indian Thali",
        "calories":692,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HPS66/primary/1_1.jpg",
        "id":12
    
    },
    {
        "name":"Whole Wheat Garlic Bread",
        "actual_price":105,
        "offer_price":83,
        "type":"veg",
        "category":"Garlic Bread",
        "calories":308,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6719/primary/2_1.jpg",
        "id":13
    
    },

    {
        "name":"Paneer Tikka Stuffed Garlic Bread",
        "actual_price":220,
        "offer_price":179,
        "type":"veg",
        "category":"Garlic Bread",
        "calories":548,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6614/primary/3_1.jpg",
        "id":14
    
    },
    {
        "name":"Margherita Sourdough Pizza",
        "actual_price":319,
        "offer_price":220,
        "type":"veg",
        "category":"Pizza",
        "calories":620,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HRX164/primary/1_1.jpg",
        "id":15
    
    },

      {
        "name":"Farm Fresh Veggie Pizza",
        "actual_price":335,
        "offer_price":234,
        "type":"veg",
        "category":"Pizza",
        "calories":595,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6618/primary/4_1.jpg",
        "id":16
    
    },
    {
        "name":"Classic Paneer Pizza",
        "actual_price":338,
        "offer_price":178,
        "type":"veg",
        "category":"Pizza",
        "calories":672,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6394/primary/4_1.jpg",
        "id":17
    
    },

    {
        "name":"UnMeat Veg Spicy Pizza",
        "actual_price":346,
        "offer_price":242,
        "type":"veg",
        "category":"Pizza",
        "calories":700,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6395/primary/6_1.jpg",
        "id":18
    
    },
    {
        "name":"Golden Corn Pizza",
        "actual_price":304,
        "offer_price":212,
        "type":"veg",
        "category":"Pizza",
        "calories":696,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6672/primary/4_1.jpg",
        "id":19
    
    },
    {
        "name":"Pesto Chicken Millet Pizza",
        "actual_price":409,
        "offer_price":286,
        "type":"veg",
        "category":"Pizza",
        "calories":556,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6892/primary/4_1.jpg",
        "id":20
    
    },

    {
        "name":"Mango Fruit Pop",
        "actual_price":330,
        "offer_price":176,
        "type":"veg",
        "category":"Fruit Pop",
        "calories":387,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6300/primary/5_1.jpg",
        "id":21
    
    },
    {
        "name":"Chocolate Muesli Fruit Pop",
        "actual_price":251,
        "offer_price":180,
        "type":"veg",
        "category":"Fruit Pop",
        "calories":494,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HRX25/primary/2_1.jpg",
        "id":22
    
    },
    {
        "name":"Beetroot Curd Rice Fruit Pop",
        "actual_price":299,
        "offer_price":199,
        "type":"veg",
        "category":"Fruit Pop",
        "calories":551,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT7224/primary/3_1.jpg",
        "id":23
    
    },
    {
        "name":"Millet Fruit Pop",
        "actual_price":230,
        "offer_price":178,
        "type":"veg",
        "category":"Fruit Pop",
        "calories":441,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT7013/primary/1_1.jpg",
        "id":24
    
    },
    {
        "name":"Zesty Orange Fruit Pop",
        "actual_price":299,
        "offer_price":175,
        "type":"veg",
        "category":"Fruit Pop",
        "calories":505,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6372/primary/4_1.jpg",
        "id":26
    
    },

    {
        "name":"Chocolate Fruit Pop",
        "actual_price":249,
        "offer_price":168,
        "type":"veg",
        "category":"Fruit Pop",
        "calories":426,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6305/primary/3_1.jpg",
        "id":27
    
    },

    {
        "name":"Matcha Fruit Pop Oatmeal",
        "actual_price":280,
        "offer_price":177,
        "type":"veg",
        "category":"Fruit Pop",
        "calories":332,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6821/primary/3_1.jpg",
        "id":28
    
    },
    {
        "name":"Millet Chocolate Fruit Pop",
        "actual_price":239,
        "offer_price":179,
        "type":"veg",
        "category":"Fruit Pop",
        "calories":525,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT7014/primary/1_1.jpg",
        "id":29
    
    },

    {
        "name":"Keto Paneer Salad",
        "actual_price":264,
        "offer_price":131,
        "type":"veg",
        "category":"Gourment",
        "calories":206,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HRX53/primary/2_1.jpg",
        "id":30
    
    }, {
        "name":"Hummus",
        "actual_price":167,
        "offer_price":133,
        "type":"veg",
        "category":"Gourment",
        "calories":202,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HRX12/primary/2_1.jpg",
        "id":31
    
    }, {
        "name":"Pesto Hummus",
        "actual_price":179,
        "offer_price":170,
        "type":"veg",
        "category":"Gourment",
        "calories":425,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HRX30/primary/3_1.jpg",
        "id":32
    }, {
        "name":"Beetroot Hummus",
        "actual_price":209,
        "offer_price":167,
        "type":"veg",
        "category":"Gourment",
        "calories":309,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HRX31/primary/3_1.jpg",
        "id":33
    
    }, {
        "name":"Beetroot Hummus Buddha Bowl Veg",
        "actual_price":314,
        "offer_price":219,
        "type":"veg",
        "category":"Gourment",
        "calories":638,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HRX149/primary/3_1.jpg",
        "id":34
    
    }, {
        "name":"Pesto Hummus Buddha Bowl Veg",
        "actual_price":316,
        "offer_price":220,
        "type":"veg",
        "category":"Gourment",
        "calories":686,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HRX150/primary/3_1.jpg",
        "id":35
    
    },

    {
        "name":"Pesto Hummus Millet Bowl Veg",
        "actual_price":324,
        "offer_price":226,
        "type":"veg",
        "category":"Gourment",
        "calories":863,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HRX154/primary/2_1.jpg",
        "id":36
    
    },

     {
        "name":"Sabudana Khichdi",
        "actual_price":176,
        "offer_price":170,
        "type":"veg",
        "category":"Khichdi",
        "calories":342,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6586/primary/3_1.jpg",
        "id":37
    
    },
    {
        "name":"Simple Dal Khichdi",
        "actual_price":220,
        "offer_price":172,
        "type":"veg",
        "category":"Khichdi",
        "calories":385,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/GIK40/primary/3_1.jpg",
        "id":38
    
    },
    {
        "name":"Homely Vegetable Khichdi",
        "actual_price":187,
        "offer_price":174,
        "type":"veg",
        "category":"Khichdi",
        "calories":285,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT6656/primary/1_1.jpg",
        "id":39
    
    },
    {
        "name":"Quinoa Khichdi",
        "actual_price":229,
        "offer_price":179,
        "type":"veg",
        "category":"Khichdi",
        "calories":456,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/WL440/primary/6_1.jpg",
        "id":40
    
    },
    {
        "name":"Signature Sabudana Khichdi",
        "actual_price":299,
        "offer_price":171,
        "type":"veg",
        "category":"Khichdi",
        "calories":536,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/EAT7030/primary/2_1.jpg",
        "id":41
    
    },
    {
        "name":"Homely Dal Palak Khichdi",
        "actual_price":197,
        "offer_price":175,
        "type":"veg",
        "category":"Khichdi",
        "calories":248,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/GIK41/primary/1_1.jpg",
        "id":42
    
    },

    {
        "name":"Achari Khichdi",
        "actual_price":220,
        "offer_price":169,
        "type":"veg",
        "category":"Khichdi",
        "calories":413,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/GIK09/primary/2_1.jpg",
        "id":43
    
    },
    {
        "name":"Homely Moong Mutter Khichdi",
        "actual_price":230,
        "offer_price":174,
        "type":"veg",
        "category":"Khichdi",
        "calories":380,
        "image":"https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/GIK07/primary/3_1.jpg",
        "id":44
    
    }


]


export default foods