const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
var cors = require('cors')
  const app = express();
const bodyParser = require('body-parser');
const DB ="mongodb+srv://harendra5464:12jan2011@A@cluster0.fcfljwj.mongodb.net/motor?retryWrites=true&w=majority"
mongoose.connect('mongodb+srv://harendra5464:ARBzxfNDlam114MK@cluster0.fcfljwj.mongodb.net/motor?retryWrites=true&w=majority',{
   useNewUrlParser: true,
          useUnifiedTopology: true,
})

const uri = "mongodb+srv://harendra5464:ARBzxfNDlam114MK@cluster0.fcfljwj.mongodb.net/?retryWrites=true&w=majority"




// ikF20TdorR4gkJhe
// mongoose.connect(DB,{
//    useCreateIndex: true, 
//    useFindAndModify: false, 
//    useNewUrlParser: true, 
//    useUnifiedTopology: true 
// })





const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors()) 
app.get('/api/get', async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();

    // Select your database and collection
    const database = client.db('motor');
    const collection = database.collection('playlists');

    // Retrieve data from the collection
    const data = await collection.find({}).toArray();

    // Send the data to the client
    res.json(data);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
});

const playlistSchema= new mongoose.Schema({ 
   isMotorOn: Boolean,
    });

    const Playlist = new mongoose.model("Playlist",playlistSchema);

   //  const reactPlaylist = new Playlist({
   //    name:"react",
   //    ctype:"Frontend",
   //    videos:80,
   //    author:"thapa",
   //    active:true,
   //  })

   //  const reactPlaylist = new Playlist({
   //    isMotorOn:false,
   //  })

   //  reactPlaylist.save();


   

    const YourModel = mongoose.model('motor', new mongoose.Schema({

  isMotorOn: Boolean,
  // Example: { name: String, age: Number }

}), 'playlists');



//

//


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});
    

// app.post('/runFunction', (req, res) => {
//    // Your Node.js function logic goes here
//    const result = runYourFunction(); // Replace with your actual function

//    // Send a response back to the client
//    res.json({ result });
// });

app.put('/runFunction', (req, res) => {
  
  // Your Node.js function logic goes here
  const result = runYourFunction2(); // Replace with your actual function

  // Send a response back to the client
  res.json({ result });
});


app.put('/runFunction2', (req, res) => {
  
  // Your Node.js function logic goes here
  const result = runYourFunction(); // Replace with your actual function

  // Send a response back to the client
  res.json({ result });
});

function runYourFunction() {
  
   // Replace this with your actual function logic
   const updateDocument= async(_id)=>{
    
      try{
         const result = await Playlist.updateOne({_id},{
           
            $set:{
               isMotorOn:false
            }
         });
         console.log(result);

      }catch(err){
         console.log(err);
      }
      

    }

    updateDocument("654de9edd47767a2a0b3c4cd")
}

function runYourFunction2() {
  
  // Replace this with your actual function logic
  const updateDocument= async(_id)=>{
   
     try{
        const result = await Playlist.updateOne({_id},{
          
           $set:{
              isMotorOn:true
           }
        });
        console.log(result);

     }catch(err){
        console.log(err);
     }
     

   }

   updateDocument("654de9edd47767a2a0b3c4cd")
}