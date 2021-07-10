import gradingTableModel from '../models/gradingTable-model.js';

export const getGradingTableData = async (req, res) => { 
    try {
        const gradingTableData = await gradingTableModel.find();
        res.status(200).json(gradingTableData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addGradingTableData = async (req, res) => {
    const {token,indexT,judgeChiName,rows,affDef,affFree,affTeamwork,negDef,negFree,negTeamwork,affTotal,negTotal} = req.body;
    const newGradingTableData = new gradingTableModel({token,indexT,judgeChiName,rows,affDef,affFree,affTeamwork,negDef,negFree,negTeamwork,affTotal,negTotal});
    try {
        await newGradingTableData.save();
        res.status(201).json( newGradingTableData );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const findGradingTable = async (req, res) =>{
    var query = req.params.query;
    // console.log(query)
    gradingTableModel.find({
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

export const findGradingTableToken = async (req, res) =>{
    var query1 = req.params.query1;
    var query2 = req.params.query2;
    // console.log(req.params.query1)
    // console.log(req.params.query2)
    gradingTableModel.find({
        $and: [{ indexT : query1 },  { token: query2 }]
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