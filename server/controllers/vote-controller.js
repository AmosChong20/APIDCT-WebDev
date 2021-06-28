import voteModel from '../models/vote-model.js';

export const getVoteData = async (req, res) => { 
    try {
        const voteData = await voteModel.find();
        res.status(200).json(voteData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addVoteData = async (req, res) => {
    const {indexT,affVote,negVote,affVoteAfter,negVoteAfter} = req.body;
    const newVoteData = new voteModel({indexT,affVote,negVote,affVoteAfter,negVoteAfter} );
    try {
        await newVoteData.save();
        res.status(201).json( newVoteData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const findVote = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    voteModel.find({
        $text: {
            $search: query
        }
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            // console.log(result);
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }))
        }
    })
}