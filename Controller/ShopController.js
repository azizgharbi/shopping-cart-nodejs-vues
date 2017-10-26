app.get('/', function (req, res) {
    res.render('shop');
});

app.get('/api/store', function (req, res) {
    let products = [
        {
          name: "kung bung, Vol. 5",
          price: 10.02,
          quantity: 0,
          img:"https://sociorocketnewsen.files.wordpress.com/2015/02/top11.jpg?w=580&h=402"
        },
        {
          name: "Oh boy '66, Vol. 5",
          price: 9.98,
          quantity: 0,
          img:"https://sociorocketnewsen.files.wordpress.com/2015/09/mb-0.png?w=580&h=402"
        },
         {
          name: "Ou ka ou ba '45, Vol. 8",
          price: 19.98,
          quantity: 0,
          img:"https://nostroblogs.files.wordpress.com/2015/11/manga-pirate-coco-lecture.jpg?w=640"
        },
         {
          name: "ken, Vol. 9",
          price: 20.98,
          quantity: 0,
          img:"https://sociorocketnewsen.files.wordpress.com/2013/02/e8a1a8e7b49912.jpg?w=580&h=408"
        },
         {
          name: "Lupin III  '60, Vol. 2",
          price: 15.98,
          quantity: 0,
          img:"https://anigamers.com/media/entry-uploads/lupin_combo_211214_044202.png"
        },
         {
          name: "ku ken dug '70, Vol. 8",
          price: 7.98,
          quantity: 0,
          img:"https://sociorocketnewsen.files.wordpress.com/2014/06/tn-3.png?w=580&h=408"
        }
    
      ];
    res.json(products);
})
  