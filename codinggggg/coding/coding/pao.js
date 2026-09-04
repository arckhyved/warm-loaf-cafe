const products = [
  { id: 1, name: "Croissant", price: 3, image: "https://bakingamoment.com/wp-content/uploads/2019/02/IMG_2757-croissant-recipe-easy.jpg", description: "A buttery, flaky pastry baked fresh e very morn pairs wonderfully with a latte." },
  { id: 2, name: "Baguette", price: 2, image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/B10F0941-3518-440D-A69F-72EFF5F7826B/Derivates/D5691ACE-1B10-42D8-8364-11402524A36D.jpg", description: "A classic French baguette with a crispy crust and soft interior, perfect for any meal." },
  { id: 3, name: "Chocolate Cake Slice", price: 4, image: "https://www.marthastewart.com/thmb/HSn_gfP2-S7V8vHkax_CloyAMK8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MS-342348-best-chocolate-cake-hero-3x2-32437-27bf3baf2f964213b048696272b47c83.jpg", description: "Rich, decadent chocolate cake with a moist crumb and creamy frosting, perfect for chocolate lovers." },
  { id: 4, name: "Glazed Donut", price: 1.5, image: "https://herbsandflour.com/wp-content/uploads/2020/02/Baked-Old-Fashioned-Glazed-Donuts-1-scaled.jpg", description: "A classic glazed donut with a fluffy texture and sweet glaze, perfect for a quick snack." },
  { id: 5, name: "Cinnamon Roll", price: 3, image: "https://www.marthastewart.com/thmb/x_QFaeB-aLj8aWTXRgOfody2jWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MS-1534466-cinnamon-rolls-hero-3x2-4191-76f1bebf7a52434d848c604cd56b76c5.jpg", description: "A warm cinnamon roll with a sweet glaze, perfect for a cozy morning." },
  { id: 6, name: "Espresso", price: 2.5, image: "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg", description: "A bold shot of espresso, perfect for a quick energy boost." },
  { id: 7, name: "Americano", price: 1, image: "https://advisorcoffee.com/wp-content/uploads/2025/08/Americano-Coffee.jpg", description: "A classic Americano with a rich flavor, perfect for a morning pick-me-up." },
  { id: 8, name: "Cappuccino", price: 2, image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg", description: "A frothy cappuccino with a rich flavor, perfect for a morning pick-me-up." },
  { id: 9, name: "Banana Bread", price: 3, image: "https://www.mybakingaddiction.com/wp-content/uploads/2024/05/sliced-peanut-butter-banana-bread-hero.jpg", description: "A moist banana bread with a hint of cinnamon, perfect for a cozy morning." },
  { id: 10, name: "Blueberry Muffin", price: 2.5, image: "https://jessiebakescakes.com/wp-content/uploads/2025/05/KEY-IMAGE_Easy-Blueberry-Muffins-11-min-scaled.jpg", description: "A fluffy blueberry muffin bursting with fresh blueberries, perfect for a morning treat." },
  { id: 11, name: "Caffè Latte", price: 2.5, image: "https://www.thespruceeats.com/thmb/x7I8C5ZULZdDah4KgxqFT4WCAlI=/4200x2800/filters:fill(auto,1)/how-to-make-caffe-latte-765372-hero-01-2417e49c4a9c4789b3abdd36885f06ab.jpg", description: "A classic caffè latte with a rich flavor, perfect for a morning pick-me-up." },
  { id: 12, name: "Red Velvet Cupcake", price: 3, image: "https://www.livewellbakeoften.com/wp-content/uploads/2021/06/Red-Velvet-Cupcakes-3-New-copy.jpg", description: "A moist red velvet cupcake with a rich chocolate flavor, perfect for a morning treat." },
  { id: 13, name: "Matcha Cupcake", price: 2.5, image: "https://www.spoonfulofflavor.com/wp-content/uploads/2015/03/matcha-green-tea-cupcake.jpeg", description: "A fluffy matcha cupcake with a hint of green tea flavor, perfect for a morning treat." },
  { id: 14, name: "Mini Strawberry Tart", price: 3.5, image: "https://sundaytable.co/wp-content/uploads/2025/04/mini-strawberry-tartlets-with-custard.jpg", description: "A delicate strawberry tart with a flaky crust and sweet custard, perfect for a afternoon treat." },
  { id: 15, name: "Apple Pie", price: 4, image: "https://www.rainbownourishments.com/wp-content/uploads/2021/08/best-vegan-apple-pie-1.jpg", description: "A classic apple pie with a flaky crust and sweet apple filling, perfect for a cozy morning." },
  { id: 16, name: "Flat White", price: 2.5, image: "https://prod-app.breville.com/thumbnail/recipe/1724048842/Flat+White-Leaf+Latte+1080x1440_1080x1440.jpg", description: "A flat white with a rich flavor, perfect for a morning pick-me-up." },
  { id: 17, name: "Caramel Macchiato", price: 3, image: "https://thelittlestcrumb.com/wp-content/uploads/salted-caramel-macchiato-featured-image-1-1024x1024.jpg", description: "A sweet and creamy caramel macchiato with a rich espresso flavor, perfect for a afternoon treat." },
  { id: 18, name: "Chocolate Chip Cookie", price: 1.5, image: "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies-600x900.jpg", description: "A classic chocolate chip cookie with a rich chocolate flavor, perfect for a morning treat." },
  { id: 19, name: "Oatmeal Cookie", price: 1.5, image: "https://www.completelydelicious.com/wp-content/uploads/2022/03/chewy-oatmeal-cookies-6.jpg", description: "A classic oatmeal cookie with a rich flavor, perfect for a morning treat." },
  { id: 20, name: "Macaron", price: 2, image: "https://jackandbeyond.com/cdn/shop/articles/history-of-macarons-178150.jpg?v=1712660641", description: "A classic macaron with a rich flavor, perfect for a morning treat." },
  { id: 21, name: "Cream Puff", price: 2.5, image: "https://www.sipandfeast.com/wp-content/uploads/2025/04/cream-puffs-recipe-snippet-2.jpg", description: "A classic cream puff with a rich flavor, perfect for a morning treat." },
  { id: 22, name: "Eclair", price: 3, image: "https://sallysbakingaddiction.com/wp-content/uploads/2018/09/eclairs-pastry-cream.jpg", description: "A classic eclair with a rich flavor, perfect for a morning treat." },
  { id: 23, name: "Milk Bread", price: 2, image: "https://www.marthastewart.com/thmb/xb1y9ndn-L5W7PAOjPr6LdUIED4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MS-1521177-Shokupan-Japanese-milk-bread-shokupan-Beauty-3x2_40390-40749cc8d7424b12b86cfe33f5289178.jpg", description: "A classic milk bread with a rich flavor, perfect for a morning treat." },
  { id: 24, name: "Garlic Bread", price: 2, image: "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipe%20images%20and%20files/retail/desktop%20(600x600)/2024.nov/2024_df_ultra-cheesy-garlic-bread_600x600.jpg?ext=.jpg", description: "A classic garlic bread with a rich flavor, perfect for a morning treat." },
  { id: 25, name: "Caffè Mocha", price: 2.5, image: "https://vegangirlsguide.com/wp-content/uploads/2025/05/mocha-coffee-recipe-1747236970.jpg", description: "A classic caffè mocha with a rich flavor, perfect for a morning treat." },
  { id: 26, name: "Bagel", price: 2, image: "https://www.tasteofhome.com/wp-content/uploads/2025/01/Homemade-Bagels_EXPS_TOHD25_15702_ChristineMa_9.jpg", description: "A classic bagel with a rich flavor, perfect for a morning treat." },
  { id: 27, name: "House Drip Coffee", price: 2.5, image: "https://betterhousekeeper.com/wp-content/uploads/2019/11/coffee-recipes.jpg", description: "A classic house drip coffee with a rich flavor, perfect for a morning treat." },
  { id: 28, name: "Cold Brew Coffee", price: 2.5, image: "https://www.adamsandrussell.co.uk/wp-content/uploads/2018/09/how-to-cold-brew-coffee-at-home-1-scaled.jpg", description: "A classic cold brew coffee with a rich flavor, perfect for a morning treat." },
  { id: 29, name: "Pan de Coco", price: 3, image: "https://tastephilippines.com/wp-content/uploads/2022/03/slices-of-pan-de-coco-filipino-bread-roll.jpg", description: "A classic pan de coco with a rich flavor, perfect for a morning treat." },
  { id: 30, name: "Fruit Cake", price: 4, image: "https://www.thecookierookie.com/wp-content/uploads/2024/07/homemade-fruit-cake-recipe-3.jpg", description: "A classic fruit cake with a rich flavor, perfect for a morning treat." },
  { id: 31, name: "Carrot Cake", price: 4, image: "https://www.mybakingaddiction.com/wp-content/uploads/2009/09/serving-slice-of-carrot-cake.jpg", description: "A classic carrot cake with a rich flavor, perfect for a morning treat." },
  { id: 32, name: "Iced Vanilla Latte", price: 4, image: "https://www.bakingrecipesjoy.com/wp-content/uploads/2025/12/Iced-Vanilla-Latte-Recipe-featured-1024x1024.jpg", description: "A classic iced vanilla latte with a rich flavor, perfect for a morning treat." },
  { id: 33, name: "Tiramisu Slice", price: 4.5, image: "https://bakerbynature.com/wp-content/uploads/2024/08/Tiramisu-207.jpg", description: "A classic tiramisu slice with a rich flavor, perfect for a morning treat." },
  { id: 34, name: "Ube Cake Slice", price: 4, image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/ube_cake.jpg", description: "A classic ube cake slice with a rich flavor, perfect for a morning treat." },
  { id: 35, name: "Iced Caramel Macchiato", price: 4, image: "https://valentinascorner.com/wp-content/uploads/2022/07/Easy-Iced-Caramel-Macchiato.jpg", description: "A classic iced caramel macchiato with a rich flavor, perfect for a morning treat." },
  { id: 36, name: "Mocha Frappe", price: 3, image: "https://th.bing.com/th/id/R.908ba63480d6fdcc1e0557f02c9e1cf2?rik=R13%2bAMhNiua%2bnw&riu=http%3a%2f%2fcoffeeclub.com.au%2fcdn%2fshop%2ffiles%2fBeverages_Product_Images_1200x1200_MochaFrappe.jpg%3fv%3d1716268834&ehk=tCtHZz%2bIsgQBMYz7I%2fGAOEERJ00fSOOBG%2bEBZKsp2g8%3d&risl=&pid=ImgRaw&r=0", description: "A classic mocha frappe with a rich flavor, perfect for a morning treat." },
  { id: 37, name: "Custard Tart", price: 3, image: "https://bakingwithgranny.co.uk/wp-content/uploads/2021/03/Custard-Tarts-11.jpg", description: "A classic custard tart with a rich flavor, perfect for a morning treat." },
  { id: 38, name: "Matcha Green Tea Latte", price: 3, image: "https://www.natalieshealth.com/wp-content/uploads/2019/01/Matcha-Green-Tea-Latte-3843.jpg", description: "A classic matcha green tea latte with a rich flavor, perfect for a morning treat." },
  { id: 39, name: "Almond Croissant", price: 3.5, image: "https://houseofnasheats.com/wp-content/uploads/2023/08/Easy-Almond-Croissants-1.jpg", description: "A classic almond croissant with a rich flavor, perfect for a morning treat." },
  { id: 40, name: "Chai Tea Latte", price: 3, image: "https://yellowchilis.com/wp-content/uploads/2021/11/starbucks-chai-tea-latte-recipe.jpg", description: "A classic chai tea latte with a rich flavor, perfect for a morning treat." },
  { id: 41, name: "Earl Grey Tea", price: 2, image: "https://cdn.shopify.com/s/files/1/0106/7915/6799/articles/Earl-Grey.jpg?v=1668067450", description: "A classic earl grey tea with a rich flavor, perfect for a morning treat." },
  { id: 42, name: "Peach Black Iced Tea", price: 1.5, image: "https://www.merakiartisanteas.com/wp-content/uploads/2025/09/Mango-Black-Iced-Tea-Square.png", description: "A classic peach black iced tea with a rich flavor, perfect for a morning treat." },
  { id: 43, name: "Classic Hot Chocolate", price: 3, image: "https://tse3.mm.bing.net/th/id/OIP.q1s24Wxj-6JI1fZnGnVoVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", description: "A classic hot chocolate with a rich flavor, perfect for a morning treat." },
  { id: 44, name: "Sourdough", price: 3.5, image: "https://www.allrecipes.com/thmb/DCWXlgmQnMJTPiwFiYm_i3hlCbY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/260540-Chef-Johns-Sourdough-Bread-DDMFS-004-4x3-6791a75a5d804ec28424d04756054c5b.jpg", description: "A classic sourdough with a rich flavor, perfect for a morning treat." },
  { id: 45, name: "Whole Wheat Bread", price: 2.5, image: "https://sallysbakingaddiction.com/wp-content/uploads/2024/01/whole-wheat-sandwich-bread-2.jpg", description: "A classic whole wheat bread with a rich flavor, perfect for a morning treat." },
  { id: 46, name: "Steamed Vanilla Milk", price: 3.5, image: "https://knowyourgrinder.com/wp-content/uploads/2019/01/white-chocolate-mocha-e1548694210482.jpg", description: "A classic steamed vanilla milk with a rich flavor, perfect for a morning treat." },
  { id: 47, name: "Strawberry Cake Slice", price: 4, image: "https://zhangcatherine.com/wp-content/uploads/2020/06/12001200.jpg", description: "A classic strawberry cake slice with a rich flavor, perfect for a morning treat." },
  { id: 48, name: "Fresh Lemonade", price: 4, image: "https://img.freepik.com/premium-photo/fresh-lemonade_929907-3157.jpg", description: "A classic fresh lemonade with a rich flavor, perfect for a morning treat." },
  { id: 49, name: "Peach Danish", price: 3, image: "https://www.sweetfixbaker.com/wp-content/uploads/2022/06/Chocolateoliveoilcake0253-819x1024.jpg", description: "A classic peach danish with a rich flavor, perfect for a morning treat." },
  { id: 50, name: "Strawberry Smoothie", price: 3, image: "https://www.livveganstrong.com/wp-content/uploads/2023/07/strawberry-smoothie-fp.jpg", description: "A classic strawberry smoothie with a rich flavor, perfect for a morning treat." }
];

const bakeryMenu = {
  "Classic Loaves": [
    { id: 2, name: "Baguette", price: 2, image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/B10F0941-3518-440D-A69F-72EFF5F7826B/Derivates/D5691ACE-1B10-42D8-8364-11402524A36D.jpg" },
    { id: 23, name: "Milk Bread", price: 2, image: "https://www.marthastewart.com/thmb/xb1y9ndn-L5W7PAOjPr6LdUIED4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MS-1521177-Shokupan-Japanese-milk-bread-shokupan-Beauty-3x2_40390-40749cc8d7424b12b86cfe33f5289178.jpg" },
    { id: 44, name: "Sourdough", price: 3.5, image: "https://www.allrecipes.com/thmb/DCWXlgmQnMJTPiwFiYm_i3hlCbY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/260540-Chef-Johns-Sourdough-Bread-DDMFS-004-4x3-6791a75a5d804ec28424d04756054c5b.jpg" },
    { id: 45, name: "Whole Wheat Bread", price: 2.5, image: "https://sallysbakingaddiction.com/wp-content/uploads/2024/01/whole-wheat-sandwich-bread-2.jpg" }
  ],
  "Sweet Breads & Rolls": [
    { id: 4, name: "Glazed Donut", price: 1.5, image: "https://herbsandflour.com/wp-content/uploads/2020/02/Baked-Old-Fashioned-Glazed-Donuts-1-scaled.jpg" },
    { id: 5, name: "Cinnamon Roll", price: 3, image: "https://www.marthastewart.com/thmb/x_QFaeB-aLj8aWTXRgOfody2jWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MS-1534466-cinnamon-rolls-hero-3x2-4191-76f1bebf7a52434d848c604cd56b76c5.jpg" },
    { id: 9, name: "Banana Bread", price: 3, image: "https://www.mybakingaddiction.com/wp-content/uploads/2024/05/sliced-peanut-butter-banana-bread-hero.jpg" },
    { id: 29, name: "Pan de Coco", price: 3, image: "https://tastephilippines.com/wp-content/uploads/2022/03/slices-of-pan-de-coco-filipino-bread-roll.jpg" },
    { id: 49, name: "Peach Danish", price: 3, image: "https://www.sweetfixbaker.com/wp-content/uploads/2022/06/Chocolateoliveoilcake0253-819x1024.jpg" }
  ],
  "Savory Bites & Pastries": [
    { id: 1, name: "Croissant", price: 3, image: "https://bakingamoment.com/wp-content/uploads/2019/02/IMG_2757-croissant-recipe-easy.jpg", description: "A buttery, flaky pastry baked fresh every morn pairs wonderfully with a latte." },
    { id: 24, name: "Garlic Bread", price: 2, image: "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipe%20images%20and%20files/retail/desktop%20(600x600)/2024.nov/2024_df_ultra-cheesy-garlic-bread_600x600.jpg?ext=.jpg" },
    { id: 26, name: "Bagel", price: 2, image: "https://www.tasteofhome.com/wp-content/uploads/2025/01/Homemade-Bagels_EXPS_TOHD25_15702_ChristineMa_9.jpg" },
    { id: 39, name: "Almond Croissant", price: 3.5, image: "https://houseofnasheats.com/wp-content/uploads/2023/08/Easy-Almond-Croissants-1.jpg" }
  ],
  "Cakes, Tarts & Treats": [
    { id: 3, name: "Chocolate Cake Slice", price: 4, image: "https://www.marthastewart.com/thmb/HSn_gfP2-S7V8vHkax_CloyAMK8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MS-342348-best-chocolate-cake-hero-3x2-32437-27bf3baf2f964213b048696272b47c83.jpg" },
    { id: 10, name: "Blueberry Muffin", price: 2.5, image: "https://jessiebakescakes.com/wp-content/uploads/2025/05/KEY-IMAGE_Easy-Blueberry-Muffins-11-min-scaled.jpg" },
    { id: 12, name: "Red Velvet Cupcake", price: 3, image: "https://www.livewellbakeoften.com/wp-content/uploads/2021/06/Red-Velvet-Cupcakes-3-New-copy.jpg" },
    { id: 13, name: "Matcha Cupcake", price: 2.5, image: "https://www.spoonfulofflavor.com/wp-content/uploads/2015/03/matcha-green-tea-cupcake.jpeg" },
    { id: 14, name: "Mini Strawberry Tart", price: 3.5, image: "https://sundaytable.co/wp-content/uploads/2025/04/mini-strawberry-tartlets-with-custard.jpg" },
    { id: 15, name: "Apple Pie", price: 4, image: "https://www.rainbownourishments.com/wp-content/uploads/2021/08/best-vegan-apple-pie-1.jpg" },
    { id: 18, name: "Chocolate Chip Cookie", price: 1.5, image: "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies-600x900.jpg" },
    { id: 19, name: "Oatmeal Cookie", price: 1.5, image: "https://www.completelydelicious.com/wp-content/uploads/2022/03/chewy-oatmeal-cookies-6.jpg" },
    { id: 20, name: "Macaron", price: 2, image: "https://jackandbeyond.com/cdn/shop/articles/history-of-macarons-178150.jpg?v=1712660641" },
    { id: 21, name: "Cream Puff", price: 2.5, image: "https://www.sipandfeast.com/wp-content/uploads/2025/04/cream-puffs-recipe-snippet-2.jpg" },
    { id: 22, name: "Eclair", price: 3, image: "https://sallysbakingaddiction.com/wp-content/uploads/2018/09/eclairs-pastry-cream.jpg" },
    { id: 30, name: "Fruit Cake", price: 4, image: "https://www.thecookierookie.com/wp-content/uploads/2024/07/homemade-fruit-cake-recipe-3.jpg" },
    { id: 31, name: "Carrot Cake", price: 4, image: "https://www.mybakingaddiction.com/wp-content/uploads/2009/09/serving-slice-of-carrot-cake.jpg" },
    { id: 33, name: "Tiramisu Slice", price: 4.5, image: "https://bakerbynature.com/wp-content/uploads/2024/08/Tiramisu-207.jpg" },
    { id: 34, name: "Ube Cake Slice", price: 4, image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/ube_cake.jpg" },
    { id: 37, name: "Custard Tart", price: 3, image: "https://bakingwithgranny.co.uk/wp-content/uploads/2021/03/Custard-Tarts-11.jpg" },
    { id: 47, name: "Strawberry Cake Slice", price: 4, image: "https://zhangcatherine.com/wp-content/uploads/2020/06/12001200.jpg" }
  ]
};

const drinksMenu = {
  "Espresso & Hot Coffee": [
    { id: 6, name: "Espresso", price: 2.5, image: "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg" },
    { id: 7, name: "Americano", price: 1, image: "https://advisorcoffee.com/wp-content/uploads/2025/08/Americano-Coffee.jpg" },
    { id: 8, name: "Cappuccino", price: 2, image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg" },
    { id: 11, name: "Caffè Latte", price: 2.5, image: "https://www.thespruceeats.com/thmb/x7I8C5ZULZdDah4KgxqFT4WCAlI=/4200x2800/filters:fill(auto,1)/how-to-make-caffe-latte-765372-hero-01-2417e49c4a9c4789b3abdd36885f06ab.jpg" },
    { id: 16, name: "Flat White", price: 2.5, image: "https://prod-app.breville.com/thumbnail/recipe/1724048842/Flat+White-Leaf+Latte+1080x1440_1080x1440.jpg" },
    { id: 17, name: "Caramel Macchiato", price: 3, image: "https://thelittlestcrumb.com/wp-content/uploads/salted-caramel-macchiato-featured-image-1-1024x1024.jpg" },
    { id: 25, name: "Caffè Mocha", price: 2.5, image: "https://vegangirlsguide.com/wp-content/uploads/2025/05/mocha-coffee-recipe-1747236970.jpg" },
    { id: 27, name: "House Drip Coffee", price: 2.5, image: "https://betterhousekeeper.com/wp-content/uploads/2019/11/coffee-recipes.jpg" }
  ],
  "Cold Brew & Iced Coffee": [
    { id: 28, name: "Cold Brew Coffee", price: 2.5, image: "https://www.adamsandrussell.co.uk/wp-content/uploads/2018/09/how-to-cold-brew-coffee-at-home-1-scaled.jpg" },
    { id: 32, name: "Iced Vanilla Latte", price: 4, image: "https://www.bakingrecipesjoy.com/wp-content/uploads/2025/12/Iced-Vanilla-Latte-Recipe-featured-1024x1024.jpg" },
    { id: 35, name: "Iced Caramel Macchiato", price: 4, image: "https://valentinascorner.com/wp-content/uploads/2022/07/Easy-Iced-Caramel-Macchiato.jpg" },
    { id: 36, name: "Mocha Frappe", price: 3, image: "https://th.bing.com/th/id/R.908ba63480d6fdcc1e0557f02c9e1cf2?rik=R13%2bAMhNiua%2bnw&riu=http%3a%2f%2fcoffeeclub.com.au%2fcdn%2fshop%2ffiles%2fBeverages_Product_Images_1200x1200_MochaFrappe.jpg%3fv%3d1716268834&ehk=tCtHZz%2bIsgQBMYz7I%2fGAOEERJ00fSOOBG%2bEBZKsp2g8%3d&risl=&pid=ImgRaw&r=0" }
  ],
  "Teas & Tea Lattes": [
    { id: 38, name: "Matcha Green Tea Latte", price: 3, image: "https://www.natalieshealth.com/wp-content/uploads/2019/01/Matcha-Green-Tea-Latte-3843.jpg" },
    { id: 40, name: "Chai Tea Latte", price: 3, image: "https://yellowchilis.com/wp-content/uploads/2021/11/starbucks-chai-tea-latte-recipe.jpg" },
    { id: 41, name: "Earl Grey Tea", price: 2, image: "https://cdn.shopify.com/s/files/1/0106/7915/6799/articles/Earl-Grey.jpg?v=1668067450" },
    { id: 42, name: "Peach Black Iced Tea", price: 1.5, image: "https://www.merakiartisanteas.com/wp-content/uploads/2025/09/Mango-Black-Iced-Tea-Square.png" }
  ],
  "Non-Coffee & Refreshers": [
    { id: 43, name: "Classic Hot Chocolate", price: 3, image: "https://tse3.mm.bing.net/th/id/OIP.q1s24Wxj-6JI1fZnGnVoVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 46, name: "Steamed Vanilla Milk", price: 3.5, image: "https://knowyourgrinder.com/wp-content/uploads/2019/01/white-chocolate-mocha-e1548694210482.jpg" },
    { id: 48, name: "Fresh Lemonade", price: 4, image: "https://img.freepik.com/premium-photo/fresh-lemonade_929907-3157.jpg" },
    { id: 50, name: "Strawberry Smoothie", price: 3, image: "https://www.livveganstrong.com/wp-content/uploads/2023/07/strawberry-smoothie-fp.jpg" }
  ]
};

function filterProducts(category) {
  let filtered = [];
  if (category === 'All') {
    filtered = products;
  } else if (category === 'Breads and Pastries') {
    Object.values(bakeryMenu).forEach(subList => {
      filtered = filtered.concat(subList);
    });
  } else if (category === 'Beverages') {
    Object.values(drinksMenu).forEach(subList => {
      filtered = filtered.concat(subList);
    });
  }
  displayProducts(filtered);
}

function filterSubcategory(category, subcategory) {
  let filtered = [];
  if (category === 'Breads and Pastries') {
    filtered = bakeryMenu[subcategory] || [];
  } else if (category === 'Beverages') {
    filtered = drinksMenu[subcategory] || [];
  }
  displayProducts(filtered);
}

let cart = [];

// --- Analytics & Tracking Engine ---
let sessionStartTime = Date.now();
let mouseDistance = 0;
let mediaClicks = 0;
let lastMousePos = { x: null, y: null };

document.addEventListener('mousemove', (e) => {
  if (lastMousePos.x !== null && lastMousePos.y !== null) {
    let dx = e.clientX - lastMousePos.x;
    let dy = e.clientY - lastMousePos.y;
    mouseDistance += Math.sqrt(dx * dx + dy * dy);
  }
  lastMousePos = { x: e.clientX, y: e.clientY };
});

document.addEventListener('click', (e) => {
  if (e.target.tagName && e.target.tagName.toLowerCase() === 'img') {
    mediaClicks++;
  }
});

setInterval(() => {
  const user = localStorage.getItem("loggedInUser");
  if (user) {
    const storedDataString = localStorage.getItem(user);
    if (storedDataString) {
      let userData = JSON.parse(storedDataString);

      if (!userData.analytics) {
        userData.analytics = { timeSpent: 0, mouseDistance: 0, mediaClicks: 0 };
      }

      const now = Date.now();
      const timeSpentThisSession = Math.floor((now - sessionStartTime) / 1000);

      userData.analytics.timeSpent += timeSpentThisSession;
      userData.analytics.mouseDistance += mouseDistance;
      userData.analytics.mediaClicks += mediaClicks;

      localStorage.setItem(user, JSON.stringify(userData));

      sessionStartTime = now;
      mouseDistance = 0;
      mediaClicks = 0;
    }
  }
}, 5000); // Save every 5 seconds

// --- Technical Details Gatherer ---
async function gatherTechDetails(username) {
  try {
    const storedDataString = localStorage.getItem(username);
    if (!storedDataString) return;
    let userData = JSON.parse(storedDataString);

    if (!userData.techDetails) {
      userData.techDetails = {
        userAgent: navigator.userAgent,
        screenRes: window.screen.width + "x" + window.screen.height,
        ip: "Fetching...",
        location: "Fetching..."
      };

      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        userData.techDetails.ip = data.ip || "Unknown";
        userData.techDetails.location = (data.city ? data.city + ", " : "") + (data.country_name || "Unknown");
      } catch (err) {
        userData.techDetails.ip = "Failed to fetch";
        userData.techDetails.location = "Failed to fetch";
      }

      localStorage.setItem(username, JSON.stringify(userData));
    }
  } catch (err) {
    console.log("Error gathering tech details", err);
  }
}

function displayProducts(productsArray = products) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  productsArray.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "card";

    // Add staggered animation delay so they pop in one after another
    div.style.animationDelay = `${index * 0.05}s`;

    div.onclick = () => openProductModal(p.id);

    // 2. We use event.stopPropagation() on the "Quick Add" button 
    // so clicking it adds to cart WITHOUT opening the modal window
    div.innerHTML = `
      <img src="${p.image}">
      <h4>${p.name}</h4>
      <button onclick="event.stopPropagation(); addToCart(${p.id})">Quick Add</button>
    `;
    list.appendChild(div);
  });
}

let currentSelectedProductId = null;

function openProductModal(id) {

  const product = products.find(p => p.id === id);
  if (!product) return;

  currentSelectedProductId = id;

  document.getElementById("modalProductImage").src = product.image;
  document.getElementById("modalProductName").innerText = product.name;
  document.getElementById("modalProductPrice").innerText = "$" + product.price.toFixed(2);
  document.getElementById("modalProductDesc").innerText = product.description;

  const modalAddBtn = document.getElementById("modalAddToCartBtn");
  modalAddBtn.onclick = function () {
    addToCart(currentSelectedProductId);
    closeProductModal();
  };

  // Show the modal
  document.getElementById("productModal").style.display = "flex";
}

function closeProductModal() {
  document.getElementById("productModal").style.display = "none";
}

window.onclick = function (event) {
  const signupModal = document.getElementById('signupModal');
  const productModal = document.getElementById('productModal');
  const loginModal = document.getElementById('loginModal');
  const profileModal = document.getElementById('profileModal');
  const settingsModal = document.getElementById('settingsModal');
  const roleSelectionModal = document.getElementById('roleSelectionModal');
  const adminDashboardModal = document.getElementById('adminDashboardModal');
  const sellerDashboardModal = document.getElementById('sellerDashboardModal');
  const checkoutModal = document.getElementById('checkoutModal');
  const addProductModal = document.getElementById('addProductModal');

  if (event.target == signupModal) {
    closeSignupModal();
  }
  if (event.target == productModal) {
    closeProductModal();
  }
  if (event.target == loginModal) {
    closeLoginModal();
  }
  if (event.target == profileModal) {
    closeProfileModal();
  }
  if (event.target == settingsModal) {
    closeSettingsModal();
  }
  if (event.target == roleSelectionModal) {
    closeRoleSelectionModal();
  }
  if (event.target == adminDashboardModal) {
    closeAdminDashboard();
  }
  if (event.target == sellerDashboardModal) {
    closeSellerDashboard();
  }
  if (event.target == checkoutModal) {
    closeCheckoutModal();
  }
  if (event.target == addProductModal) {
    closeAddProductModal();
  }
}

function addToCart(id) {
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, quantity: 1, selected: false });
  }

  renderCart();
}

