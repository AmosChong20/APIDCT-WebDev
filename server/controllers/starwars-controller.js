import starwarsModel from '../models/starwars-model.js';
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
    const {token,time} = req.body;
    const newStarwarsData = new starwarsModel({token,time});
    // console.log(ptime());
    newStarwarsData.time=ptime();
    // newStarwarsData.time = currenttime;
    try {
        console.log(newStarwarsData)
        await newStarwarsData.save();
        res.status(201).json( newStarwarsData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const checkUsed = async (req, res) =>{
    var query = req.params.query;
    console.log(query)
    starwarsModel.find({
        $text: {
            $search: query
        }
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            console.log(result);
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }))
        }
    })
}
