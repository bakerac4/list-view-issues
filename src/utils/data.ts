export function getData() {
    return new Promise((resolve, reject) => {
        const dataCopy = JSON.parse(JSON.stringify(data));

        for (let i = 0; i < data.length; i++) {
            (dataCopy[i] as any).favourite = false;

            const randomImageId = Math.floor(Math.random() * 7);
            if (randomImageId === 1) {
                (dataCopy[i] as any).imageHeight = '300';
                (dataCopy[i] as any).image =
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB7Qd2mcr5KC9e2J8W6ks23MHbXXRT1AWzPBl2I2I75Lza5VWF';
                  (dataCopy[i] as any).isVideo = true;
            } else {
                (dataCopy[i] as any).imageHeight = '172';
                (dataCopy[i] as any).image =
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gxcD5ZL_XmKCPAyDrLkSHl4YU8hOYU_QGpTk2UVwPB3Jx9WO1w&s';
                  (dataCopy[i] as any).isVideo = false;
            }
            (dataCopy[i] as any).userThumbnailUrl = 'https://picsum.photos/300/300';
            (dataCopy[i] as any).createdOn = '2d ago';
            
        }

        setTimeout(() => {
            resolve(dataCopy);
        }, 1000);
    });
}

const data = [
    { id: 1, product: 'Tart Shells - Sweet, 2', price: '$2.46', available: true },
    { id: 2, product: 'Chocolate Eclairs', price: '$8.20', available: true },
    { id: 3, product: 'Oil - Shortening - All - Purpose', price: '$5.22', available: true },
    { id: 4, product: 'Lid - 10,12,16 Oz', price: '$2.82', available: true },
    { id: 5, product: 'Duck - Fat', price: '$7.47', available: false },
    { id: 6, product: 'Chocolate Bar - Reese Pieces', price: '$5.87', available: false },
    { id: 7, product: 'Muffin Orange Individual', price: '$2.93', available: true },
    { id: 8, product: 'Pastry - Cherry Danish - Mini', price: '$9.32', available: true },
    { id: 9, product: 'Wine - Maipo Valle Cabernet', price: '$8.62', available: true },
    { id: 10, product: 'Juice - Orangina', price: '$2.74', available: true },
    { id: 11, product: 'Meldea Green Tea Liquor', price: '$9.01', available: false },
    { id: 12, product: 'Beef Flat Iron Steak', price: '$2.41', available: true },
    { id: 13, product: 'Foam Espresso Cup Plain White', price: '$6.82', available: false },
    { id: 14, product: 'Yeast - Fresh, Fleischman', price: '$6.18', available: false },
    { id: 15, product: 'Okra', price: '$6.56', available: true },
    { id: 16, product: 'Oysters - Smoked', price: '$2.59', available: false },
    { id: 17, product: 'Coffee Caramel Biscotti', price: '$2.14', available: true },
    { id: 18, product: 'Savory', price: '$3.15', available: false },
    { id: 19, product: 'Veal - Inside', price: '$4.75', available: false },
    { id: 20, product: 'Wine - Red, Gallo, Merlot', price: '$1.26', available: true },
    { id: 21, product: 'Oil - Macadamia', price: '$8.61', available: true },
    { id: 22, product: 'Spring Roll Wrappers', price: '$0.62', available: false },
    { id: 23, product: 'Shortbread - Cookie Crumbs', price: '$4.11', available: true },
    { id: 24, product: 'Puff Pastry - Sheets', price: '$5.58', available: true },
    { id: 25, product: 'Appetizer - Assorted Box', price: '$6.90', available: true },
    { id: 26, product: 'Onions - Red Pearl', price: '$5.59', available: true },
    { id: 27, product: 'Cheese - Brick With Onion', price: '$8.21', available: true },
    { id: 28, product: 'Beer - Sleeman Fine Porter', price: '$3.63', available: false },
    { id: 29, product: 'Stock - Beef, White', price: '$9.06', available: true },
    { id: 30, product: 'Salt - Table', price: '$6.29', available: true },
    { id: 31, product: 'Sugar - Sweet N Low, Individual', price: '$9.08', available: false },
    { id: 32, product: 'Wine - George Duboeuf Rose', price: '$5.88', available: true },
    { id: 33, product: 'Bread - Flat Bread', price: '$1.64', available: true },
    { id: 34, product: 'Lamb - Shoulder', price: '$0.24', available: true },
    { id: 35, product: 'Vaccum Bag 10x13', price: '$10.00', available: false },
    { id: 36, product: 'Milk Powder', price: '$9.30', available: false },
    { id: 37, product: 'Trout Rainbow Whole', price: '$1.94', available: true },
    { id: 38, product: 'Ham - Cooked', price: '$4.11', available: false },
    { id: 39, product: 'Straws - Cocktale', price: '$6.75', available: false },
    { id: 40, product: 'Rosemary - Fresh', price: '$9.03', available: true },
    { id: 41, product: 'Lid - 10,12,16 Oz', price: '$6.60', available: false },
    { id: 42, product: 'Muffin Mix - Morning Glory', price: '$0.30', available: true },
    { id: 43, product: 'Fish - Soup Base, Bouillon', price: '$1.04', available: true },
    { id: 44, product: 'Beer - Maudite', price: '$4.56', available: false },
    { id: 45, product: 'Parasol Pick Stir Stick', price: '$2.42', available: true },
    { id: 46, product: 'Pickerel - Fillets', price: '$5.29', available: false },
    { id: 47, product: 'Bagel - Everything Presliced', price: '$9.35', available: false },
    { id: 48, product: 'Pork - Butt, Boneless', price: '$1.52', available: false },
    { id: 49, product: 'Vector Energy Bar', price: '$1.26', available: false },
    { id: 50, product: 'Veal - Sweetbread', price: '$7.00', available: true },
    { id: 51, product: 'Lamb - Whole Head Off,nz', price: '$7.99', available: true },
    { id: 52, product: 'Arctic Char - Fresh, Whole', price: '$1.09', available: false },
    { id: 53, product: 'Muffin Hinge - 211n', price: '$8.31', available: true },
    { id: 54, product: 'Pears - Anjou', price: '$7.22', available: true },
    { id: 55, product: 'Tamarind Paste', price: '$9.48', available: false },
    { id: 56, product: 'Cheese - Swiss Sliced', price: '$2.52', available: true },
    { id: 57, product: 'Fib N9 - Prague Powder', price: '$2.72', available: true },
    { id: 58, product: 'Cup - Paper 10oz 92959', price: '$3.36', available: false },
    { id: 59, product: 'Wine - Lamancha Do Crianza', price: '$7.10', available: false },
    { id: 60, product: 'Isomalt', price: '$6.76', available: true },
    { id: 61, product: 'Haggis', price: '$2.91', available: true },
    { id: 62, product: 'Icecream - Dstk Strw Chseck', price: '$5.15', available: false },
    { id: 63, product: 'Bread - White, Sliced', price: '$9.47', available: false },
    { id: 64, product: 'Tea - Black Currant', price: '$5.16', available: false },
    { id: 65, product: 'Truffle Cups - Brown', price: '$8.77', available: true },
    { id: 66, product: 'Pepper - Julienne, Frozen', price: '$9.40', available: false },
    { id: 67, product: 'Flower - Potmums', price: '$8.68', available: false },
    { id: 68, product: 'Lamb Leg - Bone - In Nz', price: '$0.14', available: false },
    { id: 69, product: 'Kellogs All Bran Bars', price: '$9.42', available: false },
    { id: 70, product: 'Cheese - Cambozola', price: '$8.30', available: false },
    { id: 71, product: 'Pepper - Jalapeno', price: '$9.38', available: false },
    { id: 72, product: 'Glycerine', price: '$7.47', available: true },
    { id: 73, product: 'Muffin Mix - Chocolate Chip', price: '$2.93', available: true },
    { id: 74, product: 'Juice - Apple Cider', price: '$9.44', available: true },
    { id: 75, product: 'Apple - Macintosh', price: '$1.85', available: true },
    { id: 76, product: 'Prunes - Pitted', price: '$6.96', available: false },
    { id: 77, product: 'Pineapple - Regular', price: '$7.36', available: true },
    { id: 78, product: 'Cheese - Swiss', price: '$0.57', available: true },
    { id: 79, product: 'Lettuce - Green Leaf', price: '$8.26', available: true },
    { id: 80, product: 'Wine - Dubouef Macon - Villages', price: '$8.47', available: true },
    { id: 81, product: 'Pasta - Cannelloni, Sheets, Fresh', price: '$7.66', available: true },
    { id: 82, product: 'Cheese - Swiss Sliced', price: '$8.49', available: false },
    { id: 83, product: 'Salmon Steak - Cohoe 8 Oz', price: '$8.14', available: false },
    { id: 84, product: 'Wine - Tribal Sauvignon', price: '$4.96', available: true },
    { id: 85, product: 'Turkey Leg With Drum And Thigh', price: '$5.33', available: true },
    { id: 86, product: 'Shallots', price: '$8.71', available: false },
    { id: 87, product: 'Mushroom - Shitake, Dry', price: '$8.58', available: false },
    { id: 88, product: 'Pie Pecan', price: '$4.72', available: true },
    { id: 89, product: 'Noodles - Steamed Chow Mein', price: '$6.05', available: false },
    { id: 90, product: 'Trueblue - Blueberry Cranberry', price: '$3.85', available: false },
    { id: 91, product: 'Turnip - Mini', price: '$2.65', available: true },
    { id: 92, product: 'V8 Splash Strawberry Kiwi', price: '$7.65', available: true },
    { id: 93, product: 'Pears - Anjou', price: '$3.10', available: false },
    { id: 94, product: 'Wine - White, Riesling, Henry Of', price: '$5.89', available: true },
    { id: 95, product: 'Bread Ww Cluster', price: '$9.39', available: true },
    { id: 96, product: 'Bread - Italian Sesame Poly', price: '$6.61', available: false },
    { id: 97, product: 'Duck - Legs', price: '$1.59', available: false },
    { id: 98, product: 'French Pastry - Mini Chocolate', price: '$7.83', available: true },
    { id: 99, product: 'Napkin - Beverage 1 Ply', price: '$3.44', available: true },
    { id: 100, product: 'Island Oasis - Peach Daiquiri', price: '$1.31', available: false }
];