function toggleItemSelection(id) {
  const item = cart.find(item => item.id === id);
  if (item) {
    item.selected = !item.selected;

  }
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').style.display = 'block';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').style.display = 'none';
}

// --- Upgraded Render Cart Function ---
function renderCart() {
  const cartList = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  cartList.innerHTML = "";
  let total = 0;
  let totalItems = 0;

  if (cart.length === 0) {
    cartList.innerHTML = "<p style='text-align:center; color:#888; margin-top: 20px;'>Your cart is empty.</p>";
  } else {
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      totalItems += item.quantity;

      const li = document.createElement("li");
      li.className = "clean-cart-item";

      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="clean-cart-img">

        <div class="clean-cart-info">
          <h4 class="clean-cart-title">${item.name}</h4>
          <p class="clean-cart-price">$${item.price.toFixed(2)}</p>
          
          <div class="clean-cart-qty-controls">
            <button type="button" class="clean-qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
            <input type="number" class="clean-qty-input" value="${item.quantity}" min="1" onchange="setQuantity(${item.id}, this.value)">
            <button type="button" class="clean-qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
        </div>

        <input type="checkbox" class="clean-cart-select" ${item.selected ? 'checked' : ''} onchange="toggleItemSelection(${item.id})">
        <button type="button" class="clean-cart-remove" onclick="removeFromCart(${index})">X</button>
      `;
      cartList.appendChild(li);
    });
  }

  cartCount.innerText = totalItems;
  cartTotal.innerText = total.toFixed(2);
}

function setQuantity(id, newQuantity) {
  const item = cart.find(item => item.id === id);
  if (item) {
    let qty = parseInt(newQuantity);

    if (isNaN(qty) || qty <= 0) {
      // Find and remove the item
      const index = cart.findIndex(cartItem => cartItem.id === id);
      cart.splice(index, 1);
    } else {
      item.quantity = qty;
    }

    renderCart();
  }
}

function updateQuantity(id, change) {
  const item = cart.find(item => item.id === id);
  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      const index = cart.findIndex(cartItem => cartItem.id === id);
      cart.splice(index, 1);
    }

    renderCart();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1); // Remove 1 item at the specific index
  renderCart(); // Re-draw the cart to reflect the change
}

// Modal Control Functions
function openSignupModal() {
  document.getElementById('signupModal').style.display = 'flex';
}

function closeSignupModal() {
  document.getElementById('signupModal').style.display = 'none';
}



let selectedRoleForAuth = 'Customer';

function openRoleSelectionModal() {
  document.getElementById('roleSelectionModal').style.display = 'flex';
}

function closeRoleSelectionModal() {
  document.getElementById('roleSelectionModal').style.display = 'none';
}

function selectRoleForSignup(role) {
  selectedRoleForAuth = role;
  closeRoleSelectionModal();
  document.getElementById('signupTitle').innerText = "Sign Up as " + role;
  openSignupModal();
}

// Auth Functions
function signup() {
  const user = document.getElementById("signupUser").value;
  const pass = document.getElementById("signupPass").value;
  const role = selectedRoleForAuth;

  if (!user || !pass) {
    alert("Please fill out all fields.");
    return;
  }

  const userData = { password: pass, role: role, name: '', email: '', phone: '', address: '', pic: '', orders: [], settings: { newsletter: false } };
  localStorage.setItem(user, JSON.stringify(userData));

  gatherTechDetails(user);

  alert(`Account created successfully as ${role}! You can now log in.`);

  closeSignupModal();
  document.getElementById("signupUser").value = '';
  document.getElementById("signupPass").value = '';

  localStorage.setItem("loggedInUser", user);
  updateNav();
}

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  const storedDataString = localStorage.getItem(user);

  if (storedDataString) {
    const storedData = JSON.parse(storedDataString);
    if (pass === storedData.password) {

      localStorage.setItem("loggedInUser", user);
      closeLoginModal();
      updateNav();
      sessionStartTime = Date.now();
      gatherTechDetails(user);
      alert("Logged in successfully!");
      document.getElementById("loginUser").value = '';
      document.getElementById("loginPass").value = '';
      updateNav();

    } else {
      alert("Invalid password.");
    }
  } else {
    alert("User not found. Please sign up first.");
  }
}

// Opens the Login popup
function openLoginModal() {
  document.getElementById('loginModal').style.display = 'flex'; // or 'block', depending on your CSS
}

// Closes the Login popup
function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}

function openProfileModal() {
  const user = localStorage.getItem("loggedInUser");
  if (!user) return;

  const storedDataString = localStorage.getItem(user);
  if (storedDataString) {
    const storedData = JSON.parse(storedDataString);
    document.getElementById("profileUser").value = user;
    document.getElementById("profilePass").value = storedData.password;
    document.getElementById("profileName").value = storedData.name || '';
    document.getElementById("profileEmail").value = storedData.email || '';
    document.getElementById("profilePhone").value = storedData.phone || '';
    document.getElementById("profileAddress").value = storedData.address || '';

    if (storedData.pic && !storedData.pic.includes("placeholder")) {
      document.getElementById("profilePicDisplay").src = storedData.pic;
    } else {
      document.getElementById("profilePicDisplay").src = "https://via.placeholder.com/150";
    }

    // Role dashboards
    const dashBtns = document.getElementById("dashboardButtons");
    const adminBtn = document.getElementById("adminDashboardBtn");
    const sellerBtn = document.getElementById("sellerDashboardBtn");

    dashBtns.style.display = "none";
    adminBtn.style.display = "none";
    sellerBtn.style.display = "none";

    if (storedData.role === "Admin") {
      dashBtns.style.display = "block";
      adminBtn.style.display = "block";
    } else if (storedData.role === "Seller") {
      dashBtns.style.display = "block";
      sellerBtn.style.display = "block";
    }

    // Render Order History
    const orderList = document.getElementById("orderHistoryList");
    orderList.innerHTML = "";
    if (storedData.orders && storedData.orders.length > 0) {
      // Reverse array to show newest orders first
      storedData.orders.slice().reverse().forEach((order, index) => {
        const li = document.createElement("li");
        li.className = "order-item";

        let itemsHtml = "";
        order.items.forEach(item => {
          itemsHtml += `<div class="order-item-detail"><span>${item.quantity}x ${item.name}</span> <span>$${(item.price * item.quantity).toFixed(2)}</span></div>`;
        });

        li.innerHTML = `
          <h5>Order #${storedData.orders.length - index} <span style="float: right; font-size: 12px; color: #888;">${order.date}</span></h5>
          ${itemsHtml}
          <div style="margin-top: 10px; font-weight: bold; text-align: right; border-top: 1px solid #e0c3a3; padding-top: 5px;">Total: $${order.total.toFixed(2)}</div>
        `;
        orderList.appendChild(li);
      });
    } else {
      orderList.innerHTML = "<p style='color: #888; text-align: center; margin-top: 20px;'>No past orders found.</p>";
    }

    document.getElementById("profileModal").style.display = "flex";
  }
}

function closeProfileModal() {
  document.getElementById("profileModal").style.display = "none";
}

function saveProfileChanges() {
  const user = document.getElementById("profileUser").value;
  const newPass = document.getElementById("profilePass").value;
  const name = document.getElementById("profileName").value;
  const email = document.getElementById("profileEmail").value;
  const phone = document.getElementById("profilePhone").value;
  const address = document.getElementById("profileAddress").value;
  const picSrc = document.getElementById("profilePicDisplay").src;

  if (!newPass) {
    alert("Password cannot be empty.");
    return;
  }

  const storedDataString = localStorage.getItem(user);
  let existingData = JSON.parse(storedDataString);

  existingData.password = newPass;
  existingData.name = name;
  existingData.email = email;
  existingData.phone = phone;
  existingData.address = address;
  existingData.pic = picSrc;

  localStorage.setItem(user, JSON.stringify(existingData));

  alert("Profile updated successfully!");
  closeProfileModal();
}

function logout() {
  localStorage.removeItem("loggedInUser");
  updateNav();
  closeSettingsModal();
}

function updateNav() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    document.getElementById("navSignup").style.display = "none";
    document.getElementById("navLogin").style.display = "none";
    document.getElementById("navProfile").style.display = "inline-block";
    document.getElementById("navSettings").style.display = "inline-block";
  } else {
    document.getElementById("navSignup").style.display = "inline-block";
    document.getElementById("navLogin").style.display = "inline-block";
    document.getElementById("navProfile").style.display = "none";
    document.getElementById("navSettings").style.display = "none";
  }
}

function openSettingsModal() {
  const user = localStorage.getItem("loggedInUser");
  if (!user) return;
  const storedData = JSON.parse(localStorage.getItem(user));
  if (storedData) {
    document.getElementById("settingsNewsletter").checked = storedData.settings?.newsletter || false;
    document.getElementById("settingsModal").style.display = "flex";
  }
}

function closeSettingsModal() {
  if (document.getElementById("settingsModal")) {
    document.getElementById("settingsModal").style.display = "none";
  }
}

function saveSettings() {
  const user = localStorage.getItem("loggedInUser");
  if (!user) return;

  const newsletter = document.getElementById("settingsNewsletter").checked;

  const storedData = JSON.parse(localStorage.getItem(user));
  if (storedData) {
    storedData.settings = { newsletter };
    localStorage.setItem(user, JSON.stringify(storedData));

    alert("Settings saved successfully!");
    closeSettingsModal();
  }
}

function deleteAccount() {
  const user = localStorage.getItem("loggedInUser");
  if (!user) return;

  if (confirm("Are you sure you want to permanently delete your account? This cannot be undone.")) {
    localStorage.removeItem(user);
    logout();
  }
}



function checkout() {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    alert("Please log in to checkout.");
    return;
  }
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const storedDataString = localStorage.getItem(user);
  let userData = JSON.parse(storedDataString);

  let subtotal = 0;
  cart.forEach(item => subtotal += item.price * item.quantity);
  let deliveryFee = 2.00;
  let total = subtotal + deliveryFee;

  document.getElementById("checkoutSubtotal").innerText = subtotal.toFixed(2);
  document.getElementById("checkoutTotal").innerText = total.toFixed(2);
  document.getElementById("checkoutAddress").value = userData.address || '';

  document.getElementById("checkoutModal").style.display = "flex";
  closeCart(); // optional: hide the sidebar while checking out
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal").style.display = "none";
}

function placeOrder() {
  const user = localStorage.getItem("loggedInUser");
  if (!user) return;

  const storedDataString = localStorage.getItem(user);
  let userData = JSON.parse(storedDataString);

  if (!userData.orders) {
    userData.orders = [];
  }

  const orderDate = new Date().toLocaleDateString();
  let subtotal = 0;
  cart.forEach(item => subtotal += item.price * item.quantity);
  let deliveryFee = 2.00;
  let orderTotal = subtotal + deliveryFee;
  const address = document.getElementById("checkoutAddress").value;

  if (!address) {
    alert("Please enter a delivery address.");
    return;
  }

  const newOrder = {
    date: orderDate,
    items: [...cart],
    total: orderTotal,
    deliveryFee: deliveryFee,
    address: address,
    paymentMethod: document.getElementById("checkoutPayment").value
  };

  userData.orders.push(newOrder);
  localStorage.setItem(user, JSON.stringify(userData));

  cart = []; // clear cart
  renderCart();
  closeCheckoutModal();
  alert("Order placed successfully! It has been added to your Order History.");
}

function uploadProfilePic(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('profilePicDisplay').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function openAdminDashboard() {
  document.getElementById("adminDashboardModal").style.display = "flex";

  let totalUsers = 0;
  let totalOrders = 0;
  let totalRevenue = 0;

  const tableBody = document.getElementById("adminUserTableBody");
  const analyticsBody = document.getElementById("adminAnalyticsTableBody");
  const techBody = document.getElementById("adminTechTableBody");

  tableBody.innerHTML = "";
  analyticsBody.innerHTML = "";
  techBody.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    // Skip non-user keys
    if (key === "loggedInUser") continue;

    let userData;
    try {
      userData = JSON.parse(localStorage.getItem(key));
    } catch (e) {
      continue;
    }

    // Check if it looks like a valid user object
    if (userData && userData.password && userData.role) {
      totalUsers++;

      let userOrderCount = 0;
      if (userData.orders && Array.isArray(userData.orders)) {
        userOrderCount = userData.orders.length;
        totalOrders += userOrderCount;
        userData.orders.forEach(order => {
          totalRevenue += order.total || 0;
        });
      }

      // User Management
      const trUser = document.createElement("tr");
      trUser.innerHTML = `
        <td>${key}</td>
        <td>${userData.role}</td>
        <td>${userOrderCount}</td>
        <td>
          <button class="btn-primary" style="background: #d9534f; padding: 5px 10px; font-size: 12px; width: auto;" onclick="deleteAdminUser('${key}')">Delete</button>
        </td>
      `;
      tableBody.appendChild(trUser);

      // Analytics
      const analytics = userData.analytics || { timeSpent: 0, mouseDistance: 0, mediaClicks: 0 };
      const trAnalytics = document.createElement("tr");
      trAnalytics.innerHTML = `
        <td>${key}</td>
        <td>${analytics.timeSpent}</td>
        <td>${Math.floor(analytics.mouseDistance)}</td>
        <td>${analytics.mediaClicks}</td>
      `;
      analyticsBody.appendChild(trAnalytics);

      // Tech Logs
      const tech = userData.techDetails || { ip: "N/A", location: "N/A", screenRes: "N/A", userAgent: "N/A" };
      const trTech = document.createElement("tr");
      trTech.innerHTML = `
        <td>${key}</td>
        <td>${tech.ip}</td>
        <td>${tech.location}</td>
        <td>${tech.screenRes}</td>
        <td style="max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${tech.userAgent}">${tech.userAgent}</td>
      `;
      techBody.appendChild(trTech);
    }
  }

  document.getElementById("statTotalUsers").innerText = totalUsers;
  document.getElementById("statTotalOrders").innerText = totalOrders;
  document.getElementById("statTotalRevenue").innerText = "$" + totalRevenue.toFixed(2);
}

function closeAdminDashboard() {
  if (document.getElementById("adminDashboardModal")) {
    document.getElementById("adminDashboardModal").style.display = "none";
  }
}

function deleteAdminUser(username) {
  if (username === localStorage.getItem("loggedInUser")) {
    alert("You cannot delete yourself!");
    return;
  }

  if (confirm(`Are you sure you want to delete user '${username}'?`)) {
    localStorage.removeItem(username);
    openAdminDashboard(); // refresh table
  }
}

function openSellerDashboard() {
  document.getElementById("sellerDashboardModal").style.display = "flex";

  let totalItemsSold = 0;
  let totalRevenue = 0;
  let totalOrders = 0;
  let usersWithOrders = 0;
  let totalUsers = 0;

  const trafficBody = document.getElementById("sellerTrafficTableBody");
  const behaviorBody = document.getElementById("sellerBehaviorTableBody");
  const ecommerceBody = document.getElementById("sellerEcommerceTableBody");
  const locationBody = document.getElementById("sellerLocationTableBody");

  trafficBody.innerHTML = "";
  behaviorBody.innerHTML = "";
  ecommerceBody.innerHTML = "";
  locationBody.innerHTML = "";

  // Mock Traffic Sources
  trafficBody.innerHTML = `
    <tr><td>Search Engines (Google, Bing)</td><td>45%</td></tr>
    <tr><td>Direct Traffic</td><td>30%</td></tr>
    <tr><td>Social Media (Instagram, Facebook)</td><td>25%</td></tr>
  `;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key === "loggedInUser") continue;

    let userData;
    try {
      userData = JSON.parse(localStorage.getItem(key));
    } catch (e) {
      continue;
    }

    if (userData && userData.password && userData.role) {
      totalUsers++;

      // E-commerce data calculation
      let userOrderCount = 0;
      let userRevenue = 0;
      let userItemsBought = 0;

      if (userData.orders && Array.isArray(userData.orders)) {
        userOrderCount = userData.orders.length;
        if (userOrderCount > 0) usersWithOrders++;

        userData.orders.forEach(order => {
          userRevenue += order.total || 0;
          order.items.forEach(item => {
            userItemsBought += item.quantity || 1;
          });
        });

        totalOrders += userOrderCount;
        totalRevenue += userRevenue;
        totalItemsSold += userItemsBought;
      }

      // E-commerce Row
      const trEcom = document.createElement("tr");
      const analytics = userData.analytics || { timeSpent: 0, mouseDistance: 0, mediaClicks: 0 };
      const itemsViewedMock = Math.floor(analytics.timeSpent / 10) + userItemsBought * 2;

      trEcom.innerHTML = `
        <td>${key}</td>
        <td>${userOrderCount}</td>
        <td>${itemsViewedMock}</td>
        <td>$${userRevenue.toFixed(2)}</td>
      `;
      ecommerceBody.appendChild(trEcom);

      // Behavior Row
      const trBehavior = document.createElement("tr");
      trBehavior.innerHTML = `
        <td>${key}</td>
        <td>${analytics.timeSpent}</td>
        <td>${analytics.mediaClicks} clicks</td>
      `;
      behaviorBody.appendChild(trBehavior);

      // Location & IP Row
      const tech = userData.techDetails || { ip: "N/A", location: "N/A" };
      const trLocation = document.createElement("tr");
      trLocation.innerHTML = `
        <td>${key}</td>
        <td>${tech.ip}</td>
        <td>${tech.location}</td>
      `;
      locationBody.appendChild(trLocation);
    }
  }

  // Update Top Widgets
  document.getElementById("sellerTotalItems").innerText = totalItemsSold;
  document.getElementById("sellerTotalRevenue").innerText = "$" + totalRevenue.toFixed(2);

  let conversionRate = 0;
  if (totalUsers > 0) {
    conversionRate = (usersWithOrders / totalUsers) * 100;
  }
  document.getElementById("sellerConversion").innerText = conversionRate.toFixed(1) + "%";
}

function closeSellerDashboard() {
  if (document.getElementById("sellerDashboardModal")) {
    document.getElementById("sellerDashboardModal").style.display = "none";
  }
}

function openAddProductModal() {
  document.getElementById('addProductModal').style.display = 'flex';
}

function closeAddProductModal() {
  document.getElementById('addProductModal').style.display = 'none';
}

function handleAddProductImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('addProductImagePreview').src = e.target.result;
      document.getElementById('addProductImagePreview').style.display = 'block';
      document.getElementById('addProductImageBase64').value = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    document.getElementById('addProductImagePreview').style.display = 'none';
    document.getElementById('addProductImagePreview').src = "https://via.placeholder.com/300x200?text=New+Product";
    document.getElementById('addProductImageBase64').value = "";
  }
}

function submitNewProduct() {
  const name = document.getElementById("addProductName").value.trim();
  const price = parseFloat(document.getElementById("addProductPrice").value);
  let image = document.getElementById("addProductImageBase64").value;
  if (!image) {
    image = "https://via.placeholder.com/300x200?text=New+Product";
  }
  const category = document.getElementById("addProductCategory").value;
  const description = document.getElementById("addProductDesc").value.trim();

  if (!name || isNaN(price)) {
    alert("Please enter a valid product name and price.");
    return;
  }

  const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

  const newProduct = {
    id: newId,
    name: name,
    price: price,
    image: image,
    description: description
  };

  products.push(newProduct);

  let addedToCategory = false;
  if (bakeryMenu[category]) {
    bakeryMenu[category].push(newProduct);
    addedToCategory = true;
  } else if (drinksMenu[category]) {
    drinksMenu[category].push(newProduct);
    addedToCategory = true;
  }

  if (addedToCategory) {
    alert(`Product '${name}' added successfully to ${category}!`);

    document.getElementById("addProductName").value = "";
    document.getElementById("addProductPrice").value = "";
    document.getElementById("addProductImageInput").value = "";
    document.getElementById("addProductImagePreview").style.display = "none";
    document.getElementById("addProductImagePreview").src = "https://via.placeholder.com/300x200?text=New+Product";
    document.getElementById("addProductImageBase64").value = "";
    document.getElementById("addProductDesc").value = "";

    closeAddProductModal();
    filterProducts('All');
  } else {
    alert("Error: Invalid category selected.");
  }
}

function startAboutSlideshow() {
  const slides = document.querySelectorAll('.about-slider .slide');
  if (slides.length === 0) return;

  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 4000); // Change image every 4 seconds
}

displayProducts();
applyTheme();
updateNav();
startAboutSlideshow();