import starwarsseedModel from '../models/starwarsseed-model.js';


export const getStarwarsData = async (req, res) => { 
  try {
      const starwarsseedData = await starwarsseedModel.find();
      res.status(200).json(starwarsseedData);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}