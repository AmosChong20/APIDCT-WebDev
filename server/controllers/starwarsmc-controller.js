import starwarsModel from '../models/starwarsmc-model.js';
import ptime from 'precision-timestamp';


export const getStarwarsData = async (req, res) => { 
  try {
      const starwarsData = await starwarsModel.find();
      res.status(200).json(starwarsData);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const addStarwarsData = async (req, res) => {
    const {token,time,time1,time2,name,count,day,hour,minute,second} = req.body;
    const newStarwarsData = new starwarsModel({token,time,time1,time2,name,count,day,hour,minute,second});
    newStarwarsData.count = true;
    newStarwarsData.time1=ptime()[0];
    newStarwarsData.time2=ptime()[1];
    newStarwarsData.time = newStarwarsData.time1 + newStarwarsData.time2;
    try {
        // console.log(newStarwarsData)
        await newStarwarsData.save();
        res.status(201).json( newStarwarsData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updateToken = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    starwarsModel.find({
        $text: {
            $search: query
        }
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            try{
                result[0].count = false;
                result[0].save();
            }
            catch(err){
                // console.log(err);
            }
            // console.log(result[0].count);
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }))
        }
    })
}

export const checkUsed = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    starwarsModel.find({
        $text: {
            $search: query
        }
    }, function(err, result) {
        if (err) throw err;
        if (result) {

            // console.log(result[0].count);
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }))
        }
    })
}



